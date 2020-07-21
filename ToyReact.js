class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);

    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(vchild) {
        vchild.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

class Compoent {
    constructor() {
        this.children = [];
    }
    setAttribute(name, value) {
        this[name] = value;
    }
    mountTo(parent) {
        let vdom = this.render();
        vdom.mountTo(parent);
    }
    appendChild(vchild) {
        this.child.push(vchild)
    }
}


const ToyedReact = {
    createElement(type, attributes, ...children) {
        console.log(arguments);
        let element;
        if (typeof type === 'string') {
            element = new ElementWrapper(type);
        } else {
            element = new type;
        }

        for (let name in attributes) {
            element.setAttribute(name, attributes[name]);
        }        
        let insertChildren = (children) => {
            if (typeof children === 'string') {
                children = new TextWrapper(children);
            }
            if (toString.call(children) === '[object Array]') {
                children.forEach(child => {
                    insertChildren(child);    
                });
            } else {
                element.appendChild(children);   
            }
        }
        insertChildren(children);
        return element;
    },
    render(vdom, element) {
        vdom.mountTo(element);
        // element.appendChild(vdom);
    }
}

export {
    ToyedReact,
    Compoent
};