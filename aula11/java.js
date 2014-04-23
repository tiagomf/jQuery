$(document).ready(function(){
	$("span").click(function(){
		//alert($("p").html());
		//$("p").html("<h1>Conheça Camões</h1>");
		//alert($("div").html());
		//$("div").html("<h1>Conheça Camões</h1>");
		//$("div").text($("p").html());
		//$("p").html($("textarea").val());
		//$("div").replaceWith("<p>Amor é um fogo que arde sem se ver; É ferida que dói, e não se sente;</p>");
		$("div").replaceWith($("textarea").val());
	});
});