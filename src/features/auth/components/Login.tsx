import { useState } from "react";
import { useAuth } from "../hooks/useAuth";


// Login Formulat und aufruf der login Funktion aus useAuth

const Login = () => {
  // state für identifier und password
  const [identifier, setIdentifier] = useState(""); 
  const [password, setPassword] = useState("");



  const { login, loading, error } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(identifier, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Identifier"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;