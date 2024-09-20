import {Box, Divider} from "@mui/material";
import {SidebarHeader, SidebarTabs, SidebarFooter} from '.';
const SidebarContent = () => {

    return (
        <Box sx={{justifyContent: 'center', textAlign: 'center', mt: 2}}>

            {/* Sidebar Header */}
            <SidebarHeader/>

            <Divider variant="middle" />

            {/* Sidebar Tabs */}
            <SidebarTabs />


            <Divider variant="middle" sx={{mt: 2}}/>

            {/*  Sidebar Footer  */}
            <SidebarFooter/>
        </Box>

    )
}

export default SidebarContent;
