import React from "react";
const Treatments = (props) => {
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${props.ID}`}>
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.ID}`} aria-expanded="true" aria-controls={`collapse${props.ID}`}>
            {props.createdAt === null ? "" : props.createdAt.slice(0, 10).replaceAll("-", "/").split("/").reverse().join("/")} :ביקור בתאריך
          </button>
        </h2>
        <div id={`collapse${props.ID}`} className="accordion-collapse collapse" aria-labelledby={`heading${props.ID}`} data-bs-parent="#accordionExample">
          <div className="accordion-body text-end">
            <h6>חיסון: {props.VaccineName}</h6>
            <h6>חיסון הבא: {props.NextTreatment === null ? "" : props.NextTreatment.slice(0, 10).replaceAll("-", "/").split("/").reverse().join("/")}</h6>
            <h6>סיכום ביקור: {props.VisitSummary}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
