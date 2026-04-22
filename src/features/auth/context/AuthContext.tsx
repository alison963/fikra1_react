import { createContext, useContext, useEffect, useState } from "react";
import { getUserInfo } from "../api/authApi";
import { User } from "../UserTypes";


// so soll ein AuthContextType aussehen: 
type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  setAuth: (user: User) => void;
  logout: () => void;
};


const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    
  // läuft einmal beim start der App und guckt ob ein Token da ist → wenn ja, User laden und Context setzen, wenn nein → nichts tun
  // 🔥 Auto Login
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const userData = await getUserInfo();
        setUser(userData);
        setIsAuthenticated(true);
      } catch {
        localStorage.removeItem("token");
      }
    };

    initAuth();
  }, []);

  const setAuth = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthContext not found");
  return context;
};