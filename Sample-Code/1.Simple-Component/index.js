import React from 'react';
import ReactDOM from 'react-dom';
import Players from './Players';

function Games ()
{
    return (

        <ul>
            <li>Cricket</li>
            <li>Football</li>
            <li>Tennis</li>
        </ul>
    )
}

ReactDOM.render(
    <div>
        <Games />
        <Players />
    </div>,
    document.getElementById('root')
);
