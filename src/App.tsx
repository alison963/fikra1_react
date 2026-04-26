import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import Login from './features/auth/components/Login';
import { useAuthContext } from './features/auth/context/AuthContext';
import HomeScreen from './shared/ui/HomeScreen';
import BookmarkCard from "./features/bookmark/components/BookmarkCard";

function App() {

  const { isAuthenticated } = useAuthContext();


  return (
    <BrowserRouter>
      <Routes>

        {/* 🔓 Public Route */}
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
        />

        {/* 🔐 Protected Routes */}
        <Route
          path="/"
          element={isAuthenticated ? <HomeScreen /> : <Navigate to="/login" />}
        />

        <Route
          path="/bookmarks"
          element={isAuthenticated ? <BookmarkCard /> : <Navigate to="/login" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
