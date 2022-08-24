import produceData from "../mockData/produce.json"

const POPULATE = 'produce/POPULATE';

export const populateProduce = () => ({
  type: POPULATE,
  produce : produceData
})

export default function produceReducer(state = {},action) {


  const newState = Object.assign({}, state)
  switch (action.type) {
    case POPULATE : 
      const nextState ={};
      action.produce.forEach(item => {
        nextState[item.id] = item
      });
     
    return [nextState]
    default:
      return newState;
  }
}
