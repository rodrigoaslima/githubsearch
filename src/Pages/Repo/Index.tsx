import { Container } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import {useQuery} from 'react-query';
import { Link, useParams } from "react-router-dom"

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
    const {name} = useParams();
   

    const {data, isFetching} = useQuery<DetailsInterface>('repos', async () => {
        const response = await axios.get(`https://api.github.com/users/${name}`)
        return response.data
    })

    

    return(
        <Container maxWidth="xs">
            {isFetching && <h1>carregando</h1>}

            <div>
                <img src={data?.avatar_url} alt={`Avatar ${data?.name}`}/>
                <div>{data?.name}</div>

            </div>

           
        </Container>
    )
}