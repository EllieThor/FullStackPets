const initialState = {
  pets: [],
  vaccines: [],
  petsParents: [],
  treatments: [],
  isItParentExists: 1,
};

function rootReducer(state = initialState, action) {
  console.log("root:", action.type, ", ", action.payload);

  switch (action.type) {
    case "updatePets":
      state = { ...state, pets: action.payload };
      break;
    case "updateVaccines":
      state = { ...state, vaccines: action.payload };
      break;
    case "updatePetsParents":
      state = { ...state, petsParents: action.payload };
      break;
    case "updateTreatments":
      state = { ...state, treatments: action.payload };
      break;
    case "updateIsItParentExists":
      state = { ...state, isItParentExists: action.payload };
      break;
  }
  return state;
}

export default rootReducer;
