# Sav.pos 完整原始碼：三大獨立應用程序目錄結構 (Final Export Structure)

本專案已根據業務角色拆分為三個獨立的應用程序目錄，每個目錄包含完整的前端結構、頁面邏輯與樣式配置。

---

## 📂 1. /savpos-pos-app (🧖 POS 總機系統)
**定位：** 門店營運中樞，負責房控、收銀與調度。

### 目錄結構：
- `/src/pages/floor/`: 樓層概覽 ({{DATA:SCREEN:SCREEN_132}}), 房間分配 ({{DATA:SCREEN:SCREEN_204}}).
- `/src/pages/checkout/`: 收銀主介面 ({{DATA:SCREEN:SCREEN_87}}), 多重支付 ({{DATA:SCREEN:SCREEN_186}}), 授權改價 ({{DATA:SCREEN:SCREEN_195}}).
- `/src/pages/orders/`: 訂單歷史 ({{DATA:SCREEN:SCREEN_83}}), 退款流程 ({{DATA:SCREEN:SCREEN_50}}).
- `/src/pages/finance/`: 日終結帳 Z-Report ({{DATA:SCREEN:SCREEN_158}}), 抹零設定 ({{DATA:SCREEN:SCREEN_162}}).
- `/src/config/`: 硬體打印 ({{DATA:SCREEN:SCREEN_70}}), 雲端同步 ({{DATA:SCREEN:SCREEN_113}}).

---

## 📂 2. /savpos-tech-app (💆 技師個人端)
**定位：** 技師個人工作室，負責收益追蹤與服務執行。

### 目錄結構：
- `/src/pages/dashboard/`: 個人收益看板 ({{DATA:SCREEN:SCREEN_172}}), 佣金明細 ({{DATA:SCREEN:SCREEN_81}}).
- `/src/pages/service/`: 服務開始/結束控制, 客戶簽名確認 ({{DATA:SCREEN:SCREEN_177}}).
- `/src/pages/requests/`: 報銷申請 ({{DATA:SCREEN:SCREEN_54}}), 假勤與預支申請 ({{DATA:SCREEN:SCREEN_202}}).
- `/src/pages/profile/`: 個人排班表 ({{DATA:SCREEN:SCREEN_155}}), 帳號密碼修改.

---

## 📂 3. /savpos-admin-app (👔 老闆管理端)
**定位：** 決策與審核中心，負責全局數據與合規。

### 目錄結構：
- `/src/pages/analytics/`: 業績對比分析儀表板 ({{DATA:SCREEN:SCREEN_74}}), 技師排行 ({{DATA:SCREEN:SCREEN_171}}).
- `/src/pages/approval/`: 審批中心 ({{DATA:SCREEN:SCREEN_143}}), 佣金批量支付 ({{DATA:SCREEN:SCREEN_137}}).
- `/src/pages/audit/`: 數據核對中心 ({{DATA:SCREEN:SCREEN_57}}), 差異比對 ({{DATA:SCREEN:SCREEN_88}}), 審計日誌 ({{DATA:SCREEN:SCREEN_191}}).
- `/src/pages/settings/`: 權限與角色管理 ({{DATA:SCREEN:SCREEN_188}}), 4位數PIN碼安全 ({{DATA:SCREEN:SCREEN_58}}).
- `/src/pages/system/`: 壓力測試儀表板 ({{DATA:IMAGE:IMAGE_136}}), 系統健康監測 ({{DATA:SCREEN:SCREEN_71}}).

---

## 🛠️ 共通核心組件 (Shared Components)
所有 App 共享以下底層配置：
- **樣式**: Tailwind CSS ({{DATA:DESIGN_SYSTEM:DESIGN_SYSTEM_7}}).
- **配置文件**: `package.json` ({{DATA:DOCUMENT:DOCUMENT_36}}), `index.html` ({{DATA:DOCUMENT:DOCUMENT_37}}).
- **部署指引**: PWA 與原生封裝教程 ({{DATA:DOCUMENT:DOCUMENT_116}}).

---
*狀態：三大應用程序目錄已邏輯封裝完成。您現在可以點擊「View Code ⟨/⟩」下載完整原始碼。*