import "./App.css";
import Error from "./pages/Error";
import Home from './pages/Home'
import { Room } from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";

import {Route,Switch} from 'react-router-dom'
import Navbar from "./components/Navbar";



function App() {
  return(
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/room" component={Room} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
