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

$(function(){
		$('.list').each(function(){
				$(this).find('li:gt(2)').hide();
				return false;
				});
				$('.more a').each(function(){
						$(this).find('.more a').on('click', function(){
								$(this).find('.more a').hide();
								$(this).find('.more a').nextAll().slideDown();
								return false;
						});
						$(this).find('.close a').on('click', function(){
								$(this).find('.more a').nextAll.slideUp('slow', function() {
										$(this).find('.more a').show();
								});
								return false;
						});
				});
});



//	以下はhtmlに「もっと見る」「閉じる」を書いてjQueryにはその制御のみ書くパターン

/*
$(function(){
		$(".more").on('click',function(){
				$(".more").show(2);				//.show() == css("display", "none");
				
			});
		$(".close").on('click',function(){
				$(".close").hide();			//.hide() == css("display", "none");
				
			});
});

$(function(){
		$(".list").each(function(){
				$(".more").find("li:gt(5)").on('click',function(){
						
				each(function(){$(this).hide();});
				$(this).append('<p>もっと見る</p>');
				$(this).find("p:last").click(function(){$(this).parent().find("li").show(1); $(this).remain();});
		});
});

		
		
		
		$(function(){
			$(".list").find("li:gt(2)");
				$(".more a").on('click',function(){
						$(".list").show(5);
						$(".more a").hide('txt', >>もっと見る);
						$(".close a").append('<a>>>閉じる</a>');
				});
				$(".close a").on('click',function(){
						$(".close").hide();
						
				});
		});
		


$(function(){
		$("#contents .list").find("li:gt(2)");
	});

*/

