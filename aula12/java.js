$(document).ready(function(){
	$("span").click(function(){
		var img = $("<img/>", {
			src:"soa.png",
			title:"Sons of Anarchy",
			clcik:function(){alert("SAMCROW!");}
		});

		var ul = $("<ul/>").append($("<li/>").append("harley"))

		$("body").append(img).append(ul);

	});
});