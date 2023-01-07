import {
  Box,
  Link,
  Image,
  useColorModeValue,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BlogTags } from "./BlogTags";
import { BlogAuthor } from "./BlogAuthor";
import { UNSPLASH_URL } from "../constants";
import { FeaturedBlogs } from "../types";

export const FeaturedBlogPost = ({
  imageId,
  altText,
  title,
  description,
  tags,
  articleDate,
  link,
}: FeaturedBlogs) => {
  return (
    <Box
      marginTop={{ base: "1", sm: "5" }}
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center"
      >
        <Box
          width={{ base: "100%", sm: "85%" }}
          zIndex="2"
          marginLeft={{ base: "0", sm: "5%" }}
          marginTop="5%"
        >
          <Image
            borderRadius="lg"
            src={`${UNSPLASH_URL}${imageId}`}
            alt={altText}
            objectFit="contain"
          />
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              "radial(orange.600 1px, transparent 1px)",
              "radial(orange.300 1px, transparent 1px)"
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
      >
        <BlogTags tags={tags} />
        <Heading marginTop="1">
          <Link
            href={link}
            textDecoration="none"
            _hover={{ textDecoration: "underline" }}
          >
            {title}
          </Link>
        </Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue("gray.700", "gray.200")}
          fontSize="lg"
        >
          {description}
        </Text>
        <BlogAuthor date={articleDate} />
      </Box>
    </Box>
  );
};
