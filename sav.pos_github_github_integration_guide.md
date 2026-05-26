# Sav.pos GitHub 部署與版本控制指南

將 Sav.pos 託管至 GitHub 是實現自動化部署（如 Vercel/Netlify）以及長期代碼管理的最佳方式。以下是您的操作指南。

---

## 🛠️ 第一階段：準備工作
1. **註冊帳號**：確保您擁有 [GitHub](https://github.com/) 帳號。
2. **下載代碼**：點擊 Stitch 介面右上角的 **「View Code ⟨/⟩」** -> **「Download ZIP」**。
3. **解壓縮**：將 `savpos.zip` 解壓縮到您電腦的資料夾中。

---

## 🚀 第二階段：上傳代碼至 GitHub (三種方法)

### 方法 A：網頁直接上傳（最簡單，免安裝）
1. 登入 GitHub，點擊右上角 **「+」** -> **「New repository」**。
2. 設定專案名稱（例如：`savpos-app`），勾選 **「Public」**，點擊 **「Create repository」**。
3. 在新頁面點擊連結：**「uploading an existing file」**。
4. 將解壓後的**所有文件與資料夾**拖入瀏覽器視窗。
5. 等待上傳完成，點擊底部的 **「Commit changes」**。

### 方法 B：GitHub Desktop (視覺化操作，推薦)
1. 下載並安裝 [GitHub Desktop](https://desktop.github.com/)。
2. 點擊 **「File」** -> **「Add Local Repository」**，選擇您解壓代碼的資料夾。
3. 點擊 **「Publish repository」**，確認名稱後上傳至您的 GitHub 帳號。

### 方法 C：指令介面 (Terminal/CLI)
在專案根目錄執行：
```bash
git init
git add .
git commit -m "Initial commit of Sav.pos system"
git branch -M main
git remote add origin https://github.com/您的用戶名/savpos-app.git
git push -u origin main
```

---

## 🌐 第三階段：連動自動部署
一旦您的代碼在 GitHub 上，您可以實現「代碼更新，網站自動更新」：

1. **Vercel/Netlify**：登入後選擇 **「Import from GitHub」**。
2. **授權**：選取剛才創建的 `savpos-app` 儲存庫。
3. **完成**：以後您只要在 GitHub 修改任何內容，網站就會自動重新構建上線。

---
*提示：GitHub 是您的「代碼保險箱」。即使以後更換伺服器，您的 Sav.pos 核心數據與邏輯也能完整保存。*