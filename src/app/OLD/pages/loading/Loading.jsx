import React, { useEffect, useState } from 'react';

function Loading(props) {
    const chars = ['(ﾉ◕ヮ◕)ﾉ', '*:･', 'ﾟ✧', '✿*:', '･ﾟ✧', '✿'];

    const [str, setStr] = useState('');
    const [counter, setCounter] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const addChar = () => {
        if (chars[counter]) {
            setStr(str + chars[counter]);
            setCounter(counter + 1);
        } else {
            setStr('');
            setCounter(0);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            addChar();
        }, 300);
    }, [addChar]);

    return (
        <p>
            { str }
        </p>
    );
}

export default Loading;