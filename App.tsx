import { Tooltip } from '@mui/material';
import React from 'react';

export const App = (): React.JSX.Element => {
    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
    }}>
        <Tooltip title="Hello world!">
            <span>Hello world!</span>
        </Tooltip>
    </div>
};
