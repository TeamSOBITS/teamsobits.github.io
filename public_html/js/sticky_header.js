$(function () {
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

	/**************************************************
	 * slide-showの設定
	 **************************************************/

	var window_with = $(window).width();
	if (window_with > 500) {// PC用の画像
		var slide_img_list = [
			/*{ src: './img/slide-test/図1.png' },
			{ src: './img/slide-test/図2.png' },
			{ src: './img/slide-test/図3.png' },
			{ src: './img/slide-test/図4.png' },
			{ src: './img/slide-test/図5.png' },
			{ src: './img/slide-test/図6.png' },*/
			{ src: './img/slide/slide-01.png' },
			{ src: './img/slide/slide-02.png' },
			{ src: './img/slide/slide-03.png' },
			{ src: './img/slide/slide-04.png' },
			{ src: './img/slide/slide-05.png' },
			{ src: './img/slide/slide-06.png' },
			{ src: './img/slide/slide-07.png' },
			/*
			{ src: './img/slide-1.jpg' },
			{ src: './img/slide-2.jpg' },
			{ src: './img/slide-3.jpg' },
			{ src: './img/slide-4.jpg' },*/
		];
	} else { // スマホ用の画像
		var slide_img_list = [
			{ src: './img/slide/slide-01.png' },
			{ src: './img/slide/slide-02.png' },
			{ src: './img/slide/slide-03.png' },
			{ src: './img/slide/slide-04.png' },
			{ src: './img/slide/slide-05.png' },
			{ src: './img/slide/slide-06.png' },
			{ src: './img/slide/slide-07.png' },
		];
	}

	$('#slideshow-img').vegas({
		overlay: true,
		transition: 'fade2',
		transitionDuration: 4000,
		delay: 5000,
		animationDuration: 3000,
		animation: 'random',
		slides: slide_img_list,
		timer: false,
	});

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
				// $(this).removeClass('bgRLextend');// 画面外に出たらbgRLextendというクラス名を外す
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
				// $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
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
				// $(this).removeClass("endAnime"); //範囲外にスクロールした場合はendAnimeのクラスを削除
			}
		});
	}

	var fixed_percent_num = 0;
	function chartInit() {
		$('#chart-area').each(function () {
			var $chart = $(this),
				$percentNumber = $chart.find('.fixed-percent'),
				percentData = $percentNumber.text();

			fixed_percent_num = percentData;

		});
	}

	function writeChartTurnRight($chart) {
		// 「マスク」を保存し、角度 0 を指定
		var $circleLeft = $chart.find('.left .circle-mask-inner')
			.css({ transform: 'rotate(0)' }),
			$circleRight = $chart.find('.right .circle-mask-inner')
				.css({ transform: 'rotate(0)' }),
			// パーセンテージ値を取得
			$percentNumber = $chart.find('.percent-number');

		// パーセンテージの表示をいったん 0 に
		$percentNumber.text(180);  // これで代入ができるらしい

		// 角度のアニメーション
		$({ percent: 0 }).delay(1000).animate({ percent: 100 }, {
			duration: 1500,
			progress: function () {
				var now = this.percent,
					deg = now * 360 / 100,
					degRight = Math.min(Math.max(deg, 0), 180),
					degLeft = Math.min(Math.max(deg - 180, 0), 180);
				$circleRight.css({ transform: 'rotate(' + degRight + 'deg)' });
				$circleLeft.css({ transform: 'rotate(' + degLeft + 'deg)' });
				$percentNumber.text(Math.floor(now));
			}
		});
	}

	function writeChartTurnLeft($chart) {
		// 「マスク」を保存し、角度 0 を指定
		var $circleLeft = $chart.find('.left .circle-mask-inner')
			.css({ transform: 'rotate(0)' }),
			$circleRight = $chart.find('.right .circle-mask-inner')
				.css({ transform: 'rotate(0)' }),
			// パーセンテージ値を取得
			$percentNumber = $chart.find('.percent-number'),
			$yearsNumber = $chart.find('.years');

		// パーセンテージの表示をいったん 0 に
		$percentNumber.text(180);  // これで代入ができるらしい

		// 角度のアニメーション
		$({ percent: 100, years: 0 }).delay(0000).animate({ percent: 0, years: 25 }, {
			duration: 1500,
			progress: function () {
				var now = this.percent,
					deg = now * 360 / 100,
					degRight = Math.min(Math.max(deg, 0), 180),
					degLeft = Math.min(Math.max(deg - 180, 0), 180);
				$circleRight.css({ transform: 'rotate(' + -degLeft + 'deg)' });
				$circleLeft.css({ transform: 'rotate(' + -degRight + 'deg)' });
				$percentNumber.text(Math.floor(now));
				$yearsNumber.text(Math.floor(this.years));
				console.log(this.years);
			}
		});
	}

	function activateScene2() {
		$('#chart-area').each(function () {
			var elemPos = $(this).offset().top - 50;//要素より、50px上の
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight) {
				if (!$(this).hasClass("endAnime")) {//endAnimeのクラスがあるかチェック
					var $chart1 = $('#chart-area #chart1'),
						$chart2 = $('#chart-area #chart2'),
						$loop_chart = $('#chart-area .loop-chart');

					$chart1.addClass("active");
					writeChartTurnRight($chart1);

					setTimeout(function () {
						$chart2.addClass("active");
						$chart1.removeClass("active");
						writeChartTurnLeft($chart2);
					}, 3000);
					setTimeout(function () {
						$loop_chart.addClass("active");
						$chart1.removeClass("active");
						$chart2.find('.chart-content').css({ 'z-index': 4 });
						// writeChartTurnLeft($loop_chart);

						writeChartTurnRight($loop_chart);
						setInterval(function () {
							writeChartTurnRight($loop_chart);
						}, 2000);

					}, 6000);
					$(this).addClass("endAnime");//１度アニメーションした場合はendAnimeクラスを追加
				}
			}
		});

	}

	// Back-to Top Button
	$('#page-top-button').on('click', function () {
		$.smoothScroll({
			easing: 'easeOutExpo', // イージングの種類
			speed: 1000             // 所要時間
	});
	});

	// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function () {
		TypingAnime();/* アニメーション用の関数を呼ぶ*/
		BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
		activateScene2();
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

	// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function () {
		TypingInit(); //初期設定
		TypingAnime();/* アニメーション用の関数を呼ぶ*/
		BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
		chartInit();
		activateScene2();
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
});


 // =========================================================
 //      画面が開かれたときの初期設定
 // =========================================================
 window.onload = function() {
 
	// --- ブラウザのデフォルト言語を取得して初回の表示 ----- 
	var wDef = (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
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