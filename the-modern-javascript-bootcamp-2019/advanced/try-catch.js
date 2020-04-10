const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * 0.25;
    } else {
        throw Error('Argument must be a number'); // give more info on the errors.
    }
};

try {
    console.log(getTip(false));
} catch (e) {
   console.log('catched the error');
}
