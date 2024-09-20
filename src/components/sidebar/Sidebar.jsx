import {SidebarContent} from ".";
import {SidebarDrawer} from "../drawer";


const Sidebar = () => {
    return (
        <>
            {/* Sidebar Drawer */}
            <SidebarContent/>

            {/*  Sidebar Drawer  */}
            <SidebarDrawer/>
        </>
    )
}

export default Sidebar;

// <Tab label={
//     <div>
//         <Typography variant="subtitle2" color="white">
//             <HomeRounded sx={{verticalAlign: 'middle', mx: 2}} />
//             خانه</Typography>
//     </div>
// } />