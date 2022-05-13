// コンソールに出力する。
console.log("hello");


// htmlファイルの要素からid指定で要素を取得する。
let red      = document.getElementById("red");
let blue     = document.getElementById("blue");
let red_txt  = document.getElementById("red-txt");
let blue_txt = document.getElementById("blue-txt");
let red_btn  = document.getElementById("red-btn");
let blue_btn = document.getElementById("blue-btn");

/*
method: addEventListener(条件、関数);
条件が満たされた時に関数を実行する。
下記の場合だと、red_btn要素がクリックされた時に背景色を変更する関数を実行する。
*/
red_btn.addEventListener('click', function(){
    // e.target ではred_btn要素を取得する。
    // jsからcssを変更する。
    red.style.backgroundColor = "blue";
    red_txt.textContent = "The color of this elem is blue.";
});

blue_btn.addEventListener('click', function(){
    blue.style.backgroundColor = "red";
    blue_txt.textContent = "The color of this elem is red.";
});


/*
// 応用編 上に書いてあるコードを全てコメントアウトして。
const btn = document.getElementsByTagName("button");

for (let i=0; i < btn.length; i++) {
    btn[i].addEventListener("click", function(e){
        let parent_id =  e.target.parentNode.id;
        let parent = document.getElementById(parent_id);
        let txt = parent.getElementsByClassName("item-txt")[0];

        // 背景色を取得出来なかったのでテキストで条件分岐
        if (txt.textContent === "The color of this elem is blue.") {
            parent.style.backgroundColor = "red";
            txt.textContent = "The color of this elem is red.";
        } else {
            parent.style.backgroundColor = "blue";
            txt.textContent = "The color of this elem is blue.";
        }
    });
}
*/
