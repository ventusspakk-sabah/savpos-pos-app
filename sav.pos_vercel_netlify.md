# Sav.pos 獲取免費網址與一鍵部署教學

如果您已經準備好讓 Sav.pos 上線，以下是獲取免費網址的最快路徑。

---

## 🚀 第一步：下載原始碼 (取得藍圖)
1. 在 Stitch 介面右上角點擊 **「View Code ⟨/⟩」**。
2. 點擊彈出視窗右上角的 **「Download ZIP」**。
3. 將下載的 `savpos.zip` 解壓縮到您的電腦桌面。

---

## 🌐 第二步：選擇託管平台 (獲取免費網址)
推薦使用以下兩個最受歡迎的平台，它們提供永久免費的 `https://你的名稱.vercel.app` 或 `https://你的名稱.netlify.app` 網址。

### 選項 A：Vercel (最推薦，速度最快)
1. **前往官網**：打開 [vercel.com](https://vercel.com/)。
2. **登入**：使用 GitHub 或 Google 帳號快速登入。
3. **部署**：
   * 下載並安裝 [Vercel CLI](https://vercel.com/download)（適合技術人員）。
   * **或者**：在網頁點擊 「Add New」 > 「Project」，將解壓縮的資料夾拖進去。
4. **完成**：系統會自動開始構建。約 30 秒後，您就會獲得一個免費網址！

### 選項 B：Netlify (操作最簡單)
1. **前往官網**：打開 [netlify.com](https://netlify.com/)。
2. **登入**：點擊右上角登入。
3. **拖拽部署**：
   * 進入 Dashboard 後，點擊導覽列的 「Sites」。
   * 向下滑動看到一個虛線方框，寫著 **「Want to deploy a new site without connecting to Git? Drag and drop your site folder here」**。
   * **直接將您解壓縮後的資料夾拖進這個方框。**
4. **完成**：部署完成後，Netlify 會生成一個隨機網址，您可以點擊「Site Settings」修改成您喜歡的名稱。

---

## 📱 第三步：在手機上安裝
一旦您拿到了網址（例如 `savpos-demo.vercel.app`）：
1. 在手機瀏覽器（Safari 或 Chrome）打開該網址。
2. 按照 **PWA 安裝指引** 點擊「加入主畫面」。
3. **大功告成！** 您的 Sav.pos 已經正式運行在雲端，且可以直接在手機桌面開啟。

---
*提示：如果您在部署過程中遇到「Build Error」，通常是因為環境變數未設定。請確保資料夾根目錄包含 `package.json` 文件。*