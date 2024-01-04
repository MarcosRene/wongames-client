/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GameFragment
// ====================================================

export interface GameFragment_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GameFragment_cover_data {
  __typename: "UploadFileEntity";
  attributes: GameFragment_cover_data_attributes | null;
}

export interface GameFragment_cover {
  __typename: "UploadFileEntityResponse";
  data: GameFragment_cover_data | null;
}

export interface GameFragment_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface GameFragment_developers_data {
  __typename: "DeveloperEntity";
  attributes: GameFragment_developers_data_attributes | null;
}

export interface GameFragment_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: GameFragment_developers_data[];
}

export interface GameFragment_platforms_data_attributes {
  __typename: "Platform";
  name: string;
}

export interface GameFragment_platforms_data {
  __typename: "PlatformEntity";
  attributes: GameFragment_platforms_data_attributes | null;
}

export interface GameFragment_platforms {
  __typename: "PlatformRelationResponseCollection";
  data: GameFragment_platforms_data[];
}

export interface GameFragment_categories_data_attributes {
  __typename: "Category";
  name: string;
}

export interface GameFragment_categories_data {
  __typename: "CategoryEntity";
  attributes: GameFragment_categories_data_attributes | null;
}

export interface GameFragment_categories {
  __typename: "CategoryRelationResponseCollection";
  data: GameFragment_categories_data[];
}

export interface GameFragment {
  __typename: "Game";
  slug: string | null;
  name: string;
  price: number;
  cover: GameFragment_cover | null;
  developers: GameFragment_developers | null;
  platforms: GameFragment_platforms | null;
  categories: GameFragment_categories | null;
}
