import { useState } from 'react'
import SideBar from "./components/Sidebar"
import Body from './components/Body'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex w-full h-screen bg-blue-500 justify-center items-center">
        <div className=" bg-yellow-500 w-[900px] h-[600px] rounded-3xl flex  justify-between items-center" >
          <SideBar />
          <Body />
        </div>
      </div>
    </>
  )
}

export default App
