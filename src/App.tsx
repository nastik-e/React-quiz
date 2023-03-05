import React, { useState } from "react";
import "./App.scss";
import Game from "./Game/Game";
import Result from "./Result/Result";
import questions from "./questions";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];
  const onClickVariant: Function = (index: number) => {
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} onClickVariant={onClickVariant} step={step} />
      ) : (
        <Result correct={correct}/>
      )}
    </div>
  );
}

export default App;
