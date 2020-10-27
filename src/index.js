// vim 関係
// :sp → split 画面分割
// :e 現在のファイルからのfilenameパス＋filename → filenameを編集できる
// :! command → commandを実行できる

import _ from "lodash";

// import { NAME, NiJou } from "./utilities";
import * as utilities from "./utilities";
import { NAME as NAME_OF_Osa } from "./utilities";

// import Lion_default from "./utilities";
// console.log(Lion_default.say());

// console.log(NiJou(4));
console.log(utilities.NiJou(3));

function component() {
  const element = document.createElement("div");
  // const array = [NAME, "Hello", "webpack", "!"];
  const array = [utilities.NAME, NAME_OF_Osa + "2", "Hello", "webpack", "!"];
  element.innerHTML = _.join(array, " ");

  return element;
}

document.body.appendChild(component());
