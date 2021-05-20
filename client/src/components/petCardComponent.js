import React from "react";
import "../css/style.css";
const PetCard = (props) => {
  return (
    <div className="col-12 my-2">
      <div className="card petCard text-end">
        <div className="card-body">
          <h5 className="card-title">{props.PetName}</h5>
          <h6> {props.PetType} :סוג</h6>
          <p className="card-text">תאריך לידה:{props.DateOfBirth.slice(0, 10).replaceAll("-", "/").split("/").reverse().join("/")}</p>
          <button className="btn btn-primary" onClick={() => props.getTreatmentsFromDB(props.ID)}>
            לתיק הרפואי
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;

// `ID`, `PetName`, `PetType`, `DateOfBirth`, `createdAt`, `updatedAt`;
