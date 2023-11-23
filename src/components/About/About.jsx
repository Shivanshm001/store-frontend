import React from 'react';
import { useRefeshToken } from '../../hooks/useRefeshToken';

export function About() {
    const refresh = useRefeshToken();
    return (
            <div>
                <button onClick={() => {
                    refresh();
                }}>Refresh</button>
            </div>
        );
}
