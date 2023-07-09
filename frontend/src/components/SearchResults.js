import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";

const SearchResults = ({ route, navigation }) => {
    const {results}=route.params;
    console.log(results);
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];
//   return (
//     <>
//       <Navbar />
//       <div className="d-flex flex-row flex-wrap">
//         {results?.map((record, i) => (
//           /* the cards might not be displayed in the same order on a reload
//           since our function is async */
//           <div
//             className="card m-2 p-1"
//             key={i}
//             style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
//           >
//             <div className="card-body">
//               <h1 className="card-title bg-light text-dark text-center mb-3">
//                 {record.title}
//               </h1>
//               <p className="card-text">
//                 Total In : <b>{record.description}</b> (ML)
//               </p>
//               <p className="card-text">
//                 Total Out : <b>{record.totalOut}</b> (ML)
//               </p>
//             </div>
//             <div className="card-footer text-light bg-dark text-center">
//               Total Available : <b>{record.availabeBlood}</b> (ML)
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="container my-3">
//         <h1 className="my-3">Recent Blood Transactions</h1>
//         <table className="table ">
//           <thead>
//             <tr>
//               <th scope="col">Blood Group</th>
//               <th scope="col">Inventory Type</th>
//               <th scope="col">Quantity</th>
//               <th scope="col">Donar Email</th>
//               <th scope="col">TIme & Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {inventoryData?.map((record) => (
//               <tr key={record._id}>
//                 <td>{record.bloodGroup}</td>
//                 <td>{record.inventoryType}</td>
//                 <td>{record.quantity} (ML)</td>
//                 <td>{record.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
};

export default SearchResults;