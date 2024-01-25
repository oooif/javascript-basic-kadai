// textというidを持つHTML要素を取得し、定数に代入する
const text =document.getElementById('text');

// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// ボタンがクリックされたら文章を書き換える
btn.addEventListener('click', () => {
  // 文章を書き換える
  text.textContent = 'ボタンをクリックしました';
});