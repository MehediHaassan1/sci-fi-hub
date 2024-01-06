const addToDbReadTime = (time) => {
    let readTime = { time: 0 };
    readTime.time = time;
    localStorage.setItem("read-time", JSON.stringify(readTime));
};

const getReadTimeValue = () => {
    const getValue = localStorage.getItem("read-time");
    const getTime = JSON.parse(getValue);
    return getTime;
};

export { addToDbReadTime, getReadTimeValue };
