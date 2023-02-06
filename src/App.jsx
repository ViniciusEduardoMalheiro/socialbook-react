import { useState } from 'react';
import { Home } from './Home'
 
export function App() {

const [user, setUser] = useState(null);
const [password, setPassword] = useState(null);

function handleUser(e) {
  console.log(`Logado com sucesso com o usuario ${user} e senha ${password}`)
}

  return (
    <Home user={user}
    setUser={setUser}
    password={password}
    setPassword={setPassword}
    handleUser={handleUser} />
  );
}
