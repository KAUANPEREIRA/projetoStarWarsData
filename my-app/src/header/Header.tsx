import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Box bg="#000000" h="100px">
      <Box w="1280px" margin="auto" display="flex" justifyContent="space-between" >
        <Text color="#ffffff" fontSize="30px" mt="20px">
          Star Wars universe
        </Text>
        <Box mt="20px">
          <Input placeholder="buscar" color="gray" bg="#ffffff"/>
        </Box>
      </Box>
    </Box>
  );
};
