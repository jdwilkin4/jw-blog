import { SpaceProps } from "@chakra-ui/react";
import { tagsArr } from "./src/tags";

export type Tags = typeof tagsArr[number];

export interface BlogHeadingProps {
  heading: string;
}

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
