import React, { useState, useEffect } from 'react';

const EditStudentForm = (props) => {
	const [ student, setStudent ] = useState(props.currentStudent);

	useEffect(
		() => {
			setStudent(props.currentStudent);
		},
		[ props ]
	);
	// You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		console.log(name);

		setStudent({ ...student, [name]: value });
	};

	return (
		<form
			className="col-4"
			onSubmit={(event) => {
				event.preventDefault();

				props.updateStudent(student._id, student);
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
			<label>Surname</label>
			<input
				type="text"
				name="surname"
				required="true"
				maxLength="20"
				placeholder="Surname"
				value={student.surname}
				onChange={handleInputChange}
			/>
			<label>Birthdate</label>
			<input
				type="date"
				name="birthdate"
				min="1920-01-01"
				max="2021-01-01"
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
			<button>Update student</button>
			<button onClick={() => props.setEditing(false)} className="button muted-button">
				Cancel
			</button>
		</form>
	);
};

export default EditStudentForm;
