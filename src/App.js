import './App.css';
import Box from './component/Box';
import {useState, useEffect} from 'react';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼 클릭 시, 클릭한 값 표시
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3 & 4 결과로 누가 이겼는데 승패 결정
// 6. 승패 결과에 따라 테두리 색 변경 (win-초록, lose-빨강, tie-검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2pjHQvBANk9m6OqbNv8rK9ZfYRFWCl3_Zw&s"
  },
  scissors: {
    name: "Scissors",
    img: "https://www.artnews.com/wp-content/uploads/2022/07/AdobeStock_507713455.jpeg?w=1800"
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutsOnjQaNWvsVPUIUU7XeowtWn8vgdDqxDg&s"
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [click, setClick] = useState(false);

  const play = (userChoice) => {

    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    setClick(prev => !prev)

  }

  const randomChoice = () => {

    let itemArray = Object.keys(choice); // 객체에 키 값만 뽑아서 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];

  }

  const judgement = (user, computer) => {

    if(user.name === computer.name) {
      return "tie"
    } else if(user.name === "Rock") 
        return computer.name === "Scissors" ? "win" : "lose"
      else if(user.name === "Scissors")
        return computer.name === "Paper" ? "win" : "lose"
      else if(user.name === "Paper")
        return computer.name === "Rock" ? "win" :"lose"
  }
  
  useEffect(() => {
    if (result) {
      result === "win" && setUserScore(prev => prev + 1);
      result === "lose" && setComputerScore(prev => prev + 1);
    }
  }, [click]);

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} result={result} score={userScore}/>
        <Box title='Computer' item={computerSelect} result={result} score={computerScore}/>
      </div>
      <div className='main'>
        <button className='user-button' onClick={() => play("scissors")}>가위</button>
        <button className='user-button' onClick={() => play("rock")}>바위</button>
        <button className='user-button' onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
