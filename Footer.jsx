import { Divider, Box, Icon, Link } from "@chakra-ui/react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

import { IoLogoTiktok } from "react-icons/io5";
export const Footer = () => {
  return (
    <>
      <Divider mt={20} borderColor="gray.100" />

      <Box textAlign="center" fontSize="4xl" mt={4}>
        <Link href="mailto:stemingup@gmail.com" isExternal mr={5}>
          <Icon
            as={AiOutlineMail}
            color="#ffffff"
            transition="all 0.2s"
            _hover={{
              color: "#ffffff",
            }}
          />
        </Link>

        <Link href="https://www.instagram.com/her_volution/" isExternal>
          <Icon
            as={AiOutlineInstagram}
            color="#ffffff"
            transition="all 0.2s"
            _hover={{
              color: "#ffffff",
            }}
          />
        </Link>

        
      </Box>
    </>
  );
};
