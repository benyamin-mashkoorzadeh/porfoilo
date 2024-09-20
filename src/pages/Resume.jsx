import {useEffect, useState} from "react";
import {Card, CardContent} from "@mui/material";
import {HomeRepairServiceRounded, SettingsEthernetRounded} from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import {CustomDivider} from "../components/common";
import {DevEduTimeline, DevExpTimeline} from "../components/pages";
import {Helmet} from "react-helmet-async";

const Resume = ({helmetTitle}) => {
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
                <CustomDivider bColor="error.main" cColor="error" icon={<SettingsEthernetRounded/>} align="center"
                               text="رزومه من"/>
                <Grid container sx={{mt: 4}}>

                    <Grid size={6}>
                        <CustomDivider bColor="warning.main" cColor="warning" icon={<HomeRepairServiceRounded/>}
                                       align="center"
                                       text="تجربیات"/>

                        {/*  DevExpTimeline Section  */}
                        <DevExpTimeline loading={loading} />

                    </Grid>

                    <Grid size={6}>
                        <CustomDivider bColor="info.main" cColor="info" icon={<HomeRepairServiceRounded/>}
                                       align="center"
                                       text="تحصیلات"/>

                        {/*  DevEduTimeline Section  */}
                        <DevEduTimeline loading={loading} />


                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    )
}

export default Resume;
