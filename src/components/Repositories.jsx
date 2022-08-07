import { SimpleGrid, Text } from "@chakra-ui/react";
import useGithub from "../hooks/useGithub";
import CardElement from "./cardElement";

const Repositories = () => {
  const { githubState } = useGithub();

  if(githubState.repositories.length === 0) {
    return (
      <Text fontSize={"xl"}>
        Repositórios não encontrados
      </Text>
    )
  }

  return (
    <SimpleGrid columns={"4"} spacing={"4"}>
      {githubState.repositories.map((item) => (
        <CardElement
          key={item.id}
          name={item.name}
          fullname={item.full_name}
          visibility={item.visibility}
          description={item.description}
          language={item.language}
          linkToRepo={item.html_url}
        />
      ))}
    </SimpleGrid>
  )
}

export default Repositories;