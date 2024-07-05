import BlocksBlock from "../blocks/blocks-block/BlocksBlock";
import InfoBlock from "../blocks/info-block/InfoBlock";
import MainBlock from "../blocks/main-block/MainBlock";
import ResultBlock from "../blocks/result-block/ResultBlock";
import TestBlock from "../blocks/test-block/TestBlock";
import './main-page-styles.scss'

function MainPage() {
  return (
    <div className="main-container">
      <InfoBlock />
      <BlocksBlock />
      <div className="main-screen">
      <MainBlock />
      <TestBlock />
      </div>
      <ResultBlock />
    </div>
  );
}

export default MainPage;
