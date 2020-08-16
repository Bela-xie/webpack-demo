import x from "./x.js";
import "./x.scss";
import "./y.less";
import "./z.styl";
import png from "./assets/1.png";

const div = document.getElementById("app");
// div.innerHTML = `
//     <img src='${png}'>
// `;
const btn = document.createElement("button");
btn.innerText = "懒加载功能";
btn.onclick = () => {
  const promise = import("./lazy.js");
  promise.then((module) => {
    module.default();
  });
};
div.appendChild(btn);
