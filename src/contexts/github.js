import { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

export const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      bio: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_repos: 0,
      public_gists: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = async (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: true
    }));

    await api.get(`/users/${username}`)
      .then(async ({data}) => {
        await setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            html_url: data.html_url,
            bio: data.bio,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_repos: data.public_repos,
            public_gists: data.public_gists,
          }
        }));
      }).finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: false
        }));
      });
  }

  const getRepositories = async (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: true
    }));

    await api.get(`/users/${username}/repos`)
      .then(async ({ data }) => {
        await setGithubState((prevState) => ({
          ...prevState,
          repositories: data
        }));
      }).finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: false
        }));
      });
  }

  const getStarred = async (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: true
    }));

    await api.get(`/users/${username}/starred`)
      .then(async ({ data }) => {
        await setGithubState((prevState) => ({
          ...prevState,
          starred: data
        }));
      }).finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: false
        }));
      });
  }

  const getUserStats = async (username) => {
    await getUser(username);
    await getRepositories(username);
    await getStarred(username);
  }

  const contextValue = {
    githubState,
    getUser,
    getRepositories,
    getStarred,
    getUserStats,
    // getUser: useCallback((username) => getUser(username), [getUser]),
    // getRepositories: useCallback((username) => getRepositories(username), [getRepositories]),
    // getStarred: useCallback((username) => getStarred(username), [getStarred]),
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
}

