import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import './App.css'
import Menu from './components/Menu'


function App() {
const [userGitHub, setuserGitHub] = useState(false);
const [name,setName] = useState('');



let getUserGitHub = async ()=> {
  if (name===""){
    alert('Atenção: usuário é obrigatório')
    return false;
  }
  let retorno = await axios.get("https://api.github.com/users/"+name)
  if (retorno!==""){
       setuserGitHub(retorno.data)
  }
}


  return (
      <div className="App">
      <Menu />
        <input 
          type="text" required name="nome" value={name}
          onChange={(e) => setName(e.target.value)
        }/>
        <h3>Testando chamar API através de botão</h3>
        <button onClick ={ () => getUserGitHub() }>
          Clique aqui para ativar a API do GITHUB
        </button>
        <h1>Usuário do Twitter: {userGitHub['twitter_username']}</h1>
        <h2>Usuário do Twitter: {userGitHub['login']}</h2>
        <h3>Quantidade de repositórios {userGitHub['public_repos']}</h3>
      </div>
  );
}
export default App;
