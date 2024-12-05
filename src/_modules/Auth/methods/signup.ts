// interface LoginResponse {
//   access_token: string;
//   refresh_token: string;
//   isEmailVerified: boolean;
// }

const signup = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:4000/api/users/create", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Sign up failed");
    }
    return response.ok;
  } catch (error) {
    console.error("Error during login:", error);
    alert("An error occurred during login.");
  }
};

export default signup;
