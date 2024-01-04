/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GameFiltersInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryGames
// ====================================================

export interface QueryGames_games_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryGames_games_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryGames_games_data_attributes_cover_data_attributes | null;
}

export interface QueryGames_games_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryGames_games_data_attributes_cover_data | null;
}

export interface QueryGames_games_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface QueryGames_games_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: QueryGames_games_data_attributes_developers_data_attributes | null;
}

export interface QueryGames_games_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: QueryGames_games_data_attributes_developers_data[];
}

export interface QueryGames_games_data_attributes_platforms_data_attributes {
  __typename: "Platform";
  name: string;
}

export interface QueryGames_games_data_attributes_platforms_data {
  __typename: "PlatformEntity";
  attributes: QueryGames_games_data_attributes_platforms_data_attributes | null;
}

export interface QueryGames_games_data_attributes_platforms {
  __typename: "PlatformRelationResponseCollection";
  data: QueryGames_games_data_attributes_platforms_data[];
}

export interface QueryGames_games_data_attributes_categories_data_attributes {
  __typename: "Category";
  name: string;
}

export interface QueryGames_games_data_attributes_categories_data {
  __typename: "CategoryEntity";
  attributes: QueryGames_games_data_attributes_categories_data_attributes | null;
}

export interface QueryGames_games_data_attributes_categories {
  __typename: "CategoryRelationResponseCollection";
  data: QueryGames_games_data_attributes_categories_data[];
}

export interface QueryGames_games_data_attributes {
  __typename: "Game";
  slug: string | null;
  name: string;
  price: number;
  cover: QueryGames_games_data_attributes_cover | null;
  developers: QueryGames_games_data_attributes_developers | null;
  platforms: QueryGames_games_data_attributes_platforms | null;
  categories: QueryGames_games_data_attributes_categories | null;
}

export interface QueryGames_games_data {
  __typename: "GameEntity";
  attributes: QueryGames_games_data_attributes | null;
}

export interface QueryGames_games {
  __typename: "GameEntityResponseCollection";
  data: QueryGames_games_data[];
}

export interface QueryGames {
  games: QueryGames_games | null;
}

export interface QueryGamesVariables {
  start?: number | null;
  limit: number;
  filters?: GameFiltersInput | null;
  sort?: (string | null)[] | null;
}
