import { SpaceProps } from "@chakra-ui/react";
import { tagsArr } from "./tags";

export type Tags = typeof tagsArr[number];

export interface FeaturedBlogs {
  imageId: string;
  altText: string;
  title: string;
  description: string;
  articleDate: string;
  tags: Tags[];
  link: string;
}

export interface IBlogTags {
  tags: String[];
  marginTop?: SpaceProps["marginTop"];
}

export interface BlogAuthorProps {
  date: string;
}
