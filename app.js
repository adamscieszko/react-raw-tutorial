/*
 * Components
 */

var ContactItem = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
    },

    render: function() {
        return (
            React.createElement("li", { className: "contact-item" },
                React.createElement("h2", { className: "contact-item-name" }, this.props.name),
                React.createElement("a", { className: "contact-item-email", href: "mailto:" + this.props.email }, this.props.email),
                React.createElement("div", { className: "contact-item-description" }, this.props.description)
            )
        );
    }
});

var ContactForm = React.createClass({
    propTypes: {
        value: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSubmit: React.PropTypes.func.isRequired
    },

    onNameInput: function(e) {
        this.props.onChange(Object.assign({}, this.props.value, { name: e.target.value }));
    },

    onEmailInput: function(e) {
        this.props.onChange(Object.assign({}, this.props.value, { email: e.target.value }));
    },

    onDescriptionInput: function(e) {
        this.props.onChange(Object.assign({}, this.props.value, { description: e.target.value }));
    },

    onFormSubmit: function(e) {
        e.preventDefault();
        this.props.onSubmit();
    },

    render: function() {
        return (
            React.createElement("form", {
                    className: "contact-form",
                    onSubmit: this.onFormSubmit,
                    noValidate: true
                },
                React.createElement("input", {
                    type: "text",
                    placeholder: "Name (required)",
                    value: this.props.value.name,
                    onChange: this.onNameInput
                }),
                React.createElement("input", {
                    type: "email",
                    placeholder: "Email",
                    value: this.props.value.email,
                    onChange: this.onEmailInput
                }),
                React.createElement("textarea", {
                    placeholder: "Description",
                    value: this.props.value.description,
                    onChange: this.onDescriptionInput
                }),
                React.createElement("button", {
                    type: "submit",
                }, "Add Contact")
            )
        );
    }
});

var ContactView = React.createClass({
    propTypes: {
        contacts: React.PropTypes.array.isRequired,
        newContact: React.PropTypes.object.isRequired,
        onNewContactChange: React.PropTypes.func.isRequired,
        onNewContactSubmit: React.PropTypes.func.isRequired
    },

    render: function() {
        var contactItemElements = this.props.contacts
        .filter(contact => contact.email)
        .map(contact => {
            return React.createElement(ContactItem, contact);
        });

        return (
            React.createElement("div", { className: "contact-view" },
                React.createElement("h1", { className: "contact-view-title" }, "Contacts"),
                React.createElement("ul", { className: "contact-view-list" }, contactItemElements),
                React.createElement(ContactForm, {
                    value: this.props.newContact,
                    onChange: this.props.onNewContactChange,
                    onSubmit: this.props.onNewContactSubmit
                })
            )
        );
    }
});

/*
 * Constants
 */

var CONTACT_TEMPLATE = {name: "", email: "", description: "", errors: null};

/*
 * Actions
 */

function updateNewContent(contact) {
    setState({ newContact: contact });
}

function submitNewContent() {
    var contact = Object.assign({}, state.newContact, { key: state.contacts.length + 1, errors: {} });

    if (contact.name && contact.email) {
        setState(
            Object.keys(contact.errors).length === 0 ? {
                newContact: Object.assign({}, CONTACT_TEMPLATE),
                contacts: state.contacts.slice(0).concat(contact)
            }
            : {
                newContact: contact
            }
        );
    }
}

/*
 * Model
 */

var state = {};

function setState(changes) {
    Object.assign(state, changes);

    ReactDOM.render(
        React.createElement(ContactView, Object.assign({}, state, {
            onNewContactChange: updateNewContent,
            onNewContactSubmit: submitNewContent
        })),
        document.getElementById("react-app")
    );
}

setState({
    contacts: [
        { key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn" },
        { key: 2, name: "Jim", email: "jim@example.com" }
    ],
    newContact: Object.assign({}, CONTACT_TEMPLATE),
});
