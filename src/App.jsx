import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";

import Searcher from "./components/searchs/search";
import { getGitHubUser } from './services/users'

const App = () => {
const [inputUser, setInputUser] = useState('octocat')
const [data, setData] = useState([])

useEffect(() =>{
    (async()=>{
        try{
            const res = await getGitHubUser(inputUser)
            if(inputUser === 'octocat'){
                localStorage.getItem('octocat', JSON.stringify(res))
            }
            if(res.message === 'NOT FOUND'){
                const octocat = JSON.parse(localStorage.getItem('octocat'))
                return setData(octocat)
            }
            setData(res)
        }catch(error){
            console.log('entro aqui');
        }
    })()
},[inputUser])

return(
      <Container sx={{
        background: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }} >
        <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      </Container>
    )
  };
  
  export default App;
  