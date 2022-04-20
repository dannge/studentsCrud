import React, { useState } from 'react';
import './AddStudentForm.css';

const AddStudentForm = (props) => {
	const initialFormState = { id: null, name: '', surname: '', birthdate: '', town: '', program: '', group: '' };

	const [ student, setStudent ] = useState(initialFormState);

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setStudent({ ...student, [name]: value });
	};

	function onSubmit(e) {
		e.preventDefault();
		if (!student.name || !student.surname) return;

		props.addStudent(student);
		setStudent(initialFormState);
	}

	return (
		<form
			className="col-4"
			onSubmit={(e) => {
				onSubmit(e);
			}}
		>
			<label>Student Name</label>
			<input
				type="text"
				name="name"
				required="true"
				maxLength="40"
				minLength="2"
				placeholder="First name"
				value={student.name}
				onChange={handleInputChange}
			/>

			<label>Username</label>
			<input
				type="text"
				name="surname"
				required="true"
				maxLength="40"
				minLength="2"
				placeholder="Last name"
				value={student.surname}
				onChange={handleInputChange}
			/>

			<label>Birthdate</label>
			<input
				type="date"
				name="birthdate"
				min="1940-01-01"
				max="2021-06-12"
				placeholder="MMMM-mm-dd"
				value={student.birthdate}
				onChange={handleInputChange}
			/>
			<label>Town</label>
			<input
				type="text"
				name="town"
				required="true"
				maxLength="20"
				placeholder="Town"
				value={student.town}
				onChange={handleInputChange}
			/>
			<label>Program</label>
			<select value={student.program} onChange={handleInputChange} name="program">
				<option value="-Program-">-Program-</option>
				<option value="JavaScript">JavaScript</option>
				<option value="Java">Java</option>
				<option value="PHP">PHP</option>
				<option value="Programinės įrangos testuotjas">Programinės įrangos testuotjas</option>
			</select>
			<label>Group</label>
			<select value={student.group} onChange={handleInputChange} name="group">
				<option value="-Group-">-Group-</option>
				<option value="JJS21-2">JS21-2</option>
				<option value="PHP21-1">PHP21-1</option>
				<option value="PT21-1">PT21-1</option>
				<option value="JP21-2">JP21-2</option>
			</select>

			<button className="btn btn-success">Add new student</button>
		</form>
	);
};

export default AddStudentForm;
