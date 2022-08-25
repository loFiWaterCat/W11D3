import { useDispatch } from "react-redux";
import { addProduce } from "../../store/cart";

function ProduceDetails({ produce }) {
 const  dispatch = useDispatch();
  const cartItem = {};


  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={()=> (dispatch(addProduce(produce.id)))}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;