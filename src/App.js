import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Laundry",
      day: "Oct 9th at 2:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Grocery Shopping",
      day: "Oct 10th at 11:00pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Picnic Date",
      day: "Oct 14th at 3:00pm",
      reminder: true,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks to show"
      )}
    </div>
  )
}

export default App
