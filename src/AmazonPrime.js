import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';

const AmazonPrime = () => {
    return (
        <>
            <Cards
                key={Sdata[3].id}
                imgsrc={Sdata[3].imgsrc}
                scategory={Sdata[3].scategory}
                title={Sdata[3].title}
                link={Sdata[3].link}
            />
            <Cards
                key={Sdata[4].id}
                imgsrc={Sdata[4].imgsrc}
                scategory={Sdata[4].scategory}
                title={Sdata[4].title}
                link={Sdata[4].link}
            />
        </>
    )
}
export default AmazonPrime;
