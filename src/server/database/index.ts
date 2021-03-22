import * as mysql from 'mysql';
import chirpDB from './queries/chirpDB';
import users from './queries/users';
import config from '../config';

const connection = mysql.createConnection(config.mysql);

export const Query = <T=any>(query: string, values?: Array<any>) => {
  return new Promise<T>((resolve, reject) => {
    connection.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

export default {
  chirpDB,
  users
}