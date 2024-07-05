import { useSelector } from "react-redux"
import { Iinfo_block } from "../../../types"
import MainItem from "./MainItem"

const MainItems = () => {
    const current_blocks = useSelector((s: any) => s.app.current_blocks)
    return (<div className="main-items">
        {current_blocks.map((b: Iinfo_block, i: number) => <MainItem key={b.id} currentInfoBlock={b} index={i}/>)}
        {current_blocks.length && <MainItem currentInfoBlock={{id: 13, type_block: "notype", value: "", show: false, invert: false, binary: false, repeat: {active: false}}} index={-1}/>}
    </div>)
}

export default MainItems