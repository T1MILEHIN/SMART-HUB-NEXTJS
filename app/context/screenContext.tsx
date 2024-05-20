"use client";
import { useState, useEffect, createContext } from "react";


export const ScreenContext = createContext({
    FullScreen: false,
});

export const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
    const [FullScreen, setFullScreen] = useState(false);
    useEffect(()=> {
        const handleResize = ()=> {
            const size = window.innerWidth;
            size > 1024 ? setFullScreen(true) : setFullScreen(false)
        }
        handleResize()
        window.addEventListener("resize", handleResize)

        return ()=> window.removeEventListener("resize", handleResize)
    }, [FullScreen])

    return (
        <ScreenContext.Provider value={{
            FullScreen,
        }}>
            {children}
        </ScreenContext.Provider>
    )

}