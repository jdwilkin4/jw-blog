import { BlogAuthorProps } from "../types";
import { HStack, Image, Text } from "@chakra-ui/react";

export const BlogAuthor: React.FC<BlogAuthorProps> = ({ author, date }) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${author}`}
      />
      <Text fontWeight="medium">{author}</Text>
      <Text>—</Text>
      <Text>{date.toLocaleDateString()}</Text>
    </HStack>
  );
};
