import ShortenUrlPage from "./Components/ShortenUrlPage";
import { Routes, Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import AboutPage from './Components/AboutPage'
import Footer from './Components/Footer'
import RegisterPage from './Components/RegisterPage'
import { Toaster } from 'react-hot-toast'
import LoginPage from './Components/LoginPage'
import DashboardLayout from './Components/Dashboard/DashboardLayout'
import Navbar from "./Components/NavBar";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./Components/ErrorPage";

const AppRouter = () => {

    return (
        <>
        <Navbar/>
        <Toaster position='bottom-center'/> 
        <Routes>
           <Route path='/' element={<LandingPage/>}/>
           <Route path='/about' element={<AboutPage/>}/>
           <Route path='/register' element={<PrivateRoute publicPage={true}><RegisterPage/></PrivateRoute>}/>
           <Route path='/login' element={<PrivateRoute publicPage={true}><LoginPage/></PrivateRoute>}/>
           <Route path='/dashboard' element={<PrivateRoute publicPage={false}><DashboardLayout/></PrivateRoute>}/>
           <Route path='*' element={<ErrorPage/>}/>
           <Route path='/error' element={<ErrorPage message="We can't seem to find the page you'r looking for!"/>}/>
        </Routes>
        <Footer/>
        </>
    );
   
}

export default AppRouter;


export const SubDomainRouter = () =>{
    return (
        <Routes>
            <Route path="/:url" element={<ShortenUrlPage/>} />
        </Routes>
    );
}