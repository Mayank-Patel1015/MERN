/*
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";

const insertData1 = { first_name: "John", last_name: "Doe" };

const expectedA = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};

const expectedB =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, -1);";

// create empty array keys
// create empty array values
// for key in insertData
//   add key to array
// for value in insertData
//   add value to array
// return a string following the scheme: "INSERT INTO users 'keys' VALUES 'values';"


// R.I.O.T.
// DRIVER 🚗
// PRESENTER 🧑‍🏫
// NAVIGATOR 🧭
function insert(tableName, columnValuePairs) {
  let keys = []
  let values = []

  for (let key in columnValuePairs) {
    keys = keys.concat(key)
  }

  let v = Object.values(columnValuePairs)
  for (let i = 0; i < v.length; i++) {
    if (typeof v[i] == "boolean") {
      if (v[i] == false) {
        v[i] = -1
      }
      if (v[i] == true) {
        v[i] = 1
      }
    }
    values = values.concat(v[i])
  }
  valueString = ""
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] == "string") {
      valueString += ("'" + values[i] + "',")
    }
    else {
      valueString += (values[i] + ",")
    }
  }
  valueString = valueString.slice(0, valueString.length - 1)
  console.log(valueString)
  return (
    `INSERT INTO ${tableName} (${keys.toString()}) VALUES (${valueString});`
  )
}

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));