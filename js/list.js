/*michi_homeworkのlist.html用javascriptです
$(function(){});はhtmlを読み込んでから処理を実行するという意味
*/

//	「もっと見る」「閉じる」をjQueryに書くパターン

/*
$(function(){
		$('.more').each(function(){
				var $ele = $(this);
				$ele.prepend('<div class="open"><a href="#">&#9660; もっと見る</a></div>');
				$ele.append('<div class="close"><a href="#">&#9650; 閉じる</a></div>');
				$ele.find('.open').nextAll().hide();
				$ele.find('.open').click(function(){
						$ele.find('.open').hide();
						$ele.find('.open').nextAll().slideDown();
						return false;
				});
				$ele.find('.close').click(function(){
						$ele.find('.open').nextAll().slideUp('slow', function() {
								$ele.find('.open').show();
						});
						return false;
				});
		});
});
*/


//	以下はhtmlに「もっと見る」「閉じる」を書いてjQueryにはその制御のみ書くパターン
/*
$(function(){
		$('.list').each(function(){//.listは以下のような制御を持つ
				$('.list').find('li:gt(3)').hide();//.listからliを３行表示させる
				return false;//出来るまで繰り返す
				});
		$('.more a').each(function(){//.more aは以下のような制御を持つ
					$('.more a').find('.more a').on('click', function(){
								$(this).find('.more a').hide();
								$(this).find('.more a').nextAll().slideDown();
								return false;
						});
						$(this).find('.close a').on('click', function(){
								$(this).find('.more a').nextAll.slideUp('slow', function(){
										$(this).find('.more a').show();
								});
								return false;
						});
				});
});
*/

$(function(){
		$('.list').each(function(){//.listは以下のような制御を持つ
				$('.list').find('li:(3)').hide();//li0-3を表示させ、他のliは隠す
				return false;//出来るまで繰り返す
		});
		$('.list li more a').each(function(){//.list li more aは以下のような制御を持つ
				$('.list li more a').on('click', function(){//.list li more aをクリックすると以下の制御を持つ
						$('.list li more a').find('li:gt(2), li:gt(2)').hide();//li0-2,4-7を表示させる。li3だけ隠す。
						$(this).find('.more a').nextAll().slideDown();//li4-7をSlideDownで表示させる
						return false;//出来るまで繰り返す
				});
				$(this).find('.close a').on('click', function(){//.list li close aは以下のような制御を持つ
						$(this).find('.more a').nextAll.slideUp('slow', function(){//.list li close aをクリックすると以下の制御を持つ
								$(this).find('.more a').show();//li4-7を隠す
						});
						return false;
				});
		});
});

/*
$(function(){
		$(".more").on('click',function(){
				$(".more").show(2);				//.show() == css("display", "none");
				
			});
		$(".close").on('click',function(){
				$(".close").hide();			//.hide() == css("display", "none");
				
			});
});

