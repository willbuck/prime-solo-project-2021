This file tracks changes from the original repo:
- 2021-2-24 willbuck
  - adds cypress
  - adds an e2e test
  - used this for reference: // https://callstack.com/blog/testing-react-app-with-cypress/
  
- 2021-2-23 willbuck
  - adds a unit test 

- 2021-2-23 willbuck
    - Adds changelog, todo
    - Adds docker-compose to run postgres in a container
    - Adds init scripts for postgres user, db, schema & sample users
    - Modifies `server/modules/pool.js` to utilize env vars to connect to containerized psql  
    - Modifies README w/ instructions how to pass env vars to server process
