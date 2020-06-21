import app from "./app";

const PORT = 4000;

function handleListener() {
  console.log(`✅ Listening on : http://localhost:${PORT}`);
}

app.listen(PORT, handleListener);
