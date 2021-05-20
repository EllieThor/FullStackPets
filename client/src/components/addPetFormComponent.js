import React from "react";
const AddPetForm = (props) => {
  return (
    <div>
      <div className="row my-2">
        <div className="col">
          <input type="text" className="form-control" placeholder="סוג" id="petType" onChange={(e) => props.onChangeFN(e)} />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="שם החיה" id="petName" onChange={(e) => props.onChangeFN(e)} />
        </div>
      </div>
      <div className="row my-2 mx-0">
        <input type="date" className="form-control" id="petDateOfBirth" onChange={(e) => props.onChangeFN(e)} />
      </div>
      <div className="row my-2">
        <div className="col-6">
          {props.isItParentExists === 1 ? (
            <select className="form-select" aria-label="Default select example" id="petParentID" onChange={(e) => props.onChangeFN(e)}>
              <option isselected="true">בחר הורה</option>
              {props.petsParents.map((parent, i) => {
                return (
                  <option key={i} value={parent.ID}>
                    {parent.ParentName}
                  </option>
                );
              })}
            </select>
          ) : (
            <input type="text" className="form-control" placeholder="שם הורה" id="newPetParentName" onChange={(e) => props.onChangeFN(e)} />
          )}
        </div>
        <div className="col-6">
          <div className="input-group mb-2">
            <button className="btn btn-outline-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              ? האם הורה קיים
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" onClick={() => props.isItParentExistsFN(1)}>
                  קיים
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => props.isItParentExistsFN(2)}>
                  חדש
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row my-2 mx-0">
        <button className="btn btn-primary" onClick={() => props.insertNewPetInDB()}>
          הוסף מטופל חדש
        </button>
      </div>
    </div>
  );
};

export default AddPetForm;
