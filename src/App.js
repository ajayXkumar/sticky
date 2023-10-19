import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Stickynote from './screens/stickynote';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<Stickynote/>}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
