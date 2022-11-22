import TestButton from './components/addons/TestButton.component'
import LandingPage from './pages/LandingPage-page/LandingPage.page'
import LoginRegister from './pages/LoginRegister-page/LoginRegister.page'
import Dashboard from './pages/Dashboard-page/Dashboard.page'
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login-register" element={<LoginRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>

  );
}

export default App;
