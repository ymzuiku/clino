export function clipboard(text: string) {
  const copy = function (e: any) {
    e.preventDefault();
    if (e.clipboardData) {
      e.clipboardData.setData("text/plain", text);
    } else if ((window as any).clipboardData) {
      (window as any).clipboardData.setData("Text", text);
    }
  };

  window.addEventListener("copy", copy);
  document.execCommand("copy");
  window.removeEventListener("copy", copy);
}
