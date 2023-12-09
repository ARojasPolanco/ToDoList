import { useEffect, useState } from "react"
import Loader from "./components/Loader/Loader"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"


function App() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }, [])

  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center font-mono">
      {
        loader && <Loader />
      }
      <TaskForm />
      <TaskList />
    </main>
  )
}

export default App
