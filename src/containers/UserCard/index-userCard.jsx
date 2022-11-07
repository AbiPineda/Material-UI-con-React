import { CardMedia, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import PrincipalInformation from "../../components/PrincipalInformation/indexInformation";
import Description from "../Description/indexDescription";

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;
  return (
    <Grid 
    container 
    spacing={2}
    sx={{ marginTop: '15px' }}
    >
      {/* se colocara desde donde inicia hasta la posicion 3 */}
      <Grid item xs={3}>
        {/* Aca se mostrara la foto de perfil */}
        <CardMedia
        component="img"
        alt="Gibhub User"
        image={avatar_url}
        sx={{
          borderRadius:'50%',
          marginLeft: '5px'
        }}>
        </CardMedia>
      </Grid>
      <Grid item xs={9}>
        <Stack
        direction="column"   
        spacing={1}
        sx={{
          margin: '30px'
        }}
        >
        <PrincipalInformation userState={userState}></PrincipalInformation>
        <Description userState={userState}></Description>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default UserCard;
