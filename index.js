const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 設定 public 資料夾為靜態資源
app.use(express.static('public'));

// 首頁路由（可省略，靠 index.html 自動開啟）
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
