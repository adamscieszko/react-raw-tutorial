var ContactForm = React.createClass({
    propTypes: {
        onChange: React.PropTypes.func.isRequired,
        onSubmit: React.PropTypes.func.isRequired,

        value: React.PropTypes.object.isRequired
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
        var errors = this.props.value.errors || {};

        return (
            React.createElement("form", {
                    className: "contact-form",
                    onSubmit: this.onFormSubmit,
                    noValidate: true
                },
                React.createElement("input", {
                    type: "text",
                    className: errors.name && "contact-form-error",
                    placeholder: "Name (required)",
                    value: this.props.value.name,
                    onChange: this.onNameInput,
                    ref: "name"
                }),
                React.createElement("input", {
                    type: "email",
                    className: errors.email && "contact-form-error",
                    placeholder: "Email (required)",
                    value: this.props.value.email,
                    onChange: this.onEmailInput,
                    ref: "email"
                }),
                React.createElement("textarea", {
                    placeholder: "Description",
                    value: this.props.value.description,
                    onChange: this.onDescriptionInput
                }),
                React.createElement("button", {
                    type: "submit",
                    ref: "submitContact"
                }, "Save")
            )
        );
    }
});
