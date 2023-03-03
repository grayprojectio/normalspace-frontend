import React, { useEffect, useState } from 'react';

import a1 from './app-logo-square1.svg';
import a2 from './app-logo-square2.svg';
import a3 from './app-logo-square3.svg';

function Logo(props) {
    const [logo, setLogo] = useState(a1 + '');

    useEffect(() => {
        const n = Math.floor(Math.random() * 3) + 1;
        if (n === 1) {
            setLogo(a1)
        } else if (n === 2) {
            setLogo(a2)
        } else if (n === 3) {
            setLogo(a3)
        }
    }, []);

    return (
        <img src={ logo } alt={ '?' }/>
    );
}

export default Logo;