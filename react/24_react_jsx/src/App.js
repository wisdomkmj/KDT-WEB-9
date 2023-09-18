import logo from './logo.svg';
import './App.css'; 

function App() {
  const flag = true;
  let txt = ""

  if ( flag ) {
    txt = "True입니다."
  } else {
    txt = "False입니다."
  };

  const styles = { 
    backgroundColor : "skyblue",
  };

  const name = "천재";
  const animal = "포메라니안";

  //map함수
  const lists = ["k", "d", "t", "w", "e", "b"];

  //filter함수
  const animals = ["dog", "cat", "rabbit"];
  const newAnimals = animals.filter( value => {
    return value.length > 3;
  })
  console.log(newAnimals);

  //단축평가
  //&&연산자
  const result = false && "Hello";
  console.log("->", result);
  //||연산자
  const defaultValue = 1000;
  const price = undefined;
  const dbPrice = price || defaultValue;
  console.log("->", dbPrice)
  
  //실습 - map(), filter()
  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charie", age: 35, vip: true },
  ];

  const newUsers = users.filter( (value) => { //value는 users 배열의 각 개체
    return value.age >= 25;
  }) 
  console.log("->",newUsers);

  const isLogin = true; //단축평가:백엔드에서 로그인했을때/안했을때 가정.

  return (
    <>
    {isLogin && <>{newUsers.map((result) => {
        return (
          <div key={result.id}> -{result.name}</div>
        );
      })}

      {lists.map((value, index) => {
        return (
        <div key={index}>
          <p>Hello : {value}</p> 
        </div>
        );
      })}

      <div className="test__1">
      <h1>Hello React!</h1>
      </div>
      <div className="test__2">
        <label>아이디 : </label>
        <input/>
        <br/>
        <label>비밀번호 : </label>
        <input/>
      </div>
      <br/>
      {/* <div style={styles}>리액트 시작</div> */}
      {/* <input /> */}
      {/* <div>{flag ? <h1>True입니다.</h1> : <h1>False입니다.</h1>}</div>   */}
      {/* <div><h2>{txt}</h2></div> */}
      <div><h3>이것은 div입니다.</h3></div>
      <div>{3 + 5 == 8 ? <h2>정답!</h2> : <h2>오답!</h2>}</div>
      <div>제 멍멍이 이름은 {name}입니다.</div>
      <div>{name}는 {animal}입니다.</div>
      <br/>
      <div className="container">
        <div className="red">q</div>
        <div className="orange">q</div>
        <div className="yellow">q</div>
        <div className="green">q</div>
        <div className="blue">q</div>
        <div className="darkblue">q</div>
        <div className="purple">q</div>
      </div></>}
      
    </>
  );
}

export default App;
