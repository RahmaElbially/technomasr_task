import React from 'react';
import '../../Style/LoaderStyle.css'

const Loader: React.FC = () => {
    return (
        <div className='loader'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;