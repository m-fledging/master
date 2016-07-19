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

$(function(){
		$('li.hidden').hide();
		$('#contents').on('click', '.more', function(){
				$('li.hidden').show();
				$(this).text(">>閉じる");
				$(this).addClass("close");//<div class="more close">
				$(this).removeClass("more");//<div class="close">
		});
		$('#contents').on('click', '.close', function(){
				$('li.hidden').hide();
				$(this).text(">>もっとみる");
				$(this).addClass("more");
				$(this).removeClass("close");
		});
});

/*
$(function(){//開始１
	$('.list').each(function(){//.listは以下のような制御を持つ	開始２
		$('.list').show('li:(2)').hide();//li1-3を表示させ、他のliは隠す
		$('.list .more a').each(function(){//.list .more aは以下のような制御を持つ	開始３
			$('.list .more a').on('click', function(){//.list .more aをクリックすると以下の制御を持つ	開始４
				$('.list .more a').hide();//.list .more aを隠す
				$('.list .more a').show('li:gt(5)').nextAll().slideDown();//li1-6を表示させる。
				$('.list .more a').show('.list .close a');//.list .close aを表示させる。
			});//閉じ４
		});//閉じ３
		$('.list .close a').on('click', function(){//.list .close aをクリックすると以下の制御を持つ	開始５
			$('.list .close a').hide();//.list .close aを隠す
			$('.list .close a').hide('li:gt(4, 5, 6)').slideUp();//スライドアップでli4-6を隠す
			$('.list .close a').show('.list .more a');//「もっと見る」を表示させる。
		});//閉じ５
	});//閉じ２
});//閉じ１
*/

