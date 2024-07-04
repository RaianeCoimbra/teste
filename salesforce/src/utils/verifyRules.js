const { Engine } = require("json-rules-engine");

function formatEngineCondition(conditions) {
  return conditions.map((cd) => {
    return `${cd.fact} ${cd.operator} ${cd.value}`;
  });
}

function createEngine(conditions) {
  let engine = new Engine();

  engine.addRule({
    conditions: {
      all: conditions,
    },
    onSuccess() {
      return;
    },
    onFailure() {
      throw new Error("verification failed");
    },
    event: {
      type: "message",
    },
  });

  return engine;
}

module.exports = { formatEngineCondition, createEngine };
