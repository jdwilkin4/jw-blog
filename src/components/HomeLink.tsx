import { Link, Box } from "@chakra-ui/react";
export const HomeLink = () => {
  return (
    <Box borderRadius="md" color="white" p={2} bg="orange.500">
      <Link href="/">Return Home</Link>
    </Box>
  );
};
