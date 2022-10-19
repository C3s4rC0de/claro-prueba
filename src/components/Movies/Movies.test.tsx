import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MovieType } from "../../types/MovieType";
import Movies from "./index";

const moviesMock: MovieType[] = [
  {
    id: "966926",
    title: "Riddick",
    title_episode: null,
    title_uri: "Riddick",
    title_original: "Riddick",
    description:
      "Dado por muerto en un lejano planeta, el duro Riddick tendrá que luchar por la supervivencia.",
    description_large:
      "Traicionado por su propia especie y dado por muerto en un lejano y desolado planeta habitado solo por animales salvajes, el duro Riddick tendrá que luchar por la supervivencia y enfrentarse con nuevos desafíos en soledad.",
    short_description: null,
    image_large:
      "https://clarovideocdn3.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/SS/RIDDICKWHORIZONTAL.jpg?size=675x380",
    image_medium:
      "https://clarovideocdn1.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/SS/RIDDICKWVERTICAL.jpg?size=200x300",
    image_small:
      "https://clarovideocdn3.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/SS/RIDDICKWHORIZONTAL.jpg?size=290x163",
    image_still:
      "https://clarovideocdn2.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/STILLS/RIDDICK-STILL-01.jpg",
    image_background:
      "https://clarovideocdn3.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/CLEAN/RIDDICK_e-1280x720.jpg",
    url_imagen_t1:
      "https://clarovideocdn4.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/CLEAN/RIDDICKWVERTICAL.jpg?size=200x300",
    url_imagen_t2:
      "https://clarovideocdn6.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/CLEAN/RIDDICKWHORIZONTAL.jpg?size=290x163",
    image_base_horizontal:
      "https://clarovideocdn0.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/SS/RIDDICKWHORIZONTAL.jpg",
    image_base_vertical:
      "https://clarovideocdn8.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/SS/RIDDICKWVERTICAL.jpg",
    image_base_square:
      "https://clarovideocdn8.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/SS/RIDDICKWCUADRADO.jpg",
    image_clean_horizontal:
      "https://clarovideocdn3.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/CLEAN/RIDDICKWHORIZONTAL.jpg",
    image_clean_vertical:
      "https://clarovideocdn1.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/CLEAN/RIDDICKWVERTICAL.jpg",
    image_clean_square:
      "https://clarovideocdn1.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/CLEAN/RIDDICKWCUADRADO.jpg",
    image_sprites:
      "https://clarovideocdn4.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/SPRITES/RIDDICK-SPRITEBAR.jpg",
    image_frames:
      "https://clarovideocdn0.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/SPRITES/RIDDICK-00h-00m-00s-00f.jpg",
    image_trickplay:
      "https://clarovideocdn4.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/SPRITES/RIDDICK-TRICKPLAY.bif",
    image_external: null,
    duration: "01:58:45",
    date: "04/12/2021",
    year: "2013",
    preview: "false",
    season_number: null,
    episode_number: null,
    format_types: "susc",
    live_enabled: "0",
    live_type: null,
    live_ref: null,
    timeshift: null,
    votes_average: 4,
    rating_code: "R",
    proveedor_name: "AMCO",
    proveedor_code: "amco",
    encoder_tecnology: {
      id: null,
      desc: null,
    },
    recorder_technology: {
      id: null,
      desc: null,
    },
    resource_name: null,
    rollingcreditstime: null,
    rollingcreditstimedb: null,
    is_series: false,
    channel_number: null,
  },
  {
    id: "966847",
    title: "Triangle",
    title_episode: null,
    title_uri: "Triangle",
    title_original: "Triangle",
    description:
      "Cuando Jess atropella a una gaviota de camino al puerto no imagina que es un mal presagio.",
    description_large:
      "Cuando, de camino al puerto, Jess atropella a una gaviota, no se imagina que se trata de un mal presagio. El barco en el que navegará con sus amigos parece desierto, pero no están solos. Alguien los está cazando uno a uno.",
    short_description: null,
    image_large:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/SS/TRIANGLEWHORIZONTAL.jpg?size=675x380",
    image_medium:
      "https://clarovideocdn3.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/SS/TRIANGLEWVERTICAL.jpg?size=200x300",
    image_small:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/SS/TRIANGLEWHORIZONTAL.jpg?size=290x163",
    image_still:
      "https://clarovideocdn4.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/STILLS/TRIANGLE-STILL-01.jpg",
    image_background:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/CLEAN/TRIANGLE_e-1280x720.jpg",
    url_imagen_t1:
      "https://clarovideocdn6.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/CLEAN/TRIANGLEWVERTICAL.jpg?size=200x300",
    url_imagen_t2:
      "https://clarovideocdn8.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/CLEAN/TRIANGLEWHORIZONTAL.jpg?size=290x163",
    image_base_horizontal:
      "https://clarovideocdn2.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/SS/TRIANGLEWHORIZONTAL.jpg",
    image_base_vertical:
      "https://clarovideocdn0.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/SS/TRIANGLEWVERTICAL.jpg",
    image_base_square:
      "https://clarovideocdn0.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/SS/TRIANGLEWCUADRADO.jpg",
    image_clean_horizontal:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/CLEAN/TRIANGLEWHORIZONTAL.jpg",
    image_clean_vertical:
      "https://clarovideocdn3.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/CLEAN/TRIANGLEWVERTICAL.jpg",
    image_clean_square:
      "https://clarovideocdn3.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/CLEAN/TRIANGLEWCUADRADO.jpg",
    image_sprites:
      "https://clarovideocdn6.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/SPRITES/TRIANGLE-SPRITEBAR.jpg",
    image_frames:
      "https://clarovideocdn2.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/SPRITES/TRIANGLE-00h-00m-00s-00f.jpg",
    image_trickplay:
      "https://clarovideocdn6.clarovideo.net/PELICULAS/TRIANGLE/EXPORTACION_WEB/SPRITES/TRIANGLE-TRICKPLAY.bif",
    image_external: null,
    duration: "01:38:54",
    date: "20211212154848",
    year: "2009",
    preview: "false",
    season_number: null,
    episode_number: null,
    format_types: "susc",
    live_enabled: "0",
    live_type: null,
    live_ref: null,
    timeshift: null,
    votes_average: 4,
    rating_code: "R",
    proveedor_name: "AMCO",
    proveedor_code: "amco",
    encoder_tecnology: {
      id: null,
      desc: null,
    },
    recorder_technology: {
      id: null,
      desc: null,
    },
    resource_name: null,
    rollingcreditstime: null,
    rollingcreditstimedb: null,
    is_series: false,
    channel_number: null,
  },
  {
    id: "937836",
    title: "La máquina del recuerdo",
    title_episode: null,
    title_uri: "La-maquina-del-recuerdo",
    title_original: "Rememory",
    description:
      "Un afamado científico muere después de crear una máquina capaz de reproducir recuerdos.",
    description_large:
      "Gordon Dunn, un pionero y afamado científico, es encontrado muerto justo después de revelar su nuevo trabajo: una máquina capaz de extraer, grabar y reproducir las emociones de las personas.",
    short_description: null,
    image_large:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/SS/REMEMORYWHORIZONTAL.jpg?size=675x380",
    image_medium:
      "https://clarovideocdn3.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/SS/REMEMORYWVERTICAL.jpg?size=200x300",
    image_small:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/SS/REMEMORYWHORIZONTAL.jpg?size=290x163",
    image_still:
      "https://clarovideocdn4.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/STILLS/REMEMORY-STILL-01.jpg",
    image_background:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/CLEAN/REMEMORY_e-1280x720.jpg",
    url_imagen_t1:
      "https://clarovideocdn6.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/CLEAN/REMEMORYWVERTICAL.jpg?size=200x300",
    url_imagen_t2:
      "https://clarovideocdn8.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/CLEAN/REMEMORYWHORIZONTAL.jpg?size=290x163",
    image_base_horizontal:
      "https://clarovideocdn2.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/SS/REMEMORYWHORIZONTAL.jpg",
    image_base_vertical:
      "https://clarovideocdn0.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/SS/REMEMORYWVERTICAL.jpg",
    image_base_square:
      "https://clarovideocdn0.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/SS/REMEMORYWCUADRADO.jpg",
    image_clean_horizontal:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/CLEAN/REMEMORYWHORIZONTAL.jpg",
    image_clean_vertical:
      "https://clarovideocdn3.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/CLEAN/REMEMORYWVERTICAL.jpg",
    image_clean_square:
      "https://clarovideocdn3.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/CLEAN/REMEMORYWCUADRADO.jpg",
    image_sprites:
      "https://clarovideocdn6.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/SPRITES/REMEMORY-SPRITEBAR.jpg",
    image_frames:
      "https://clarovideocdn2.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/SPRITES/REMEMORY-00h-00m-00s-00f.jpg",
    image_trickplay:
      "https://clarovideocdn6.clarovideo.net/PELICULAS/REMEMORY/EXPORTACION_WEB/SPRITES/REMEMORY-TRICKPLAY.bif",
    image_external: null,
    duration: "01:51:31",
    date: "20211124203312",
    year: "2017",
    preview: "false",
    season_number: null,
    episode_number: null,
    format_types: "susc",
    live_enabled: "0",
    live_type: null,
    live_ref: null,
    timeshift: null,
    votes_average: 4,
    rating_code: "PG-13",
    proveedor_name: "AMCO",
    proveedor_code: "amco",
    encoder_tecnology: {
      id: null,
      desc: null,
    },
    recorder_technology: {
      id: null,
      desc: null,
    },
    resource_name: null,
    rollingcreditstime: null,
    rollingcreditstimedb: null,
    is_series: false,
    channel_number: null,
  },
  {
    id: "770070",
    title: "Regresiones de un hombre muerto",
    title_episode: null,
    title_uri: "Regresiones-de-un-hombre-muerto",
    title_original: "Jacket, The",
    description:
      "Un veterano de guerra es acusado de asesinato y sometido a una controversial terapia.",
    description_large:
      "Luego de recuperarse de un disparo en la cabeza que le ha producido amnesia, el veterano de la Guerra del Golfo Jack Starks regresa a su hogar en Vermont. Allí es acusado de asesinato y destinado a un asilo que practica tratamientos cuestionables.",
    short_description: null,
    image_large:
      "https://clarovideocdn7.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/SS/JACKETTHEWHORIZONTAL.jpg?size=675x380",
    image_medium:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/SS/JACKETTHEWVERTICAL.jpg?size=200x300",
    image_small:
      "https://clarovideocdn7.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/SS/JACKETTHEWHORIZONTAL.jpg?size=290x163",
    image_still:
      "https://clarovideocdn6.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/STILLS/JACKETTHE-STILL-01.jpg",
    image_background:
      "https://clarovideocdn7.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/CLEAN/JACKETTHE_e-1280x720.jpg",
    url_imagen_t1:
      "https://clarovideocdn8.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/CLEAN/JACKETTHEWVERTICAL.jpg?size=200x300",
    url_imagen_t2:
      "https://clarovideocdn0.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/CLEAN/JACKETTHEWHORIZONTAL.jpg?size=290x163",
    image_base_horizontal:
      "https://clarovideocdn4.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/SS/JACKETTHEWHORIZONTAL.jpg",
    image_base_vertical:
      "https://clarovideocdn2.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/SS/JACKETTHEWVERTICAL.jpg",
    image_base_square:
      "https://clarovideocdn2.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/SS/JACKETTHEWCUADRADO.jpg",
    image_clean_horizontal:
      "https://clarovideocdn7.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/CLEAN/JACKETTHEWHORIZONTAL.jpg",
    image_clean_vertical:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/CLEAN/JACKETTHEWVERTICAL.jpg",
    image_clean_square:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/CLEAN/JACKETTHEWCUADRADO.jpg",
    image_sprites:
      "https://clarovideocdn8.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/SPRITES/JACKETTHE-SPRITEBAR.jpg",
    image_frames:
      "https://clarovideocdn4.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/SPRITES/JACKETTHE-00h-00m-00s-00f.jpg",
    image_trickplay:
      "https://clarovideocdn8.clarovideo.net/PELICULAS/JACKETTHE/EXPORTACION_WEB/SPRITES/JACKETTHE-TRICKPLAY.bif",
    image_external: null,
    duration: "01:42:50",
    date: "29/11/2021",
    year: "2005",
    preview: "true",
    season_number: null,
    episode_number: null,
    format_types: "susc",
    live_enabled: "0",
    live_type: null,
    live_ref: null,
    timeshift: null,
    votes_average: 4,
    rating_code: "R",
    proveedor_name: "AMCO",
    proveedor_code: "amco",
    encoder_tecnology: {
      id: null,
      desc: null,
    },
    recorder_technology: {
      id: null,
      desc: null,
    },
    resource_name: null,
    rollingcreditstime: null,
    rollingcreditstimedb: null,
    is_series: false,
    channel_number: null,
  },
  {
    id: "769573",
    title: "En la Luna",
    title_episode: null,
    title_uri: "En-la-Luna",
    title_original: "Moon",
    description:
      "Un minero aislado en la luna pierde el juicio cuando descubre que tiene un doble.",
    description_large:
      "En el otro lado de la luna, el solitario minero Sam avanza lentamente hacia el final de su período de tres años trabajando para una mega corporación que ha encontrado una veta de oro en la roca lunar. Pero, la locura acecha.",
    short_description: null,
    image_large:
      "https://clarovideocdn7.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/SS/MOONWHORIZONTAL.jpg?size=675x380",
    image_medium:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/SS/MOONWVERTICAL.jpg?size=200x300",
    image_small:
      "https://clarovideocdn7.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/SS/MOONWHORIZONTAL.jpg?size=290x163",
    image_still:
      "https://clarovideocdn6.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/STILLS/MOON-STILL-01.jpg",
    image_background:
      "https://clarovideocdn7.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/CLEAN/MOON_e-1280x720.jpg",
    url_imagen_t1:
      "https://clarovideocdn8.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/CLEAN/MOONWVERTICAL.jpg?size=200x300",
    url_imagen_t2:
      "https://clarovideocdn0.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/CLEAN/MOONWHORIZONTAL.jpg?size=290x163",
    image_base_horizontal:
      "https://clarovideocdn4.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/SS/MOONWHORIZONTAL.jpg",
    image_base_vertical:
      "https://clarovideocdn2.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/SS/MOONWVERTICAL.jpg",
    image_base_square:
      "https://clarovideocdn2.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/SS/MOONWCUADRADO.jpg",
    image_clean_horizontal:
      "https://clarovideocdn7.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/CLEAN/MOONWHORIZONTAL.jpg",
    image_clean_vertical:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/CLEAN/MOONWVERTICAL.jpg",
    image_clean_square:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/CLEAN/MOONWCUADRADO.jpg",
    image_sprites:
      "https://clarovideocdn8.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/SPRITES/MOON-SPRITEBAR.jpg",
    image_frames:
      "https://clarovideocdn4.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/SPRITES/MOON-00h-00m-00s-00f.jpg",
    image_trickplay:
      "https://clarovideocdn8.clarovideo.net/PELICULAS/MOON/EXPORTACION_WEB/SPRITES/MOON-TRICKPLAY.bif",
    image_external: null,
    duration: "01:37:14",
    date: "01/07/2021",
    year: "2009",
    preview: "false",
    season_number: null,
    episode_number: null,
    format_types: "susc",
    live_enabled: "0",
    live_type: null,
    live_ref: null,
    timeshift: null,
    votes_average: 4,
    rating_code: "R",
    proveedor_name: "AMCO",
    proveedor_code: "amco",
    encoder_tecnology: {
      id: null,
      desc: null,
    },
    recorder_technology: {
      id: null,
      desc: null,
    },
    resource_name: null,
    rollingcreditstime: null,
    rollingcreditstimedb: null,
    is_series: false,
    channel_number: null,
  },
  {
    id: "755521",
    title: "Spider-Man: de regreso a casa",
    title_episode: null,
    title_uri: "Spider-Man-de-regreso-a-casa",
    title_original: "Spider-Man: Homecoming",
    description:
      "Un joven, Peter Parker, comienza a navegar su nueva identidad como el superhéroe Spider Man.",
    description_large:
      "Luego de su experiencia con los Vengadores, Peter Parker regresa a casa, donde vive con su tía May bajo la atenta mirada de su mentor Tony Stark. Aunque intenta no recurrir a su identidad oculta, su tranquilidad es interrumpida por el Buitre.",
    short_description: null,
    image_large:
      "https://clarovideocdn7.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/SS/SPIDERMANHOMECOMINGWHORIZONTAL.jpg?size=675x380",
    image_medium:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/SS/SPIDERMANHOMECOMINGWVERTICAL.jpg?size=200x300",
    image_small:
      "https://clarovideocdn7.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/SS/SPIDERMANHOMECOMINGWHORIZONTAL.jpg?size=290x163",
    image_still:
      "https://clarovideocdn6.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/STILLS/SPIDERMANHOMECOMING-STILL-01.jpg",
    image_background:
      "https://clarovideocdn7.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/CLEAN/SPIDERMANHOMECOMING_e-1280x720.jpg",
    url_imagen_t1:
      "https://clarovideocdn8.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/CLEAN/SPIDERMANHOMECOMINGWVERTICAL.jpg?size=200x300",
    url_imagen_t2:
      "https://clarovideocdn0.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/CLEAN/SPIDERMANHOMECOMINGWHORIZONTAL.jpg?size=290x163",
    image_base_horizontal:
      "https://clarovideocdn4.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/SS/SPIDERMANHOMECOMINGWHORIZONTAL.jpg",
    image_base_vertical:
      "https://clarovideocdn2.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/SS/SPIDERMANHOMECOMINGWVERTICAL.jpg",
    image_base_square:
      "https://clarovideocdn2.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/SS/SPIDERMANHOMECOMINGWCUADRADO.jpg",
    image_clean_horizontal:
      "https://clarovideocdn7.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/CLEAN/SPIDERMANHOMECOMINGWHORIZONTAL.jpg",
    image_clean_vertical:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/CLEAN/SPIDERMANHOMECOMINGWVERTICAL.jpg",
    image_clean_square:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/CLEAN/SPIDERMANHOMECOMINGWCUADRADO.jpg",
    image_sprites:
      "https://clarovideocdn8.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/SPRITES/SPIDERMANHOMECOMING-SPRITEBAR.jpg",
    image_frames:
      "https://clarovideocdn4.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/SPRITES/SPIDERMANHOMECOMING-00h-00m-00s-00f.jpg",
    image_trickplay:
      "https://clarovideocdn8.clarovideo.net/PELICULAS/SPIDERMANHOMECOMING/EXPORTACION_WEB/SPRITES/SPIDERMANHOMECOMING-TRICKPLAY.bif",
    image_external: null,
    duration: "02:13:27",
    date: "15/03/2022",
    year: "2017",
    preview: "true",
    season_number: null,
    episode_number: null,
    format_types: "susc",
    live_enabled: "0",
    live_type: null,
    live_ref: null,
    timeshift: null,
    votes_average: 4,
    rating_code: "PG-13",
    proveedor_name: "AMCO",
    proveedor_code: "amco",
    encoder_tecnology: {
      id: null,
      desc: null,
    },
    recorder_technology: {
      id: null,
      desc: null,
    },
    resource_name: null,
    rollingcreditstime: null,
    rollingcreditstimedb: null,
    is_series: false,
    channel_number: null,
  },
  {
    id: "755316",
    title: "Ella es un monstruo",
    title_episode: null,
    title_uri: "Ella-es-un-monstruo",
    title_original: "Colossal",
    description:
      "Gloria debe descubrir por qué su insignificante existencia afecta el destino de la Tierra.",
    description_large:
      "Gloria descubre que está conectada con una gigantesca criatura que está destruyendo Seúl y deberá determinar por qué su aparentemente insignificante existencia tiene efectos tan colosales en el destino de la Tierra.",
    short_description: null,
    image_large:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/SS/COLOSSALWHORIZONTAL.jpg?size=675x380",
    image_medium:
      "https://clarovideocdn3.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/SS/COLOSSALWVERTICAL.jpg?size=200x300",
    image_small:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/SS/COLOSSALWHORIZONTAL.jpg?size=290x163",
    image_still:
      "https://clarovideocdn4.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/STILLS/COLOSSAL-STILL-01.jpg",
    image_background:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/CLEAN/COLOSSAL_e-1280x720.jpg",
    url_imagen_t1:
      "https://clarovideocdn6.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/CLEAN/COLOSSALWVERTICAL.jpg?size=200x300",
    url_imagen_t2:
      "https://clarovideocdn8.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/CLEAN/COLOSSALWHORIZONTAL.jpg?size=290x163",
    image_base_horizontal:
      "https://clarovideocdn2.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/SS/COLOSSALWHORIZONTAL.jpg",
    image_base_vertical:
      "https://clarovideocdn0.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/SS/COLOSSALWVERTICAL.jpg",
    image_base_square:
      "https://clarovideocdn0.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/SS/COLOSSALWCUADRADO.jpg",
    image_clean_horizontal:
      "https://clarovideocdn5.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/CLEAN/COLOSSALWHORIZONTAL.jpg",
    image_clean_vertical:
      "https://clarovideocdn3.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/CLEAN/COLOSSALWVERTICAL.jpg",
    image_clean_square:
      "https://clarovideocdn3.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/CLEAN/COLOSSALWCUADRADO.jpg",
    image_sprites:
      "https://clarovideocdn6.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/SPRITES/COLOSSAL-SPRITEBAR.jpg",
    image_frames:
      "https://clarovideocdn2.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/SPRITES/COLOSSAL-00h-00m-00s-00f.jpg",
    image_trickplay:
      "https://clarovideocdn6.clarovideo.net/PELICULAS/COLOSSAL/EXPORTACION_WEB/SPRITES/COLOSSAL-TRICKPLAY.bif",
    image_external: null,
    duration: "01:49:17",
    date: "30/10/2021",
    year: "2016",
    preview: "false",
    season_number: null,
    episode_number: null,
    format_types: "susc",
    live_enabled: "0",
    live_type: null,
    live_ref: null,
    timeshift: null,
    votes_average: 4,
    rating_code: "R",
    proveedor_name: "AMCO",
    proveedor_code: "amco",
    encoder_tecnology: {
      id: null,
      desc: null,
    },
    recorder_technology: {
      id: null,
      desc: null,
    },
    resource_name: null,
    rollingcreditstime: null,
    rollingcreditstimedb: null,
    is_series: false,
    channel_number: null,
  },
];

describe("Movies component tests", () => {
  it("Should render the images from movies", () => {
    render(<Movies movies={moviesMock} />, { wrapper: BrowserRouter });

    const movie1 = screen.getByAltText("Riddick");
    const movie2 = screen.getByAltText("Triangle");
    const movie3 = screen.getByAltText("La máquina del recuerdo");

    expect(movie1).toBeInTheDocument();
    expect(movie2).toBeInTheDocument();
    expect(movie3).toBeInTheDocument();
  });
});
