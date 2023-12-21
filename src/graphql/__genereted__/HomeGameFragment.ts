/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: HomeGameFragment
// ====================================================

export interface HomeGameFragment_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface HomeGameFragment_cover_data {
  __typename: "UploadFileEntity";
  attributes: HomeGameFragment_cover_data_attributes | null;
}

export interface HomeGameFragment_cover {
  __typename: "UploadFileEntityResponse";
  data: HomeGameFragment_cover_data | null;
}

export interface HomeGameFragment_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface HomeGameFragment_developers_data {
  __typename: "DeveloperEntity";
  attributes: HomeGameFragment_developers_data_attributes | null;
}

export interface HomeGameFragment_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: HomeGameFragment_developers_data[];
}

export interface HomeGameFragment {
  __typename: "Game";
  slug: string | null;
  name: string;
  price: number;
  cover: HomeGameFragment_cover | null;
  developers: HomeGameFragment_developers | null;
}
