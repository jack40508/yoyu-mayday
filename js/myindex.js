var index=new Array(2);

$(document).ready(function() {
  //設定置中
  nav_page_center();

  var num_li=("li").length;

  for(i=0;i<=num_li;i++)
  {
    $("html,body").stop();
    $(".nav_page li:eq("+i+")").click({page_num:i},function(e){
      $(".nav_page li").css("background-color","white");
      index[0] = document.getElementById("Maydayprofile");
      index[1] = document.getElementById("carouselMusicBannerControls");
      page = e.data.page_num+1;

      if(page==1)
      $("html,body").animate({"scrollTop":$(".index_page"+page).offset().top-100});
      else{
        index[page-2].style.animation="none";
        $("html,body").animate({"scrollTop":$(".index_page"+page).offset().top});
        index[page-2].style.animation="fadeIn 1s";
        //console.log(index[page-2]);
      }

      $(".nav_page li:eq("+e.data.page_num+")").css("background-color","cyan");
    })
  }

})

//視窗變更重新計算置中
$(window).resize(function(){
  nav_page_center();
})

//捲動
$(window).scroll(function(){

  //Animate監聽
  index[0] = document.getElementById("Maydayprofile");
  index[1] = document.getElementById("carouselMusicBannerControls");

  $(".nav_page li").css("background-color","white");//除了被點擊到的游標，其他都恢復成原來的顏色
  $(".nav_page li:eq(0)").css("background-color","cyan");

  for(i=0;i<=1;i++){
    if($(window).scrollTop()+$(window).height() >= index[i].offsetTop && $(window).scrollTop() < index[i].offsetTop+index[i].offsetHeight){
      index[i].style.opacity="1";
      index[i].style.animation="fadeIn 1s";
      $(".nav_page li").css("background-color","white");//除了被點擊到的游標，其他都恢復成原來的顏色
      $(".nav_page li:eq("+(i+1)+")").css("background-color","cyan");
    }
    else {
      index[i].style.opacity="0";
      index[i].style.animation="none";
    }
  }

})

//計算置中
function nav_page_center(){
  pos=$(window).height()/2-$(".nav_page").height()/2;
  $(".nav_page").css("top",pos);
}
