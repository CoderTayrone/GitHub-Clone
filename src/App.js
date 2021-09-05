import './App.css';
import Profile from './Pages/Profile';
import Login from './Pages/Login'
import {BrowserRouter , Switch, Route} from 'react-router-dom'
import { AppProvider } from './Contexts';
import Repositories from './Pages/Repositories';



function App() {
  return (
    <AppProvider>
     <BrowserRouter>
      <Switch>
      < Route exact path="/"  component={Profile}  / >
      < Route  path="/login"  component = { Login }  / >
      < Route  path="/repositories"  component = { Repositories }  / >
      </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
