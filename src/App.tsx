import { Route, Routes } from 'react-router-dom';
import { Repo } from './Pages/Repo/Index';
import { Repos } from './Pages/Repos/Index';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Repos/>}/>
        
      
      <Route path="repos/:name" element={<Repo/>}/>
    </Routes>
  )
}

export default App;
