import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import HomePage from '../pages/home-page';
import LoginPage from '../pages/login';
import SignupPage from '../pages/signup';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} /> {/* Protected route */}
      </Routes>
    </Router>
  );
};

export default App;
