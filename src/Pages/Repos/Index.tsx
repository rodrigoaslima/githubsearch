import axios from 'axios';
import { useState } from 'react';
import {useQuery} from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, FormControl   } from '@mui/material';
import { Container } from '@mui/system';


import {Wrapper, TitleBox, ButtonBox} from './styles' 

type Repositosy ={
  full_name: string;
  description: string;
}

export function Repos() {
  const [name, setName] = useState('');

  const navigate = useNavigate();


  /*async function handleGetRepositoryPerName(name: string){
    console.log('Name: ', name)
    
    const response = await axios.get(`https://api.github.com/users/diego3g/repos`);
    return response.data
  }*/



  //const {data, isFetching} = useQuery<Repositosy[]>(['repos', name], async () => handleGetRepositoryPerName(name));

  const {data, isFetching} = useQuery<Repositosy[]>('repos', async () => {
    const response = await axios.get(`https://api.github.com/users/diego3g/repos`)
    return response.data
  })

  return (
    <Wrapper>
      <TitleBox>
        <h1>GitHub Search</h1>
      </TitleBox>
      
      <div>
        <TextField  
          autoFocus={true}
          fullWidth={true}
          id={"searchUserGithub"}
          name={"searchUserGithub"}
          placeholder={"Enter the github user name"}
          type={"search"}
          onChange={(event)=>setName(event?.target.value)}
        />

        <ButtonBox>
          <Button variant="contained" onClick={()=> navigate(`/repos/${name}`)} >Search</Button>
          
          <Button variant="outlined" href='https://github.com/'>Go to GitHub</Button>
        </ButtonBox>

      </div>
      

    </Wrapper>








      /*data?.map(repo => {
        return(
          <li key={repo.full_name}>
            <Link to={`/repos/${repo.full_name}`}>{repo.full_name}</Link>
            <p>{repo.description}</p>
          </li>
        )
      })*/




  );
}
