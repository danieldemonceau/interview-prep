const simplifyPath = (path: string): string => {
  let folderName: string = "";
  const parts: string[] = [];
  path += "/";
  for (let i = 0; i < path.length + 1; i++) {
    if (path[i] === "/") {
      if (folderName === "..") parts.length > 0 && parts.pop();
      else if (folderName !== "" && folderName !== ".") parts.push(folderName);
      folderName = "";
    } else folderName += path[i];
  }
  return "/" + parts.join("/");
};

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/.../.././home"));
