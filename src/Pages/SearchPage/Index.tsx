import axios from 'axios';
import { useState } from 'react';
import {useQuery} from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertTitle, Button, TextField } from '@mui/material';

import {Wrapper, TitleBox, ButtonBox} from './styles' 

export interface UserInfo {
  avatar_url:          string;
  name:                string;
}


export function SearchPage() {
  const [name, setName] = useState('');

  const navigate = useNavigate();
 
  const {refetch, isError} = useQuery<UserInfo>('repos', async () => {
    const response = await axios.get(`https://api.github.com/users/${name}`);
    navigate(`/repos/${name}`, {state: response.data})
    return response.data
  },{enabled: false})

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
          <Button variant="contained" onClick={()=> refetch() } >Search</Button>
          
          <Button variant="outlined" href='https://github.com/'>Go to GitHub</Button>
        </ButtonBox>
      </div>

      {isError && 
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Error:  — <strong>Request failed</strong>
        </Alert>
      }
    </Wrapper>
  );
}
