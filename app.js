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
        onChange: React.PropTypes.func.isRequired
    },

    render: function() {
        var oldContact = this.props.value,
            onChange = this.props.onChange;
        return (
            React.createElement("form", { className: "contact-form" },
                React.createElement("input", {
                    type: "text",
                    placeholder: "Name (required)",
                    value: this.props.value.name,
                    onChange: function (e) {
                        onChange(Object.assign({}, oldContact, { name: e.target.value }));
                    }
                }),
                React.createElement("input", {
                    type: "email",
                    placeholder: "Email",
                    value: this.props.value.email,
                    onChange: function (e) {
                        onChange(Object.assign({}, oldContact, { email: e.target.value }));
                    }
                }),
                React.createElement("textarea", {
                    placeholder: "Description",
                    value: this.props.value.description,
                    onChange: function (e) {
                        onChange(Object.assign({}, oldContact, { description: e.target.value }));
                    }
                }),
                React.createElement("button", {
                    type: "submit"
                }, "Add Contact")
            )
        );
    }
});

var ContactView = React.createClass({
    propTypes: {
        contacts: React.PropTypes.array.isRequired,
        newContact: React.PropTypes.object.isRequired,
        onNewContactChange: React.PropTypes.func.isRequired
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
                    onChange: this.props.onNewContactChange
                })
            )
        );
    }
});

/*
 * Actions
 */

function updateNewContent(contact) {
    console.log(contact);
    setState({ newContact: contact });
}

/*
 * Model
 */

var state = {};

function setState(changes) {
    Object.assign(state, changes);

    ReactDOM.render(
        React.createElement(ContactView, Object.assign({}, state, {
            onNewContactChange: updateNewContent
        })),
        document.getElementById("react-app")
    );
}

setState({
    contacts: [
        { key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn" },
        { key: 2, name: "Jim", email: "jim@example.com" }
    ],
    newContact: { name: "", email: "", description: "" }
});
