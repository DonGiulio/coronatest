let data = require('@begin/data')
const date = require('date-and-time');

exports.handler = async function http (req) {
  console.log('Begin API called')
  const when = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss,SSS'); 
  const suffix = Math.floor(Math.random()*1000000)

  const table = 'data';
  const scopeID = date + "_" + suffix;
  const dataID = JSON.stringify({
        type: "access", 
        time: date,
        headers: req.headers,
      });

  console.log("setting values");
  var result;
  try{
    result = await data.set({table, scopeID, dataID})
  } catch(err) {
    console.log("Error: " , err);
    return {
      headers: {
        'content-type': 'application/json; charset=utf8',
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
      },
      body: JSON.stringify({
        message: 'not ok',
        cause: err
      })
    }
  }

  console.log("result ", result);
  return {
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      message: 'ok'
    })
  }
}
