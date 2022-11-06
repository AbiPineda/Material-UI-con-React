import { CardMedia, Grid } from "@mui/material";
import React from "react";

import PrincipalInformation from "../../components/PrincipalInformation/indexInformation";
import Description from "../Description/indexDescription";

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;
  return (
    <Grid container spacing={2}>
      {/* se colocara desde donde inicia hasta la posicion 3 */}
      <Grid item xs={3}>
        {/* Aca se mostrara la foto de perfil */}
        <CardMedia
        component="img"
        alt="Gibhub User"
        image={avatar_url}
        >
        </CardMedia>
      </Grid>
      <Grid item xs={9}>
        <PrincipalInformation userState={userState}></PrincipalInformation>
        <Description userState={userState}></Description>
      </Grid>
    </Grid>
  );
};
export default UserCard;
