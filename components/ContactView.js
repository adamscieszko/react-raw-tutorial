var ContactView = React.createClass({
    propTypes: {
        contacts: React.PropTypes.array.isRequired,
        id: React.PropTypes.string.isRequired,
    },

    render: function() {
        var key = this.props.id;
        var contactForm = this.props.contacts.filter(contact => contact.key == key)[0];

        return (
            !contactForm ? React.createElement("h1", {}, "Not Found")
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
