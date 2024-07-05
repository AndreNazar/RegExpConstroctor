import { ChangeEvent, useCallback, useEffect, useState } from "react";
import "./test-block-styles.scss"
import { useSelector } from "react-redux";


function TestBlock() {

    const [valueTest, setValueTest] = useState("TESTING STRING");
    const [valueTestOutput, setValueTestOutput] = useState("TESTING STRING");
    const result = useSelector((s: any) => s.app.result)

    const hilightStringHandler = useCallback((text: string) => {
      const reg = new RegExp(result, "gm")
      const newText = text.replace(reg, "<span>$&</span>")
      setValueTestOutput(newText)
    }, [result])
  
    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      if(result) hilightStringHandler(e.target.innerHTML)
      else setValueTestOutput(e.target.value)
      setValueTest(e.target.value)
    }

    useEffect(() => {
      if (result !== "") hilightStringHandler(valueTest)
      else setValueTestOutput(valueTest)
    }, [result, valueTest, hilightStringHandler])

    
    return (
        <div className="test-block">
            <p className="test-block-title">Тест-поле</p>
            <textarea value={valueTest} onChange={handleInputChange} className="test-block-text"></textarea>
            <p className="test-block-title">Результат</p>
            <div dangerouslySetInnerHTML={{ __html: valueTestOutput }} className="test-block-output" />
        </div>
    );
  }
  
  export default TestBlock;
  