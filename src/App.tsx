import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormPage } from './pages/FormPage';
import { Home } from './pages/Home';
// 


function App() {
  return (
    // <BrowserRouter >
    //       <Routes>
    //         <Route path='/' element={<Home />} />
    //         <Route path='/form' element={<FormPage />} />
    //       </Routes>
    // </BrowserRouter>
    <FormPage/>
  );
}

export default App;
