/*michi_homeworkのlist.html用javascriptです
$(function(){});はhtmlを読み込んでから処理を実行するという意味
*/

$(function () {
	$(".list").append("<p>>>もっと見る</p>");
	$(".list").find("li:gt(2)").click(function(){
		$(".list").hide();
	});
	$("<p>>>もっと見る</p>").click(function(){
		$(".list").slideDown();
		$(".list").removeClass("close");
		$(".list").text("閉じる");
	});
});