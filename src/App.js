import React from 'react';
import NavBar from "./components/navBar";
import Gallery from './components/gallery';
import InformText from './components/informText';
import FormC from './components/form';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './page-data';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = JSON.parse(data());
    }

    render(){

        let GalleryComponent = this.state.components.filter(item => item.type === 'GalleryComponent');
        // let GridComponent = this.props.data.filter(item => item.type === 'GridComponent');

        return (
            <>
                <NavBar/>
                <Gallery data={GalleryComponent}/>
                <InformText data={this.state}/>
                <FormC data={this.state.form}/>
            </>
        );
    }

}

export default App;
