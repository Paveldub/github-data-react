import React, { useContext, useEffect } from 'react';
import { Preloader } from '../Components/Preloader';
import { GithubContext } from '../Context/github/githubContext';
import { Link } from 'react-router-dom';
import { Repos } from '../Components/Repos';

export const Profile = ({ match }) => {
  const { getUsers, getRepos, loading, user, repos } = useContext(
    GithubContext
  );

  const urlName = match.params.name;

  useEffect(() => {
    getUsers(urlName);
    getRepos(urlName);
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    following,
    followers,
    public_repos,
    public_gists,
  } = user;

  if (loading) {
    <Preloader />;
  }

  return (
    <>
      <Link to="/" className="btn btn-link">
        На Главную
      </Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{ width: '150px' }} />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
              <div className="col">
                {bio && (
                  <>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </>
                )}
                <a href={html_url} className="btn btn-dark" target="_blank">
                  Открыть профиль
                </a>
                <ul>
                  {login && (
                    <li>
                      <strong>Username: </strong>
                      {login}
                    </li>
                  )}
                  {company && (
                    <li>
                      <strong>Company: </strong>
                      {company}
                    </li>
                  )}
                  {blog && (
                    <li>
                      <strong>Webiste: </strong>
                      {blog}
                    </li>
                  )}
                </ul>
                <div className="badge badge-primary">
                  Подписчики: {followers}
                </div>
                <div className="badge badge-success">Подписан: {following}</div>
                <div className="badge badge-info">
                  Репозитории: {public_repos}
                </div>
                <div className="badge badge-dark">Gists: {public_gists}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos}/>
    </>
  );
};
