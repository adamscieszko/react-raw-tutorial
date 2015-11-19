var ContactView = React.createClass({
    propTypes: {
        onChangeContact: React.PropTypes.func.isRequired,
        onSubmitContact: React.PropTypes.func.isRequired,

        contacts: React.PropTypes.array.isRequired,
        contactForms: React.PropTypes.object.isRequired,
        id: React.PropTypes.string.isRequired,
    },

    render: function() {
        var key = this.props.id;
        var contactForm =
            this.props.contactForms[key] ||
            this.props.contacts.filter(contact => contact.key == key)[0];

        return (
            !contactForm ? React.createElement(NotFoundView)
                : React.createElement("div", { className: "contact-view" },
                    React.createElement("h1", { className: "contact-view-title" }, "Edit Contact"),
                    React.createElement(ContactForm, {
                        value: contactForm,
                        onChange: this.props.onChangeContact,
                        onSubmit: this.props.onSubmitContact
                    })
                  )
        );
    },
});
