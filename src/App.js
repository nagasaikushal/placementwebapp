import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from './HomePage'
import SignIn from './components/home/Signin'
import RegistrationForm from './components/home/RegistrationForm'
import ContactPage from './components/home/ContactPage'
import AboutPage from './components/home/AboutPage'
import Dashboard from './components/User/Dashboard'
import Workshops from './components/User/Workshops'
import Opportunities from './components/User/Opportunities'
import FeedBack from './components/User/FeedBack'
import CareerPath from './components/User/CareerPath'
import Profile from './components/User/Profile'
const App = () => {
  return (
    
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/Signin" element={<SignIn />} /> 
            <Route path="/Register" element={<RegistrationForm />} /> 
            <Route path="/Contact" element={<ContactPage />} /> 
            <Route path="/About" element={<AboutPage />} /> 
            <Route path="/UserDashboard" element={<Dashboard />} /> 

            <Route path="/workshops" element={<Workshops />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/career-path" element={<CareerPath />} />
          <Route path="/profile" element={<Profile />} />

            
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App