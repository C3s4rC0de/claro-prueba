import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import useGetMovieDetail from "../../hooks/useGetMovieDetail";
import { MovieDetailType } from "../../types/MovieDetailType";
import Movie from "./index";

jest.mock("../../hooks/useGetMovieDetail");

export const movieMock: MovieDetailType = {
  position: 0,
  id: "966926",
  title: "Riddick",
  description:
    "Dado por muerto en un lejano planeta, el duro Riddick tendrá que luchar por la supervivencia.",
  large_description:
    "Traicionado por su propia especie y dado por muerto en un lejano y desolado planeta habitado solo por animales salvajes, el duro Riddick tendrá que luchar por la supervivencia y enfrentarse con nuevos desafíos en soledad.",
  short_description: null,
  duration: "01:58:45",
  image_large_alt: "Riddick",
  image_medium_alt: "Riddick",
  image_small_alt: "Riddick",
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
  image_external: null,
  image_trickplay:
    "https://clarovideocdn4.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/SPRITES/RIDDICK-TRICKPLAY.bif",
  date: "04/12/2021",
  media_type: "2",
  title_uri: "Riddick",
  extendedcommon: {
    keywords: {
      keyword: ["5421", "5461", "5520"],
    },
    genres: {
      genre: [
        {
          id: "51131",
          name: "Action",
          desc: "Acción",
        },
        {
          id: "51162",
          name: "Thriller",
          desc: "Thriller",
        },
        {
          id: "51220",
          name: "Sci-Fi",
          desc: "Ciencia ficción",
        },
      ],
    },
    roles: {
      role: [
        {
          id: "13617516",
          name: "Actor",
          desc: "Actor",
          talents: {
            talent: [
              {
                id: "13652865",
                name: "Vin",
                surname: "Diesel",
                fullname: "Diesel, Vin",
              },
              {
                id: "13657617",
                name: "Karl",
                surname: "Urban",
                fullname: "Urban, Karl",
              },
            ],
          },
        },
        {
          id: "13617517",
          name: "Director",
          desc: "Director",
          talents: {
            talent: [
              {
                id: "13646385",
                name: "David",
                surname: "Twohy",
                fullname: "Twohy, David",
              },
            ],
          },
        },
        {
          id: "13965645",
          name: "Producer",
          desc: "Productor",
          talents: {
            talent: [
              {
                id: "138675124",
                name: "Samantha",
                surname: "Vincent",
                fullname: "Vincent, Samantha",
              },
              {
                id: "13652865",
                name: "Vin",
                surname: "Diesel",
                fullname: "Diesel, Vin",
              },
              {
                id: "138669850",
                name: "Ted",
                surname: "Field",
                fullname: "Field, Ted",
              },
            ],
          },
        },
      ],
    },
    format: {
      id: "42223249",
      name: "Type 6",
      types: "susc",
      sell_type: "susc",
      est: "N",
    },
    media: {
      originaltitle: "Riddick",
      description_extended:
        "Traicionado por su propia especie y dado por muerto en un lejano y desolado planeta habitado solo por animales salvajes, el duro Riddick tendrá que luchar por la supervivencia y enfrentarse con nuevos desafíos en soledad.",
      publishyear: "2013",
      boxoffice: "0.0",
      rating: {
        id: "40",
        code: "R",
        desc: "Puede contener escenas no aptas para adolescentes",
      },
      duration: "01:58:45",
      haspreview: false,
      countryoforigin: {
        code: "US",
        desc: "Estados Unidos",
      },
      profile: {
        audiotype: "MA 01 SCH",
        videotype: "Color",
        screenformat: "16:9",
        hd: {
          enabled: "true",
          detail: "720p",
        },
      },
      islive: "0",
      livetype: null,
      liveref: null,
      timeshift: null,
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: "-240",
      rollingcreditstimedb: "-240",
      proveedor: {
        id: "1",
        codigo: "amco",
        nombre: "AMCO",
      },
      rights: {
        start_date: "2022-01-17",
        end_date: "2024-01-16",
      },
      channel_number: null,
      language: {
        original: {
          id: "ING",
          desc: "Inglés",
        },
        dubbed: true,
        subbed: true,
        options: {
          option: [
            {
              group_id: "966926",
              content_id: "1072042",
              current_content: "false",
              option_id: "D-ES",
              audio: "ES",
              subtitle: null,
              option_name: "dubbed",
              id: "ES",
              desc: "Español",
              label_short: "Dob. Español",
              label_large: "Doblada al Español",
              intro_start_time: null,
              intro_finish_time: null,
              credits_start_time: "-240",
              encodes: [
                "hls",
                "hlsfps",
                "hls_ma",
                "hlsfps_ma",
                "hlsprm",
                "smooth_streaming",
                "smooth_streaming_ma",
                "dashpr",
                "dashwv",
                "dashwv_ma",
                "dashpr_ma",
              ],
              fast_play: [],
            },
            {
              group_id: "966926",
              content_id: "1075831",
              current_content: "false",
              option_id: "O-EN",
              audio: "ORIGINAL",
              subtitle: null,
              option_name: "original",
              id: "EN",
              desc: "Inglés",
              label_short: "Id. Inglés",
              label_large: "Idioma Original",
              intro_start_time: null,
              intro_finish_time: null,
              credits_start_time: "-240",
              encodes: [
                "hls",
                "hlsfps",
                "hls_ma",
                "hlsfps_ma",
                "hlsprm",
                "smooth_streaming",
                "smooth_streaming_ma",
                "dashpr",
                "dashwv",
                "dashwv_ma",
                "dashpr_ma",
              ],
              fast_play: [],
            },
            {
              group_id: "966926",
              content_id: "1086897",
              current_content: "false",
              option_id: "S-ES",
              audio: "ORIGINAL",
              subtitle: "ES",
              option_name: "subbed",
              id: "ES",
              desc: "Español",
              label_short: "Subt. Español",
              label_large: "Subtitulada al Español",
              intro_start_time: null,
              intro_finish_time: null,
              credits_start_time: "-240",
              encodes: [
                "hls",
                "hlsfps",
                "hls_ma",
                "hlsfps_ma",
                "hlsprm",
                "smooth_streaming",
                "smooth_streaming_ma",
                "dashpr",
                "dashwv",
                "dashwv_ma",
                "dashpr_ma",
              ],
              fast_play: [],
            },
            {
              group_id: "966926",
              content_id: "1089754",
              current_content: "false",
              option_id: "D-PT",
              audio: "PT",
              subtitle: null,
              option_name: "dubbed",
              id: "PT",
              desc: "Portugués",
              label_short: "Dob. Portugués",
              label_large: "Doblada al Portugués",
              intro_start_time: null,
              intro_finish_time: null,
              credits_start_time: "-240",
              encodes: [
                "hls",
                "hlsfps",
                "hls_ma",
                "hlsfps_ma",
                "hlsprm",
                "smooth_streaming",
                "smooth_streaming_ma",
                "dashpr",
                "dashwv",
                "dashwv_ma",
                "dashpr_ma",
              ],
              fast_play: [],
            },
            {
              group_id: "966926",
              content_id: "1093743",
              current_content: "false",
              option_id: "S-PT",
              audio: "ORIGINAL",
              subtitle: "PT",
              option_name: "subbed",
              id: "PT",
              desc: "Portugués",
              label_short: "Subt. Portugués",
              label_large: "Subtitulada al Portugués",
              intro_start_time: null,
              intro_finish_time: null,
              credits_start_time: "-240",
              encodes: [
                "hls",
                "hlsfps",
                "hls_ma",
                "hlsfps_ma",
                "hlsprm",
                "smooth_streaming",
                "smooth_streaming_ma",
                "dashpr",
                "dashwv",
                "dashwv_ma",
                "dashpr_ma",
              ],
              fast_play: [],
            },
          ],
          count: 5,
        },
      },
    },
  },
  ranking: {
    views_count: 0,
    votes_count: 32,
    average_votes: 4,
  },
};

describe("Movie component tests", () => {
  it("Should render the movie info", () => {
    (useGetMovieDetail as jest.Mock).mockReturnValue({
      loading: false,
      movie: movieMock,
      getMovie: () => {},
    });

    render(<Movie />, { wrapper: BrowserRouter });

    const movieTitle = screen.getAllByText("Riddick");
    const genre: HTMLInputElement = screen.getByText(/acción/i);
    const year: HTMLInputElement = screen.getByText("2013");
    expect(movieTitle[0]).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
    expect(year).toBeInTheDocument();
  });

  it("Should render image", () => {
    (useGetMovieDetail as jest.Mock).mockReturnValue({
      loading: false,
      movie: movieMock,
      getMovie: () => {},
    });

    render(<Movie />, { wrapper: BrowserRouter });

    const movieCapture = screen.getByAltText("captura-pelicula");
    expect(movieCapture).toBeInTheDocument();
  });
});
