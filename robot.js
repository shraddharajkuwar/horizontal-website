var smallcursor= document.querySelector(".small_cursor");
var largecursor= document.querySelector(".large_cursor");

document.onmousemove = function(e){
    smallcursor.style.left = (e.pageX-5) + "px";
    smallcursor.style.top = (e.pageY-5) + "px";
    smallcursor.style.display= "block"
    largecursor.style.left = (e.pageX-20) + "px";
    largecursor.style.top = (e.pageY-20) + "px";
    largecursor.style.display="block";
}

$(".nav-link1").click(function(){
    $("#carouselExampleIndicators").carousel(0);
    $(".nav-link1").addClass("active");
    $(".nav-link2").removeClass("active");
    $(".nav-link3").removeClass("active");
    $(".nav-link4").removeClass("active");
    $(".nav-link5").removeClass("active");
  });
  $(".nav-link2").click(function(){
    $("#carouselExampleIndicators").carousel(1);
    $(".nav-link2").addClass("active");
    $(".nav-link1").removeClass("active");
    $(".nav-link3").removeClass("active");
    $(".nav-link4").removeClass("active");
    $(".nav-link5").removeClass("active");
  });
  $(".nav-link3").click(function(){
    $("#carouselExampleIndicators").carousel(2);
    $(".nav-link3").addClass("active");
    $(".nav-link1").removeClass("active");
    $(".nav-link2").removeClass("active");
    $(".nav-link4").removeClass("active");
    $(".nav-link5").removeClass("active");
  });
  $(".nav-link4").click(function(){
    $("#carouselExampleIndicators").carousel(3);
    $(".nav-link4").addClass("active");
    $(".nav-link1").removeClass("active");
    $(".nav-link2").removeClass("active");
    $(".nav-link3").removeClass("active");
    $(".nav-link5").removeClass("active");
  });
  $(".nav-link5").click(function(){
    $("#carouselExampleIndicators").carousel(4);
    $(".nav-link5").addClass("active");
    $(".nav-link1").removeClass("active");
    $(".nav-link2").removeClass("active");
    $(".nav-link3").removeClass("active");
    $(".nav-link4").removeClass("active");
  });