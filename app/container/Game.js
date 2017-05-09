import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Numbers from "../components/Numbers";
import Stars from "../components/Stars";
import Answer from "../components/Answer";
import Button from "../components/Button";
import {selectNumber} from 'redux-modules/numberSelector'

 class Game extends React.Component {

    static propTypes = {
        selectedNumbers: PropTypes.array.isRequired,
        selectNumber: PropTypes.func.isRequired
    };


    acceptAnswer() {
        console.log('accept answer');
    }

    checkAnswer() {
        console.log('check answer');
    }

    render() {
        const {selectedNumbers, selectNumber} = this.props;
        let
            userNumbers = [],
            correct = true;
        return (
            <div id="game">
                <Stars numberOfStars={5}/>
                <Button correct={correct} acceptAnswer={this.acceptAnswer} checkAnswer={this.checkAnswer}/>
                <Answer selectedNumbers={selectedNumbers}/>
                <Numbers selectedNumbers={selectedNumbers} usedNumbers={userNumbers}
                         selectNumber={selectNumber}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedNumbers: state.numberSelector.selectedNumbers
});

const mapDispatchToProps = dispatch => ({
    selectNumber: () => dispatch(selectNumber())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);