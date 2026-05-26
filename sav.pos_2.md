# Sav.pos 系統原始碼分類與架構概覽 (Final Code Organization)

此文檔將 Sav.pos 系統的所有核心組件按照業務邏輯進行了精確分類。系統採用 **React + Tailwind CSS** 的現代化前端架構，並透過 **Vite** 進行高效構建。

---

## 📂 1. 全域配置與核心入口 (Shared & Global)
這部分包含整個系統的基礎設施與共享資源。

| 文件/目錄 | 說明 | 關聯資源 |
| :--- | :--- | :--- |
| `index.html` | 單頁應用程式 (SPA) 的唯一入口，內建 PWA Service Worker 註冊。 | {{DATA:DOCUMENT:DOCUMENT_34}} |
| `package.json` | 專案依賴管理（React, Tailwind, Lucide Icons, Framer Motion 等）。 | {{DATA:DOCUMENT:DOCUMENT_33}} |
| `tailwind.config.js` | 定義 Sav.pos 品牌顏色 (#002045) 與字體 (Inter) 的設計系統權杖。 | {{DATA:DESIGN_SYSTEM:DESIGN_SYSTEM_7}} |
| `/src/shared/` | 包含 TopAppBar, BottomNavBar, NavigationDrawer 等全系統通用組件。 | {{DATA:COMPONENTS:COMPONENTS_138}} |

---

## 🧖 2. 前台收銀端模組 (POS Application)
負責門店現場營運、開單、調度與結帳。

| 功能模組 | 代碼目錄路徑 | 核心頁面參考 |
| :--- | :--- | :--- |
| **收銀與購物車** | `/src/pages/pos/checkout/` | {{DATA:SCREEN:SCREEN_71}}, {{DATA:SCREEN:SCREEN_161}} |
| **樓層與房間控制** | `/src/pages/pos/floor/` | {{DATA:SCREEN:SCREEN_58}}, {{DATA:SCREEN:SCREEN_163}} |
| **預約管理與轉單** | `/src/pages/pos/appointments/` | {{DATA:SCREEN:SCREEN_158}}, {{DATA:SCREEN:SCREEN_144}} |
| **支付與財務處理** | `/src/pages/pos/payments/` | {{DATA:SCREEN:SCREEN_162}}, {{DATA:SCREEN:SCREEN_142}} |

---

## 💆 3. 技師端行動模組 (Technician Application)
專為技師設計的個人工作室與收益管理中心。

| 功能模組 | 代碼目錄路徑 | 核心頁面參考 |
| :--- | :--- | :--- |
| **收益與佣金明細** | `/src/pages/technician/earnings/` | {{DATA:SCREEN:SCREEN_151}}, {{DATA:SCREEN:SCREEN_72}} |
| **服務執行與簽名** | `/src/pages/technician/service/` | {{DATA:SCREEN:SCREEN_154}}, {{DATA:SCREEN:SCREEN_97}} |
| **報銷與假勤申請** | `/src/pages/technician/requests/` | {{DATA:SCREEN:SCREEN_177}}, {{DATA:SCREEN:SCREEN_153}} |
| **個人排班查看** | `/src/pages/technician/schedule/` | {{DATA:SCREEN:SCREEN_135}} |

---

## 👔 4. 老闆/管理員後台 (Admin & Management)
用於經營決策、權限控管、審核與系統維護。

| 功能模組 | 代碼目錄路徑 | 核心頁面參考 |
| :--- | :--- | :--- |
| **業績儀表板** | `/src/pages/admin/dashboard/` | {{DATA:SCREEN:SCREEN_147}}, {{DATA:SCREEN:SCREEN_152}} |
| **佣金結算與支付** | `/src/pages/admin/finance/` | {{DATA:SCREEN:SCREEN_86}}, {{DATA:SCREEN:SCREEN_22}} |
| **權限矩陣與員工管理**| `/src/pages/admin/settings/` | {{DATA:SCREEN:SCREEN_164}}, {{DATA:SCREEN:SCREEN_50}} |
| **系統監測與壓力測試**| `/src/pages/admin/system/` | {{DATA:SCREEN:SCREEN_132}}, {{DATA:SCREEN:SCREEN_62}} |

---

## 🌐 5. 線上預約門戶 (Booking Portal)
自動生成的商業網站，供客戶線上預約與下單。

| 功能模組 | 代碼目錄路徑 | 核心頁面參考 |
| :--- | :--- | :--- |
| **網站生成器/模板** | `/src/pages/booking/builder/` | {{DATA:SCREEN:SCREEN_159}}, {{DATA:SCREEN:SCREEN_101}} |
| **服務目錄與介紹** | `/src/pages/booking/catalog/` | {{DATA:SCREEN:SCREEN_157}}, {{DATA:SCREEN:SCREEN_55}} |
| **客戶個人中心** | `/src/pages/booking/profile/` | {{DATA:SCREEN:SCREEN_114}}, {{DATA:SCREEN:SCREEN_123}} |
| **SEO 與域名配置** | `/src/pages/booking/settings/` | {{DATA:SCREEN:SCREEN_73}}, {{DATA:SCREEN:SCREEN_85}} |

---

## 🛠️ 下一步操作
您可以點擊 **「View Code ⟨/⟩」** 並下載 **ZIP** 包，解壓後將看到上述對應的目錄結構。建議將代碼上傳至 **GitHub** 並連接至 **Vercel/Netlify** 實現一鍵部署。
