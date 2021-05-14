const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ])
}


const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {id : "my-brand"}, "Adopt Me!"),
            React.createElement(Pet, {name: "Paşa", animal: "Dog", breed:"Golden" }),
            React.createElement(Pet, {name: "Pepper", animal: "Bird", breed:"Cocktiel" }),
            React.createElement(Pet, {name: "Sudo", animal: "Dog", breed:"Terrier" }),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));