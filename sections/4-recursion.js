const deepEntries = (obj) => {
  let result = [];
  for (let prop in obj) {
    if (typeof obj[prop] === "object") {
      result.push([prop, deepEntries(obj[prop])]);
    } else {
      result.push([prop, obj[prop]]);
    }
  }
  return result;
};

const deeplyEquals = (para1, para2) => {
  let result = false;

  //primitive datatypes
  if (para1 === para2) {
    result = true;
  }

  if (
    Array.isArray(para1) &&
    Array.isArray(para2) &&
    para1.length === para2.length
  ) {
    for (let i = 0; i < para1.length; i++) {
      result = deeplyEquals(para1[i], para2[i]);
    }
  }

  if (
    typeof para1 === "object" &&
    typeof para2 === "object" &&
    !Array.isArray(para1) &&
    !Array.isArray(para2) &&
    Object.keys(para1).length === Object.keys(para2).length
  ) {
    const keysAndValues1 = Object.entries(para1).flat();
    const keysAndValues2 = Object.entries(para2).flat();
    for (let i = 0; i < keysAndValues1.length; i++) {
      result = deeplyEquals(keysAndValues1[i], keysAndValues2[i]);
    }
  }
  return result;
};

const flat = () => {};

module.exports = { deeplyEquals, flat, deepEntries };
