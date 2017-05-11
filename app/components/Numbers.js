import React, {PropTypes} from 'react';

export default class Numbers extends React.Component {
    static propTypes = {
        selectedNumbers: PropTypes.array.isRequired,
        usedNumbers: PropTypes.array.isRequired,
        selectNumber: PropTypes.func.isRequired
    };

    render() {
        const {selectedNumbers, usedNumbers, selectNumber} = this.props;
        let numbers = [];
        for (let i = 1; i <= 9; i++) {
            const selectionClass = `${selectedNumbers.indexOf(i) >= 0 ? 'selected' : ''}`;
            const usedClass = `${usedNumbers.indexOf(i) >= 0 ? 'used' : ''}`;
            numbers.push(
                <div className={`number ${selectionClass} ${usedClass}`} onClick={selectNumber.bind(null, i)}>
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