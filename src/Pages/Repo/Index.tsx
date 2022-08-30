import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios';
import { useState } from 'react';
import {useQuery} from 'react-query';
import { Link, useLocation, useParams } from "react-router-dom"




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

export function Repo(){
    //const {name} = useParams();
    const location = useLocation()
    const {login} = location.state as DetailsInterface
    console.log('name: ', login)
    

    const {data, isFetching} = useQuery<any>('repos', async () => {
        const response = await axios.get(`https://api.github.com/users/diego3g/repos}`);
        console.log('response: ', response.data);
        return response.data;
    })


    return(
        <div>
            
            <h1>Haduken</h1>
        </div>
    )


    /*return(
        <div>

            <AppBar position='static'>
                
                
                    <Toolbar disableGutters
                        sx={{
                            justifyContent: 'space-around',
                            marginLeft: '10px',
                            marginRight: '10px',
                        }}
                    >
                        <Box sx={{ 
                            flexGrow: 1,
                            display :'flex',
                            alignItems: 'center' 
                        }}>
                            <GitHubIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}}/>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                }}
                            >
                                GITHUB SEARCH
                            </Typography>
                        </Box>
                        
                        <Box sx={{ flexGrow: 0 }}>
                            <span>Repositories: {state?.public_repos}</span>
                            <Avatar sizes='large' alt={state?.name} src={state?.avatar_url} />
                        </Box>
                    </Toolbar>
               
            

            </AppBar>

            <Container maxWidth="xs">
            {isFetching && <h1>carregando</h1>}

            <div>
                <img src={data?.avatar_url} alt={`Avatar ${data?.name}`}/>
                <div>{data?.name}</div>
            </div>

           
        </Container>

        </div>

        
    )*/
}