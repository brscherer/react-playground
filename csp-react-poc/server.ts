import express from "express";
import path from "path";

const app = express();

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    `
      default-src 'self';
      script-src 'self';
      style-src 'self';
      img-src 'self';
      connect-src 'self';
    `.replace(/\n/g, "")
  );
  next();
});

app.use(express.static(path.join(__dirname, "dist")));

app.listen(3000, () => {
  console.log("http://localhost:3000");
});