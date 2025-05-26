import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  console.log(repo);

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer id={repo.id} onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <div className="button-group">
          <a href={repo.html_url} rel="noreferrer" target="_blank">
            Ver repositório
          </a>
          <a
            href="#"
            className="remover"
            onClick={e => {
              e.preventDefault();
              handleRemoveRepo(repo.id);
            }}
          >
            Remover
          </a>
        </div>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
