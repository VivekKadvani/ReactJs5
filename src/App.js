import './App.css';
import {useState,createContext} from 'react'
import ComA from './Components/ComA';

const AppState = createContext();
function App() {

  const[data, setData] = useState("hello Ark")
  const[PersonalDetail,setDetail]=useState({name:"vivek",age:"22"})
  return (
    <div className="App">
      <AppState.Provider value={{data,PersonalDetail}}>
      <ComA/>
      </AppState.Provider>
    </div>
  );
}

export default App;
export {AppState}