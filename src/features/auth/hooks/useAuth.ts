import { useState } from "react";
import { login as loginApi } from "../api/authApi";


// Dieser Hook kapselt die Authentifizierungslogik, damit wir sie in unseren Komponenten verwenden können
// aufgaben sind Login Logik, Loading State, Error Handling
// ruft loginApi, um mit dem Backend zu kommunizeiren
export const useAuth = () => {

  // State für Lade- und Fehlerstatus
  const [loading, setLoading] = useState(false); // fängt bei false an, da wir nicht sofort laden
  const [error, setError] = useState<string | null>(null);

  const login = async (identifier: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await loginApi(identifier, password);

      console.log("TOKEN:", data);

      // später: Token speichern
    } catch (err) {
      setError("Login fehlgeschlagen");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};