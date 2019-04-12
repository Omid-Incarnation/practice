import React, {Component} from 'react';
import Data from './Components/Data'

class App extends Component {
    state = {
        title: Data[0].title,
        coverImg: Data[0].coverImg,
        description: Data[0].description,
        hashtags: Data[0].hashtags
    }

    render() {
        const {title, coverImg, description, hashtags} = this.state
        return (
            <React.Fragment>
                <div className="container mx-auto row rounded shadow p-3 mb-5 bg-white">
                    <div className="col-lg-9 col-md-8 col-sm-12 my-3">
                        <div
                            className=" p-1 overflow-hidden"
                            style={{
                            height: "12rem"
                        }}>
                            <h2>{title}</h2>
                            {description}
                        </div>
                        <ul className="list-unstyled list-inline mt-5 bg-danger">
                            <li
                                className="list-inline-item border border-primary rounded px-2 mr-2 my-1  text-primary">
                                #first
                            </li>
                            <li
                                className="list-inline-item border border-primary rounded px-2 mr-2 my-1 text-primary">
                                #Second
                            </li>
                            <li
                                className="list-inline-item border border-primary rounded px-2 mr-2 my-1 text-primary">
                                #Third
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 my-3">
                        <img src={coverImg} className="mx-auto d-block shadow-sm rounded" alt={title}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
