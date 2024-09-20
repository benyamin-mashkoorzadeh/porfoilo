import {useEffect, useState} from "react";
import MainLayout from "../layouts/MainLayout";
import {Sidebar} from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import {Page} from "../components/pages";
import {useMediaQuery, useTheme} from "@mui/material";
import SidebarContainer from "./SidebarContainer";
import MainContext from '../context';
import {DrawerActionButton} from "../components/drawer";
import SwipeableViews from "react-swipeable-views";

import {Home, About, Resume, Projects, Contact} from "../pages";

function AppContainer() {
    const [pageNumber, setPageNumber] = useState(0)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [mode, setMode] = useState('')
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')


    const theme = useTheme()
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'))

    useEffect(() => {
        setMode(prefersDarkMode ? 'dark' : 'light')
    }, []);
    

    useEffect(() => {
        if (isMdUp) {
            setDrawerOpen(false)
        }
    }, [isMdUp]);
    const handlePageNumber = (event, newPage) => {
        setPageNumber(newPage)
    }

    const handlePageChange = (index) => {
        setPageNumber(index)
    }

    const handleThemeChange = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
    }

    return (
        <MainContext.Provider value={{pageNumber, handlePageNumber, drawerOpen, setDrawerOpen, handleThemeChange}}>
            <MainLayout mode={mode}>
                <SidebarContainer>
                    <Sidebar/>
                </SidebarContainer>

                {/* FAB */}
                <DrawerActionButton/>

                <PagesContainer>
                    <SwipeableViews index={pageNumber} onChangeIndex={handlePageChange}>
                        <Page pageNumber={pageNumber} index={0}>
                            {/*  Home Section  */}
                            <Home helmetTitle={'صفحه اصلی'} />
                        </Page>
                        <Page pageNumber={pageNumber} index={1}>
                            {/*  About Section  */}
                            <About helmetTitle={'درباره من'} />
                        </Page>
                        <Page pageNumber={pageNumber} index={2}>
                            <Resume helmetTitle={'رزومه من'} />
                        </Page>
                        <Page pageNumber={pageNumber} index={3}>
                           <Projects helmetTitle={'نمونه کارها'} />
                        </Page>
                        {/*<Page pageNumber={pageNumber} index={4}>*/}
                        {/*    <Typography variant="h5" sx={{textAlign: 'center'}}>*/}
                        {/*        نظرات دانشجویان*/}
                        {/*    </Typography>*/}
                        {/*</Page>*/}
                        <Page pageNumber={pageNumber} index={4}>
                            <Contact helmetTitle={'ارتباط با من'} />
                        </Page>
                    </SwipeableViews>
                </PagesContainer>
            </MainLayout>
        </MainContext.Provider>
    );
}

export default AppContainer;
