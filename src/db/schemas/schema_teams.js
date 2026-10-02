import { integer, pgTable, varchar, date } from "drizzle-orm/pg-core";

export const teamsTable = pgTable("teams", {
  id_team: varchar(36).primaryKey(),
  name: varchar(255).notNull(),
  shield: varchar(255).notNull(),
  city: varchar(255).notNull(),
  year_foundation: integer().notNull(),
  date_created: date().notNull(),
  history: text().notNull(),
  description: text().notNull(),
  state: varchar(255).notNull(),
});
