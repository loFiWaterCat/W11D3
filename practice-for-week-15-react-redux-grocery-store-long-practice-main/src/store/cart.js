const ADD_PRODUCE = "ADD_PRODUCE";
const REMOVE_PRODUCE = "REMOVE_PRODUCE";

export const addProduce = (id) => ({
  type: ADD_PRODUCE,
  id: id,
});

export const removeProduce = (id) => ({
  type: REMOVE_PRODUCE,
  id: id,
});

export default function cartReducer(state = {}, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_PRODUCE:
      if (!newState[action.id]) {
        newState[action.id] = { id: action.id, count: 1 };
      } else {
        newState[action.id].count += 1;
      }
      return newState
    case REMOVE_PRODUCE:
      if (newState[action.id].count === 0 ){
        //logic to remove from state
      } else {
          newState[action.id].count -= 1;
      }
      return newState
    default:
      return newState;
  }

  
}
