import {projects} from "../../constants/projects";
import Grid from "@mui/material/Grid2";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Slide, Typography} from "@mui/material";

const ShowProjects = ({loading}) => {
    return (
        <>
            {projects.map((project, index) => (
                <Grid key={index} size={{xs: 12, sm: 6, md: 6, lg: 4, xl: 4}} sx={{px: 2, mb: 2}}>
                    <Slide direction="up" in={loading}
                           style={{transitionDelay: loading ? `${index + 1}000ms` : '0ms'}}>
                        <Card sx={{maxWidth: 345, backgroundColor: 'steelblue'}}>
                            <CardActionArea>
                                <CardMedia component="img" height="250" width="250" image={project.image}
                                           alt={project.title}/>
                                <CardContent>
                                    <Typography variant="body1" textAlign="left" gutterBottom>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign="left"
                                                gutterBottom sx={{direction: 'ltr'}}>
                                        {project.info}
                                        {/*<EllipsisText text={project.info} length={"100"}/>*/}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" target="_blank">اطلاعات بیشتر</Button>
                            </CardActions>
                        </Card>
                    </Slide>
                </Grid>
            ))
            }
        </>
    )
}

export default ShowProjects;
