import React, {PropTypes} from 'react';

export default class Stars extends React.Component {
    static propTypes = {
        numberOfStars: PropTypes.number.isRequired
    };

    render() {
        let stars = [];
        for (let i = 0; i < this.props.numberOfStars; i++) {
            stars.push(
                <span>*</span>
            );
        }
        return (
            <div id="stars-frame">
                <div className="well">
                    {stars}
                </div>
            </div>
        );
    }
}