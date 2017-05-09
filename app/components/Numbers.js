import React, {PropTypes} from 'react';

export default class Numbers extends React.Component {
    static propTypes = {
        selectedNumbers: PropTypes.array.isRequired,
        usedNumbers: PropTypes.array.isRequired,
        selectNumber: PropTypes.func.isRequired
    };

    render() {
        const {selectedNumbers, usedNumbers, selectNumber} = this.props;
        let className = '', numbers = [];
        for (let i = 1; i <= 9; i++) {
            className = "number selected-" + (selectedNumbers.indexOf(i) >= 0);
            className += " used-" + (usedNumbers.indexOf(i) >= 0);
            numbers.push(
                <div className={className} onClick={selectNumber.bind(null, i)}>
                    {i}
                </div>
            );
        }
        return (
            <div id="numbers-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>
        );
    }
}