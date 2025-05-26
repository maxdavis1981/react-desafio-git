
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState({ data: [] });

  const handleSearchRepo = async () => {
    try {
      const response = await api.get(`/${currentRepo}/repos`);
      const novosRepos = response?.data;
  
      if (!novosRepos || novosRepos.length === 0) {
        alert('Repositório não encontrado');
        return;
      }
  
      // Evita duplicatas com base no id
      const reposFiltrados = novosRepos.filter(novo =>
        !repos.data.some(repo => repo.id === novo.id)
      );
  
      // Atualiza o estado apenas com os repositórios que ainda não estavam lá
      if (reposFiltrados.length > 0) {
        setRepos(prev => ({
          ...prev,
          data: [...prev.data, ...reposFiltrados],
        }));
      }
  
      setCurrentRepo('');
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
      alert('Erro ao buscar repositórios');
    }
  };
  

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);
    setRepos(prevRepos => ({
      ...prevRepos,
      data: prevRepos.data.filter(repo => repo.id !== id)
    }));
  };


  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos?.data?.map(repo => <ItemRepo key={repo.id}  handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
