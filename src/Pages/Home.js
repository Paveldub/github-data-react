import React, { useContext } from 'react';
import { Search } from '../Components/Search';
import { Card } from '../Components/Card';
import { GithubContext } from '../Context/github/githubContext';
import { Preloader } from '../Components/Preloader';
import { Popup } from '../Components/popup';

export const Home = () => {
  const {loading, users} = useContext(GithubContext)

  return (
    <>
      <h1>Home Page</h1>
      <Search />
      <Popup />
      <div className="row">
        {loading ? (
          <Preloader />
        ) : (
          users.map((user) => {
            return (
              <div className="col-sm-4 mb-4" key={user.id}>
                <Card user={user} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
