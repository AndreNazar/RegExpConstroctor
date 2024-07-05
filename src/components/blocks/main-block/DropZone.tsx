import { useDispatch, useSelector } from "react-redux"
import { clear_draggable_info, insert_current_block } from "../../../redux/nodeReducer"
import { useState } from "react"

const DropZone = ({id_current_zone}:{id_current_zone: number}) => {

    
  const current_draggable_info = useSelector((s: any) => s.app.current_draggable_info)
  const [isDragEnter, setIsDragEnter] = useState(false)
  const dispatch = useDispatch()

  const dropZoneOnDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if(current_draggable_info !== null) {
      setIsDragEnter(false)
      dispatch(insert_current_block({ id_current_zone, type_block: current_draggable_info }))
      dispatch(clear_draggable_info())
    }
  }

  return (
    <div className="drop-zone">
      <div
        className="zone-left"
        onDrop={(e) => dropZoneOnDrop(e)}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => {
          e.preventDefault()
          setIsDragEnter(true)
        }}
        onDragLeave={(e) => {
          e.preventDefault()
          setIsDragEnter(false)
        }}
      ></div>
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="200 -550 550 1" width="24px" fill={isDragEnter ? "#0f0" : "#ccc"}>
        <path d="M480-360 280-560h400L480-360Z" />
      </svg>
    </div>
  )
}

export default DropZone
