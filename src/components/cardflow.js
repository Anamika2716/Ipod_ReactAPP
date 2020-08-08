import React from 'react';

const CardFlow=(props)=> {
    const { handleMenuClick }=props;
    const handleClick = () => {
        handleMenuClick();
    }
    return (
        <div>
            <div className='settings-div'>
                <span className='cardflow-title'>CardFlow</span>

            </div>
            <div className='ipod-wheel'>
                <div className='menu'>
                    <button className='btn'
                            onClick={handleClick}>Menu

                    </button>
                </div>
                <button className='enter'>Enter</button>
            </div>
        </div>
    )

}
export default CardFlow;