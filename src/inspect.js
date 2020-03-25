
function censor(censor) {
  var i = 0;

  return function(key, value) {
    if (
      i !== 0 &&
      typeof censor === "object" &&
      typeof value === "object" &&
      censor === value
    ) {
      return "[Circular]";
    }

    // seems to be a harded maximum of 30 serialized objects?
    // if (i >= 30) {
    //   return "[Unknown]";
    // }
    // so we know we aren't using the original object anymore
    ++i;

    return value;
  };
}

const inspect = (object, name = null) => {
  let type = {}.toString.call(object).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  // let json = JSON.stringify(object, null, 2);  // let json = stringify(object, null, 2);
  let json = JSON.stringify(object, censor(object), 2);  // let json = stringify(object, null, 2);
  console.log(`Inspecting: ${name}, TYPE: ${type} --- JSON: ${json}`);
};

export default inspect;
