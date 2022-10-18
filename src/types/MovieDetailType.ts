import { GenreType } from "./GenreType";
import { TalentType } from "./TalentType";

export type MovieDetailType = {
  position: number;
  id: string;
  title: string;
  description: string;
  large_description: string;
  short_description: string | null;
  duration: string;
  image_large_alt: string;
  image_medium_alt: string;
  image_small_alt: string;
  image_large: string;
  image_medium: string;
  image_small: string;
  image_still: string;
  image_background: string;
  image_base_horizontal: string;
  image_base_vertical: string;
  image_base_square: string;
  image_clean_horizontal: string;
  image_clean_vertical: string;
  image_clean_square: string;
  image_sprites: string;
  image_frames: string;
  image_external: null;
  image_trickplay: string;
  date: string;
  media_type: string;
  title_uri: string;
  extendedcommon: {
    keywords: {
      keyword: string[];
    };
    genres: {
      genre: GenreType[];
    };
    roles: {
      role: {
        id: string;
        name: string;
        desc: string;
        talents: {
          talent: TalentType[];
        };
      }[];
    };
    format: any;
    media: {
      originaltitle: string;
      description_extended: string;
      publishyear: string;
      boxoffice: string;
      rating: {
        id: string;
        code: string;
        desc: string;
      };
      duration: string;
      haspreview: boolean | null;
      countryoforigin: {
        code: string;
        desc: string;
      };
      profile: any;
      islive: string | null;
      livetype: string | null;
      liveref: string | null;
      timeshift: string | null;
      encoder_tecnology: {
        id: string | null;
        desc: string | null;
      };
      recorder_technology: {
        id: string | null;
        desc: string | null;
      };
      resource_name: string | null;
      rollingcreditstime: string | null;
      rollingcreditstimedb: string | null;
      proveedor: {
        id: string | null;
        codigo: string | null;
        nombre: string | null;
      };
      rights: {
        start_date: string | null;
        end_date: string | null;
      };
      channel_number: null;
      language: {
        original: {
          id: string | null;
          desc: string | null;
        };
        dubbed: boolean;
        subbed: boolean;
        options: {
          option: any[];
          count: number;
        };
      };
    };
  };
  ranking: {
    views_count: number;
    votes_count: number;
    average_votes: number;
  };
};
