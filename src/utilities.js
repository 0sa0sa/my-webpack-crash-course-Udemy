// node src/utilities.js で実行できる

export function NiJou(num) {
  return num ** 2;
}

// console.log(NiJou(2));

export const NAME = "Osa";

// export default は import する時のdefault(初期値？)になる？


export default class Lion {
  static say() {
    return "Roar";
  }
}
