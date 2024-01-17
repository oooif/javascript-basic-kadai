// 変数numに0～15までのランダムな変数を代入する
let num = Math.floor(Math.random() * 16);

// 変数numの値を出力する（確認用）
console.log(num);

// 条件式
if (num === 0) {
  console.log(num);
} else if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
} else if (num % 3 === 0) {
  console.log('3の倍数です');
} else if (num % 5 === 0) {
  console.log('5の倍数です');
} else {
  console.log(num);
}