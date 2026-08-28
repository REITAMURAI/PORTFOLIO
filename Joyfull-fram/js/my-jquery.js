$(function () {
    $('#js-slider-2').slick({
        //arrows: false, // 前・次のボタンを表示する
        autoplay: true,
        speed: 1000, // スライドさせるスピード（ミリ秒）
        slidesToShow: 1, // 表示させるスライド数
        centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
        variableWidth: true, // スライド幅の自動計算を無効化
    });
});



