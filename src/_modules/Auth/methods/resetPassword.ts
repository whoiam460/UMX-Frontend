const resetPassword = async (token: string | null, password: string) => {
  try {
    const response = await fetch(
      "http://localhost:4000/api/auth/reset-password",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword: password }),
      }
    );

    if (!response.ok) {
      throw new Error("Error during reset password");
    }
    return response.ok;
  } catch (error) {
    console.error("Error during reset password", error);
  }
};

export default resetPassword;
