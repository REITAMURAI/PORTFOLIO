$(".qa-list dd").hide();
$(".qa-list dl").on("click", function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});

/*$(".slide-items").slick({
			centerMode: true,
			autoplay:true,//自動的に動き出すか。初期値はfalse。
			speed: 500,//スライドのスピード。初期値は300。
			slidesToShow:3,//スライドを画面に3枚見せる
			slidesToScroll: 3,//1回のスクロールで1枚の写真を移動して見せる
			infinite:true,//スライドのループ
			dots: true,//下部ドットナビゲーションの表示
			arrows: false,//左右の矢印
			pauseOnHover: false,//ホバーしたときにスライドを一時停止しない
		});*/
$(function() {
  $('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    dots: true,//下部ドットナビゲーションの表示
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,//スライドを画面に3枚見せる
	arrows: false,//左右の矢印
  });
});