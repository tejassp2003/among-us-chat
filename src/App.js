import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import db from './firebase';
import { auth } from './firebase';

function App() {


  return (
    <Router>
<Route path='/'>
<div className="chatbody">
<div className="innerborder">


</div>
  <div className="roundbutton">
    <div className="buttondesign">O</div>
  </div>
</div>
</Route>

    </Router>
   
  );
}

export default App;
