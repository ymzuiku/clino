export function stringToHex(str: string, start = "c") {
  let val = "";
  for (let i = 0; i < str.length; i++) {
    if (val === "") val = str.charCodeAt(i).toString(36);
    else val += str.charCodeAt(i).toString(36);
  }
  return start + val;
}
