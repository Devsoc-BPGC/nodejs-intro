# nodejs-intro
Code for following along  DevSoc session on building APIS with nodejs and expressjs

## Installation
* Install `node`
* Install `mongodb` or use `mongodb Atlas`


The session is divided into 6 parts. We will progressively build our **tiny** "blog" app through this session.
You need to `git checkout` the branch you of the part we are working on and you are good to go.

The order of branch to be followed is:
1) `basic_setup` - Get a feel of `expressjs` and get a server on you laptop up and running.
2) `add_basic_routes` - Add simple routes for common http verbs like `GET`, `POST`, etc.
3) `add_schema` - Use mongoose and get make a schema for storing your posts in a database by making a schema.
4) `add_crud_for_posts` - Connect your routes with database.
5) `add_user_schema`- Add another schema to store users in the database
6) `login/signup`- Add basic login/signup feature with `bcryptjs` and `jsonwebtoken`.

