import { Button, FormControl, FormLabel, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import useGithub from "../hooks/useGithub";

const SearchUser = () => {
  const { getUserStats } = useGithub();
  const [username, setUsername] = useState("");

  const handleGetUserStats = (e) => {
    e.preventDefault();
    getUserStats(username);
    setUsername("");
  }

  return (
    <FormControl>
      <FormLabel>
        Digite o nome do usuário para buscar
      </FormLabel>
      <HStack spaccing={'4'}>
        <Input placeholder={"Username"} value={username} onChange={(e) => setUsername(e.target.value)} />
        <Button colorScheme={"blue"} onClick={handleGetUserStats}>Buscar</Button>
      </HStack>
    </FormControl>
  );
}

export default SearchUser;