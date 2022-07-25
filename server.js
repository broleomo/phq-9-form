const app = require('./index')
const dbo = require('./db/conn');

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
    if (err) {
      console.error(err);
      process.exit();
    }
  
    // start the Express server
    app.listen(5000, () => {
      console.log(`Server is running on port: 5000`);
    });
  });