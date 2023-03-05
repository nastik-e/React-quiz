import questions from "../questions";
import "./Game.scss";
const Game = ({ question, onClickVariant,step }: { question: any, onClickVariant:Function,step:any }) => {
  const percent:number = Math.round(step /questions.length *100);
 
  return (
    <div className="Game">
      <div className="progressBar">
        <div style={{width: `${percent}%`}} className="progress"></div>
      </div>
      <h1 className="question">{question.title}</h1>
      <ul>
        {question.variants.map((text: string, index:number) => (
          <li onClick={()=>onClickVariant(index)} className="variant">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
