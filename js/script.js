/*panel height*/
var windowHeight = $(window).height();
var menuContainer = $("#menuContainer").height();
var panel = windowHeight - menuContainer;
$(".panel").height(panel+"px");
/*End Of Pane Height*/

$(".toggle").click(function() {
	$(this).toggleClass("selected");
	var presentDiv = $(this).html();
	$("#"+presentDiv+"Panel").toggle();
	var showDivs= $(".panel").filter(function(){
		return($(this).css("display")!="none");
	}).length;
	var width= 100/showDivs;
	$(".panel").width(width+"%");
});

$("#runButton").click(function(){
	$("iframe").contents().find("html").html('<style>'+$("#cssScript").val()+'</style>'+$("#htmlScript").val());



});