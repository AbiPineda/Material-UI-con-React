import React from "react";
import { Container } from "@mui/system";
import Searcher from "./components/searchs/search";

const App = () =>{
    return(
        <Container sx={{
            background: 'whitesmoke',
            width: '80vw',
            height: '500px',
            borderRadius:'16px',
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
        <Searcher></Searcher>
        </Container>
    )
};

export default App;