import {Typography} from "@mui/material";
import avatar from '../../assets/picture.jpg'
import {RandomReveal} from 'react-random-reveal';
import {alphabetPersian} from '../../constants/alphabetPersian';
import {useState} from "react";
import ThemeActionButton from "./ThemeActionButton";
import {CustomAvatar} from "../common";
import SocialMediaAccounts from "./SocialMediaAccounts";


const SidebarHeader = () => {
    const [start, setStart] = useState(false)

    return (
        <>
            <ThemeActionButton/>

            <CustomAvatar avatar={avatar} size={200} fallback="BM"/>

            <Typography variant="h6" color="#f93c92">
                <Typography variant="caption" color="#f93c92">
                    {" {{ "}
                </Typography>
                <RandomReveal isPlaying characters="بنیامین مشکورزاده" duration={4} characterSet={alphabetPersian}
                              onComplete={() => setStart(true)}/>
                <Typography variant="caption" color="#f93c92">
                    {" }} "}
                </Typography>
            </Typography>

            {start && (
                <Typography variant="caption" color="gray">
                    <Typography variant="caption" color="#f93c92">
                        [[{" "}
                    </Typography>
                    <RandomReveal isPlaying characters="توسعه دهنده فول استک" duration={4}
                                  characterSet={alphabetPersian}/>
                    <Typography variant="caption" color="#f93c92">
                        {" "}]]
                    </Typography>
                </Typography>
            )}

            {/*  Social Media Accounts  */}
            <SocialMediaAccounts />
        </>
    )
}

export default SidebarHeader;
