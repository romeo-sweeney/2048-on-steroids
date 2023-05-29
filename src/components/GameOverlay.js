import React from 'react'
import TryAgainLogo from '../assets/img/try-again.gif'

const GameOverlay = ({onRestart, board}) => {
    if(board.hasWon()) {
        return <div className="tile2048"></div>;
    } else if (board.hasLost()) {
        return (
            <div className="gameOver" onClick={onRestart}>
                <img 
                    src={TryAgainLogo}
                    alt="Try Again"
                    style={{
                        width:'100%',
                        height: '100%',
                        cursor : "pointer",
                        borderRadius: 5,
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.75)"
                    }}
                />
            </div>
        );
    } else {
        return null;
    }      
}

export default GameOverlay;