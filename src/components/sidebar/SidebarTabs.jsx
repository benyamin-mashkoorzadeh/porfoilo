import {Tab, Tabs, useTheme} from "@mui/material";
import {grey} from "@mui/material/colors";
import MainContext from '../../context';
import {useContext} from "react";
import {tabsData} from "../../constants/tabsData";

const SidebarTabs = () => {
    const {pageNumber, handlePageNumber, setDrawerOpen} = useContext(MainContext);
    const theme = useTheme()

    const data = tabsData()

    return (
        <Tabs orientation="vertical" variant="scrollable" scrollbutton="auto"
              indicatorColor={theme.palette.mode === 'dark' ? 'secondary' : 'primary'}
              textColor={theme.palette.mode === 'dark' ? 'secondary' : 'primary'} allowScrollButtonsMobile
              value={pageNumber} onChange={handlePageNumber}>

            {
                data.map((tab, index) => (

                    <Tab label={tab.label} icon={tab.icon}
                         key={index}
                         sx={{
                             "&.MuiTab-root": {minHeight: 50},
                             my: 0.5,
                             mx: 1,
                             backgroundColor: theme.palette.mode === 'dark' ? grey[800] : grey[500],
                             color: 'text.primary',
                             borderRadius: 2
                         }}
                         iconPosition="start"
                         {...tab}
                         onClick={() => setDrawerOpen(false)}/>

                ))
            }

        </Tabs>
    )
}

export default SidebarTabs;
