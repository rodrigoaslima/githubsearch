import { Route, Routes } from 'react-router-dom';
import { Repo } from './Pages/Repo/Index';
import { SearchPage } from './Pages/SearchPage/Index';

function App() {
  return(
    <Routes>
      <Route path="/" element={<SearchPage/>}/>
      <Route path="repos/:name" element={<Repo/>}/>
    </Routes>
  )
}

export default App;
