import {useEffect, useState} from "react";
import {Card, CardContent} from "@mui/material";
import {HomeRepairServiceRounded} from "@mui/icons-material";
import Grid from "@mui/material/Grid2";

import {CustomDivider} from "../components/common";
import {ShowProjects} from "../components/pages";
import {Helmet} from "react-helmet-async";

const Projects = ({helmetTitle}) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, []);

    return (
        <Card sx={{height: '100vh', backgroundColor: 'whitesmoke', overflowY: 'scroll'}}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider bColor="primary.main" cColor="primary" icon={<HomeRepairServiceRounded/>} align="center"
                               text="نمونه کارها"/>

                <Grid container sx={{m: 2}}>
                    {/*  Show Projects Section  */}
                    <ShowProjects loading={loading} />

                </Grid>
            </CardContent>
        </Card>
    )
}

export default Projects;
