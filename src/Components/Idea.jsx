import React from "react";
import "../Style/Idea.css";

const Idea = ({ idea }) => {
  const formatDate = (inputDate) => {
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const [day, month, year] = inputDate.split("/").map(Number);

    return `${day} ${months[month - 1]} ${year}`;
  };

  return (
    <div className="col-3">
      <div className="card" style={{ width: (18)["rem"], height: 310 }}>
        <img src={idea.image} className="card-img-top" />
        <div className="card-body">
          <p className="card-text" style={{ marginTop: 3 }}>
            {formatDate(idea.date)}
          </p>
          <h6
            className="card-title"
            style={{ fontWeight: "bold", maxHeight: 300 }}
          >
            {idea.title}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Idea;
