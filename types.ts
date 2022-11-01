import { SpaceProps } from "@chakra-ui/react";

export interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

export interface BlogAuthorProps {
  date: Date;
  author: string;
}
