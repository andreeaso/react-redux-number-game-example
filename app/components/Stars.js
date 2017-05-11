import React, {PropTypes} from 'react';

export default class Stars extends React.Component {
    static propTypes = {
        numberOfStars: PropTypes.number.isRequired
    };

    render() {
       const {numberOfStars} = this.props;
        return (
            <div id="stars-frame">
                <div className="well">
                    {[...Array(numberOfStars).keys()].map(number => <span>*</span>)}
                </div>
            </div>
        );
    }
}