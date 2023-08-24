import {
  Box,
  Center,
  HStack,
  Stack,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { NavLink } from "./components/NavBar/NavLink";
import { NavList } from "./components/NavBar/NavList";
import { NavListItem } from "./components/NavBar/NavListItem";

const links = [
  {
    label: "Cities For Youth",
    href: "/",
  },
  {
    label: "Workshops",
    href: "/workshops",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Our Team",
    href: "/ourTeam",
  },
  {
    label: "FAQ",
    href: "/faq",
  }
];


const MobileNavContent = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box {...props}>
      <Center as="button" p="2" fontSize="2xl" onClick={onToggle} color="white">
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </Center>
      <NavList
        pos="absolute"
        insetX="0"
        bg="#3B005A"
        top="64px"
        animate={isOpen ? "enter" : "exit"}
      >
        <Stack spacing="0" divider={<StackDivider borderColor="white" />}>
          {links.map((link, index) => (
            <NavListItem key={index}>
              <NavLink.Mobile href={link.href}>{link.label}</NavLink.Mobile>
            </NavListItem>
          ))}
          <NavListItem
            style={{
              flex: "1",
            }}
          ></NavListItem>
        </Stack>
      </NavList>
    </Box>
  );
};

const DesktopNavContent = (props) => {
  return (
    <HStack margin="auto" spacing="60px" {...props}>
      {links.map((link, index) => (
        <NavLink.Desktop
          key={index}
          href={link.href}
          fontSize="xl"
          fontWeight="bold"
          _hover={{ color: "gray.500" }}
        >
          {link.label}
        </NavLink.Desktop>
      ))}
    </HStack>
  );
};

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
};
