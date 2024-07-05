import { useDispatch, useSelector } from "react-redux"
import { Iblock, Iinfo_block } from "../../../types"
import { close_info_block, enter_info_block } from "../../../redux/nodeReducer"
import DropZone from "./DropZone";
import DeleteButton from "./DeleteButton";
import { useCallback, useMemo } from "react";
import { BinarySvg } from "../../../assets/img/binary-svg";
import { InvertSvg } from "../../../assets/img/invert-svg";
import { RepeatSvg } from "../../../assets/img/repeat-svg";

function MainItem({ currentInfoBlock, index }: { currentInfoBlock: Iinfo_block; index: number }) {
  const current_blocks = useSelector((s: any) => s.app.current_blocks)
  const static_blocks = useSelector((s: any) => s.app.static_blocks)
  const activeDropBlock = useSelector((s: any) => s.app.activeDropBlock)
  const info_block = useSelector((s: any) => s.app.info_block)
  const isSelected = currentInfoBlock.id === info_block.id
  const currentBlock = useMemo(() => { return static_blocks.filter((b: Iblock) => b.type === currentInfoBlock.type_block)[0]}, [currentInfoBlock, static_blocks])
  const dispatch = useDispatch()


  const styles = {
    background: currentBlock ? currentBlock.color : "#fff0",
    borderTopLeftRadius: index === 0 ? 5 : 0,
    borderBottomLeftRadius: index === 0 ? 5 : 0,
    borderTopRightRadius: current_blocks.length - 1 === index ? 5 : 0,
    borderBottomRightRadius: current_blocks.length - 1 === index ? 5 : 0,
  }
  const classMainDiv = "main-item" 
  + (currentInfoBlock.id === 13 ? " empty-main-item" : "")
  + (isSelected ? " selected-main-item" : "")

  const selectBlock = () => {
    if(!isSelected && currentInfoBlock.id !== 13) {
      dispatch(close_info_block())
      dispatch(enter_info_block(currentInfoBlock))
    }
  }

  const outName = useCallback(() => {
    if(currentBlock){
      if(currentInfoBlock.value.trim() === "") return currentBlock.name
      return currentInfoBlock.value
    }
    return ""
  }, [currentInfoBlock, currentBlock])

  return (
    <div className={classMainDiv} style={styles} onClick={selectBlock}>
      {(currentInfoBlock.binary || currentInfoBlock.invert || currentInfoBlock.repeat.active) && <div className="extra-items">
        {currentInfoBlock.invert && <InvertSvg />}
        {currentInfoBlock.binary && <BinarySvg />}
        {currentInfoBlock.repeat.active && <RepeatSvg />}
      </div>}
      <p className="text">{outName()}</p>
      {activeDropBlock && <DropZone id_current_zone={currentInfoBlock.id}/>}
      {currentInfoBlock.id !== 13 && <DeleteButton id_item={currentInfoBlock.id} />}
    </div>
  )
}

export default MainItem
