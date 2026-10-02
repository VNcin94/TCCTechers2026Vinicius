import { integer, pgTable, varchar, date, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id_team: varchar(36).primaryKey(),
  name: varchar(255).notNull(),
  password: varchar(255).notNull(),
  email: varchar(255).notNull().unique(),
  type_user: varchar(255).notNull(),
  date_created: date().notNull(),
});