import { useSelector } from "react-redux"
import CheckBoxWrapper35 from "../../../elements/CheckBoxWrapper35"

const RangeOneInfinity = (props: any) => {

    const info_block = useSelector((s: any) => s.app.info_block)
    const valueCheckbox = info_block.repeat.type === "one_infinity"
    const changer = () => props.changeRepeatHundler("one_infinity")

    return <CheckBoxWrapper35 title="От 1 до бесконечности раз" name="one_infinity" 
    specialStyle={true} value={valueCheckbox} onChange={changer} />
}

export default RangeOneInfinity