import { useDispatch, useSelector } from "react-redux"
import { TerminalSvg } from "../../../assets/img/terminal-svg"
import './result-block-styles.scss'
import { useCallback, useEffect } from "react"
import { Iinfo_block } from "../../../types"
import { set_result } from "../../../redux/nodeReducer"

const ResultBlock = () => {

    const current_blocks = useSelector((s: any) => s.app.current_blocks)
    const global_result = useSelector((s: any) => s.app.result)

    const dispatch = useDispatch()

    const getRepeat = (block: Iinfo_block, text: string): string => {
      const value = block.repeat.value
      const num1 = value !== undefined ? value[0] : 1
      const num2 = value !== undefined ? value[1] : 2

      switch (block.repeat.type) {
        case "zero_infinity": return `${text}*`
        case "one_infinity": return `${text}+`
        case "concretely": return `${text}{${num1}}`
        case "range": return `${text}{${num1}, ${num2}}`
        default: return text
      }
    }

    const getValue = useCallback((block: Iinfo_block): string => {
        switch (block.type_block) {
          case "string":{
            let text: string = block.value
            text = block.invert ? (`(?!.*${text})`) : text
            text = block.repeat.active ? getRepeat(block, text) : text
            text = block.binary ?  (`(${text})?`) : text
            return text
          }
          case "space":{
            let text: string = "\\s"
            text = block.invert ? "\\S" : text
            text = block.repeat.active ? getRepeat(block, text) : text
            text = block.binary ?  (`(${text})?`) : text
            return text
          }
          case "all_numbers":{
            let text: string = "\\d"
            text = block.invert ? "\\D" : text
            text = block.repeat.active ? getRepeat(block, text) : text
            text = block.binary ?  (`(${text})?`) : text
            return text
          }
          case "all_letters":{
            let text: string = "\\w"
            text = block.invert ? "\\W" : text
            text = block.repeat.active ? getRepeat(block, text) : text
            text = block.binary ?  (`(${text})?`) : text
            return text
          }
          case "all_symbols":{
            let text: string = "."
            text = block.repeat.active ? getRepeat(block, text) : text
            text = block.binary ?  (`(${text})?`) : text
            return text
          }
          case "box_symbols":{
            let text: string = `[${block.value}]`
            text = block.invert ? `[^${block.value}]` : text
            text = block.repeat.active ? getRepeat(block, text) : text
            return text
          }
          case "begin_string": return "^"
          case "end_string": return "$"
          case "border_word":{
            let text: string = "\\b"
            text = block.invert ? "\\B" : text
            text = block.binary ?  (`(${text})?`) : text
            return text
          }
          default: return ""
        }
    }, [])


    const generateResult = useCallback(() => {
      
        let result: string[] = []
        current_blocks.forEach((b: any) => {
            let new_elem = ""
            new_elem = getValue(b)

            result.push(new_elem)
        })
        dispatch(set_result(result.join('') + ""))

    }, [current_blocks, dispatch, getValue])

    useEffect(() => {
        generateResult()
    }, [current_blocks, generateResult])

    return (
        <div className="result-block">
            <TerminalSvg /><p className="text">/{global_result}/gm</p>
        </div>
    )
}

export default ResultBlock