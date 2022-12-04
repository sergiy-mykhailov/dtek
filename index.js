const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
}

const generate = () => {
    const hours = (`0${getRandom(0, 24)}`).slice(-2);
    const minutes = (`0${getRandom(0, 60)}`).slice(-2);

    return `${hours}:${minutes}`;
}

module.exports = {
    generate
};
