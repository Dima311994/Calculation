export const roundNum = (str) => {
  return str.length > 1 ? str.slice(0, -1) : "0";
};

export const sliceNum = (num) => parseFloat(num.toFixed(2));
