import { Text } from "@chakra-ui/react";
const currentYear: number = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer>
      <Text align="center"> Copyright &copy; {currentYear} </Text>
    </footer>
  );
};
