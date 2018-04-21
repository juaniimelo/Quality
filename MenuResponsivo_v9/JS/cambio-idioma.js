/*
    BY JIM 08/05/2018  :)

*/

$(document).ready(function(){

    //Menu labels
    var menu_link1;
    var menu_link2;
    var menu_link3;
    var menu_link4;
    var menu_link5;
    var menu_link6;
    var menu_link7;

    //Inicio labels video
    var label_video_subtitle_up;
    var label_video_title;
    var label_video_subtitle_down;
    var label_btn;

    //Idioma Español
    /******************************************************************************/
    $("#btnES").click(function(){

         //API para recupero de idioma
        var jsonApi = {
            "es":{
                        "menu":{
                                  "link_inicio":"inicio",
                                  "link_servicios":"servicios",
                                  "link_proyectos":"proyectos",
                                  "link_nosotros":"nosotros",
                                  "link_clientes":"clientes",
                                  "link_contacto":"contacto",
                                  "link_blog":"blog"
                               
                                 },
                        "seccion_inicio_video":{
                                                 "subtitulo_arriba":"Transformación digital",
                                                  "titulo":"Soluciones Informáticas",
                                                  "subtitulo_abajo":"Trabajamos tu idea para hacerla realidad",
                                                  "label_btn":"Nuestros Servicios"
                                                }
                    
                     }                 
          };

        //Se obtienen los valores de la Api
        var jsonString = JSON.stringify(jsonApi);
        var datoJSON = JSON.parse(jsonString);

        //Llena las variables para recuperar el idioma 
        menu_link1 = datoJSON.es.menu.link_inicio; //--> menu
        menu_link2 = datoJSON.es.menu.link_servicios; //--> menu
        menu_link3 = datoJSON.es.menu.link_proyectos; //--> menu
        menu_link4 = datoJSON.es.menu.link_nosotros; //--> menu
        menu_link5 = datoJSON.es.menu.link_clientes; //--> menu
        menu_link6 = datoJSON.es.menu.link_contacto; //--> menu
        menu_link7 = datoJSON.es.menu.link_blog; //--> menu

        label_video_subtitle_up = datoJSON.es.seccion_inicio_video.subtitulo_arriba; //--> seccion inicio video
        label_video_title = datoJSON.es.seccion_inicio_video.titulo; //--> seccion inicio video
        label_video_subtitle_down = datoJSON.es.seccion_inicio_video.subtitulo_abajo; //--> seccion inicio video
        label_btn = datoJSON.es.seccion_inicio_video.label_btn; //--> seccion inicio video

        menu_idioma(menu_link1, menu_link2, menu_link3, menu_link4, menu_link5, menu_link6, menu_link7);
        inicio_seccion_video(label_video_subtitle_up,label_video_title,label_video_subtitle_down, label_btn);
    });
    
    /******************************************************************************/

    //Idioma Ingles
    /******************************************************************************/
    $("#btnEN").click(function(){

        //API para recupero de idioma
        var jsonApi = {
            "en":{
                        "menu":{
                                  "link_inicio":"home",
                                  "link_servicios":"services",
                                  "link_proyectos":"proyects",
                                  "link_nosotros":"about us",
                                  "link_clientes":"clients",
                                  "link_contacto":"contact",
                                  "link_blog":"blog"
                                 },
                         "seccion_inicio_video":{
                                                  "subtitulo_arriba":"Digital Transformation",
                                                  "titulo":"Computer Solutions",
                                                  "subtitulo_abajo":"We work your idea to make it come true",
                                                  "label_btn":"Our services"
                                                }
                    
                     }                 
          };

        //Se obtienen los valores de la Api
        var jsonString = JSON.stringify(jsonApi);
        var datoJSON = JSON.parse(jsonString);

        menu_link1 = datoJSON.en.menu.link_inicio; //--> menu
        menu_link2 = datoJSON.en.menu.link_servicios; //--> menu
        menu_link3 = datoJSON.en.menu.link_proyectos; //--> menu
        menu_link4 = datoJSON.en.menu.link_nosotros; //--> menu
        menu_link5 = datoJSON.en.menu.link_clientes; //--> menu
        menu_link6 = datoJSON.en.menu.link_contacto; //--> menu
        menu_link7 = datoJSON.en.menu.link_blog; //--> menu

        label_video_subtitle_up = datoJSON.en.seccion_inicio_video.subtitulo_arriba; //--> seccion inicio video
        label_video_title = datoJSON.en.seccion_inicio_video.titulo; //--> seccion inicio video
        label_video_subtitle_down = datoJSON.en.seccion_inicio_video.subtitulo_abajo; //--> seccion inicio video
        label_btn = datoJSON.en.seccion_inicio_video.label_btn; //--> seccion inicio video


        menu_idioma(menu_link1, menu_link2, menu_link3, menu_link4, menu_link5, menu_link6, menu_link7);
        inicio_seccion_video(label_video_subtitle_up,label_video_title,label_video_subtitle_down, label_btn);
    });

   /******************************************************************************/

    //Funcion retorna todos los valores del menu por idioma
    function menu_idioma(link1, link2, link3, link4, link5, link6, link7){

        document.getElementById('nav1').innerHTML = link1;
        document.getElementById('nav2').innerHTML = link2;
        document.getElementById('nav3').innerHTML = link3;
        document.getElementById('nav4').innerHTML = link4;
        document.getElementById('nav5').innerHTML = link5;
        document.getElementById('nav6').innerHTML = link6;
        document.getElementById('nav7').innerHTML = link7;
    }

    function inicio_seccion_video(label1, label2, label3, label4){
        document.getElementById('subtitle-up').innerHTML = label1;
        document.getElementById('title').innerHTML = label2;
        document.getElementById('subtitle-down').innerHTML = label3;
        document.getElementById('btnVideo').innerHTML = label4;
    }
    
});

