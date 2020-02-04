var artist=new Array();

$(document).ready(function() {
  //設定置中
  nav_page_artist_center();

  var num_li=(".nav_page_artist li").length;

  for(i=0;i<=num_li;i++)
  {
    $("html,body").stop();
    $(".nav_page_artist li:eq("+i+")").click({page_num:i},function(e){

      page = e.data.page_num+1;

      $(".nav_page_artist li").css("background-color","white");
      if(page==1)
      $("html,body").animate({"scrollTop":$(".artist_page"+page).offset().top-100});
      else
      {
        artist = document.getElementById("artist"+(page-1));
        artist.style.animation="none";

        $("html,body").animate({"scrollTop":$(".artist_page"+page).offset().top});
        artist.style.animation="fadeIn 1s";
      }
      $(".nav_page_artist li:eq("+e.data.page_num+")").css("background-color","cyan");
    })
  }
})

//視窗變更重新計算置中
$(window).resize(function(){
  nav_page_artist_center();
})

//捲動
$(window).scroll(function(){
  //Animate監聽
  for(i=0;i<6;i++){
    if(i>0){
      artist[i] = document.getElementById("artist"+(i));

      if($(window).scrollTop()+$(window).height() >= artist[i].offsetTop && $(window).scrollTop() < artist[i].offsetTop+artist[i].offsetHeight){
        artist[i].style.opacity="1";
        artist[i].style.animation="fadeIn 1s";
        $(".nav_page_artist li").css("background-color","white");//除了被點擊到的游標，其他都恢復成原來的顏色
        $(".nav_page_artist li:eq("+i+")").css("background-color","cyan");
      }
      else{
        artist[i].style.opacity="0";
        artist[i].style.animation="none";
      }
    }
    else{
      $(".nav_page_artist li").css("background-color","white");//除了被點擊到的游標，其他都恢復成原來的顏色
      $(".nav_page_artist li:eq("+i+")").css("background-color","cyan");
    }
  }
})

//計算置中
function nav_page_artist_center(){
  pos=$(window).height()/2-$(".nav_page_artist").height()/2
  $(".nav_page_artist").css("top",pos)
}
