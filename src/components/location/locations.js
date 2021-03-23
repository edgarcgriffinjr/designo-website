import React from 'react'

const Locations = () => {
    return ( 
        <section className="location-grid">
            <div className="location-grid-box">
                <div className="text-box">
                    <h2> Canada </h2>
                    <div className="location-design"> 
                        <div className="content-left">
                                <p> Design Central Office </p>
                                <p> 3886 Wellington Street </p>
                                <p> Toronto, Ontario M9C 3J5 </p>
                        </div>
                        <div className="content-right">
                            <p> Contact Us (Central Office)</p>
                            <p> P: +1 253-863-8967 </p>
                            <p> M: contact@designo.co </p>
                        </div>
                    </div>
                </div>

                <div className="img-box-ca"> </div>
            </div>

            <div className="location-grid-box">
                <div className="img-box-au"> </div>
                <div className="text-box">
                    <h2> Australia </h2>
                    <div className="location-design">
                        <div className="content-left">
                            <p> Design AU Office </p>
                            <p> 19 Balonne Street </p>
                            <p> New South Wales 2443 </p>
                        </div>
                        <div className="content-right">
                            <p> Contact</p>
                            <p> P: (02) 6720 9092 </p>
                            <p> M: contact@designo.au </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="location-grid-box">
                <div className="text-box">
                    <h2> United Kingdom </h2>
                    <div className="location-design">
                        <div className="content-left">
                            <p> Design UK Office </p>
                            <p> 13 Colorado Way </p>
                            <p> Rhyd-y-fro SA8 9GA </p>
                        </div>
                        <div className="content-right">
                            <p> Contact</p>
                            <p> P: 078 3115 1400 </p>
                            <p> M: contact@designo.uk </p>
                        </div>
                    </div>
                </div>

                <div className="img-box-uk"> </div>
            </div>
        </section>
    );
}
 
export default Locations;