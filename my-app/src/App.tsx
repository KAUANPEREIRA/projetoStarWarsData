import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
} from "@chakra-ui/react"
import { Header } from "./header/Header"



export const App = () => (
  <ChakraProvider theme={theme}>
    <Header/>
  
  </ChakraProvider>
)
