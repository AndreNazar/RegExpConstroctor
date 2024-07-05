import { useSelector } from "react-redux";
import MainItems from "./MainItems";
import EmptyBlock from "./EmptyBlock";
import './main-block-styles.scss'

function MainBlock() {

  const current_blocks: any = useSelector((state: any) => state.app.current_blocks);


  return (
    <div className="main-block" >
        {current_blocks.length ? 
        <MainItems />
        : <EmptyBlock />}
    </div>
  );
}

export default MainBlock;
