import React, { Component } from "react";
import "../css/style.css";
import axios from "axios";
import { connect } from "react-redux";
import * as Api from "../Api/apiCalls";

import SortByCOMP from "../components/sortComponent";
import SearchUser from "../components/searchComponent";

import PetCard from "../components/petCardComponent";
import Treatments from "../components/treatmentsComponent";
import AddTreatmentForm from "../components/treatmentFormComponent";
import AddPetForm from "../components/addPetFormComponent";

class Main extends Component {
  componentDidMount() {
    this.getPetsFromDB();
    this.getVaccinesFromDB();
    this.getAllPetsParentsFromDB();
  }
  // patterns OBJ
  printByOBJ = {
    typeToFilterBy: "PetName",
    searchBy: "",
    sortBy: "AtoZ",
    currentPetID: 0,
    isItParentExists: 1,
    VaccineId: 1,
  };

  onChangeFN = (e) => {
    this.printByOBJ[e.target.id] = e.target.value;
    console.log("new Input To inputsObj :", e.target.id, "value: ", e.target.value);
  };

  isItParentExistsFN = (isIt) => {
    this.printByOBJ.isItParentExists = isIt;
    this.props.updateIsItParentExists(isIt);
    // FIXME: הרידקס לא מתעדכן בקונסול
    console.log("isIt in printByOBJ: ", this.printByOBJ.isItParentExists);
    console.log("isIt in redux: ", this.props.isItParentExists);
  };

  // pattern to print all users Cards

  filterBy = (e) => {
    this.printByOBJ.typeToFilterBy = e.target.value;
  };

  searchBy = (e) => {
    this.printByOBJ.searchBy = e.target.value;
    this.getPetsFromDB();
  };

  sortByFN = (e) => {
    this.printByOBJ.sortBy = e.target.value;
    this.getPetsFromDB();
  };

  getPetsFromDB = async () => {
    try {
      let pets = await Api.getDataByPost(`/pets/getAllPets`, this.printByOBJ);
      this.props.updatePets(pets.data);
      console.log("all pets: ", this.props.pets);
    } catch (err) {
      console.log("Error ", err);
      alert("Something went wrong, please try again");
    }
  };

  getVaccinesFromDB = async () => {
    try {
      let vaccines = await Api.getDataByGet(`/vaccines/getVaccines`);
      this.props.updateVaccines(vaccines.data);
      console.log("all vaccines: ", this.props.vaccines);
    } catch (err) {
      console.log("Error ", err);
      alert("Something went wrong, please try again");
    }
  };

  getAllPetsParentsFromDB = async () => {
    try {
      let petsParents = await Api.getDataByGet(`/petsParents/getAllPetsParents`);
      this.props.updatePetsParents(petsParents.data);
      console.log("all petsParents: ", this.props.petsParents);
    } catch (err) {
      console.log("Error ", err);
      alert("Something went wrong, please try again");
    }
  };

  getTreatmentsFromDB = async (petId) => {
    this.printByOBJ.currentPetID = petId;
    console.log("printByOBJ.currentPetID: ", this.printByOBJ.currentPetID);
    let petIdOBJ = {
      PetId: petId,
    };
    try {
      let treatments = await Api.getDataByPost(`/treatments/getTreatments`, petIdOBJ);
      this.props.updateTreatments(treatments.data);
      console.log("pet treatments: ", this.props.treatments);
    } catch (err) {
      console.log("Error ", err);
      alert("Something went wrong, please try again");
    }
  };

  insertNewPetInDB = async () => {
    let currentObj = {
      PetType: this.printByOBJ.petType,
      PetName: this.printByOBJ.petName,
      DateOfBirth: this.printByOBJ.petDateOfBirth,
      isItParentExists: this.printByOBJ.isItParentExists,
      petParentID: Number(this.printByOBJ.petParentID),
      newPetParentName: this.printByOBJ.newPetParentName,
    };
    console.log("aaa: ", currentObj);
    try {
      let pet = await Api.getDataByPost("/pets/insertNewPet", currentObj);
      console.log("all pets after new: ", pet.date);
      this.getPetsFromDB();
      console.log("all products: ", this.props.pets);
    } catch (err) {
      console.log("Error ", err);
      alert("Something went wrong, please try again");
    }
  };

  insertNewTreatmentInDB = async (PetId) => {
    let currentObj = {
      PetId: this.printByOBJ.currentPetID,
      VaccineId: this.printByOBJ.VaccineId,
      NextTreatment: this.printByOBJ.NextTreatment,
      VisitSummary: this.printByOBJ.VisitSummary,
    };
    try {
      let treatment = await Api.getDataByPost("/treatments/insertNewTreatment", currentObj);
      console.log("treatment result: ", treatment.data);
      this.getTreatmentsFromDB(PetId);
      console.log("all treatments agin: ", this.props.treatments);
    } catch (err) {
      console.log("Error ", err);
      alert("Something went wrong, please try again");
    }
  };

  updatePetInDB = async () => {
    let currentObj = {
      PetName: "Zoe",
      ID: 1,
    };

    try {
      let pet = await Api.getDataByPost("/pets/updatePet", currentObj);
      this.getPetsFromDB();
      console.log("all products: ", this.props.pets);
    } catch (err) {
      console.log("Error ", err);
      alert("Something went wrong, please try again");
    }
  };

  deletePetInDB = async () => {
    let currentObj = {
      ID: 11,
    };

    try {
      let pet = await Api.getDataByPost("/pets/deletePet", currentObj);
      this.getPetsFromDB();
      console.log("all products: ", this.props.pets);
    } catch (err) {
      console.log("Error ", err);
      alert("Something went wrong, please try again");
    }
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row mb-5" id="search-sec">
          <div className="col-lg-8 col-md-12 pb-3">
            <SearchUser filterBy={this.filterBy} searchBy={this.searchBy} />
          </div>
          <div className="col-lg-4 col-md-12">
            <SortByCOMP sortByFN={this.sortByFN} />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-8">
            <div className="row mb-5">
              <p>
                <button className="btn btn-secondary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  הוספת טיפול
                </button>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <AddTreatmentForm pets={this.props.pets} vaccines={this.props.vaccines} currentPetId={this.printByOBJ.currentPetID} onChangeFN={this.onChangeFN} insertNewTreatmentInDB={this.insertNewTreatmentInDB} />
                </div>
              </div>
            </div>
            <div className="row">
              <p>
                <button className="btn btn-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                  ביקורים קודמים
                </button>
              </p>
              <div className="collapse" id="collapseExample2">
                <div className="card card-body">
                  <div className="accordion" id="accordionExample">
                    {this.props.treatments.map((treatment, i) => (
                      <Treatments key={i} PetName={treatment.PetName} ID={treatment.ID} VaccineName={treatment.VaccineName} createdAt={treatment.createdAt} VisitSummary={treatment.VisitSummary} NextTreatment={treatment.NextTreatment} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <p>
                <button className="btn btn-secondary w-100 addPetButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                  הוספת מטופל
                </button>
              </p>
              <div className="collapse" id="collapseExample3">
                <div className="card card-body">{<AddPetForm isItParentExistsFN={this.isItParentExistsFN} isItParentExists={this.props.isItParentExists} onChangeFN={this.onChangeFN} petsParents={this.props.petsParents} insertNewPetInDB={this.insertNewPetInDB} />}</div>
              </div>
            </div>
            <div className="row">
              {this.props.pets.map((pet, i) => (
                <PetCard key={i} PetName={pet.PetName} PetType={pet.PetType} DateOfBirth={pet.DateOfBirth} ID={pet.ID} getTreatmentsFromDB={this.getTreatmentsFromDB} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pets: state.pets,
    vaccines: state.vaccines,
    petsParents: state.petsParents,
    treatments: state.treatments,
    isItParentExists: state.isItParentExists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePets(value) {
      dispatch({
        type: "updatePets",
        payload: value,
      });
    },
    updateVaccines(value) {
      dispatch({
        type: "updateVaccines",
        payload: value,
      });
    },
    updatePetsParents(value) {
      dispatch({
        type: "updatePetsParents",
        payload: value,
      });
    },
    updateTreatments(value) {
      dispatch({
        type: "updateTreatments",
        payload: value,
      });
    },
    updateIsItParentExists(value) {
      dispatch({
        type: "updateIsItParentExists",
        payload: value,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
