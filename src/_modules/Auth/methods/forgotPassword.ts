const forgotPassword = async (email: string | null) => {
  try {
    const response = await fetch(
      "http://localhost:4000/api/auth/forgot-password",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!response.ok) {
      throw new Error("Error during sent confirmation letter");
    }
    return response.ok;
  } catch (error) {
    console.error("Error during sent confirmation letter", error);
  }
};

export default forgotPassword;
