import { useContext } from "react";
import { GithubContext } from "../contexts/github";

const useGithub = () => {
  const {
    githubState,
    getUser,
    getRepositories,
    getStarred,
    getUserStats,
  } = useContext(GithubContext);

  return {
    githubState,
    getUser,
    getRepositories,
    getStarred,
    getUserStats,
  };
}

export default useGithub;