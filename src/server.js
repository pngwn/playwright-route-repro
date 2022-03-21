const polka = require("polka");
const send = require("@polka/send-type");

polka()
  .get("/config", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept, Range"
    );
    send(res, 200, { content: "real content from api" });
  })
  .listen(3456, () => {
    console.log(`> Running on localhost:3000`);
  });
