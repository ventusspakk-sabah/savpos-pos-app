# Sav.pos 全系統原始碼導出清單 (Source Code Export Manifest)

此文件彙整了 Sav.pos 系統的所有核心原始碼組件。由於系統由多個獨立模組構成，我們採用了標準的單頁應用程序 (SPA) 結構進行封裝。

## 1. 核心專案結構 (Project Structure)
- `/public`: 包含 Logo ({{DATA:IMAGE:IMAGE_101}}), 圖示 ({{DATA:IMAGE:IMAGE_92}}) 與靜態資源。
- `/src/components`: 共享 UI 組件 (導航欄、頂部導航、通用卡片)。
- `/src/pages`: 
    - `POS/`: 收銀系統核心頁面 ({{DATA:SCREEN:SCREEN_75}}, {{DATA:SCREEN:SCREEN_112}})。
    - `Technician/`: 技師端應用頁面 ({{DATA:SCREEN:SCREEN_70}}, {{DATA:SCREEN:SCREEN_145}})。
    - `Admin/`: 老闆端管理後台 ({{DATA:SCREEN:SCREEN_138}}, {{DATA:SCREEN:SCREEN_154}}).
    - `Booking/`: 線上預約網站與生成器 ({{DATA:SCREEN:SCREEN_147}}, {{DATA:SCREEN:SCREEN_149}})。
- `/src/styles`: 統一的 Tailind CSS 配置與設計系統權杖 (Design Tokens)。

## 2. 關鍵程式碼資源 (Key Code Resources)
- **HTML 進入點**: {{DATA:DOCUMENT:DOCUMENT_34}}
- **專案配置 (JSON)**: {{DATA:DOCUMENT:DOCUMENT_33}}
- **樣式配置**: {{DATA:DOCUMENT:DOCUMENT_32}}

## 3. 部署說明 (Deployment)
1. **PWA 支持**: 系統已內建 Service Worker 邏輯，支持「加入主畫面」離線運行。
2. **數據庫連接**: 數據備份與還原邏輯 ({{DATA:SCREEN:SCREEN_108}}) 已預留 Google Drive API 接口。
3. **前端框架**: 基於 Vite + React + Tailwind CSS 構建。

---
*狀態：原始碼已封裝完成，準備交付。*