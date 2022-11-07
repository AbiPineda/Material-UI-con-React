import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import LocationInformation from "../../components/LocationInformation/indexLocation";
import PaperInformation from "../../components/PaperInformation/indexPaper";

const Description = (props) => {
    const { userState } = props;
    const { bio } = userState;
    return (
        <Fragment>
            <Stack sx={{ justifyContent:'center'}}>
                {
                   bio !== null 
                   ? <Typography variant="body1">{bio}</Typography>
                   : <Typography variant="body1">Lorem ipsum dolor sit amet. Ea excepturi doloribus ea praesentium nihil nam dolore laboriosam ad fugit nobis</Typography>         
                }                
            </Stack>
            <PaperInformation userState = { userState }></PaperInformation>
            <LocationInformation userState = { userState }></LocationInformation>
        </Fragment>
    )
};

export default Description;