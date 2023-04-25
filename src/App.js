import './App.css';
import {useState,createContext,useEffect,useRef,useReducer,useMemo } from 'react'
import ComA from './Components/ComA';
import CustomHook from './Components/CustomHook';

const AppState = createContext();
function App() {

  const [datav]=CustomHook("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
  const[input,setInput]=useState("")
  const inputfield = useRef();
  const Clicko=()=>{
    console.log(inputfield.current.value)
    inputfield.current.style.border="2px solid red";

  }
  const counter = useRef(0);
  // useEffect(()=>{
  //   counter.current=counter.current+1;
  // })
  useEffect(()=>{
    counter.current=input;
  },[input])

  const formHandler=(e)=>{
    setInput(e.target.value)
  }

  const reducer =(state , action)=>{
    if(action.type == 'INC'){
      return state+2;
    }
    else if(action.type == 'DEC'){
      return state-2;
    }
    else if(action.type == 'MUL')
    {return state*2}
  }
  
  const [state , dispatch]=useReducer(reducer,0)
  const[data, setData] = useState("hello Ark")
  const[PersonalDetail,setDetail]=useState({name:"vivek",age:"22"})
  const cal=useMemo(()=>{
    setTimeout(() => {
      console.log("memo called")
      
    }, 2000);
  },[state])
  return (
    <div className="App">
      <AppState.Provider value={{data,PersonalDetail}}>
      <ComA/>
      </AppState.Provider>
      <input type={Text} ref={inputfield} onChange={formHandler}/>
      <button onClick={Clicko}>click me</button>
      <h2>{counter.current}</h2>

      <h1>{state}</h1>
      <button onClick={()=>dispatch({type : 'INC'})}>Increment</button>
      <button onClick={()=>dispatch({type : 'DEC'})}>Decrement</button>
      <button onClick={()=>dispatch({type : 'MUL'})}>Multiply</button>
    <div>
      {datav.map((e,i)=>{
        return <h1 key={i}>{e.firstName}</h1>
      })}</div>
    </div>
  );
}

export default App;
export {AppState}