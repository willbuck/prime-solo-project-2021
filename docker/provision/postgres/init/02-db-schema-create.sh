psql -v ON_ERROR_STOP=1 -U "$APP_DB_USER" -W "$APP_APP_DB_PASSWORD" -d $APP_DB_DATABASE <<-EOSQL

CREATE TABLE "user" (
                        "id" serial NOT NULL,
                        "username" varchar(255) UNIQUE,
                        "password" varchar(255),
                        "is_admin" BOOLEAN NOT NULL DEFAULT 'FALSE',
                        CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE "koan" (
                        "id" serial NOT NULL,
                        "koan_text" varchar(1000) NOT NULL,
                        CONSTRAINT "koan_pk" PRIMARY KEY ("id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE "user_koan" (
                             "id" serial NOT NULL,
                             "koan_id" int NOT NULL,
                             "user_id" int NOT NULL,
                             CONSTRAINT "user_koan_pk" PRIMARY KEY ("id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE "event" (
                         "id" serial NOT NULL,
                         "date" TIMESTAMP NOT NULL,
                         "start" int NOT NULL,
                         "duration" int NOT NULL,
                         "attended" int NOT NULL DEFAULT '0',
                         "leave_early" int NOT NULL DEFAULT '0',
                         "human_readable" varchar(255) NOT NULL,
                         "human_readable_time" varchar NOT NULL,
                         "is_complete" BOOLEAN NOT NULL DEFAULT 'false',
                         CONSTRAINT "event_pk" PRIMARY KEY ("id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE "user_event" (
                              "id" serial NOT NULL,
                              "user_id" int NOT NULL,
                              "event_id" int NOT NULL,
                              CONSTRAINT "user_event_pk" PRIMARY KEY ("id")
) WITH (
    OIDS=FALSE
);

ALTER TABLE "user_koan" ADD CONSTRAINT "user_koan_fk0" FOREIGN KEY ("koan_id") REFERENCES "koan"("id");
ALTER TABLE "user_koan" ADD CONSTRAINT "user_koan_fk1" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "user_event" ADD CONSTRAINT "user_event_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "user_event" ADD CONSTRAINT "user_event_fk1" FOREIGN KEY ("event_id") REFERENCES "event"("id");

-- To create an admin for the app, first create a new user after starting up the server and client in your terminal
-- Open the DB in Postico and manually change the value in is_admin from "false" to "true"

-- password is 'todo_change_this'
INSERT INTO "user" ( username, password, is_admin) VALUES
    ('admin', '\$2a\$10\$ISI30Q4Ir5TqWY3R9UtKIut7ZiPGzcYgFcmhHZwguNsHST6FOwicG', true),
    ('zen_buddy', '\$2a\$10\$ISI30Q4Ir5TqWY3R9UtKIut7ZiPGzcYgFcmhHZwguNsHST6FOwicG', false)
EOSQL
