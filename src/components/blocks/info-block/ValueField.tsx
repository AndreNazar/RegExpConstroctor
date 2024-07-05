import { useDispatch, useSelector } from "react-redux"
import { change_value_info_block } from "../../../redux/nodeReducer"

const ValueField = () => {
    const info_block = useSelector((s: any) => s.app.info_block)
    const dispatch = useDispatch()
    return (
        <div className="value-field">
            <p className="info-block-title">Значение</p>
            {info_block && <input value={info_block.value} onChange={(e) => dispatch(change_value_info_block({ info_block, value: e.target.value }))} />}
          </div>
    )
}

export default ValueField