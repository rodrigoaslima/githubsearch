import { AppBar, Box, Container, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import {useQuery} from 'react-query';
import { useLocation } from "react-router-dom"

type Repositories = {
    full_name: string;
    description: string;
    html_url: string;
}

type UserInfo ={
    name: string;
    avatar_url: string
}

export function Repo(){
    const location = useLocation();
    const {name, avatar_url} = location.state as UserInfo
  
    const {data, isLoading} = useQuery<Repositories[]>('repos', async () => {
        const response = await axios.get(`https://api.github.com/users/${name}/repos`);
        return response.data;
    })

    return(
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
                            
                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                            <Typography
                                variant="subtitle1"
                                sx={{marginRight: '10px'}}
                            >
                                Repositories: {data?.length}
                            </Typography>
                            <Avatar sizes='large' alt={name} src={avatar_url} />
                    </Box>
                </Toolbar>  
            </AppBar>

            <Container maxWidth="xs">
                {isLoading && <CircularProgress />}

                <List>
                    {data?.map( e=> {
                        return(
                            <ListItemButton href={e.html_url} >
                                <ListItemText
                                    primary={e.full_name}
                                    secondary={e.description} 
                                />
                            </ListItemButton>
                        )
                    })}
                </List>


            </Container>

        </div>  
    )
}