import './App.css'
import { LoginContext } from './Components/Context/LoginContext';
import Header from './Components/Layout/Layout'

function App() {

  return (
    <>
    <LoginContext>
      <Header/>
    </LoginContext>
    </>
  );
}

export default App
