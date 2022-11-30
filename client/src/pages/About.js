import React from "react";
import Filter from "./Filter";
import { Select, Box, ChakraProvider } from "@chakra-ui/react";

export const About = () => {
  //about us page content
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt,
        nisl eget aliquam tincidunt, nisl nisl aliquam nisl, et aliquam nisl
        nisl sit amet nisl. Sed tincidunt, nisl eget aliquam tincidunt, nisl
        nisl aliquam nisl, et aliquam nisl nisl sit amet nisl.
      </p>
      <img src="../owner/DSC_2818.jpg" alt="owner" />
      <img src="../owner/DSC_2823.jpg" alt="owner" />
    </div>
  );
};
