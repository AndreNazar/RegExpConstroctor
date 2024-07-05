import { useDispatch } from "react-redux";
import { change_active_drop_block, set_draggable_info } from "../../../redux/nodeReducer";
import { Iblock } from "../../../types";


function BlocksItem({b}: {b: Iblock}) {

const dispatch = useDispatch()

    return (
      <div className="blocks-item"
      style={{background: b.color}} 
      onDragStart={() => {
        dispatch(set_draggable_info(b.type))
        dispatch(change_active_drop_block(true))
      }}
      onDragEnd={() => dispatch(change_active_drop_block(false))}
      draggable>
          <p className="text">{b.name}</p>
      </div>
    );
  }
  
  export default BlocksItem;
  