import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import {lightTheme, darkTheme} from "./theme";
import {Helmet, HelmetProvider} from "react-helmet-async";
import createCache from '@emotion/cache';
import {prefixer} from "stylis";
import Grid from "@mui/material/Grid2";
import MainContext from '../context';
import {useContext} from "react";


//Note Create RTL Cache
const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})

const MainLayout = ({children, mode}) => {
    const {title} = useContext(MainContext)

    const theme = mode === 'dark' ? darkTheme : lightTheme

    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    {/* Grid System */}
                    <Grid container sx={{height: '100vh'}}>
                        {children}
                    </Grid>
                    {/* Grid System */}
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout;