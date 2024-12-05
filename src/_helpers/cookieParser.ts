function cookieParser(cookieString: string) {
  if (cookieString === "") return null;

  const pairs = cookieString.split(";");

  const splittedPairs = pairs.map((cookie) => cookie.split("="));

  // Create an object with all key-value pairs
  const cookieObj = splittedPairs.reduce<{ [key: string]: string }>(
    (obj, cookie) => {
      obj[decodeURIComponent(cookie[0].trim())] = decodeURIComponent(
        cookie[1]?.trim() || ""
      );
      return obj;
    },
    {}
  );

  return cookieObj;
}

export default cookieParser;
