import { Heading, Center } from "@chakra-ui/react";
import { HomeLink } from "./HomeLink";
import { BlogHeadingProps } from "../../types";

export const BlogPostHeader = ({ heading }: BlogHeadingProps) => {
  return (
    <>
      <Center mt={4}>
        <Heading>{heading}</Heading>
      </Center>
      <Center mt={4}>
        <HomeLink />
      </Center>
    </>
  );
};
