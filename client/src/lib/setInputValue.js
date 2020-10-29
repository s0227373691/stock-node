const setInputValue = (e, setValueFunction) => {
    const inputValue = e.target.value;
    setValueFunction(inputValue);
};

export default setInputValue;
