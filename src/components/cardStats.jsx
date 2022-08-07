import { Box } from '@chakra-ui/react';

const CardStats = ({ bg = "gray.50", color = "black", children }) => {
  return (
    <Box p={"2"} bg={bg} color={color} boxShadow={"lg"} borderRadius={"4"}>
      {children}
    </Box>
  )
}

export default CardStats;