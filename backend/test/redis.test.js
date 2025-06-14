const redis = require("../Connections/redis.connect");

redis.set("key", "hello world");

redis.get("key").then(function (result) {
  console.log(`The value of key is: ${result}`);
  redis.disconnect();
});