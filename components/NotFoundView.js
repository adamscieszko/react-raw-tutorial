var NotFoundView = React.createClass({
    propTypes: {},

    render: function() {
        return (
            React.createElement("div", { className: "not-found-view" },
                React.createElement("h1", { className: "not-found-view-title" }, "Not Found")
            )
        );
    }
});
