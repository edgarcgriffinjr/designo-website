import React from 'react'

import { ReactComponent as Canada } from '../../assets/shared/desktop/illustration-canada.svg'
import { ReactComponent as Australia } from '../../assets/shared/desktop/illustration-australia.svg'
import { ReactComponent as UK } from '../../assets/shared/desktop/illustration-united-kingdom.svg'

const LocaButtons = () => {
    return (    
        <section className="loca-button-grid">
            <div className="loca-card">
                <Canada />
                <div> 
                    <h3> Canada </h3>
                    <button className="button-dark"> See Location </button>
                </div>
            </div>
            <div className="loca-card">
                <Australia />
                <div>
                    <h3> Australia </h3>
                    <button className="button-dark"> See Location </button>
                </div>
            </div>
            <div className="loca-card">
                <UK />
                <div>
                    <h3> United Kingdom </h3>
                    <button className="button-dark"> See Location </button>
                </div>
            </div>
        </section>
    );
}
 
export default LocaButtons;