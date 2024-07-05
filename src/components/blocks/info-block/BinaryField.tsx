import { useDispatch, useSelector } from "react-redux"
import CheckBoxWrapper35 from "../../elements/CheckBoxWrapper35"
import { change_binary_info_block } from "../../../redux/nodeReducer"

const BinaryField = () => {
  const info_block = useSelector((s: any) => s.app.info_block)
  const dispatch = useDispatch()
  return (
    <div className="binary-field global-field">
      <CheckBoxWrapper35 
      title="Может не быть" 
      name="binary"
      value={info_block.binary} 
      onChange={() => dispatch(change_binary_info_block({ info_block, binary: !info_block.binary }))} />
    </div>
  )
}

export default BinaryField
