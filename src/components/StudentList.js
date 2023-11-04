import React, { useState } from "react";
import "./StudentList.css"; // Import CSS file

const StudentList = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Lê Bá Trọng",
      dob: "12/06/2000",
      gender: "Male",
      score: 9,
    },
    {
      id: 2,
      name: "Lại Thị An",
      dob: "05/04/2002",
      gender: "Female",
      score: 6.5,
    },
    {
      id: 3,
      name: "Vũ Tuấn Anh",
      dob: "17/11/2001",
      gender: "Male",
      score: 4,
    },
    {
      id: 4,
      name: "Trịnh Thị Châu",
      dob: "12/04/2002",
      gender: "Female",
      score: 5.5,
    },
    {
      id: 5,
      name: "Lê Vân Anh",
      dob: "17/07/2003",
      gender: "Female",
      score: 9,
    },
  ]);

  const [newStudent, setNewStudent] = useState({
    name: "",
    dob: "",
    gender: "",
    score: "",
  });

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({
      name: "",
      dob: "",
      gender: "",
      score: "",
    });
  };
  const handleSortByName = () => {
    const sortedStudents = [...students].sort((a, b) => {
      const nameA = a.name.split(' ')[a.name.split(' ').length - 1].toLowerCase();
      const nameB = b.name.split(' ')[b.name.split(' ').length - 1].toLowerCase();
      return nameA.localeCompare(nameB);
    });
    setStudents(sortedStudents);
  };

  const handleSortByDOB = () => {
    const sortedStudents = [...students].sort((a, b) => {
      const dateA = new Date(a.dob.split("/").reverse().join("-"));
      const dateB = new Date(b.dob.split("/").reverse().join("-"));
      return dateA - dateB;
    });
    setStudents(sortedStudents);
  };


  const handleSortByScore = () => {
    const sortedStudents = [...students].sort(
      (a, b) => parseFloat(a.score) - parseFloat(b.score)
    );
    setStudents(sortedStudents);
  };
  return (
    <div>
      <h1>List of Students</h1>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.dob}</td>
              <td>{student.gender}</td>
              <td>{student.score}</td>
              <td>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add a Student</h2>
      <form>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={newStudent.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="text"
            name="dob"
            value={newStudent.dob}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={newStudent.gender}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Score:
          <input
            type="text"
            name="score"
            value={newStudent.score}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleAddStudent}>
          Add
        </button>
        
      </form>
      
      <div>
        <button onClick={handleSortByName}>Sort by Name</button>
        <button onClick={handleSortByDOB}>Sort by Date of Birth</button>
        <button onClick={handleSortByScore}>Sort by Score</button>
      </div>
    </div>
    
  );
};

export default StudentList;
