import { useSelector } from "react-redux"
import CheckBoxWrapper35 from "../../../elements/CheckBoxWrapper35"

const RepeatRange = (props: any) => {
    
  const info_block = useSelector((s: any) => s.app.info_block)
  const valueCheckbox = info_block.repeat.type === "range"
  const changer = () => {!valueCheckbox && props.changeRepeatHundler("range", [1, 2])}

  return (
    <div>
      <CheckBoxWrapper35 title="Диапозон" name="range" specialStyle={true} value={valueCheckbox} onChange={changer} />
      {valueCheckbox && <div className="range-items">
        <input disabled={!valueCheckbox} type="number" value={info_block.repeat.value[0]}
         onChange={(e) => props.changeRepeatHundler("range", [+e.target.value, info_block.repeat.value[1]])} />
        -
        <input disabled={!valueCheckbox} type="number" value={info_block.repeat.value[1]} 
         onChange={(e) => props.changeRepeatHundler("range", [info_block.repeat.value[0], +e.target.value])} />
      </div>}
    </div>
  )
}

export default RepeatRange
