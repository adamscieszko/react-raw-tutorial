var Application = React.createClass({
    propTypes: {
        location: React.PropTypes.array.isRequired
    },

    render: function() {
        switch (this.props.location[0]) {
            case "contacts":
                if (this.props.location[1]) {
                    return React.createElement(ContactView, Object.assign({}, this.props, {
                        id: this.props.location[1],
                        onChangeContact: updateContactForm,
                        onSubmitContact: submitContactForm
                    }));
                }
                else {
                    return React.createElement(ContactsView, Object.assign({}, this.props, {
                        onChangeContact: updateNewContent,
                        onSubmitContact: submitNewContent
                    }));
                }
                break;
            default:
                return React.createElement(NotFoundView , {});
        }
    }
});