import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tour from "./pages/Tour";
import UserTour from "./pages/UserTours";
import UserAbout from "./pages/UserAbout";
import UserContact from "./pages/UserContact";
import UserProfile from "./pages/UserProfile";
import Pagenotfound from "./pages/Pagenotfound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard"; // Import UserDashboard component
import AdminDashboard from "./pages/AdminDashboard"; // Import AdminDashboard component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/user-dashboard/Tour" element={<UserTour/>} />
          <Route path="/user-dashboard/about" element={<UserAbout/>} />
          <Route path="/user-dashboard/contact" element={<UserContact/>} />
          <Route path="/user-dashboard/user-profile" element={<UserProfile/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
