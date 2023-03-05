import questions from "../questions";
import "./Result.scss";

const Result = ({ correct }: { correct: number }) => {
  return (
    <div className="Result">
      <img
        src="https://media.istockphoto.com/id/1125716911/vector/party-popper-with-confetti.jpg?s=612x612&w=0&k=20&c=sAyofM-MQ5TL-pLyFseV9Vke_W2zyYX1btP90oGJQZE="
        alt="Congratulations!"
        height={"170px"}
      />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
};

export default Result;
