const nav = document.querySelector(".nav"),
navOpenBtn = document.querySelector(".navOpenBtn"),
navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});
function check() {
    let str = [];
    //ラジオボタンの中身を取得
    const q = [document.shitsumon.q0, document.shitsumon.q1, document.shitsumon.q2, document.shitsumon.q3, document.shitsumon.q4, document.shitsumon.q5, document.shitsumon.q6];
    //A・B・Cそれぞれの合計点数を入れるための変数
    var a = 0;
    var b = 0;
    var c = 0;
    //どのラジオボタンが選択されたか判定し、点数を加算
    for (let n = 0; n < q.length; n++) {
        for (let i = 0; i < q[n].length; i++) {
            if (q[n][i].checked) {
                str[n] = q[n][i].value;
                if (str[n] == "A") {
                    a++;
                } else if (str[n] == "B") {
                    b++;
                } else if (str[n] == "C") {
                    c++;
                }
                break;
            }
        }
    }
    //コメントの条件分岐
    var message = "";
    if (a > b && a > c) {
        message = "危険";
    } else if (b > a && b > c) {
        message = "安全";
    } else if (c > a && c > b) {
        message = "";
    } else {
        message = "";
    }
    //HTMLへ出力
    var html = '<div>';
    html += 'A=' + a + '個<br>';
    html += 'B=' + b + '個<br>';
    html += 'C=' + c + '個<br><br>';
    html += '合計';
    html += a*1+b*2+c*3;
    html += '点です';

    //= a*1+b*2+c*3
    html += '</div>';
    document.getElementById("kekka").innerHTML = html;

    //判定してポップアップメッセージ表示
    if (a*1+b*2+c*3 >= 10) {
        // 変数を使って表示させる
        var sample = 'あなたの家は比較的安全である';
        alert(sample);
    } else if (a*1+b*2+c*3 > 0) {
        var sample1 = 'あなたの家は危険な可能性がある';
        alert(sample1);
    } else {
        var sample2 = 'エラー';
        alert(sample2);
    }
}