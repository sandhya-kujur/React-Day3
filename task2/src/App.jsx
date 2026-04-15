import './App.css'
import StatusCard from './component/StatusCard';

function App() {
 
  return (
    <>     
      <StatusCard type="success" message="Success message" />
      <StatusCard type="error" message="Error message" />
      <StatusCard type="info" message="Info message" />
    </>
  )
}

export default App
