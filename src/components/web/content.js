import React from 'react'

import Data  from '../../static/webData'

const Content = () => {
    return (
        <section className="content-grid">
            {Data.map((item, index) => {
                return(
                    <div className="content-card" key = {index}>
                        <img src={item.img} alt={item.title}/>
                        <div className="content">
                            <h3> {item.title} </h3>
                            <p> {item.desc} </p>
                        </div>
                        
                    </div>
                )
            })}
        </section>
    );
}
 
export default Content;