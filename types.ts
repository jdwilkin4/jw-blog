import { SpaceProps } from "@chakra-ui/react";

export interface FeaturedBlogs {
  imageId: string;
  altText: string;
  title: string;
  description: string;
  articleDate: string;
  tags: Array<string>;
  link: string;
}

export interface IBlogTags {
  tags: String[];
  marginTop?: SpaceProps["marginTop"];
}

export interface BlogAuthorProps {
  date: string;
}
