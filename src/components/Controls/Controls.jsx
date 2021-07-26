import React from 'react';

export const Controls = ({onClickGood, onClickNeutral, onClickBad}) => (
    <div>
        <button
            type='button'
            onClick={onClickGood}
                >
                    Good
        </button>
        
                  
        <button   
            type='button'
            onClick={onClickNeutral}
                >
                    Neutral
        </button>
        
                  
        <button
            type='button'       
            onClick={onClickBad}
                >
                    Bad
        </button>
    </div>
     
)