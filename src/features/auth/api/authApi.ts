const BASE_URL = "http://localhost:8082";

export const login = async (identifier: string, password: string) => {
  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({ identifier, password }),
    
  });
    console.log("Request body:", JSON.stringify({ identifier, password }));
    console.log("Request URL:", `${BASE_URL}/api/auth/login`);
  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json(); // vermutlich JWT
};