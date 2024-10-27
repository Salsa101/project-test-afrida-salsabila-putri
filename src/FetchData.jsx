import React, { useEffect, useState } from "react";

const FetchData = () => {
//   const [records, setRecords] = useState([]);

//   async function fetchData() {
//     try {
//       const res = await fetch(
//         "https://suitmedia-backend.suitdev.com/api/ideas",
//       );

//       if (!res.ok) {
//         throw new Error('Network response not ok');
//       }

//       const data = await res.json();
//       setRecords(data.data);
//     } catch (err) {
//       console.error('Fetch error:', err);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

  return (
    <div>
      {/* <ul>
        {records.map((list, index) => (
          <li key={index}>
            {list.id} | {list.attributes.name} {list.attributes.description}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default FetchData;
