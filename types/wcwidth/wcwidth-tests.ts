import wcwidth = require('wcwidth');

const length1 = wcwidth('ν');   // => 2

const length2 = wcwidth('νκΈ'); // => 4
