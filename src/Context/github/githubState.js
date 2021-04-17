import React, { useReducer } from 'react';
import {
  SET_LOADING,
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
} from '../types';

import { GithubContext } from './githubContext';

import { GithubReducer } from './githubReducer';

import axios from 'axios';

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const withCreds = url => {
  return `${url}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
}

export const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  const search = async (value) => {
    setLoading();

    const resonse = await axios.get(
      withCreds(`https://api.github.com/search/users?q=${value}&`)
    );

    dispatch({
      type: SEARCH_USERS,
      payload: resonse.data.items,
    });
  };

  const getUsers = async (name) => {
    setLoading();

    const response = await axios.get(
      withCreds(
        `https://api.github.com/users/${name}?`
      )
    );

    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  };

  const getRepos = async (name) => {
    setLoading();

    const response = await axios.get(
      withCreds(
        `https://api.github.com/repos/${name}/repos?per_page=5&`
      )
    )

    dispatch({
      type: GET_REPOS,
      payload: response.data,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  const { user, users, repos, loading } = state;

  return (
    <GithubContext.Provider
      value={{
        search,
        setLoading,
        getUsers,
        getRepos,
        clearUsers,
        user,
        users,
        repos,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
