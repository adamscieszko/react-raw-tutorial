var ContactsView = React.createClass({
    propTypes: {
        contacts: React.PropTypes.array.isRequired,
        newContact: React.PropTypes.object.isRequired,
        onChangeContact: React.PropTypes.func.isRequired,
        onSubmitContact: React.PropTypes.func.isRequired
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
                    onChange: this.props.onChangeContact,
                    onSubmit: this.props.onSubmitContact
                })
            )
        );
    }
});
