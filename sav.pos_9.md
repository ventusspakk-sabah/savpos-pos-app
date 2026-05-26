# Sav.pos 完整原始碼下載與部署說明 (Source Code Download & Deployment Guide)

恭喜您！Sav.pos 專案的所有開發工作已圓滿落成。為了讓您能順利下載並運行這套商業級 POS 系統，請參考以下說明。

## 📦 原始碼包結構 (Package Structure)
導出的 ZIP 包包含以下核心組成部分：

- **`/src/pos`**: 前台收銀系統（包含房間控制、結帳、調度功能）。
- **`/src/technician`**: 技師端行動應用（佣金明細、服務管理、報銷申請）。
- **`/src/admin`**: 老闆端管理後台（數據儀表板、權限矩陣、系統監測）。
- **`/src/booking`**: 線上預約網站生成器與門戶介面。
- **`/src/shared`**: 共享組件庫、設計系統權杖 (Design Tokens) 及 API 連接邏輯。
- **`package.json`**: 專案依賴配置文件。
- **`vite.config.ts`**: 編譯與構建設定。

## 🚀 快速啟動指南 (Quick Start)
1. **解壓縮**：將下載的 `savpos_full_source.zip` 解壓至您的本地開發目錄。
2. **安裝依賴**：開啟終端機並運行 `npm install`。
3. **啟動開發伺服器**：運行 `npm run dev` 即可在瀏覽器預覽全系統。
4. **構建正式版本**：運行 `npm run build` 生成用於生產環境的優化程式碼。

## 🌐 部署建議 (Deployment)
- **Web 部署**：推薦使用 Vercel 或 Netlify 進行一鍵部署，系統已針對這些平台優化。
- **PWA 安裝**：系統內建 Service Worker，部署後用戶可直接在手機瀏覽器點擊「加入主畫面」以獲取原生 App 體驗。
- **資料庫連接**：請確保在 `.env` 文件中配置您的 Google API 密鑰，以啟動雲端備份與整合功能。

---
*狀態：交付文件已生成。如果您有任何技術細節需要進一步說明，請隨時告訴我。*