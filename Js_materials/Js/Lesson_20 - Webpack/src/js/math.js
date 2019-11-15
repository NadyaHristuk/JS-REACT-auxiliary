const sum = (...args) => args.reduce((acc, el) => acc + el);

const minus = (...args) => args.reduce((acc, el) => acc - el);

const pow = (a, b) => Math.pow(a, b);

export {
    minus,
    pow
};

export default sum;