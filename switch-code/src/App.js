import Select from "./component/Select"
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Coding from "./component/Coding";
import Webdev from "./component/Webdev";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Select/>}/>
        <Route path="/coding" element={<Coding/>}/>
        <Route path="/webdev" element={<Webdev/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
