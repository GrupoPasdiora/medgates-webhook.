import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req, res) => res.status(200).json({ ok: true }));

app.post("/webhook/evolution", (req, res) => {
  console.log(JSON.stringify({
    t: new Date().toISOString(),
    path: "/webhook/evolution",
    headers: req.headers,
    body: req.body
  }));
  res.status(200).json({ ok: true });
});

app.use((_req, res) => res.status(404).json({ error: "not_found" }));
app.listen(PORT, "0.0.0.0", () => console.log(`Webhook on :3000`));
