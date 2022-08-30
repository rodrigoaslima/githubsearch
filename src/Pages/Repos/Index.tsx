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

export interface DetailsInterface {
  login:               string;
  id:                  number;
  node_id:             string;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       string;
  gists_url:           string;
  starred_url:         string;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          string;
  received_events_url: string;
  type:                string;
  site_admin:          boolean;
  name:                string;
  company:             string;
  blog:                string;
  location:            string;
  email:               null;
  hireable:            null;
  bio:                 string;
  twitter_username:    string;
  public_repos:        number;
  public_gists:        number;
  followers:           number;
  following:           number;
  created_at:          Date;
  updated_at:          Date;
}


export function Repos() {
  const [name, setName] = useState('');

  const navigate = useNavigate();
 
  const {refetch} = useQuery<DetailsInterface>('repos', async () => {
    const response = await axios.get(`https://api.github.com/users/${name}`)
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
      

    </Wrapper>

  );
}
