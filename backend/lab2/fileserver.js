import fs from "fs";

function createfile() {
  fs.writeFile("data.txt", "Hello,node.js", () => {
    console.log("File created");
  });
}
function readfile() {
  fs.readfile("data.txt", "new content", () => {
    console.log(data);
  });
}
function updatefile() {
  fs.appendFile("data.txt", "new content", () => {
    console.log("File upadate");
  });
}
function deletefile() {
  fs.unlink("data.txt", () => {
    console.log("file delete");
  });
}
createfile();
updatefile();