$(document).ready(function(){
    $(".hover").click(function(){
        var select = $(this).text();
        localStorage.setItem("active", select);
        $(".hover").removeClass("active_a");
        $(this).addClass("active_a"); 
        console.log(localStorage.getItem("active"));
    })
})