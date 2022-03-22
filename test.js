import handleError from './index.js';

const err = new Error([`Something Went Wrong`]);
handleError(`Got an error`, err);
