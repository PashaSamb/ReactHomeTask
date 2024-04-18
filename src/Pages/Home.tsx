import React from 'react';
import { ForecastItemList } from '../Components/Page/ForecastItems';

function Home() {
    
    return (
        <div>
            <div className="container p-2">
                <ForecastItemList/>
            </div>
        </div>
    )
}

export default Home;