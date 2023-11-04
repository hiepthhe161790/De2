// import React, { useState } from 'react';
// import TableRow from './TableRow'; // Thay đổi đường dẫn tùy theo cấu trúc thư mục của bạn
// import { data } from './data'; // Import dữ liệu

// const Table = () => {
//   const [rowData, setRowData] = useState(data);

//   const handleDelete = (id) => {
//     // Lọc ra các dòng mà không có id trùng với id cần xóa
//     const updatedData = rowData.filter((row) => row.id !== id);
//     setRowData(updatedData);
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Fullname</th>
//           <th>Date of Birth</th>
//           <th>Gender</th>
//           <th>Score</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {rowData.map((row) => (
//           <TableRow
//             key={row.id}
//             id={row.id}
//             name={row.name}
//             dob={row.dob}
//             gender={row.gender}
//             score={row.score}
//             onDelete={handleDelete}
//           />
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;
