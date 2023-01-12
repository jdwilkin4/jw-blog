import { Heading, Center } from "@chakra-ui/react";
import { AuthorInfoContainer } from "./AuthorInfoContainer";
import { BlogHeadingProps } from "../../types";

export const BlogPostHeader = ({
  heading,
  wordCount,
  date,
}: BlogHeadingProps) => {
  return (
    <div>
      <Center mt={4}>
        <Heading>{heading}</Heading>
      </Center>
      <AuthorInfoContainer date={date} wordCount={wordCount} />
    </div>
  );
};
