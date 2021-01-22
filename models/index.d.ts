import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Image {
  readonly id: string;
  readonly url: string;
  readonly altText?: string;
  readonly designID: string;
  constructor(init: ModelInit<Image>);
  static copyOf(source: Image, mutator: (draft: MutableModel<Image>) => MutableModel<Image> | void): Image;
}

export declare class Comment {
  readonly id: string;
  readonly text: string;
  readonly comment_timestamp: number;
  readonly Author: Author;
  readonly designID: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

export declare class Author {
  readonly id: string;
  readonly name: string;
  readonly email?: string;
  constructor(init: ModelInit<Author>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}

export declare class Design {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly release_date: number;
  readonly tags?: string;
  readonly Author: Author;
  readonly Comments?: (Comment | null)[];
  readonly summary?: string;
  readonly Images?: (Image | null)[];
  constructor(init: ModelInit<Design>);
  static copyOf(source: Design, mutator: (draft: MutableModel<Design>) => MutableModel<Design> | void): Design;
}