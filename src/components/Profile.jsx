import { AspectRatio, Box, HStack, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import useGithub from "../hooks/useGithub";
import CardStats from './cardStats';

const Profile = () => {
  const { githubState } = useGithub();

  if(!githubState.hasUser) {
    return (
      <Text>Usuário não encontrado</Text>
    )
  }

  return (
    <HStack spacing={"8"}>
      <Box>
        <AspectRatio minW={"200px"} maxW={"200px"} ratio={1}>
          <Image
            src={githubState.user.avatar}
            alt={githubState.user.name}
            fallbackSrc='https://via.placeholder.com/200'
            objectFit={"cover"} borderRadius={"full"}
          />
        </AspectRatio>
      </Box>
      <Box>
        <HStack>
          <Text fontSize="2xl" fontWeight={"bold"}>{githubState.user.name}</Text>
          <Link href={`https://github.com/${githubState.user.login}`} isExternal>
            <Text fontSize="md" fontWeight={"thin"} color={"blue.500"}>@{githubState.user.login}</Text>
          </Link>
        </HStack>

        <Text fontSize="lg" mt={"2"}>{githubState.user.bio}</Text>

        { githubState.user.company && <Text><strong>Company:</strong> {githubState.user.company}</Text> }
        { githubState.user.location && <Text><strong>Location:</strong> {githubState.user.location}</Text>}
        { githubState.user.blog && <Text><strong>Website:</strong> {githubState.user.blog}</Text>}

        <SimpleGrid columns={"4"} mt={"2"} spacing={"4"}>
          <CardStats>
            <Text><strong>Followers:</strong></Text>
            <Text>{githubState.user.followers}</Text>
          </CardStats>
          <CardStats>
            <Text><strong>Following:</strong></Text>
            <Text>{githubState.user.following}</Text>
          </CardStats>
          <CardStats>
            <Text><strong>Public Repos:</strong></Text>
            <Text>{githubState.user.public_repos}</Text>
          </CardStats>
          <CardStats>
            <Text><strong>Public Gists:</strong></Text>
            <Text>{githubState.user.public_gists}</Text>
          </CardStats>
        </SimpleGrid>
      </Box>
    </HStack>
  )
}

export default Profile;