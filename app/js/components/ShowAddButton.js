var React = require("react");

class ShowAddButton extends React.Component {
    render() {
        return (
            <button id="add-question-btn" className="btn btn-success" onClick={this.props.onToggleForm}>添加问题</button>
        )
    }
}

module.exports = ShowAddButton;