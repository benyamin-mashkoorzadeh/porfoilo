import Grid from "@mui/material/Grid2";

const PagesContainer = ({children}) => {
    return (
        <Grid size={{xs: 12, sm: 12, md: 9, lg: 10, xl: 10}} sx={{backgroundColor: 'whitesmoke'}}>
            {children}
        </Grid>
    )
}

export default PagesContainer;
