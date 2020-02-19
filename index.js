 //on click bootstrap nav (mobo) collapsed
 $(function(){ 
     var navMain = $(".navbar-collapse");

     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });


//on scroll effects with JS
 if($(window).width() >= 992){

  $(document).ready(function(){
  $(window).scroll(function(){
    var positiontop= $(document).scrollTop();
    console.log(positiontop);

      if ((positiontop) > 419 && (positiontop) < 948){
         $('#about-1').addClass('animated slideInLeft');
            //progress animations in large view
         document.getElementById('animate-progbar-1').style.cssText='width:70%;';
         document.getElementById("animate-progbar-1").style.transitionDuration="1s";

         document.getElementById('animate-progbar-2').style.cssText='width:60%;';
         document.getElementById("animate-progbar-2").style.transitionDuration="1s";

         document.getElementById('animate-progbar-3').style.cssText='width:50%;';
         document.getElementById("animate-progbar-3").style.transitionDuration="1s";

         document.getElementById('animate-progbar-4').style.cssText='width:65%;';
         document.getElementById("animate-progbar-4").style.transitionDuration="1s";

         document.getElementById('animate-progbar-5').style.cssText='width:40%;';
         document.getElementById("animate-progbar-5").style.transitionDuration="1s";

         document.getElementById('animate-progbar-6').style.cssText='width:55%;';
         document.getElementById("animate-progbar-6").style.transitionDuration="1s";

         
        }


        if ((positiontop) > 1095 && (positiontop) < 1605){
         $('#progress-animate-1').addClass('animated slideInUp');
         $('#progress-animate-2').addClass('animated slideInUp');
         $('#progress-animate-3').addClass('animated slideInUp');

        }



        if ((positiontop) > 2380 && (positiontop) < 2570){
         $('#contact-animate').addClass('animated pulse');
         
        }

          });

     });

  }
//mobo progress animation
  if ($(window).width() <=767) {
     $(document).ready(function(){
  $(window).scroll(function(){
    var positiontop= $(document).scrollTop();
    console.log(positiontop);

       if (positiontop>=1248){

        document.getElementById('animate-progbar-1').style.cssText='width:70%;';
         document.getElementById("animate-progbar-1").style.transitionDuration="1s";

         document.getElementById('animate-progbar-2').style.cssText='width:60%;';
         document.getElementById("animate-progbar-2").style.transitionDuration="1s";

         document.getElementById('animate-progbar-3').style.cssText='width:50%;';
         document.getElementById("animate-progbar-3").style.transitionDuration="1s";

         document.getElementById('animate-progbar-4').style.cssText='width:65%;';
         document.getElementById("animate-progbar-4").style.transitionDuration="1s";

         document.getElementById('animate-progbar-5').style.cssText='width:40%;';
         document.getElementById("animate-progbar-5").style.transitionDuration="1s";

         document.getElementById('animate-progbar-6').style.cssText='width:55%;';
         document.getElementById("animate-progbar-6").style.transitionDuration="1s";


       }

      });

     });


  }
