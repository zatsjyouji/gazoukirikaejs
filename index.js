// 画像のソース
let pics_src = new Array("1.jpg","simpleロゴ.jpg","1.jpg");
let num = 0;

slidesample();

// ボタンをクリックすると画像が順番に切り替わる　numが追加される為
function slidesample(){
    if (num == pics_src.length-1){
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("mypic").src=pics_src[num];
    // 1秒毎に再度呼び出し
    setTimeout("slidesample()",1000);
}

