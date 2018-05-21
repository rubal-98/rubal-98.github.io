if($(window).width() >= 1024){
           // do your stuff
         
             $(document).ready(function(){
               $('.hs').addClass("blackandwhite");
               $('.hs1').addClass("blackandwhite");
               $('.hs2').addClass("blackandwhite");
               $('.hs3').addClass("blackandwhite");
               $('.hs').mouseenter(function(){
                 $('.hs').removeClass("blackandwhite");
               });
               $('.hs1').mouseenter(function(){
                 $('.hs1').removeClass("blackandwhite");
               });
               $('.hs2').mouseenter(function(){
                 $('.hs2').removeClass("blackandwhite");
               });
               $('.hs3').mouseenter(function(){
                 $('.hs3').removeClass("blackandwhite");
               });
               $('.hs').mouseleave(function(){
                 $('.hs').addClass("blackandwhite");
               });
               $('.hs1').mouseleave(function(){
                 $('.hs1').addClass("blackandwhite");
               });
               $('.hs2').mouseleave(function(){
                 $('.hs2').addClass("blackandwhite");
               });$('.hs3').mouseleave(function(){
                 $('.hs3').addClass("blackandwhite");
               });
             });
         }
              