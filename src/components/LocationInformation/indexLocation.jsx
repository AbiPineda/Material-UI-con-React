import { Grid, Typography, Stack } from "@mui/material";

/* iconos */
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";

import React from "react";

const LocationInformation = (props) => {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;
  return (
    <Grid container>
      {/* Dividimos las columnas en 6 y 6 */}
      <Grid item xs={6}>
        <Stack direction= "row">
          <LocationOnIcon />
          <Typography>{ `${location || 'No disponible'}` }</Typography>
        </Stack>

        <Stack direction= "row">
        <TwitterIcon/>
        <Typography>{ `@${twitter_username || 'No disponible'}` }</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction= "row">
          <LanguageIcon/>
          <Typography>{ `${blog || 'No disponible'}` }</Typography>
        </Stack>

        <Stack direction= "row">
          <BusinessIcon />
          <Typography>{ `${company || 'No disponible'}` }</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
