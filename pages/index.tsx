import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { BlogTags } from "../src/components/BlogTags";
import { BlogAuthor } from "../src/components/BlogAuthor";
import { FeaturedBlogPost } from "../src/components/FeaturedBlogPost";
import { featuredBlogs2023 } from "../src/featured-blogs";
import { Footer } from "../src/components/Footer";
import {
  Box,
  Center,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  Wrap,
  WrapItem,
  Container,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mozart to JavaScript: JW blog</title>
        <meta
          name="description"
          content="A personal blog site for Jessica Wilkins"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW={"7xl"} p="12">
        <Center flexDirection="column">
          <Heading as="h1">From Mozart to JavaScript</Heading>
        </Center>
        <FeaturedBlogPost {...featuredBlogs2023[0]} />

        <Heading as="h2" marginTop="5">
          Latest articles
        </Heading>
        <Divider marginTop="5" />
        <Wrap spacing="30px" marginTop="5">
          <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    transform="scale(1.0)"
                    src={
                      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </Link>
              </Box>
              <BlogTags tags={["Engineering", "Product"]} marginTop="3" />
              <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  Some blog title
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
              <BlogAuthor date={"2021-04-06T19:01:27Z"} />
            </Box>
          </WrapItem>
        </Wrap>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
