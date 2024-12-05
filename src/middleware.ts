import { NextRequest, NextResponse } from "next/server";

import { cookieParser } from "@/_helpers";
import { cookies } from "next/headers";
import { parse } from "cookie";

async function refreshTokenMiddleware(
  request: NextRequest,
  redirect: NextResponse
) {
  try {
    const refreshToken = request.cookies.get("refresh_token")?.value;

    if (refreshToken) return null;

    if (!refreshToken) {
      const response = await fetch("http://localhost:4000/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        return null;
      } else {
        throw new Error(
          `response with status ${response.statusText} ${response.status}`
        );
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error refresh token middleware", error.message);
      return redirect;
    }
  }
}

async function accessTokenMiddleware(
  request: NextRequest,
  response: NextResponse,
  redirect: NextResponse
) {
  try {
    const refreshToken = request.cookies.get("refresh_token")?.value;
    const accessToken = request.cookies.get("access_token")?.value;

    if (!refreshToken) throw new Error("Refresh token are required");
    if (accessToken) return null;

    const accessTokenResponse = await fetch(
      "http://localhost:4000/api/auth/refreshAccessToken",
      {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Cookie: cookies().toString(),
        },
      }
    );

    const cookie = accessTokenResponse.headers.getSetCookie()[0];
    if (!cookie) throw new Error("cookie is not defined");

    const cookieName = "access_token";
    const parsedCookieString = cookieParser(cookie);

    const computedAccessToken: string = parsedCookieString?.[cookieName] ?? "";
    const computedMaxAge: number = Number(parsedCookieString?.["Max-Age"]);

    if (!computedAccessToken && !computedMaxAge && !isNaN(computedMaxAge))
      throw new Error("accessToken and maxAge is required");

    const cookieOptions = {
      name: cookieName,
      value: computedAccessToken,
      maxAge: computedMaxAge,
      secure: true,
      httpOnly: true,
      sameSite: "lax" as const,
    };

    // eslint-disable-next-line
    response.cookies.set(cookieOptions);
    return null;
  } catch (error) {
    if (error instanceof Error) {
      return redirect;
    }
  }
}

// async function userMiddleware(
//   request: NextRequest,
//   response: NextResponse,
//   redirect: NextResponse
// ) {
//   try {
//     const refreshToken = request.cookies.get("refreshToken")?.value;
//     let accessToken = request.cookies.get("accessToken")?.value;

//     if (!accessToken) {
//       const cookie = response.headers
//         .getSetCookie()
//         .find((item) => item.includes("accessToken"));

//       if (!cookie) throw new Error("access token is not defined");

//       const parsedCookieString = cookieParser(cookie);

//       accessToken = parsedCookieString!.accessToken;
//     }

//     if (!refreshToken || !accessToken)
//       throw new Error("Refresh token and access token are required!");

//     const userResponse = await fetch("http://localhost:3000/auth/user", {
//       method: "GET",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: `accessToken=${accessToken}`,
//       },
//       cache: "no-cache",
//     });

//     if (userResponse.status !== 200) {
//       throw new Error("unauthorized");
//     }

//     const user = await userResponse.json();

//     const cookieOptions = {
//       name: "userId",
//       value: user.id,
//       sameSite: "lax",
//     };

//     response.cookies.set(cookieOptions);
//     return null;
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Error during get user:", error.message);
//       return redirect;
//     }
//   }
// }

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const redirectToLogin = NextResponse.redirect(new URL("/login", request.url));
  const redirectToDashboard = NextResponse.redirect(
    new URL("/dashboard", request.url)
  );

  // Спроба оновлення токена
  const refreshTokenResult = await refreshTokenMiddleware(
    request,
    redirectToLogin
  );
  if (refreshTokenResult) {
    return refreshTokenResult;
  }

  // Оновлення access токена, якщо його немає
  await accessTokenMiddleware(request, response, redirectToLogin);

  // Парсимо куки після можливого оновлення токена
  const cookies = parse(request.headers.get("cookie") || "");
  const accessToken =
    cookies["access_token"] || response.cookies.get("access_token")?.value;

  // Якщо є токен і користувач намагається потрапити на сторінку /login, перенаправляємо на головну сторінку
  if (accessToken && request.nextUrl.pathname === "/login") {
    return redirectToDashboard; // Або інша сторінка
  }

  // Якщо токен відсутній і користувач намагається потрапити на сторінки, що потребують авторизації, перенаправляємо на сторінку входу
  if (
    !accessToken &&
    ["/dashboard", "/profile", "/"].includes(request.nextUrl.pathname)
  ) {
    return redirectToLogin;
  }

  // Якщо токен є, просто продовжуємо запит
  return response;
}

export const config = {
  matcher: ["/dashboard", "/profile", "/", "/login"],
};
