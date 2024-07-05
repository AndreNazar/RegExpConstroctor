import { useCallback, useEffect, useMemo, useState } from "react"
import { Iblock, typeBlock } from "../../../types"
import { useSelector } from "react-redux"
import NameField from "./NameField"
import ValueField from "./ValueField"
import InvertField from "./InvertField"
import BinaryField from "./BinaryField"
import RepeatField from "./repeat-field/RepeatField"

const InfoBlockFields = () => {
  const static_blocks = useSelector((s: any) => s.app.static_blocks)
  const info_block = useSelector((s: any) => s.app.info_block)

  const [isFieldValue, setIsFieldValue] = useState(false)
  const [isFieldInvert, setIsFieldInvert] = useState(false)
  const [isFieldBinary, setIsFieldBinary] = useState(false)
  const [isFieldRepeat, setIsFieldRepeat] = useState(false)

  const currentType = useMemo(() => {
    return static_blocks.filter((b: Iblock) => b.type === info_block.type_block)[0]
  }, [info_block, static_blocks])

  const clearFields = () => {
    setIsFieldValue(false)
    setIsFieldInvert(false)
    setIsFieldBinary(false)
    setIsFieldRepeat(false)
  }

  const renderFields = useCallback(() => {
    switch (currentType.type as typeBlock) {
      case "string":
        setIsFieldValue(true)
        setIsFieldInvert(true)
        setIsFieldBinary(true)
        setIsFieldRepeat(true)
        break
      case "space":
      case "all_numbers":
      case "all_letters":
        setIsFieldInvert(true)
        setIsFieldBinary(true)
        setIsFieldRepeat(true)
        break
      case "all_symbols":
        setIsFieldBinary(true)
        setIsFieldRepeat(true)
        break
      case "box_symbols":
        setIsFieldValue(true)
        setIsFieldInvert(true)
        setIsFieldRepeat(true)
        break
      case "begin_string":
      case "end_string":
        setIsFieldInvert(true)
        break
      case "border_word":
        setIsFieldInvert(true)
        setIsFieldBinary(true)
        break
      default:
        break
    }
  }, [currentType])

  useEffect(() => {
    if (currentType) {
      clearFields()
      renderFields()
    }
  }, [currentType, renderFields])

  return (
    <div className="info-block-body">
      {currentType && <NameField currentType={currentType} />}
      {isFieldValue && <ValueField />}
      <div className="info-block-body-fields">
        {isFieldInvert && <InvertField />}
        {isFieldBinary && <BinaryField />}
        {isFieldRepeat && <RepeatField />}
      </div>
    </div>
  )
}

export default InfoBlockFields
