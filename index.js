"use strict";
const preciseToNfractionals = (number, digits) => {
    try {
        if (typeof (number) === 'number') {
            if (Number.isInteger(digits) && digits >= 0) {
                if (number >= 0) {
                    const output = Number(Math.floor(Number(number + `e${digits}`)) + `e-${digits}`);
                    return output;
                }
                else {
                    const output = Number(Math.ceil(Number(number + `e${digits}`)) + `e-${digits}`);
                    return output;
                }
            }
            else {
                throw 'digits should be valid positive integer';
            }
        }
        else {
            throw 'number should be valid number';
        }
    }
    catch (err) {
        console.error(err);
    }
};
module.exports = preciseToNfractionals;
