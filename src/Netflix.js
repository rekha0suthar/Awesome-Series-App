import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';

const Netflix = () => {
    return (
        <>
        <h1 className="title"> Awesome Netflix Series </h1>
            <Cards
                key={Sdata[0].id}
                imgsrc={Sdata[0].imgsrc}
                scategory={Sdata[0].scategory}
                title={Sdata[0].title}
                link={Sdata[0].link}
            />
            <Cards
                key={Sdata[1].id}
                imgsrc={Sdata[1].imgsrc}
                scategory={Sdata[1].scategory}
                title={Sdata[1].title}
                link={Sdata[1].link}
            />
            <Cards
                key={Sdata[2].id}
                imgsrc={Sdata[2].imgsrc}
                scategory={Sdata[2].scategory}
                title={Sdata[2].title}
                link={Sdata[2].link}
            />
        </>

    )
}
export default Netflix;
