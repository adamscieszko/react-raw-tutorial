var NotFoundView = React.createClass({
    propTypes: {},

    render: function() {
        return (
            React.createElement("div", {},
                React.createElement("h1", {}, "Not found"),
                React.createElement("a", { href: "#/contacts" }, "Contacts")
            )
        );
    }
});
