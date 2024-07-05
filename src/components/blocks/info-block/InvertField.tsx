import { useDispatch, useSelector } from "react-redux"
import CheckBoxWrapper35 from "../../elements/CheckBoxWrapper35"
import { change_invert_info_block } from "../../../redux/nodeReducer"

const InvertField = () => {
  const info_block = useSelector((s: any) => s.app.info_block)
  const dispatch = useDispatch()

  return (
    <div className="invert-field global-field">
    <CheckBoxWrapper35 
    name="invert"
    title="Все кроме этого" 
    value={info_block.invert} 
    onChange={() => dispatch(change_invert_info_block({ info_block, invert: !info_block.invert }))} />
    </div>
  )
}

export default InvertField
