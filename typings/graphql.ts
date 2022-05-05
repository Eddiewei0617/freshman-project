export type Maybe<T> = T | null;

export type TYPE_CATEGORY = {
  __typename: string;
  name: string;
  parent_no: string;
};

export type TYPE_ARTICLE = {
  __typename: string;
  id: number;
  no: string;
  pv: number;
  title: string;
  cover?: string;
  publish_date?: string;
  photos: Array<Maybe<Photos>>;
  content: string;
  tags: Array<Maybe<Tags>>;
};

export type Photos = {
  __typename: string;
  url?: string;
  urlPath?: string;
};

export type Tags = {
  __typename: string;
  name: string;
};

export type TYPE_CURATIONS = {
  __typename: string;
  no: string;
  title: string;
  cover: string;
  publish_date: string;
  curations?: any;
};

export type TYPE_CURATION = {
  __typename: string;
  no: string;
  title: string;
  image_path: string;
  main_image_path?: string;
  content_image_path?;
  desp: string;
  article: Array<TYPE_ARTICLE>;
  curation?: any;
};
