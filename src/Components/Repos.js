import React from 'react'

export const Repos = ({repos}) => {
  return (
    <>
      {repos.map((repo) => (
        <ul>
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </li>
        </ul>
      ))}
    </>
  );
}