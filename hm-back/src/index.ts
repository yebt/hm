import { Hono } from "hono";
import { cors } from "hono/cors";
import apiv1 from "./apiv1";

const app = new Hono();

app.use("/api/*", cors());

// Add routing for API v1
app.route("/api/v1", apiv1);

app.get('/', (c) => {
  return c.json({ message: "Welcome to the API" });
})

export default {
  port: 3000,
  fetch: app.fetch,
};
