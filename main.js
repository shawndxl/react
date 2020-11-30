import {ToyedReact, Compoent} from './ToyReact.js';

class MyC extends Compoent {
    render() {
        return (
            <div>
                <h1>hello world</h1>
                <h2>sss world</h2>
                <div>
                    {this.children}
                </div>
            </div>
        )
    }
}

ToyedReact.render(
    <MyC></MyC>, document.body
);

//