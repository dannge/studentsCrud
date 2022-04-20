import React from 'react';
import './StudentTable.css';
import { FaTrash } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';

const StudentTable = (props) => (
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Surname</th>
				<th>Birthdate</th>
				<th>Towm</th>
				<th>Program</th>
				<th>Group</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{props.students.length > 0 ? (
				props.students.map((student) => (
					<tr key={student._id}>
						<td>{student.name}</td>
						<td>{student.surname}</td>
						<td>{student.birthdate}</td>
						<td>{student.town}</td>
						<td>{student.program}</td>
						<td>{student.group}</td>
						<td>
							<button
								onClick={() => {
									props.editRow(student);
								}}
								className="button btn-warning "
							>
								<FaRegEdit />
							</button>
							<button
								onClick={() => props.deleteStudent(student._id)}
								className="button  btn-danger ms-3"
							>
								<FaTrash />
							</button>
						</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={3}>No students</td>
				</tr>
			)}
		</tbody>
	</table>
);

export default StudentTable;
