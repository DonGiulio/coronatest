let data = require('@begin/data')
const date = require('date-and-time');

exports.handler = async function http (req) {
  console.log('Begin API called')
    const when = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss,SSS'); 
    const suffix = Math.floor(Math.random()*1000000)

    const table = 'accesses';
    const scopeID = date + "_" + suffix;
    const values = JSON.stringify({
          time: date,
          headers: req.headers,
        });

    console.log("setting values");
    try{
      const result = await data.set({table, scopeID, values})
    } catch(err) {
      console.log(err);
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
