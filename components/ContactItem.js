var ContactItem = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
    },

    render: function() {
        return (
            React.createElement("div", { className: "contact-item" },
                React.createElement("a", { className: "contact-item-name", href: "#/contacts/" + this.props.id }, this.props.name),
                React.createElement("div", { className: "contact-item-email" }, this.props.email),
                React.createElement("div", { className: "contact-item-description" }, this.props.description)
            )
        );
    }
});
