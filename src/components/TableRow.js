import React from 'react';

const TableRow = ({ id, name, dob, gender, score, onDelete }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{dob}</td>
      <td>{gender}</td>
      <td>{score}</td>
      <td>
        <button onClick={() => onDelete(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
