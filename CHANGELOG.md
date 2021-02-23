This file tracks changes from the original repo:

- 2021-2-23 willbuck
    - Adds changelog, todo
    - Adds docker-compose to run postgres in a container
    - Adds init scripts for postgres user, db, schema & sample users
    - Modifies `server/modules/pool.js` to utilize env vars to connect to containerized psql  
    - Modifies README w/ instructions how to pass env vars to server process
