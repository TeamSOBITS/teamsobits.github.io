$(function () {
	/***************************************************************************
	 * header
	 * 
	 **************************************************************************/
	$('.page-header').each(function () {
		var $window = $(window),
			$header = $(this),
			th = $header.offset().top + $header.outerHeight(),
			headerOffsetTop = $header.offset().top;;
		console.log(th);

		$window.on('scroll', $.throttle(100 / 20, function () {
			if ($window.scrollTop() > headerOffsetTop) {
				$header.addClass('sticky');
			} else {
				$header.removeClass('sticky');
			}
		}));

		$window.trigger('scroll');
	});

	$(".banner-nav-openbtn").click(function () {//ボタンがクリックされたら
		$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
		$("#banner-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
		console.log("test");
	});
	
	$("#banner-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
			$(".banner-nav-openbtn").removeClass('active');//ボタンの activeクラスを除去し
			$("#banner-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
	});

	/***************************************************************************
	 * footer
	 * 
	 **************************************************************************/
	
	// Back-to Top Button
	$('#page-top-button').on('click', function () {
		$.smoothScroll({
			easing: 'easeOutExpo', // イージングの種類
			speed: 1000             // 所要時間
	});
	});

	/***************************************************************************
	 * publication
	 * 
	 **************************************************************************/


	/***************************************************************************
	 * アニメーション
	 * 
	 **************************************************************************/
	// 動きのきっかけの起点となるアニメーションの名前を定義
	function BgFadeAnime() {
		// 背景色が伸びて出現（右から左）
		$('.bgRLextendTrigger').each(function () { //bgRLextendTriggerというクラス名が
			var elemPos = $(this).offset().top - 50;//要素より、50px上の
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight) {
				$(this).addClass('bgRLextend');// 画面内に入ったらbgRLextendというクラス名を追記
			} else if ($(this).hasClass('bgRLextOnly')) {
			} else {
				$(this).removeClass('bgRLextend');// 画面外に出たらbgRLextendというクラス名を外す
			}
		});
		// 文字列を囲う子要素
		$('.bgappearTrigger').each(function () { //bgappearTriggerというクラス名が
			var elemPos = $(this).offset().top - 50;//要素より、50px上の
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight) {
				$(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
			} else if ($(this).hasClass('bgappearOnly')) {
			} else {
				$(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
			}
		});
	}

	var arr = []
	//初期値の設定
	function TypingInit() {
		$('.js_typing').each(function (i) { //js_typingクラスを全て処理をおこなう
			arr[i] = new ShuffleText(this);//動作させるテキストを配列に格納
		});
	}
	//スクロールした際のアニメーションの設定
	function TypingAnime() {
		if (arr.length == 0) {
			TypingInit();
		}
		$(".js_typing").each(function (i) {
			var elemPos = $(this).offset().top - 50;//要素より、50px上の
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight) {
				if (!$(this).hasClass("endAnime")) {//endAnimeのクラスがあるかチェック
					arr[i].start();//配列で登録テキストのアニメーションをおこなう
					arr[i].duration = 800;//テキストが最終変化するまでの時間※規定値600
					$(this).addClass("endAnime");//１度アニメーションした場合はendAnimeクラスを追加
				}
			} else {
				$(this).removeClass("endAnime"); //範囲外にスクロールした場合はendAnimeのクラスを削除
			}
		});
	}


	// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function () {
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

	// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function () {

	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
});

 // =========================================================
 //      画面が開かれたときの初期設定
 // =========================================================
 window.onload = function() {
 
	// --- ブラウザのデフォルト言語を取得して初回の表示 ----- 
	var wDef = (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
	langSet(wDef);
	if(wDef == "ja"){
		langSet(wDef);
	}
	else{
		langSet("en");
	}
  }
   // =========================================================
   //      選択された言語のみ表示
   // =========================================================
  function langSet(argLang){
   
	// --- 切り替え対象のclass一覧を取得 ----------------------
	var elm = document.getElementsByClassName("langCng");
   
	for (var i = 0; i < elm.length; i++) {
   
	  // --- 選択された言語と一致は表示、その他は非表示 -------
	  if(elm[i].getAttribute("lang") == argLang){
		elm[i].style.display = '';
	  }
	  else{
		elm[i].style.display = 'none';
	  }
	}
  }