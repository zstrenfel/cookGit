/**
 * Idea taken from github/GordyD 3REE stack application tutorial
 * https://github.com/GordyD/3ree
 */

import r from 'rethinkdb'

let DATABASE = 'CookApp';
let TABLES = ['recipes', 'users', 'comments'];

r.connect({db: DATABASE})
  .then(conn => {
    console.log("*** Database Setup ***");
    return createDbIfNotExist(conn)
      .then(() => Promise.all(TABLES.map((table) => createTableIfNotExists(conn, table))))
      .then(() => closeConnection(conn));
  })


function createDbIfNotExist(conn) {
  return getDbList(conn)
    .then((list) => {
      if(list.indexOf(DATABASE) === -1) {
        return createDatabase(conn);
      } else {
        console.log("[!] Databse already exists:", DATABASE);
        Promise.resolve(true);
      }
    });
}

function createTableIfNotExists(conn, table) {
  return getTableList(conn)
    .then((list) => {
      if(list.indexOf(table) === -1) {
        return createTable(conn, table);
      } else {
        console.log('[!] Table already exists:', table);
        Promise.resolve(true);
      }
    });
}

function getDbList(conn) {
  return r.dbList().run(conn);
}

function getTableList(conn) {
  return r.db(DATABASE).tableList().run(conn);
}

function createDatabase(conn) {
  console.log('[-] Creating Database with name: ', DATABASE);
  return r.dbCreate(DATABASE).run(conn);
}

function createTable(conn, table) {
  console.log('[-] Creating Table with name: ', table);
  return r.db(DATABASE).tableCreate(table).run(conn);
}

function closeConnection(conn) {
  console.log('[x] Closing Connection Now');
  return conn.close();
}
