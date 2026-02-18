import { Hono } from "hono";

const apiv1 = new Hono();

apiv1.get("/health", (c) => {
  return c.json({ status: "ok" });
});

export default apiv1;
