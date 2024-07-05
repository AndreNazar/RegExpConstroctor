import { useSelector } from "react-redux"
import CheckBoxWrapper35 from "../../../elements/CheckBoxWrapper35"

const RangeZeroInfinity = (props: any) => {

    const info_block = useSelector((s: any) => s.app.info_block)
    const valueCheckbox = info_block.repeat.type === "zero_infinity"
    const changer = () => props.changeRepeatHundler("zero_infinity")

    return <CheckBoxWrapper35 title="От 0 до бесконечности раз" name="zero_infinity" 
    specialStyle={true} value={valueCheckbox} 
    onChange={changer} />
}

export default RangeZeroInfinity