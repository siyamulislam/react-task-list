// custom components
import ThemeSwitcher from './components/ThemeSwitcher'
import TaskList from './components/TaskList/TaskList';
function App() {
  return (
    <div className="container">
      <TaskList/>
      <ThemeSwitcher />
    </div>
  )
}

export default App
