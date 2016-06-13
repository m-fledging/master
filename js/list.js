/*michi_homeworkのlist.html用javascriptです
$(function(){});はhtmlを読み込んでから処理を実行するという意味
*/
$(function(){
	$('.list').each(function(){
		var $ele = $(this);
		$ele.prepend('<div class="open"><a href="#">&#9660; >>続きを読む</a></div>');
		$ele.append('<div class="close"><a href="#">&#9650; >>閉じる</a></div>');
		$ele.find('.open').nextAll().hide();
		$ele.find('.open').click(function(){
			$ele.find('.open').hide();
			$ele.find('.open').nextAll().slideDown();
			return false;
		});
		$ele.find('.close').click(function(){
			$ele.find('.open').nextAll().slideUp('slow', function(){
				$ele.find('.open').show();
		});
		return false;
		});
	});
});