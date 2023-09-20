// import ClassComponent from './ClassComponent';
// import FunctionComponent from './FunctionComponent';
// import BugComponent from './BugComponent';
// import Test from "./Test";
// import Test2 from "./Test2";
import Test3 from "./Test3";
// import Event from "./Event";
import Book from "./Book";
import "./App.css";
// import EventClass from "./EventClass";
// import MessageClass from "./MessageClass";

function App() {
  return (
    <>
      {/* <ClassComponent></ClassComponent> */}
      {/* <FunctionComponent></FunctionComponent> */}
      {/* <BugComponent></BugComponent> */}
      {/* <Test></Test> */}
      {/* <Test2></Test2> */}
      <Test3></Test3>
      <Test3 food={"치킨"}></Test3> 
      <Book title={"나의 하루는 4시 40분에 시작된다"} author={"김유진"} price={"13,500원"} type={"자기계발서"}></Book>
      {/* <ClassComponent name="kim" age="18"></ClassComponent>
      <ClassComponent />
      <FunctionComponent myClass="kdt9"></FunctionComponent>
      <FunctionComponent /> */}
      {/* <Event></Event> */}
      {/* <EventClass></EventClass> */}
      {/* <MessageClass></MessageClass> */}
      {/* <MessageClass message={"qwer"}></MessageClass> */}
    </>
  )
}

export default App;
