import {useCallback, useEffect, useRef, useState} from "react";

import {Box, Typography} from "@mui/material";
import Typed from "typed.js";
import Particles from "react-particles";
import {loadFull} from 'tsparticles';
import TextTransition, {presets} from 'react-text-transition';

import {firefly, links} from '../constants/particles'
import bg02 from "../assets/bg02.jpeg";
import {Helmet} from "react-helmet-async";


const Home = ({helmetTitle}) => {
    const [index, setIndex] = useState(0);
    const nameEl = useRef(null)
    const infoEl = useRef(null)



    const strings = [
        'توسعه دهنده فول استک هستم',
        'فریلنسر هستم',
    ]

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: [" بنیامین مشکورزاده "],
            typeSpeed: 110,
            backSpeed: 80,
            backDelay: 50,
            showCursor: false
        })

        const stringsTransition = setInterval(() => {
            setIndex(index => index + 1)
        }, 3000)

        return () => {
            typedName.destroy()
            clearInterval(stringsTransition)
        }
    }, []);

    const particlesInit = useCallback(async (engine) => {
            await loadFull(engine)
        },
        []);

    const particlesLoaded = useCallback(async (container) => {
            await console.log(container)
        },
        []);


    return (

        <Box sx={{
            backgroundImage: `url(${bg02})`,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>

            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={links}/>

            <Box component="div" sx={{display: 'flex'}}>
                <Typography variant="h3" color="#f93c92">
                    {" {{ "}
                </Typography>
                <Typography ref={nameEl} variant="h3" color="#f93c92"></Typography>
                <Typography variant="h3" color="#f93c92">
                    {" }} "}
                </Typography>
            </Box>

            <Box component="div" sx={{display: 'flex'}}>
                <TextTransition springConfig={presets.wobbly}>
                    <Typography variant="h4" sx={{mt: 4, textDecoration: 'underline', textDecorationColor: '#f93c92'}}
                                color="whitesmoke">
                        {strings[index % strings.length]}
                    </Typography>
                </TextTransition>

                <Typography variant="h4" color="whitesmoke" sx={{mt: 4, mr: 1}}>
                    من یک
                </Typography>
            </Box>
        </Box>
    )
}

export default Home;
