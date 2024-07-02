
  # work

---

# Running the project

## Option 1: running locally

To run the workspace locally, it is necessary to execute each of the following modules separately:

### Flows (`scimgateway/`)

**Note:** To run application locally, it is necessary to update all config files authorization settings manually.

In the `scimgateway/config` folder, update each plugin file removing `"process.file./home/node/app/secrets.json"` and replace with the right authentication values:

**Lines to be updated**

```
"username": "process.file./home/node/app/secrets.json",
"password": "process.file./home/node/app/secrets.json",
```

in the `scimgateway/` folder, run the following commands:

    npm installl
    node index.js


### Gateway (`gateway/`)

in the `gateway/` folder, run the following commands:

    npm installl
    node index.js

## Option 2: running using Docker

To execute the workspace using Docker containers, navigate to the root folder of the project and run the following command:

```
docker compose up --build
```
 
