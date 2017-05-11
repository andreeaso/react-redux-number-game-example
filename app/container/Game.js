import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Numbers from "../components/Numbers";
import Stars from "../components/Stars";
import Answer from "../components/Answer";
import Button from "../components/Button";
import {selectNumber, unselectNumber, checkAnswer, redraw} from 'redux-modules/game'

 class Game extends React.Component {

    static propTypes = {
        selectedNumbers: PropTypes.array.isRequired,
        selectNumber: PropTypes.func.isRequired,
        unselectNumber: PropTypes.func.isRequired,
        numberOfStars: PropTypes.number.isRequired,
        checkAnswer: PropTypes.func.isRequired,
        correct: PropTypes.bool.isRequired,
        usedNumbers: PropTypes.array.isRequired,
        redraw: PropTypes.func.isRequired,
        redraws: PropTypes.number.isRequired,
        gameWon: PropTypes.bool
    };


    render() {
        const {selectedNumbers, selectNumber, unselectNumber, numberOfStars, checkAnswer, correct, usedNumbers, redraw, redraws, gameWon} = this.props;
        let bottomFrame;
        if(gameWon){
            bottomFrame =  <div className="well text-center">Game won!</div>
        }else{
            bottomFrame = <Numbers selectedNumbers={selectedNumbers} usedNumbers={usedNumbers}
                                   selectNumber={selectNumber}/>
        }
        return (
            <div id="game">
                <Stars numberOfStars={numberOfStars}/>
                <Button correct={correct} acceptAnswer={this.acceptAnswer} checkAnswer={checkAnswer} redraw={redraw} redraws={redraws}/>
                <Answer selectedNumbers={selectedNumbers} unselectNumber={unselectNumber}/>
                {bottomFrame}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedNumbers: state.numbers.selectedNumbers,
    numberOfStars: state.numbers.stars,
    usedNumbers: state.numbers.usedNumbers,
    correct: state.numbers.correct,
    redraws: state.numbers.redraws,
    gameWon: state.numbers.gameWon
});

const mapDispatchToProps = dispatch => ({
    selectNumber: (number) => dispatch(selectNumber(number)),
    unselectNumber: (number) => dispatch(unselectNumber(number)),
    checkAnswer: () => dispatch(checkAnswer()),
    redraw: () => dispatch(redraw())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);