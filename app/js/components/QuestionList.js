var React = require("react");

var QuestionItem = require("./QuestionItem");

class QuestionList extends React.Component {
    render() {
        var questions = this.props.questions;
        if (!Array.isArray(questions)) throw new Error("this.props.questions必须是数组");

        var QuestionComps = questions.map((qst)=> {
            return <QuestionItem key={qst.key} questionKey={qst.key} title={qst.title} description={qst.description} voteCount={qst.voteCount} onVote={this.props.onVote} />
        });

        return (
            <div id="questions" className="">
                {QuestionComps}
            </div>
        )
    }
}

module.exports = QuestionList;