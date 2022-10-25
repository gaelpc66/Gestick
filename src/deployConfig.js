import parseDatabaseUrl from "parse-database-url"

export const PORT = process.env.PORT || 3000

export const dbConfig = process.env.MYSQLURL || "mysql://root:n0m3l0@localhost:3306/Gestick"