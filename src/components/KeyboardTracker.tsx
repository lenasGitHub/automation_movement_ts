import React, { useState, useRef, useEffect } from 'react';

const KeyboardTracker: React.FC = () => {
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [type, setType] = useState<string>('');


    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log('User pressed: ', event.key);
        setType(event.key);
    };


    const handleFocus = () => {
        setIsFocused(true);
        console.log('User inside input');
    };

    const handleBlur = () => {
        setIsFocused(false);
        console.log('User outside input');
    };

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value != null) {
            setIsTyping(true);
        }
    };

    const handleInputEnd = () => {
        setIsTyping(false);
    };

  return (
    <div className='input-container'>
    <input
        type="text"
        placeholder="Type here..."
        onKeyDown={handleKeyPress}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={(event: React.ChangeEvent<HTMLInputElement>) => handleInput(event)}
        onKeyUp={handleInputEnd}
    />
        <p>{isTyping ? `typing...` : ''} {isTyping && <b>{type}</b>}</p>
        <p>user focus: {isFocused ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default KeyboardTracker;