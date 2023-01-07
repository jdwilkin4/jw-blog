import { IBlogTags } from "../types";
import { HStack, Tag } from "@chakra-ui/react";

export const BlogTags: React.FC<IBlogTags> = ({ marginTop, tags }) => {
  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};
