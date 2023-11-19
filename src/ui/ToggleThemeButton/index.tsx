import React from 'react';
import {MdDarkMode, MdLightMode} from "react-icons/md";
import {IconBaseProps} from "react-icons";
import {useTheme} from "next-themes";

const ToggleThemeButton = (props: IconBaseProps) => {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = React.useState<boolean>(false);

    React.useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return <MdLightMode {...props} className='cursor-pointer'/>
    }

    return theme === 'light'
        ? <MdDarkMode {...props} onClick={() => setTheme('dark')} className='cursor-pointer'/>
        : <MdLightMode {...props} onClick={() => setTheme('light')} className='cursor-pointer'/>
};

export default ToggleThemeButton;