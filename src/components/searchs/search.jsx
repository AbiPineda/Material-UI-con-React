import React, { useState } from "react";
import { Stack } from "@mui/system";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searcher = (props) => {

  const { setInputUser } = props;

  const [valueInput, setValueInput] = useState('');

   const onSearchValueChange = (event) =>{
     const inputValue = event.target.value;
     setValueInput(inputValue);
   }

  const handleSubmit = () => {
    setInputUser(valueInput);
  }
  return (
    <Stack 
    direction = 'row'
    sx={{
        marginTop: '30px',
        width: '90%'
    }}>
      <TextField 
      id="outlined-basic" 
      label="Github User"
      placeholder="Buscar Usuario Github"
      variant="outlined"
      size="small"
      value={valueInput}
      onChange={onSearchValueChange}
      sx={{
        width:'90%',
      }}>
      </TextField>
      <IconButton
     onClick={handleSubmit}
      size="small"
      sx={{
        left:'-45px'
      }}>
        <SearchIcon></SearchIcon>
      </IconButton>
    </Stack>
  );
};

export default Searcher;
