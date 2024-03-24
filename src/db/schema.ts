import { doublePrecision, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: text("id").primaryKey().default("uuid_generate_v4()"),
  name: text("name").notNull(),
  imageId: text("imageId").notNull(),
  price: doublePrecision("price").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export type Product = typeof productsTable.$inferSelect;
