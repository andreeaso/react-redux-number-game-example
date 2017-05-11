import React, {PropTypes} from 'react';

export default class Button extends React.Component {
    static propTypes = {
        correct: PropTypes.bool.isRequired,
        acceptAnswer: PropTypes.func.isRequired,
        checkAnswer: PropTypes.func.isRequired,
        redraw: PropTypes.func.isRequired,
        redraws: PropTypes.number.isRequired
    };

    render() {
        const {correct, checkAnswer, redraw, redraws} = this.props;

        return (
            <div id="button-frame">
                <button className="btn btn-primary btn-lg" onClick={checkAnswer}>
                    =
                </button>
                <br /><br />
                <button className="btn btn-warning btn-xs" onClick={redraw}
                        disabled={redraws === 0}>
                    <span className="glyphicon glyphicon-refresh">Redraw</span>
                    &nbsp;
                    {redraws}
                </button>
            </div>
        );
    }
}