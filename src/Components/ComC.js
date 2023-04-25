import React,{useContext} from 'react'
import { AppState } from '../App'

const ComC = () => {
    const appdata = useContext(AppState)
    return (
    <div className="comC">ComC 
    <h1>{appdata.data}</h1>
    <h1>Name :{appdata.PersonalDetail.name}</h1>
    <h1>Age: {appdata.PersonalDetail.age}</h1>
    </div>
  )
}

export default ComC