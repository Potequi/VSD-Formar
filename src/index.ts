import express from "express";
import { mainModule } from "process";
import { sequelize } from "./config/database";
import { userInfo } from "os";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});



main()

async function main() {
  if (require.main === module) {
    await sequelize.sync({force: true}).then(() => {
    console.log("Database is synced");
    app.listen(port, ()=>
    console.log('listening at http://localhost:${port}'),
  );
  
  });


  //criar usuario
  const user = await user.create({ name: 'alice', email: 'alice@email,com'});
  console.log("Usuario criado:", user.toJSON());
});

