// textというidを持つHTML要素を取得し、定数に代入する
const text =document.getElementById('text');

// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// ボタンがクリックされた2秒（2000ミリ秒）後に文章を書き換える
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  },2000);
});