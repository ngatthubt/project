$(function () {
    $("#search input").show();
    setTimeout("$('#search input').slideToggle('slow');", 1000);
    $("#search a").click(function () {
        $(this).next(".form-control").slideToggle("slow").siblings(".form-control:visible").slideUp("slow");
        $(this).toggleClass("current");
        $(this).siblings('a').removeClass("current");
    });
});