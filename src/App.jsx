
import './App.css'

import Landing from './components/Landing'
import SignIn from './components/SignIn'


import { Router,Routes,Route,Link, BrowserRouter } from 'react-router-dom'
import SignUp from './components/SignUp'
// import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Pay from './components/Pay'
import Protect from "./components/Protect"
import Dash from './components/Dash'
import Admin from './components/Admin'
import Error from './components/Error'
import Reset from './components/Reset'
import AdminSign from './components/AdminSign'



function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}>

        </Route>

        <Route path='/sign-in' element={<SignIn/>}>

        </Route>

        <Route path='/user/signing-up' element={<SignUp/>}>

        </Route>
        <Route path='/user/:token' element={<Reset/>}>

        </Route>



        
        <Route path='/admin/admin/admin/admin/dashboard' element={<Dash/>}>

        </Route>
        <Route path='/admin/login' element={<Admin/>}>

        </Route>
        <Route path='/admin/register' element={<AdminSign/>}>

        </Route>
        

        <Route path='/checkout' element={
          <Protect>
            <Checkout/>
          </Protect>
        }>
        </Route>

        <Route path='*' element={<Error/>}>

        </Route>
        
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
