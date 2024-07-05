import { useDispatch, useSelector } from "react-redux";
import { ToysSvg } from "../../../assets/img/toys-svg";
import { typeBlock } from "../../../types";
import "./empty-block-styles.scss";
import { add_current_block, change_active_drop_block, clear_draggable_info } from "../../../redux/nodeReducer";

function EmptyBlock() {

const dispatch = useDispatch()

  const current_draggable_info: typeBlock = useSelector((state: any) => state.app.current_draggable_info);

  const dropZoneOnDrop = (e: React.DragEvent) => {
    e.preventDefault(); 
    if(current_draggable_info !== "notype") {
      dispatch(add_current_block(current_draggable_info))
      dispatch(clear_draggable_info())
      dispatch(change_active_drop_block(false))
    }
    
  }

  return (
    <div className="empty-block" 
    onDrop={(e) => dropZoneOnDrop(e)} 
    onDragOver={(e) => e.preventDefault()} >
        <div className="place-drop"></div>
        <ToysSvg />
        <p className="EB-text">Начните составлять регулярное выражение, выбрав подходящие части</p>
    </div>
  );
}

export default EmptyBlock;
