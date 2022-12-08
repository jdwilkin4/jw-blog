import { BlogAuthorProps } from "../../types";
import { HStack, Image, Text } from "@chakra-ui/react";
import { AUTHOR_PROFILE_URL } from "../../constants";

export const BlogAuthor: React.FC<BlogAuthorProps> = ({ date }) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={AUTHOR_PROFILE_URL}
        alt="Jessica Wilkins profile"
      />
      <Text fontWeight="medium">Jessica Wilkins</Text>
      <Text>—</Text>
      <Text>{date}</Text>
    </HStack>
  );
};
