//$(function(){});はhtmlを読み込んでから処理を実行するという意味
$(function(){
	$(".list").each(function(){
		$(this).find("li:gt(2)").each(function(){$(this).hide();});//最初に表示する項目数選択
		$(this).append('<p>>>もっと見る</p>');//最初に表示させるボタン設置
		$(this).find("p:last").click(function(){$(this).parent().find("li").show(1); $(this).remain();});//ボタンを押したらどうなるのか
//		$(this).css('display','none');//押したボタンを非表示に
		$(this).append('<p>>>閉じる</p>');//次のボタンを表示させる
	});
});

/*
$(function(){
	$(".list").each(function(){
		$(this).find("li:gt(2)").each(function(){$(this).hide();});//最初に表示する項目数選択
		$(this).append('<p>>>もっと見る</p>');//最初に表示させるボタン設置
		$(this).find("p:last").click(function(){
			$(this).parent().find("li").show(1);
			$(this).remain();
		});//ボタンを押したらどうなるのか
		$(this).text('閉じる').addClass('close');
	});
});
$(function () {
		$(this).find("li:gt(2)").each(function(){$(this).hide();});
		$(this).click(function () {
				if ($(this).find("li:gt(2)").each(function(){$(this).hide();});{
					$(this).prevAll().slideDown();
					$(this).text('閉じる').addClass('close');
				} else {
					$(this).prevAll().slideUp();
					$(this).text('もっと見る').removeClass('close');
				}
		});
		});
*/