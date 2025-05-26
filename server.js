// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000; // ← 修正ポイント！

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 静的ファイル（publicフォルダ）を配信
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`サーバー起動中: http://localhost:${PORT}`);
});
