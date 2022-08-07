import { Box, Collapse, Container, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";

import SearchUser from "./components/SearchUser";
import Starred from "./components/Starred";
import useGithub from "./hooks/useGithub";

function App() {
  const { githubState } = useGithub();

  return (
    <Container px={"32"} minH={"100vh"} minW={"100vw"} display={"flex"} flexDirection={"column"} justifyContent={"center"} gap={"8"}>
      <SearchUser />

      <Collapse in={githubState.hasUser} animateOpacity>
        <Box>
          <Profile />
          <Tabs variant={"soft-rounded"} colorScheme={"blue"} mt={"8"}>
            <TabList>
              <Tab>Repositories</Tab>
              <Tab>Starred</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Repositories />
              </TabPanel>
              <TabPanel>
                <Starred />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Collapse>
    </Container>
  );
}

export default App;
