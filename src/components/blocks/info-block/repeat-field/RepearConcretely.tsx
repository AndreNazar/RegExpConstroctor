import { useSelector } from "react-redux"
import CheckBoxWrapper35 from "../../../elements/CheckBoxWrapper35"

const RepeatConcretely = (props: any) => {
    const info_block = useSelector((s: any) => s.app.info_block)
    const valueCheckbox = info_block.repeat.type === "concretely"
    const changer = () => {!valueCheckbox && props.changeRepeatHundler("concretely", [1])}
    const changerInput = (e: any) => props.changeRepeatHundler("concretely", [+e.target.value])

    return <div>
    <CheckBoxWrapper35 title="Конкретное количество раз" name="concretely" 
    specialStyle={true} value={valueCheckbox} onChange={changer} />
    {valueCheckbox && <input disabled={!valueCheckbox} max={100} min={1} type="number"
    value={info_block.repeat.value[0]} onChange={changerInput} />}
  </div>
}

export default RepeatConcretely