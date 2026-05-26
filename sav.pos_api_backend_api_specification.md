# Sav.pos API 接口規範建議 (Backend API Specification)

本文件定義了 Sav.pos 三大獨立應用程序（POS 總機、技師端、老闆管理端）與後端服務器之間的通訊協議。建議採用 RESTful API 架構，並使用 JSON 作為數據交換格式。

---

## 1. 通用規範 (General Standards)
- **Base URL**: `https://api.savpos.com/v1`
- **認證方式**: 使用 `Authorization: Bearer <JWT_TOKEN>` 或 `X-PIN-Code: <4-digit-pin>`（針對 POS 快速操作）。
- **響應結構**: 
  ```json
  {
    "success": true,
    "data": { ... },
    "error": null
  }
  ```

---

## 2. 核心 API 模組 (Core API Modules)

### 🧖 POS 總機端 API (POS App)
| 接口 | 方法 | 說明 |
| :--- | :--- | :--- |
| `/pos/rooms` | `GET` | 獲取所有房間的即時狀態（閒置、服務中、待清潔）。 |
| `/pos/orders` | `POST` | 創建新訂單（包含服務項目、指定技師）。 |
| `/pos/checkout` | `POST` | 執行結帳流程，支援多重支付與自動抹零邏輯。 |
| `/pos/dispatch` | `PATCH` | 調整技師分配或房間狀態。 |

### 💆 技師端 API (Technician App)
| 接口 | 方法 | 說明 |
| :--- | :--- | :--- |
| `/tech/earnings` | `GET` | 獲取個人佣金變動明細，包含 30 天帳期保護狀態。 |
| `/tech/service/start` | `POST` | 開始服務，觸發計時器與系統通知。 |
| `/tech/expenses` | `POST` | 提交報銷申請，包含單據圖片 URL。 |
| `/tech/schedule` | `GET` | 獲取技師個人排班表。 |

### 👔 老闆管理端 API (Admin App)
| 接口 | 方法 | 說明 |
| :--- | :--- | :--- |
| `/admin/analytics` | `GET` | 獲取經營分析數據（營收趨勢、技師排行、佔用率）。 |
| `/admin/approvals` | `GET/POST` | 查詢並審批技師的報銷或提現申請。 |
| `/admin/payouts` | `POST` | 執行佣金批量支付，將狀態從 `payable` 改為 `paid`。 |
| `/admin/audit/logs` | `GET` | 獲取系統審計日誌，監控敏感操作。 |

---

## 3. 實時同步機制 (Websocket Events)
為了確保門店現場數據的即時性，建議引入 Websocket 監聽以下事件：
- `ORDER_CREATED`: 技師端收到新任務通知。
- `ROOM_STATUS_CHANGED`: POS 總機端即時更新樓層概覽。
- `COMMISSION_UPDATED`: 技師端收益即時跳轉。

---

## 4. 錯誤代碼參考 (Error Codes)
- `401`: 未授權（Token 失效或 PIN 碼錯誤）。
- `403`: 權限不足（例如店員試圖訪問財務審批）。
- `422`: 業務邏輯阻斷（例如報銷金額超過預設上限）。

---
*狀態：API 接口規範已完成初步定義，供開發團隊進行後端實作參考。*