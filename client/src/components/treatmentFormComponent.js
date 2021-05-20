import React from "react";
const TreatmentForm = (props) => {
  let selectVaccines = props.vaccines.map((vaccine, i) => {
    return (
      <option key={i} value={vaccine.ID}>
        {vaccine.VaccineName}
      </option>
    );
  });

  return (
    <div className="row">
      <div className="col-3 text-end">
        <button className="btn btn-primary mt-4 w-100" onClick={() => props.insertNewTreatmentInDB(props.currentPetId)}>
          {props.pets.find(({ ID }) => ID === props.currentPetId) === undefined ? "" : props.pets.find(({ ID }) => ID === props.currentPetId).PetName} הוספת טיפול ל
        </button>
      </div>
      <div className="col-3">
        <h6 className="text-end"> :בחר תאריך לחיסון הבא</h6>
        <input type="date" className="form-control" name="NextTreatment" id="NextTreatment" onChange={(e) => props.onChangeFN(e)} />
      </div>
      <div className="col-3">
        <h6 className="text-end"> :סיכום ביקור</h6>
        <textarea className="form-control" id="VisitSummary" onChange={(e) => props.onChangeFN(e)} />
      </div>
      <div className="col-3">
        <h6 className="text-end"> :בחר חיסון</h6>
        <select className="form-select" id="VaccineId" onChange={(e) => props.onChangeFN(e)}>
          {selectVaccines}
        </select>
      </div>
    </div>
  );
};

export default TreatmentForm;
// onClick={() => props.insertNewTreatmentInDB(VaccineId, NextTreatment)}
// onClick={(e) => props.onChangeFN(e)}

// {
//   selectVaccines;
// }
// select className="form-select"
