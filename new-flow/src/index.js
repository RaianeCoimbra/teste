const fastify = require("fastify");
  const app = fastify({ logger: true });
  const dotenv = require("dotenv");

  app.register(require("@fastify/cors"), {
    origin: "*"
  })
  
  
  dotenv.config();
  
  const port = process.env.PORT || 3000;

  app.addHook("onRequest", (request, reply, done) => {
    reply.header('x-qip-version', "0.4.0");
    done();
  });
  


  


  
  

  
  
  app.listen({ host: "0.0.0.0", port: port }, (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }  
  
    console.log("=".repeat(30));
    console.log(`Server running on port ${port}`);
    console.log("=".repeat(30));
  });
  