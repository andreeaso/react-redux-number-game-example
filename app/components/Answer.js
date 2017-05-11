import React, {PropTypes, Component} from 'react';

export default class Answer extends Component {
    static propTypes = {
        selectedNumbers: PropTypes.array.isRequired,
        unselectNumber: PropTypes.func.isRequired
    };

    render() {
        const {selectedNumbers, unselectNumber} = this.props;
        return (
            <div id="answer-frame">
                <div className="well">
                    {selectedNumbers.map(number => <span onClick={() => unselectNumber(number)}>{number}</span>)}
                </div>
            </div>
        );
    }
}