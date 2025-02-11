//import Searchbar from './Common/Searchbar';
//import CareerDropdown from './Common/CareerDropdown';
//import ApplicationForm from './Common/ApplicationForm';
import AddJob from "./Admin/AddJob";
import AddInternship from "./Admin/AddInternship";
import Dashboard from "./Admin/Dashboard";
import "./App.css";
import Navbar from "./Components/navbar";
//import AdminNavbar from "./Components/AdminNavbar";
//import InternshipCard from './Frontend/Internship/InternshipCard';
import LoginPage from "./Admin/LoginPage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

//import InternshipApplicationForm from './Frontend/Internship/InternshipApplicationForm';
//import Intenrships from './Pages/Intenrships';
//import ManageApplicationJob from './Admin/ManageApplicationJob';
//import ManageApplicationIntenrship from './Admin/ManageApplicationInternship';

function App() {
  return (
    <>
      <Router>
      <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addInternship" element={<AddInternship />} />
          <Route path="/addjob" element={<AddJob />} />
        </Routes>
      </Router>
    </>
  );
}

const ConditionalNavbar = () => {
  const location = useLocation();
  return location.pathname === "/" ? <Navbar /> : null;
};


export default App;
