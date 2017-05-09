import React, {PropTypes} from 'react';

export default class Button extends React.Component {
    static propTypes = {
        correct: PropTypes.bool.isRequired,
        acceptAnswer: PropTypes.func.isRequired,
        checkAnswer: PropTypes.func.isRequired
    };

    render() {
        let button = null;
        switch (this.props.correct) {
            case true:
                button = (
                    <button className="btn btn-success btn-lg"
                            onClick={this.props.acceptAnswer}>
                       OK
                    </button>
                );
                break;
            case false:
                button = (
                    <button className="btn btn-danger btn-lg">
                       Remove
                    </button>
                );
                break;
            default:
                disabled = (this.props.selectedNumbers.length === 0);
                button = (
                    <button className="btn btn-primary btn-lg" disabled={disabled}
                            onClick={this.props.checkAnswer}>
                        =
                    </button>
                );
        }
        return (
            <div id="button-frame">
                {button}
            </div>
        );
    }
}