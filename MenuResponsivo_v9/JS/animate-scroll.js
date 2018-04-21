
 $(document).ready(function (){
       
    //Efectos para los servicios
   //***************************************************************************

    $("#item-web-programming").hover(function(){
       $(".servicios-principales-title").addClass("animated fadeInDown");
       $(".servicios-principales-desc").addClass("animated fadeInLeft");
       $(".servicios-principales-btn").addClass("animated fadeInUp");
    },function(){
      $(".servicios-principales-title").removeClass("animated fadeInDown");
      $(".servicios-principales-desc").removeClass("animated fadeInLeft");
      $(".servicios-principales-btn").removeClass("animated fadeInUp");
    }
   );

   $("#item-marketing").hover(function(){
       $(".servicios-principales-title").addClass("animated fadeInDown");
       $(".servicios-principales-desc").addClass("animated fadeInLeft");
       $(".servicios-principales-btn").addClass("animated fadeInUp");
    },function(){
      $(".servicios-principales-title").removeClass("animated fadeInDown");
      $(".servicios-principales-desc").removeClass("animated fadeInLeft");
      $(".servicios-principales-btn").removeClass("animated fadeInUp");
    }
   );

   $("#item-mobile").hover(function(){
       $(".servicios-principales-title").addClass("animated fadeInDown");
       $(".servicios-principales-desc").addClass("animated fadeInLeft");
       $(".servicios-principales-btn").addClass("animated fadeInUp");
    },function(){
      $(".servicios-principales-title").removeClass("animated fadeInDown");
      $(".servicios-principales-desc").removeClass("animated fadeInLeft");
      $(".servicios-principales-btn").removeClass("animated fadeInUp");
    }
   );
   
   var flag = 0;

   $(".item-col-bg-1").hover(function(){
      
      if(flag == 0){
        $(".item-col-bg-1").addClass("mostrar-contenido");
        flag = 1;
      }else{
        $(".item-col-bg-1").removeClass("mostrar-contenido");
        flag = 0;
      }
    }
   );

   var flag = 0;

   $(".item-col-bg-2").hover(function(){
    
    if(flag == 0){
      $(".item-col-bg-2").addClass("mostrar-contenido");
      flag = 1;
    }else{
      $(".item-col-bg-2").removeClass("mostrar-contenido");
      flag = 0;
    }
  }
 );

 var flag = 0;
   
 $(".item-col-bg-3").hover(function(){
  
  if(flag == 0){
    $(".item-col-bg-3").addClass("mostrar-contenido");
    flag = 1;
  }else{
    $(".item-col-bg-3").removeClass("mostrar-contenido");
    flag = 0;
  }
}
);

var flag = 0;
   
$(".item-col-bg-4").hover(function(){
 
 if(flag == 0){
   $(".item-col-bg-4").addClass("mostrar-contenido");
   flag = 1;
 }else{
   $(".item-col-bg-4").removeClass("mostrar-contenido");
   flag = 0;
 }
}
);

var flag = 0;
   
$(".item-col-bg-5").hover(function(){
 
 if(flag == 0){
   $(".item-col-bg-5").addClass("mostrar-contenido");
   flag = 1;
 }else{
   $(".item-col-bg-5").removeClass("mostrar-contenido");
   flag = 0;
 }
}
);


var flag = 0;
   
$(".item-col-bg-6").hover(function(){
 
 if(flag == 0){
   $(".item-col-bg-6").addClass("mostrar-contenido");
   flag = 1;
 }else{
   $(".item-col-bg-6").removeClass("mostrar-contenido");
   flag = 0;
 }
}
);

   //***************************************************************************

});
     



     $(window).scroll(function(event){ 

         var y = $(this).scrollTop();

          if(y >= 100){
            $('.nav-bg-color').addClass('menuColorCambio');
            $('.navbar').addClass('menuHeight');
            $('#imgLogo').addClass('reducirLogo');
            //$('.desactivado').addClass('desactivado-color-dark');
          }else{
            $('.nav-bg-color').removeClass('menuColorCambio');
            $('.navbar').removeClass('menuHeight');
            $('#imgLogo').removeClass('reducirLogo');
            //$('.desactivado').removeClass('desactivado-color-dark');
          }


          if(y >=800){
         	 $('.seccion-4-title').addClass('animated fadeInUp');
           $('.seccion-4-subtitle').addClass('animated fadeInUp');
          }

          if(y >= 1300){
            $('#clientes_title').addClass('animated fadeIn');
          }

          if(y >= 1800){
            $('#img-frase').addClass('animated fadeIn');
          }


     });


