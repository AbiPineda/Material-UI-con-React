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
    <Grid container spacing={2} sx={{ marginTop: "15px" }}>
      {/* Dividimos las columnas en 6 y 6 */}
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          <Typography>{`${location || "No disponible"}`}</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <LanguageIcon />
          {blog !== "" ? (
            <a target="_blank" href={blog}>
              <Typography>{blog}</Typography>
            </a>
          ) : (
            <Typography>No disponible</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
          <Typography>{`@${twitter_username || "No disponible"}`}</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          <Typography>{`${company || "No disponible"}`}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
