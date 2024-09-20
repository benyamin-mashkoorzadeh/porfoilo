import {useEffect, useState} from "react";

import {
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Divider,
    InputAdornment,
    Slide,
    TextField,
    Typography,
    useTheme
} from "@mui/material";
import {AccountCircle, EmailRounded, FaceRounded, SubjectRounded} from "@mui/icons-material";
import worldMap from '../assets/map.svg';
import Grid from "@mui/material/Grid2";
import {useFormik} from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import {contactValidationSchema} from "../validations/contactValidation";
import {Helmet} from "react-helmet-async";

const Contact = ({helmetTitle}) => {
    const [loading, setLoading] = useState(false)

    const theme = useTheme()

    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, []);

    const contactInputNames = {
        fullname: '',
        email: '',
        subject: '',
        message: '',
        recaptcha: ''
    }

    const formik = useFormik({
        initialValues: contactInputNames,
        onSubmit: values => {
            console.log("Form values: ", values)
        },
        validationSchema: contactValidationSchema
    })


    return (
        <Card sx={{
            height: '100vh',
            backgroundColor: 'whitesmoke',
            overflowY: 'scroll',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>

            <CardContent>
                <Divider textAlign="center" sx={{mt: 2, '&::before, &::after': {borderColor: 'warning.main'}}}>
                    <Chip color="warning"
                          icon={<AccountCircle/>}
                          label={<Typography variant="body1" color="black" sx={{textAlign: 'center'}}>
                              ارتباط با من</Typography>} sx={{p: 3}}/>
                </Divider>
                <Grid container sx={{mt: 5}}>
                    <Slide direction="up" in={loading} style={{transitionDelay: loading ? '200ms' : '0ms'}}>
                        <Grid size={{xs: 12, sm: 12, md: 8, lg: 8, xl: 8}}>
                            <Card sx={{justifyContent: 'center', alignItems: 'center'}}>
                                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                                    <CardContent>
                                        <Grid container sx={{direction: 'ltr'}} spacing={2}>
                                            <Grid size={{xs: 12, sm: 12, md: 6, lg: 6, xl: 6}}>
                                                <TextField fullWidth size="small" color="warning"
                                                           label="نام و نام خانوادگی" name="fullname"
                                                           variant="outlined"
                                                           helperText={formik.touched.fullname ? formik.errors.fullname : null}
                                                           error={Boolean(formik.touched.fullname && formik.errors.fullname)}
                                                           value={formik.values?.fullname}
                                                           onChange={formik.handleChange}
                                                           InputProps={{
                                                               endAdornment: (
                                                                   <InputAdornment position="end"><FaceRounded/>
                                                                   </InputAdornment>)
                                                           }}/>
                                            </Grid>

                                            <Grid size={{xs: 12, sm: 12, md: 6, lg: 6, xl: 6}}>
                                                <TextField fullWidth size="small" color="warning"
                                                           label="آدرس ایمیل" name="email"
                                                           variant="outlined"
                                                           helperText={formik.touched.email ? formik.errors.email : null}
                                                           error={Boolean(formik.touched.email && formik.errors.email)}
                                                           value={formik.values?.email}
                                                           onChange={formik.handleChange}
                                                           InputProps={{
                                                               endAdornment: (
                                                                   <InputAdornment position="end"><EmailRounded/>
                                                                   </InputAdornment>)
                                                           }}/>
                                            </Grid>
                                            <Grid size={{xs: 12, sm: 12, md: 12, lg: 12, xl: 12}}>
                                                <TextField fullWidth size="small" color="warning"
                                                           label="عنوان" name="subject"
                                                           variant="outlined"
                                                           helperText={formik.touched.subject ? formik.errors.subject : null}
                                                           error={Boolean(formik.touched.subject && formik.errors.subject)}
                                                           value={formik.values?.subject}
                                                           onChange={formik.handleChange}
                                                           InputProps={{
                                                               endAdornment: (
                                                                   <InputAdornment position="end"><SubjectRounded/>
                                                                   </InputAdornment>)
                                                           }}/>
                                            </Grid>
                                            <Grid size={{xs: 12, sm: 12, md: 12, lg: 12, xl: 12}}>
                                                <TextField fullWidth multiline rows={6} size="small" color="warning"
                                                           label="متن پیام" name="message"
                                                           variant="outlined"
                                                           helperText={formik.touched.message ? formik.errors.message : null}
                                                           error={Boolean(formik.touched.message && formik.errors.message)}
                                                           value={formik.values?.message}
                                                           onChange={formik.handleChange}/>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions sx={{alignItems: 'end', flexDirection: 'column'}}>
                                        <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                                   theme={theme.palette.mode} hl="fa" onChange={value => {
                                            formik.setFieldValue("recaptcha", value)
                                        }}/>
                                        {formik.errors.recaptcha && formik.touched.recaptcha &&
                                            (<Typography variant="caption" color="error">
                                                    {formik.errors.recaptcha}
                                                </Typography>
                                            )}
                                        <Button type="submit" color="success" variant="contained" fullWidth
                                                sx={{mt: 2}}>
                                            ارسال پیام
                                        </Button>
                                    </CardActions>
                                </form>
                            </Card>
                        </Grid>
                    </Slide>

                    <Slide direction="up" in={loading} style={{transitionDelay: loading ? '200ms' : '0ms'}}>
                        <Grid size={{xs: 0, sm: 0, md: 4, lg: 4, xl: 4}} sx={{
                            textAlign: 'center',
                            backgroundImage: `url(${worldMap})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}>
                            <Typography variant="h6" color="black"
                                        sx={{
                                            fontFamily: 'vazir',
                                            mt: 4,
                                            display: {xs: 'none', sm: 'none', md: 'block'}
                                        }}>
                                بیا در مورد همه چیز با هم صحبت کنیم
                            </Typography>
                            <Typography variant="body1" color="black"
                                        sx={{mt: 2, display: {xs: 'none', sm: 'none', md: 'block'}}}>
                                👋{' '}
                                <a href='mailto:benyamin.mashkoorzadeh@gmail.com' alt='email' style={{color: 'tomato'}}>
                                    ایمیل
                                </a>
                                {' '} بزن به من
                            </Typography>
                        </Grid>
                    </Slide>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Contact;
