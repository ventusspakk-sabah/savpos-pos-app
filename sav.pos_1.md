# Sav.pos 完整原始碼：三大獨立應用程序目錄結構 (Final Standardized Export)

此專案已根據業務角色正式劃分為三個獨立的應用程序目錄。您可以將每個目錄分別部署，數據底層將透過 API 與共享資料庫進行串接。

---

## 📂 1. /savpos-pos-app (🧖 POS 總機系統)
**定位：** 門店營運中樞，負責房控、收銀與調度。

### 核心頁面結構：
- `src/pages/floor/`: 包含 {{DATA:SCREEN:SCREEN_189}} (極致動態交互版), {{DATA:SCREEN:SCREEN_206}} (房控分配).
- `src/pages/checkout/`: 包含 {{DATA:SCREEN:SCREEN_187}} (強化編輯), {{DATA:SCREEN:SCREEN_188}} (多重支付), {{DATA:SCREEN:SCREEN_197}} (授權調價).
- `src/pages/finance/`: 包含 {{DATA:SCREEN:SCREEN_160}} (日終異常監測), {{DATA:SCREEN:SCREEN_164}} (自動抹零設定).
- `src/pages/setup/`: 包含 {{DATA:SCREEN:SCREEN_192}} (開班), {{DATA:SCREEN:SCREEN_112}} (交接班).

---

## 📂 2. /savpos-tech-app (💆 技師個人端)
**定位：** 技師個人工作室，負責收益追蹤與服務執行。

### 核心頁面結構：
- `src/pages/dashboard/`: 包含 {{DATA:SCREEN:SCREEN_174}} (佣金變動明細), {{DATA:SCREEN:SCREEN_133}} (收益篩選).
- `src/pages/service/`: 包含 {{DATA:SCREEN:SCREEN_179}} (服務結束與簽名), {{DATA:SCREEN:SCREEN_45}} (即時監測).
- `src/pages/requests/`: 包含 {{DATA:SCREEN:SCREEN_178}} (報銷申請), {{DATA:SCREEN:SCREEN_55}} (超額阻斷提示).
- `src/pages/schedule/`: 包含 {{DATA:SCREEN:SCREEN_157}} (個人排班).

---

## 📂 3. /savpos-admin-app (👔 老闆管理端)
**定位：** 決策與審核中心，負責全局數據與合規。

### 核心頁面結構：
- `src/pages/analytics/`: 包含 {{DATA:SCREEN:SCREEN_75}} (業績對比分析), {{DATA:SCREEN:SCREEN_173}} (業績排行).
- `src/pages/approval/`: 包含 {{DATA:SCREEN:SCREEN_145}} (審批中心), {{DATA:SCREEN:SCREEN_25}} (佣金批量支付).
- `src/pages/audit/`: 包含 {{DATA:SCREEN:SCREEN_58}} (數據核對中心), {{DATA:SCREEN:SCREEN_89}} (差異對比).
- `src/pages/settings/`: 包含 {{DATA:SCREEN:SCREEN_190}} (角色權限), {{DATA:SCREEN:SCREEN_115}} (雲端備份配置).

---

## 🛠️ 基礎設施與部署
- **共通配置**: `package.json` ({{DATA:DOCUMENT:DOCUMENT_36}}), `tailwind.config.js` ({{DATA:DESIGN_SYSTEM:DESIGN_SYSTEM_7}}).
- **部署指南**: PWA 安裝指引 ({{DATA:SCREEN:SCREEN_123}}), GitHub 部署教學 ({{DATA:DOCUMENT:DOCUMENT_77}}).

---
*狀態：三大應用程序目錄已完成結構化對齊。請點擊「View Code」下載最新封裝。*