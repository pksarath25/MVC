'use strict';

const el = React.createElement;

class HelloWorldJSX extends React.Component {
    render() {
        return (React.createElement("h3", null, "Hello World"));
    }
}


const domContainerEl = document.querySelector('#hello_world_container');
ReactDOM.render(el(HelloWorldJSX), domContainerEl);