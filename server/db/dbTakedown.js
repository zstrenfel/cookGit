import r from 'rethinkdb'

let DATABASE = 'CookApp';

r.connect({db: DATABASE})
  .then(conn => {
    console.log("*** Database Takedown ***");
    return doesDbExist(conn)
      .then(() => closeConnection(conn));
  })

function doesDbExist(conn) {
  return getDbList(conn)
    .then((list)=> {
      if(list.indexOf(DATABASE) === -1) {
        console.log("[!] Databse doesn't exists:", DATABASE);
        Promise.resolve(true);
      } else {
        return deleteDb(conn);
      }
    })
}

function deleteDb(conn) {
  console.log("[!] Deleting Database:", DATABASE);
  return r.dbDrop(DATABASE).run(conn);
}

function getDbList(conn) {
  return r.dbList().run(conn);
}

function closeConnection(conn) {
  console.log('[x] Closing Connection Now');
  return conn.close();
}