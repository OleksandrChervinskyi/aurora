import React, {useState} from 'react';

export const SubscribeForm = () => {

    // State
    const [inputValue, setInputValue] = useState('');

    // Input Handler
    const inputHandler = (e) => {
        const {target: {value}} = e
        setInputValue(value)
    };

    return (
        <div className={'subscribe-form'}>
            <input type={'text'}
                   name={'subscribe-form'}
                   placeholder={'Your email address'}
                   value={inputValue}
                   onChange={inputHandler}/>

            <button>
                Register
            </button>
        </div>
    );
};

