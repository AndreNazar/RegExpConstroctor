import { useSelector } from "react-redux";
import BlocksItem from "./BlocksItem";
import { Iblock } from "../../../types";


function BlocksItems() {
  const static_blocks = useSelector((s: any) => s.app.static_blocks)
  return (
    <div className="blocks-items">
        {static_blocks.map((b: Iblock, i: number) => <BlocksItem key={i} b={b}/>)}
    </div>
  );
}

export default BlocksItems;
