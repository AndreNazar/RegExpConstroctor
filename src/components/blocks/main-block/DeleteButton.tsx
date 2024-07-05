import { useDispatch } from "react-redux";
import { remove_current_block } from "../../../redux/nodeReducer";
import { CrossSvg } from "../../../assets/img/cross-svg";

const DeleteButton = ({id_item}:{id_item: number}) => {

    const dispatch = useDispatch()

    const deleteItemHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(remove_current_block(id_item))
    }

    return <div className="delete-button" title="Удалить" onClick={(e) => deleteItemHandler(e)}>
        <CrossSvg />
    </div>
}

export default DeleteButton