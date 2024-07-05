import { useDispatch } from "react-redux"
import { close_info_block } from "../../../redux/nodeReducer"
import { CrossSvg } from "../../../assets/img/cross-svg"

const CloseButton = () => {
    const dispatch = useDispatch()
    return (
        <div className="close-button" onClick={() => dispatch(close_info_block())}>
            <CrossSvg />
        </div>
    )
}
export default CloseButton