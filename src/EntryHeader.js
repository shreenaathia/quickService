import React from 'react';
import middle from './middle.jpg'
import Carousel from 'react-bootstrap/Carousel'
import "./EntryHeader.css"

class EntryHeader extends React.Component {
    render() {
        return (
            /*
        <div className="middleHeader">
            <p>test</p>
            <img src={middle} alt="middle layer background" />
        </div>
        */
            <>
                <Carousel>
                    <Carousel.Item>
                        <div className="bgpic-1">
                            <img src={"https://vectr.com/test-pic-2/m22rY5Sk3.svg?width=900&height=600&select=m22rY5Sk3page0"
                                //"https://vectr.com/tmp/d5Xp29mlTy/baGnql2QQ.svg?width=900&height=600&select=h6LjujPcI"
                                //https://vectr.com/tmp/d5Xp29mlTy/baGnql2QQ.svg?width=3000&height=2000&select=h6LjujPcI"
                            } alt="middle layer background" />
                        </div>
                        <Carousel.Caption>
                            <h3>Description</h3>
                            <p>DescriptionDescriptionDescriptionDescriptionDescription</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="bgpic-2">
                            <img src={"https://vectr.com/test-pic-2/a3kS1djSS8.svg?width=900&height=600&select=h6LjujPcI"
                            } alt="middle layer background" />
                        </div>

                        <Carousel.Caption>
                            <h3>Description</h3>
                            <p>DescriptionDescriptionDescriptionDescriptionDescription</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>


                        <div className="bgpic-3">
                            <img src={"https://vectr.com/test-pic-2/b321xD8lib.svg?width=900&height=600&select=b321xD8libpage0"}
                                alt="middle layer background" />
                        </div>

                        <Carousel.Caption>
                            <h3>Description</h3>
                            <p>DescriptionDescriptionDescriptionDescriptionDescription</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>

        );
    }
}
export default EntryHeader;
