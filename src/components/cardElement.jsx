import { Box, Link, Flex, HStack, Text, Spacer, Badge, VStack } from "@chakra-ui/react";

const CardElement = ({ name, fullname, visibility, description, language, linkToRepo, bg = "gray.50", color = "black" }) => {
  return (
    <Box bg={bg} color={color} p={"2"}>
      <Box minH={"150px"} maxH={"200px"}>
        <HStack>
          <Link href={linkToRepo} isExternal>
            <Text fontWeigth={"bold"}>{name}</Text>
          </Link>
          <Spacer />
          <Badge variant={"outline"} p={"2"} borderRadius={"2"}>{visibility}</Badge>
        </HStack>
        <Link href={linkToRepo} isExternal>
          <Text fontSize={"sm"} mb={"2"}>{fullname}</Text>
        </Link>
        <Text mb={"2"}>{description}</Text>
      </Box>
      <Box>
        <Text fontSize={"sm"}>Language: {language}</Text>
      </Box>
    </Box>
  )
}

export default CardElement;