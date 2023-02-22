import Select from "./component/Select"
import {BrowserRouter,Routes,Route}from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Select/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
