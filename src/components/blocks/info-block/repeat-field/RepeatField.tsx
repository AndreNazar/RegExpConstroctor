import { useDispatch, useSelector } from "react-redux"
import { change_repeat_info_block } from "../../../../redux/nodeReducer"
import CheckBoxWrapper35 from "../../../elements/CheckBoxWrapper35"
import { typeRepeat } from "../../../../types"
import RepeatRange from "./RepeatRange"
import RepeatConcretely from "./RepearConcretely"
import RangeOneInfinity from "./RepeatOneInfinity"
import RangeZeroInfinity from "./RangeZeroInfinity"

const RepeatField = () => {
  const info_block = useSelector((s: any) => s.app.info_block)
  const dispatch = useDispatch()

  const changeRepeatHundler = (type: typeRepeat, value?: number[], active?: boolean) => {
    active = (active === undefined) ? true : active

    if (value !== undefined) {
      if (value[0] >= 100) value[0] = 100
      if (value[1] >= 100) value[1] = 100
      if (value[0] <= 1) value[0] = 1
      if (value[1] <= 1) value[1] = 1
    }

    console.log(value)

    dispatch(
      change_repeat_info_block({
        info_block,
        repeat: {active, type, value: value || [0]},
      })
    )
  }

  return (
    <div className="repeat-field global-field">
      <CheckBoxWrapper35 title="Повтор" name="repeat" value={info_block.repeat.active}
        onChange={() => changeRepeatHundler("zero_infinity", [0], !info_block.repeat.active)}
      />

      {info_block.repeat.active && <div className="repeat-field-items">
        <RangeZeroInfinity changeRepeatHundler={changeRepeatHundler} />
        <RangeOneInfinity changeRepeatHundler={changeRepeatHundler} />
        <RepeatConcretely changeRepeatHundler={changeRepeatHundler} />
        <RepeatRange changeRepeatHundler={changeRepeatHundler} />
      </div>}
    </div>
  )
}

export default RepeatField
