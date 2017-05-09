import React, {PropTypes} from 'react';

export default class Answer extends React.Component {
    static propTypes = {
        selectedNumbers: PropTypes.array.isRequired
    };

    render() {
        const {selectedNumbers} = this.props;
        let numbers = [];
        selectedNumbers.map(number => {
            numbers.push(<span>{number}</span>)
        });
        return (
            <div id="answer-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>
        );
    }
}