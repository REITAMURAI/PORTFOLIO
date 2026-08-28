


$(function(){
	// ウインドウの横幅を取得し、「windowWidth」に代入
	var windowWidth = $(window).width();
	
	// ウインドウの横幅が768px以下だったら
	if(windowWidth <= 768) {
		
		//masonryの発動条件を「$grid」に代入
		var $grid = $('.grid').masonry({
			itemSelector: '.itembox',
			columnWidth: 120,
		});
		
	// ウインドウの横幅が769px以上だったら
	} else {
		
		//masonryの発動条件を「$grid」に代入
		var $grid = $('.grid').masonry({
			itemSelector: '.itembox',
			columnWidth: 230,
		});
	}
	//class「filter-button」を持つ要素の子要素「li」に対して指定した回数を繰り返し処理
	$('.filter-button li').each(function() {
		
		//自分自身(class「filterbutton」を持つ要素の子要素「li」)がクリックされたら
		$(this).on('click', function() {
			
			//class「is-checke」を持つ要素からclas「is-checked」を削除
			jQuery('.is-checked').removeClass('is-checked');
			
			//クリックされた要素にclass「is-checke」を付与
			$(this).addClass('is-checked');
			
			//自分自身(クリックされた要素)の属性「ID」を取得し、「buttonName」に代入
			var buttonName = $(this).attr('id');
			
			//「buttonName」を「.buttonName」として「className」に代入
			var className = '.' + buttonName;
			
			//「buttonName」が「all」だったら（クリックされた要素)のIDが「all」だったら）
			if(buttonName == 'all') {
				
				//class「itembox」を持つ要素を200ミリ秒かけてフェードイン
				$('.itembox').fadeIn(200);
			
			//「buttonName」が「all」ではなかったら（クリックされた要素のIDが「all」ではなかったら）
			} else {
				
				//class「itembox」を持つがclass「className」を持たない要素を非表示にする
				$('.itembox:not(className)').hide();
				
				//class「className」を持つ要素を200ミリ秒かけてフェードイン
				$(className).fadeIn(200);
			}
			
			//masonryを発動し、コンテンツの再配置を行う
			$grid.masonry('layout');
		});
	});

	
	//----------以下、好きなjQueryを追加----------

	//====左に動くアニメーションここから===
	$(window).on('load',function(){
		//3秒後
		$('.leftAnime').delay(2500).queue(function(){
			$(this).each(function(){ 
				var elemPos = $(this).offset().top-50;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				
				if (scroll >= elemPos - windowHeight){
					//左から右へ表示するクラスを付与
					//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
					$(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
					$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
				}else{
					//左から右へ表示するクラスを取り除く
					$(this).removeClass("slideAnimeLeftRight");
					$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
					
				}
		});
		});
	});
	//元のコード
	// $('.leftAnime').each(function(){ 
		// 		var elemPos = $(this).offset().top-50;
		// 		var scroll = $(window).scrollTop();
		// 		var windowHeight = $(window).height();
				
		// 		if (scroll >= elemPos - windowHeight){
		// 			//左から右へ表示するクラスを付与
		// 			//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
		// 			$(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
		// 			$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
		// 		}else{
		// 			//左から右へ表示するクラスを取り除く
		// 			$(this).removeClass("slideAnimeLeftRight");
		// 			$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
					
		// 		}
		// });
	
	//テキストのカウントアップ+バーの設定
	var bar = new ProgressBar.Line(splash_text, {//id名を指定
		easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
		duration: 2000,//時間指定(1000＝1秒)
		strokeWidth: 0.2,//進捗ゲージの太さ
		color: '#555',//進捗ゲージのカラー
		trailWidth: 0.2,//ゲージベースの線の太さ
		trailColor: '#bbb',//ゲージベースの線のカラー
		text: {//テキストの形状を直接指定				
			style: {//天地中央に配置
				position: 'absolute',
				left: '50%',
				top: '50%',
				padding: '0',
				margin: '-30px 0 0 0',//バーより上に配置
				transform:'translate(-50%,-50%)',
				'font-size':'1rem',
				color: '#000',
			},
			autoStyleContainer: false //自動付与のスタイルを切る
		},
		step: function(state, bar) {
			bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
		}
	});

	//アニメーションスタート
	bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
		$("#splash_text").fadeOut(10);//フェイドアウトでローディングテキストを削除
		$(".loader_cover-up").addClass("coveranime");//カバーが上に上がるクラス追加
		$(".loader_cover-down").addClass("coveranime");//カバーが下に下がるクラス追加
		$("#splash").fadeOut();//#splashエリアをフェードアウト
	});



	
		
		
	//filter-button02
	$('.filter-button-top li').each(function() {
		
		//自分自身(class「filterbutton」を持つ要素の子要素「li」)がクリックされたら
		$(this).on('click', function() {
			
			//class「is-checke」を持つ要素からclas「is-checked」を削除
			jQuery('.is-checked').removeClass('is-checked');
			
			//クリックされた要素にclass「is-checke」を付与
			$(this).addClass('is-checked');
			
			//自分自身(クリックされた要素)の属性「ID」を取得し、「buttonName」に代入
			var buttonName = $(this).attr('id');
			
			//「buttonName」を「.buttonName」として「className」に代入
			var className = '.' + buttonName;
			
			//「buttonName」が「all」だったら（クリックされた要素)のIDが「all」だったら）
			if(buttonName == 'all') {
				
				//class「itembox」を持つ要素を200ミリ秒かけてフェードイン
				$('.itembox').fadeIn(200);
			
			//「buttonName」が「all」ではなかったら（クリックされた要素のIDが「all」ではなかったら）
			} else {
				
				//class「itembox」を持つがclass「className」を持たない要素を非表示にする
				$('.itembox:not(className)').hide();
				
				//class「className」を持つ要素を200ミリ秒かけてフェードイン
				$(className).fadeIn(200);
			}
			
			//masonryを発動し、コンテンツの再配置を行う
			$grid.masonry('layout');
		});
	});

	// 	burger-menu
	$(".openbtn").click(function () {//ボタンがクリックされたら
		$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
		$("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
	});
	
	$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
		$(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
		$("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
	});
	// modaal
	$(".gallery img").modaal({
		type: 'image',
		overlay_close:true,//モーダル背景クリック時に閉じるか
		before_open:function(){// モーダルが開く前に行う動作
			$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
		},
		after_close:function(){// モーダルが閉じた後に行う動作
			$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
		}
	});
	
	//pagetop
	var topBtn = $('.pagetop');    
	topBtn.hide();
	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
	if ($(this).scrollTop() > 150) {
	//ボタンの表示方法
	topBtn.fadeIn();
	} else {
	//ボタンの非表示方法
	topBtn.fadeOut();
	}
	});
	//スクロールしてトップ
	topBtn.click(function () {
	$('body,  html').animate({
	scrollTop: 0
	},   500);
	return false;
	});
	
	var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: './img/img_01.jpg'},
				{ src: './img/img_02.jpg'},
				{ src: './img/img_03.jpg'},
				{ src: './img/img_04.jpg'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: './img/img_sp_01.jpg' },
				{ src: './img/img_sp_02.jpg' },
				{ src: './img/img_sp_03.jpg' },
				{ src: './img/img_sp_04.jpg' },
			]
			
		}
		// overlay: './js/vegas/dist/overlays/01.png', //フォルダ『overlays』の中からオーバーレイのパターン画像を選択
		// 	transition: 'fade', //スライドを遷移させる際のアニメーション
		// 	transitionDuration: 4000, //スライドの遷移アニメーションの時間
		// 	delay: 10000, //スライド切り替え時の遅延時間
		// 	animation: 'random', //スライド表示中のアニメーション
		// 	animationDuration: 20000, //スライド表示中のアニメーションの時間

	//Vegas全体の設定

	$('#slider').vegas({
			overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
			transition: 'fade2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
			transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
			delay: 5000,//スライド間の遅延をミリ秒単位で。
			animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
			animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
			slides: responsiveImage,//画像設定を読む
			overlay: './js/vegas/overlays/02.png',
			//timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
		});

		
});


