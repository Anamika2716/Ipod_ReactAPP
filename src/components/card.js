import React from 'react';

class Card extends React.Component
{
    handleWheelClick=(e)=>{

        console.log("props", this.props);
        const{ handleGesture }=this.props;
        handleGesture(e);
    }
    handlemenuClick=()=>{
        const {handleMenuClick}=this.props;
        handleMenuClick();
    }

    handleEnterClick=()=>{
        const {handleClick}= this.props;
        handleClick();
    }
    render() {
        const {
            showCardFlow,
            showGame,
            showMusic,
            showSetting
        }=this.props;
        return (

            <div>
                <div className='card'>
                    <p className='title'>Ipod</p>
                    <div className={`card-list ${showCardFlow ? 'active' : ''}`}>
                        cardflow
                    </div>
                    <div className={`card-list ${showMusic ? 'active' : ''}`}>
                        Music
                    </div>
                    <div className={`card-list ${showGame ? 'active' : ''}`}>
                        GAME
                    </div>
                    <div className={`card-list ${showSetting ? 'active' : ''}`}>
                        Settings
                    </div>
                </div>

                <div className='ipod-wheel'
                     onClick={this.handleWheelClick}>
                    <div className='menu'>
                        <button className='btn'
                                onClick={this.handleMenuClick}>
                            MENU
                        </button>
                    </div>

                    <button className='enter' onClick={this.handleEnterClick}>Enter</button>

                </div>
            </div>
        )
    }
}
export default Card;