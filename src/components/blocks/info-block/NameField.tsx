import { Iblock } from "../../../types"

const NameField = ({currentType}:{currentType: Iblock}) => {
  return (
    <div className="name-field">
      <p className="info-block-title">Тип элемента</p>
      <p className="name-field-text">{currentType.name || ""}</p>
    </div>
  )
}
export default NameField
