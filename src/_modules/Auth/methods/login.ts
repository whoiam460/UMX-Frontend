// interface LoginResponse {
//   access_token: string;
//   refresh_token: string;
//   isEmailVerified: boolean;
// }

const login = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    // const data: LoginResponse = await response.json();

    // if (data.isEmailVerified) {
    //   console.log("Login successful!");
    //   // Направлення користувача на основну сторінку
    //   window.location.href = "/dashboard"; // чи інша сторінка
    // } else {
    //   console.log("Please verify your email.");
    //   // Направлення на сторінку для підтвердження емейлу
    //   window.location.href = "/verify-email";
    // }
  } catch (error) {
    console.error("Error during login:", error);
    alert("An error occurred during login.");
  }
};

export default login;
