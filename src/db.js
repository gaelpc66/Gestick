import createPool from mysql2
import dbConfig from "./deployConfig.js"

dataBase = createPool(dbConfig)

