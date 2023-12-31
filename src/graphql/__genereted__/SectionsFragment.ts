/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: SectionsFragment
// ====================================================

export interface SectionsFragment_newGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface SectionsFragment_newGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: SectionsFragment_newGames_highlight_background_data_attributes | null;
}

export interface SectionsFragment_newGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: SectionsFragment_newGames_highlight_background_data | null;
}

export interface SectionsFragment_newGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface SectionsFragment_newGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: SectionsFragment_newGames_highlight_floatImage_data_attributes | null;
}

export interface SectionsFragment_newGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: SectionsFragment_newGames_highlight_floatImage_data | null;
}

export interface SectionsFragment_newGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: SectionsFragment_newGames_highlight_background;
  floatImage: SectionsFragment_newGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface SectionsFragment_newGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: SectionsFragment_newGames_highlight | null;
}

export interface SectionsFragment_popularGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface SectionsFragment_popularGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: SectionsFragment_popularGames_highlight_background_data_attributes | null;
}

export interface SectionsFragment_popularGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: SectionsFragment_popularGames_highlight_background_data | null;
}

export interface SectionsFragment_popularGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface SectionsFragment_popularGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: SectionsFragment_popularGames_highlight_floatImage_data_attributes | null;
}

export interface SectionsFragment_popularGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: SectionsFragment_popularGames_highlight_floatImage_data | null;
}

export interface SectionsFragment_popularGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: SectionsFragment_popularGames_highlight_background;
  floatImage: SectionsFragment_popularGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface SectionsFragment_popularGames_games_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface SectionsFragment_popularGames_games_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: SectionsFragment_popularGames_games_data_attributes_cover_data_attributes | null;
}

export interface SectionsFragment_popularGames_games_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: SectionsFragment_popularGames_games_data_attributes_cover_data | null;
}

export interface SectionsFragment_popularGames_games_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface SectionsFragment_popularGames_games_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: SectionsFragment_popularGames_games_data_attributes_developers_data_attributes | null;
}

export interface SectionsFragment_popularGames_games_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: SectionsFragment_popularGames_games_data_attributes_developers_data[];
}

export interface SectionsFragment_popularGames_games_data_attributes {
  __typename: "Game";
  slug: string | null;
  name: string;
  price: number;
  cover: SectionsFragment_popularGames_games_data_attributes_cover | null;
  developers: SectionsFragment_popularGames_games_data_attributes_developers | null;
}

export interface SectionsFragment_popularGames_games_data {
  __typename: "GameEntity";
  attributes: SectionsFragment_popularGames_games_data_attributes | null;
}

export interface SectionsFragment_popularGames_games {
  __typename: "GameRelationResponseCollection";
  data: SectionsFragment_popularGames_games_data[];
}

export interface SectionsFragment_popularGames {
  __typename: "ComponentPagePopularGames";
  title: string | null;
  highlight: SectionsFragment_popularGames_highlight | null;
  games: SectionsFragment_popularGames_games | null;
}

export interface SectionsFragment_upcomingGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface SectionsFragment_upcomingGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: SectionsFragment_upcomingGames_highlight_background_data_attributes | null;
}

export interface SectionsFragment_upcomingGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: SectionsFragment_upcomingGames_highlight_background_data | null;
}

export interface SectionsFragment_upcomingGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface SectionsFragment_upcomingGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: SectionsFragment_upcomingGames_highlight_floatImage_data_attributes | null;
}

export interface SectionsFragment_upcomingGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: SectionsFragment_upcomingGames_highlight_floatImage_data | null;
}

export interface SectionsFragment_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: SectionsFragment_upcomingGames_highlight_background;
  floatImage: SectionsFragment_upcomingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface SectionsFragment_upcomingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: SectionsFragment_upcomingGames_highlight | null;
}

export interface SectionsFragment_freeGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface SectionsFragment_freeGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: SectionsFragment_freeGames_highlight_background_data_attributes | null;
}

export interface SectionsFragment_freeGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: SectionsFragment_freeGames_highlight_background_data | null;
}

export interface SectionsFragment_freeGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface SectionsFragment_freeGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: SectionsFragment_freeGames_highlight_floatImage_data_attributes | null;
}

export interface SectionsFragment_freeGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: SectionsFragment_freeGames_highlight_floatImage_data | null;
}

export interface SectionsFragment_freeGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: SectionsFragment_freeGames_highlight_background;
  floatImage: SectionsFragment_freeGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface SectionsFragment_freeGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: SectionsFragment_freeGames_highlight | null;
}

export interface SectionsFragment {
  __typename: "Home";
  newGames: SectionsFragment_newGames | null;
  popularGames: SectionsFragment_popularGames | null;
  upcomingGames: SectionsFragment_upcomingGames | null;
  freeGames: SectionsFragment_freeGames | null;
}
