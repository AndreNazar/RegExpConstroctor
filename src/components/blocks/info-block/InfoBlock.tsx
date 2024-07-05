import { useSelector } from "react-redux"
import CloseButton from "./CloseButton"
import InfoBlockFields from "./InfoBlockFields"
import './info-block-styles.scss'

function InfoBlock() {
  const info_block = useSelector((s: any) => s.app.info_block)

  return (
    <div className={"info-block" + (info_block.show ? " active" : "")}>
      <div className="info-block-header">
        <p className="info-block-header-title">Информация</p>
        <CloseButton />
      </div>
        <InfoBlockFields />
    </div>
  )
}

export default InfoBlock
