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

const addTitleToDb = (id, title) => {
    const existingDataString = localStorage.getItem("bookmarked");
    const existingData = existingDataString
        ? JSON.parse(existingDataString)
        : {};

    existingData[id] = title;

    localStorage.setItem("bookmarked", JSON.stringify(existingData));
};

const getTitleFromDb = () => {
    const bookmarkdItem = localStorage.getItem("bookmarked");
    const bookmarked = JSON.parse(bookmarkdItem);
    return bookmarked;
};

export { addToDbReadTime, getReadTimeValue, addTitleToDb, getTitleFromDb };
