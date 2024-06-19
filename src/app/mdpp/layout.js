import React from 'react';

const layout = ({children}) => {
    return (
        <html>
            <body className='bg-red-500'>
            {children}
            </body>
        </html>
    );
};

export default layout;