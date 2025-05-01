import { Toaster } from 'react-hot-toast'
import './App.css'
import CreateExpenseComponent from './components/CreateExpenseComponent'
import NetAmount from './components/NetAmount'

function App() {
  return (
    <>
      {/* <NetAmount /> */}
      <CreateExpenseComponent />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </>
  )
}

export default App
