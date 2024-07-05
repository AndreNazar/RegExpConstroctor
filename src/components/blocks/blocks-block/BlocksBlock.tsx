import HeaderBlock from '../header-block/HeaderBlock';
import BlocksItems from './BlocksItems';
import './blocks-block-styles.scss';

function BlocksBlock() {
  return (
    <div className="blocks-block">
      <HeaderBlock />
      <BlocksItems />
    </div>
  );
}

export default BlocksBlock;
