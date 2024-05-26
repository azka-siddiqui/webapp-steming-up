import {
  HStack
} from "@chakra-ui/react";
import * as React from "react";
import { DesktopNavLink } from "./NavLink";

const links = [
  {
    label: "EcoScan",
    href: "/",
  },
  {
    label: "Sample Species",
    href: "/workshops",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Sponsors",
    href: "/ourSponsors",
  },
  {
    label: "FAQ",
    href: "/faq",
  }
];

export const DesktopNavContent = (props) => {
  return (
    <HStack margin="auto" spacing="60px" {...props}>
      {links.map((link, index) => (
        <DesktopNavLink
          key={index}
          href={link.href}
          fontSize="xl"
          fontWeight="bold"
          _hover={{ color: "gray.500" }}
        >
          {link.label}
        </DesktopNavLink>
      ))}
    </HStack>
  );
};
