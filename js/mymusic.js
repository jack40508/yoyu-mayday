var album = new Array();
var album_cover = new Array();

$(document).ready(function() {
  //設定置中
  nav_page_music_center();

  var num_li=(".nav_page_music li").length;

  for(i=0;i<=num_li;i++)
  {
    $("html,body").stop();
    $(".nav_page_music li:eq("+i+")").click({page_num:i},function(e){

      page = e.data.page_num+1;

      $(".nav_page_music li").css("background-color","white");
      if(page==1)
      $("html,body").animate({"scrollTop":$(".music_page"+page).offset().top-100});
      else
      {
        album = document.getElementById("album"+(page-1));
        album.style.animation="none";

        $("html,body").animate({"scrollTop":$(".music_page"+page).offset().top});
        album.style.animation="fadeIn 1s";
      }
      $(".nav_page_music li:eq("+e.data.page_num+")").css("background-color","cyan");
    })
  }

  for(i=0;i<9;i++){
    $("html,body").stop();
    album_cover[i] = document.getElementById("cover_album"+(i+1));

    $(".carousel-item:eq("+i+")").click({page_num:i},function(e){

      page = e.data.page_num+1;
      $(".nav_page_music li").css("background-color","white");
      album = document.getElementById("album"+(page));
      album.style.animation="none";

      $("html,body").animate({"scrollTop":$(".music_page"+(page+1)).offset().top});
      album.style.animation="fadeIn 1s";

      $(".nav_page_music li:eq("+e.data.page_num+")").css("background-color","cyan");
    })

  }


})

//視窗變更重新計算置中
$(window).resize(function(){
  nav_page_music_center()
})

//捲動變更目前所在標籤顏色
$(window).scroll(function(){


  //Animate監聽
  for(i=0;i<10;i++){

    if(i>0){
      album[i] = document.getElementById("album"+(i));
      //console.log(album[i]);

      if($(window).scrollTop()+$(window).height() >= album[i].offsetTop && $(window).scrollTop() < album[i].offsetTop+album[i].offsetHeight){
        album[i].style.opacity="1";
        album[i].style.animation="fadeIn 1s";
        $(".nav_page_music li").css("background-color","white");//除了被點擊到的游標，其他都恢復成原來的顏色
        $(".nav_page_music li:eq("+i+")").css("background-color","cyan");
      }
      else {
        album[i].style.opacity="0";
        album[i].style.animation="none";
      }
    }
    else{
      $(".nav_page_music li").css("background-color","white");//除了被點擊到的游標，其他都恢復成原來的顏色
      $(".nav_page_music li:eq("+i+")").css("background-color","cyan");
    }

  }
})

//計算置中
function nav_page_music_center(){
  pos=$(window).height()/2-$(".nav_page_music").height()/2
  $(".nav_page_music").css("top",pos)
}
