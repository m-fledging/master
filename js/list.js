/*$(function(){//$(function(){});はhtmlを読み込んでから処理を実行するという意味//
	$("#contents1").each(function(){
		$(this).find("li:gt(3)").each(function(){$(this).hide();});
		$(this).append('<p>» もっと見る</p>');
		$(this).find("p:last").click(function(){$(this).parent().find("li").show(6); $(this).remain();});
		$(this).find("li:gt(3)").each(function(){$(this).hide();});
		$(this).append('<p>» 元に戻す</p>');
		$(this).find("li:gt(3)").click(function(){$(this).parent().find("li").show(3); $(this).remove();});
	});
});*/

$(function(){
	$(".list").each(function(){
		$(this).find("li:gt(2)").each(function(){$(this).hide();});
		$(this).append('<p>もっと見る</p>');
		$(this).find("p:last").click(function(){$(this).parent().find("li").show(1); $(this).remain();});
	});
});
