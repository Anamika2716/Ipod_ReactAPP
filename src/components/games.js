import React from 'react';
const Game=(props)=>{
    const {handleMenuClick}=props;

    const handleClick=()=>{
        handleMenuClick();
    }
    return(
        <div className='card2'>
          <div className='settings-div'>
              <span className='title-center'>Game</span>
             <div className='game'>

             </div>
        </div>

            <div className='ipod-wheel'>
                <div className='menu'>
                    <button className='btn' onClick={handleClick}>
                      Menu
                    </button>
                </div>
                <button className='enter'>Enter</button>
            </div>
        </div>
    )
}
export default Game;