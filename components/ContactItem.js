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
