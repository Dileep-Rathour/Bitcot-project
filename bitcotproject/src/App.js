import logo from './logo.svg';
import './App.css';
import AllContact from './AllContact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div className='h'>  
    <BrowserRouter>
    <AllContact/>
    <Routes>
      <Route path ='./allcontact' element={<AllContact/>}></Route>
       </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
