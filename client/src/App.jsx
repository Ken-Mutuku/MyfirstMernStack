import './App.css'
import {Route,Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from './Layout.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import axios from 'axios';
import FarmerPages from './pages/Farmerpages.jsx';

axios.defaults.baseURL = 'http://localhost:4000'; 
function App() {
  
  return (
    <Routes>
      <Route path='/'element={<Layout/>}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element= {<LoginPage/>} /> 
        <Route path='/register' element= {<RegisterPage/>} />
        <Route path='/farmer' element= {<FarmerPages/>}/>
      </Route>
    </Routes>
    
    
  )
}

export default App
 