//前端读取本地文件的内容   下面代码中的this.result即为获取到的内容
export function loadFile(input: HTMLInputElement): Promise<[string, string]> {
  return new Promise((res) => {
    //支持chrome IE10
    if (window.FileReader) {
      if (input.files) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function () {
          res([this.result as any, file.name]);
        };
        reader.readAsText(file);
      }
    } else {
      res(["", ""]);
    }
  });
}
