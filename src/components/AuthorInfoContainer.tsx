import { AUTHOR_PROFILE_URL } from "../../constants";
import { Image, Flex, Link, Text, Center } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HomeLink } from "./HomeLink";

type Props = {
  wordCount: number;
  date: string;
};

export const AuthorInfoContainer = ({ wordCount, date }: Props) => {
  return (
    <Flex
      flexDirection={{ sm: "column", md: "row" }}
      mt={8}
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Image
        display={{ sm: "none", md: "block" }}
        boxSize="80px"
        borderRadius="full"
        src={AUTHOR_PROFILE_URL}
        alt="Jessica Wilkins profile image"
      />
      <Link href="https://jessicawilkins.dev/" isExternal>
        Jessica Wilkins <ExternalLinkIcon mx="2px" />
      </Link>
      <Text>{date}</Text>
      <Text>{wordCount} min read</Text>
      <Center mt={4}>
        <HomeLink />
      </Center>
    </Flex>
  );
};
