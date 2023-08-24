import { Box, Flex, Text, Img } from "@chakra-ui/react";
import * as React from "react";
import { DesktopNavContent } from "./NavContent";

export const NavBar = ({ bg }) => (
  <Box
    bg={bg ? bg : "black"}
    color="white"
    pt="1"
    position="sticky"
    top="0"
    zIndex="100"
    width="100%"
  >
    <Box as="header" height="16" position="relative" color="white">
      <Box
        height="100%"
        px={{
          base: "8",
          md: "8",
        }}
        pe={{
          base: "8",
          md: "8",
        }}
      >
        <Flex
          as="nav"
          aria-label="Site navigation"
          align="center"
          justify="space-between"
          height="100%"
        >
          
          <Box alignItems="center" d="flex">
            <Img
              src="/Layer_1.png"
              h="9"
              display="inline"
              mr="3"
              alignSelf="center"
            />
            <Text
              as="h1"
              fontSize="xl"
              fontWeight="extrabold"
              maxW="48rem"
              display="inline"
            >
              OurCity
            </Text>
          </Box>

          <DesktopNavContent
            display={{
              base: "none",
              md: "flex",
            }}
          />
        </Flex>
      </Box>
    </Box>
  </Box>
);
