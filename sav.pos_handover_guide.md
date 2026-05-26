# Sav.pos 系統部署：保姆級手把手教學

這份指南將帶領您從零開始，將 Sav.pos 系統完美部署到您的手機或電腦上，像使用原生 App 一樣流暢。

---

## 第一階段：PWA 快速安裝（最推薦，10秒完成）
無需開發背景，直接透過手機瀏覽器即可完成。

### 🍎 iPhone (iOS) 用戶
1. **開啟 Safari**：在網址列輸入您的系統網址。
2. **點擊「分享」**：點擊螢幕下方中間的「方框向上箭頭」圖示。
3. **加入主畫面**：選單向下滑動，點擊「**加入主畫面**」。
4. **確認**：點擊右上角的「新增」。
5. **完成**：您的桌面上現在會出現 Sav.pos 的蓮花圖示。

### 🤖 Android 用戶
1. **開啟 Chrome**：在網址列輸入您的系統網址。
2. **點擊「選單」**：點擊右上角的「三個點」圖示。
3. **安裝應用程式**：點擊「**安裝應用程式**」或「**新增至主畫面**」。
4. **確認**：點擊彈出視窗的「安裝」。
5. **完成**：App 已出現在您的應用程式清單中。

---

## 第二階段：原生 App 封裝（進階開發者使用）
如果您需要將 App 上架到 App Store 或 Google Play，請按照以下步驟。

### 1. 取得原始碼
*   在 Stitch 畫布右上角點擊 **「View Code ⟨/⟩」**。
*   點擊 **「Download ZIP」**，將整套前端程式碼下載到電腦。

### 2. 環境準備
*   安裝 [Node.js](https://nodejs.org/)。
*   安裝 [VS Code](https://code.visualstudio.com/) 作為編輯器。
*   **Mac 用戶**：安裝 Xcode（開發 iOS 必備）。
*   **Windows/Mac 用戶**：安裝 Android Studio（開發 Android 必備）。

### 3. 使用 Capacitor 封裝
1. **解壓縮專案**：在終端機 (Terminal) 進入專案資料夾。
2. **初始化**：
   ```bash
   npm install
   npm install @capacitor/core @capacitor/cli
   npx cap init Sav.pos com.savpos.app
   ```
3. **構建網頁**：
   ```bash
   npm run build
   ```
4. **新增平台**：
   ```bash
   npx cap add ios
   npx cap add android
   ```
5. **同步程式碼**：
   ```bash
   npx cap sync
   ```
6. **開啟開發工具**：
   ```bash
   npx cap open ios      # 開啟 Xcode
   npx cap open android  # 開啟 Android Studio
   ```
7. **執行**：在 Xcode 或 Android Studio 中點擊「Run」，App 就會在您的手機實機上運行。

---

## 第三階段：Google Drive 雲端同步設定
為了確保您的多台設備數據同步，請務必完成此設定。

1. **進入後台**：登入系統，前往「系統設定」>「雲端備份」。
2. **連接 Google**：點擊「連接 Google Drive」。
3. **授權**：登入您的 Google 帳號並允許 Sav.pos 讀寫專屬備份資料夾。
4. **開啟自動同步**：確保「自動備份」開關為開啟狀態。

---
*Sav.pos 旨在讓技術服務於業務。如果您在任何一步卡住，隨時回來詢問我！*