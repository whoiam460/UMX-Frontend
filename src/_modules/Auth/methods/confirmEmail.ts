const confirmEmail = async (token: string | null) => {
  try {
    console.log(token);
    const response = await fetch(
      "http://localhost:4000/api/auth/verify-email",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }
    );

    if (!response.ok) {
      throw new Error("Error verifying email");
    }
    return response.ok;
  } catch (error) {
    console.error("Error during login:", error);
    // alert("An error occurred during login.");
  }
};

export default confirmEmail;
