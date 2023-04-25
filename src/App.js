import './App.css';
import {useState,createContext,useEffect,useRef} from 'react'
import ComA from './Components/ComA';

const AppState = createContext();
function App() {

  const[input,setInput]=useState("")

  const counter = useRef(0);
  useEffect(()=>{
    counter.current=counter.current+1;
  })

  const formHandler=(e)=>{
    setInput(e.target.value)
  }

  const[data, setData] = useState("hello Ark")
  const[PersonalDetail,setDetail]=useState({name:"vivek",age:"22"})
  return (
    <div className="App">
      <AppState.Provider value={{data,PersonalDetail}}>
      <ComA/>
      </AppState.Provider>
      <input type={Text} onChange={formHandler}/>
      <h2>{counter.current}</h2>
    </div>
  );
}

export default App;
export {AppState}