import React, { useState, Fragment, useEffect } from 'react';
import AddStudentForm from './components/StudentsForms/formsStudent/AddStudentForm';
import EditStudentForm from './components/StudentsForms/formsStudent/EditStudentForm';
import StudentTable from './components/StudentsForms/tablesStudent/StudentTable';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
	const [ students, setStudents ] = useState({});
	const [ currentStudent, setCurrentStudent ] = useState({});
	const [ editing, setEditing ] = useState(false);
	// Data

	const fetchData = async () => {
		await fetch('http://localhost:4000/api/v1/students').then((response) => response.json()).then((data) => {
			setStudents(data.data.students);
			console.log(data.data.students);
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	// CRUD operations
	const addStudent = async (student) => {
		console.log(students);

		let dbStudent = {
			name: student.name,
			surname: student.surname,
			birthdate: student.birthdate,
			program: student.program,
			town: student.town,
			group: student.group
		};

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(dbStudent)
		};
		await fetch('http://localhost:4000/api/v1/students/', requestOptions).then((response) => response.json());
		fetchData();
	};

	const deleteStudent = async (id) => {
		console.log(id);
		await fetch('http://localhost:4000/api/v1/students/' + id, { method: 'DELETE' });

		// /* setEditing(false);

		setStudents(students.filter((student) => student.id !== id));
		fetchData();
	};

	const updateStudent = (id, updatedStudent) => {
		setEditing(false);
		const requestOptions = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(updatedStudent)
		};
		fetch('http://localhost:4000/api/v1/students/' + id, requestOptions).then((response) => response.json());

		setStudents(students.map((student) => (student._id === id ? updatedStudent : student)));
	};

	const editRow = (student) => {
		setEditing(true);

		setCurrentStudent(student);
	};

	return (
		<body>
			<div>
				<h1 className="text-center mb-4 mt-4">STUDENT REGISTRATION</h1>
				<div className="container">
					<div className="row">
						{editing ? (
							<Fragment>
								<h2>Edit student</h2>
								<EditStudentForm
									className="col-4"
									editing={editing}
									setEditing={setEditing}
									currentStudent={currentStudent}
									updateStudent={updateStudent}
								/>
							</Fragment>
						) : (
							<Fragment>
								<h2>Add student</h2>
								<AddStudentForm className="col-4" addStudent={addStudent} />
							</Fragment>
						)}
						<div className="col-8">
							<StudentTable students={students} editRow={editRow} deleteStudent={deleteStudent} />
						</div>
					</div>
				</div>
			</div>
		</body>
	);
};

export default App;
