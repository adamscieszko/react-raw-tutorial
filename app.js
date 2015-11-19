//Constants
var CONTACT_TEMPLATE = {
    name: "",
    email: "",
    description: "",
    errors: null
};

//Initial state
var state = {
    location: null,
    transition: false,
    contacts: [
        { key: "1", name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn" },
        { key: "2", name: "Jim", email: "jim@example.com" }
    ],
    contactForms: {},
    newContact: Object.assign({}, CONTACT_TEMPLATE)
};

function setState(changes) {
    Object.assign(state, changes);

    if (state.transition) return;

    ReactDOM.render(
        React.createElement(Application, state),
        document.getElementById("react-app")
    );
}

window.addEventListener("hashchange", navigated, false);

navigated();
