var ContactsView = React.createClass({
    propTypes: {
        onChangeContact: React.PropTypes.func.isRequired,
        onSubmitContact: React.PropTypes.func.isRequired,

        contacts: React.PropTypes.array.isRequired,
        newContact: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            React.createElement("div", { className: "contact-view" },
                React.createElement("h1", { className: "contact-view-title" }, "Contacts"),
                React.createElement("ul", { className: "contact-view-list" },
                this.props.contacts.map(
                    contact => React.createElement(ContactItem, Object.assign(contact, { id: contact.key }))
                )),
                React.createElement(ContactForm, {
                    value: this.props.newContact,
                    onChange: this.props.onChangeContact,
                    onSubmit: this.props.onSubmitContact
                })
            )
        );
    }
});
