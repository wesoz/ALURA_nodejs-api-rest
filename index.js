const customExpress = require("./config/customExpress");

const app = customExpress();

app.listen(3000, () => console.log("Server running at port 3000"));

