import { useState } from "react";
import { login as loginApi, getUserInfo } from "../api/authApi";
import { useAuthContext } from "../context/AuthContext";


// Login Logik: 1. API Call → Token, 2. User laden, 3. Context setzen

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { setAuth } = useAuthContext();

  const login = async (identifier: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      // 🔥 Step 1: Login → Token
      const data = await loginApi(identifier, password);
      const token = data.token;

      localStorage.setItem("token", token);

      // 🔥 Step 2: User laden
      const user = await getUserInfo();

      // 🔥 Step 3: Context setzen
      setAuth(user);
      console.log("Login erfolgreich:", user);

    } catch (err) {
      setError("Login fehlgeschlagen");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};