const BASE_URL = "http://localhost:8082";

export const login = async (identifier: string, password: string) => {
  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({ identifier, password }),
    
  });
    console.log("Request URL:", `${BASE_URL}/api/auth/login`);
  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json(); // vermutlich JWT
};

export const getUserInfo = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/api/auth/userinfo`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  if (!response.ok) {
    throw new Error("Failed to fetch user info");
  }
  return response.json();
}