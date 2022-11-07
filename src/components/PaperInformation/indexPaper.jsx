import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const PaperInformation = (props) => {
  const { userState } = props;
  const { public_repos, followers, following } = userState;
  return (
    /* cajita donde va la informacion */
    <Paper elevation={3}>
      <Stack>
        <Stack>
          <Typography>Repositorios</Typography>
          <Typography>{public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography>Seguidores</Typography>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack>
          <Typography>Siguiendo</Typography>
          <Typography>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PaperInformation;
