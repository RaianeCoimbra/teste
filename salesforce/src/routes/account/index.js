const utils = require("../../utils");
  
  
  
async function routes(app, options) {
    app.get("/", async (request, response) => {
      
      let step;
      let result;
      let requestConfig;
      let headerMapping;
      let payloadMapping;
      let responseMapping;
      let mongoDBService;
      let id;
      let engine;
      let conditions;
      let childSpan;  
      let repository;    
      try {
        // Salesforce Get All
      step = 'Salesforce Get All'
      
      result = await
    app.salesforce.sobject("account").find()
    
 
    
      // Simple Outbound
      step = 'Simple Outbound'
      return result


      } catch (err) {
        if (childSpan) {
          childSpan.setStatus({
            code: api.SpanStatusCode.ERROR,
            message: err.message,
          });
          childSpan.end();
        }
        err.message = `error in node ${step} - ${err.message}`
        return err
      }
    });
}
  
module.exports = routes;
  