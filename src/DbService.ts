import { JSONFile, Low } from "lowdb/lib";

type Data = {
  posts: object;
};

export default class DbService {
  db: any;

  constructor() {
    const adapter = new JSONFile<Data>(".data/db.json");
    this.db = new Low<Data>(adapter);
  }

  find = async (tableName: string, key: string): Promise<any> => {
    const values = await this.db.data[tableName][key];
    return values;
  };

  add = async (tableName: string, key: string, value: number): Promise<any> => {
    const tableData = await this.db.data[tableName];
    const newData = {};
    newData[key] = value;
    tableData.push(newData);
    return await this.db.set(tableName, tableData).write();
  };

  update = async (
    tableName: string,
    key: string,
    value: number
  ): Promise<any> => {
    const newValue = value == 1 ? 0 : 1;
    return await this.db
      .get(tableName)
      .find({ id: key })
      .assign({ value: newValue })
      .write();
  };
}
