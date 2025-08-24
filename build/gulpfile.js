const { task } = require("gulp");

function helloWorld(done) {
  console.log("👋 Hello World from Gulp!");
  done();
}

// Explicitly register the task
task("hello", helloWorld);
task("default", helloWorld);
