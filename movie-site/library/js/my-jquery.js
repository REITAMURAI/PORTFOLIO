
/*ローディング*/
$(window).on('load',function(){
  $("#MARVEL").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#MARVEL_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});


new Promise((resolve, reject) =>  {setTimeout(() => {
	
		var access = $.cookie('access')
		if(!access){
			flag = true;
			$.cookie('access', false);
		}else{
			flag = false	
		}

		//モーダル表示
		$(".video-open").modaal({
		start_open:flag, // ページロード時に表示するか
		overlay_close:true,//モーダル背景クリック時に閉じるか
		type: 'video',
		background: '#000', // 背景色
		overlay_opacity:10, // 透過具合
		before_open:function(){// モーダルが開く前に行う動作
			$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
		},
		after_close:function(){// モーダルが閉じた後に行う動作
			$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
		}
		},);
	}, 1500);
})

//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
	

//スクロールをするとハンバーガーメニューに変化するための設定を関数でまとめる
function FixedAnime() {
	//ヘッダーの高さを取得
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//ヘッダーの高さ以上までスクロールしたら
			$('.openbtn').addClass('fadeDown');//.openbtnにfadeDownというクラス名を付与して
			$('#header').addClass('dnone');//#headerにdnoneというクラス名を付与
		}else{//それ以外は
			$('.openbtn').removeClass('fadeDown');//fadeDownというクラス名を除き
			$('#header').removeClass('dnone');//dnoneというクラス名を除く
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});


//ボタンをクリックした際のアニメーションの設定
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#header").toggleClass('panelactive');//ヘッダーにpanelactiveクラスを付与
});
$("#g-navi li a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#header").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
});


//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
    $('#g-navi li a').click(function () {
	var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top-0;
	$('body,html').animate({scrollTop: pos}, 1000);
	return false;
});

/*スライダー*/
new Promise((resolve, reject) =>  {setTimeout(() => {
		$(".slide-items").slick({
			centerMode: true,
			autoplay:true,//自動的に動き出すか。初期値はfalse。
			speed: 500,//スライドのスピード。初期値は300。
			slidesToShow:3,//スライドを画面に3枚見せる
			slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
			infinite:true,//スライドのループ
			dots: false,//下部ドットナビゲーションの表示
			arrows: true,//左右の矢印
			pauseOnHover: false,//ホバーしたときにスライドを一時停止しない
		});
	}, 1000);
})


$(".gallery").modaal({
	type: 'image',
	overlay_close:true,//モーダル背景クリック時に閉じるか
	before_open:function(){// モーダルが開く前に行う動作
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
});

//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
	var access = $.cookie('access')
	if(!access){
		flag = true;
		$.cookie('access', false);
	}else{
		flag = false	
	}
	
	//モーダル表示
	$(".modal-open").modaal({
	start_open:flag, // ページロード時に表示するか
	overlay_close:true,//モーダル背景クリック時に閉じるか
	before_open:function(){// モーダルが開く前に行う動作
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
	});