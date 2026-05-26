# Sav.pos 後台數據文件架構 (Backend Data Architecture)

此文件定義了 Sav.pos 系統的底層數據結構與邏輯流轉，旨在為開發者提供清晰的資料庫模型 (Schema) 與數據同步指引。系統採用「三位一體」架構，所有 App 共享同一個中心化數據庫。

---

## 1. 核心資料表模型 (Core Data Schema)

### 🧖 門店與營運 (Store & Ops)
| 資料表 | 關鍵欄位 | 說明 |
| :--- | :--- | :--- |
| `stores` | `id, name, address, timezone, currency` | 門店基礎資訊。 |
| `rooms` | `id, store_id, name, floor, status (idle/serving/cleaning)` | 房間/床位即時狀態。 |
| `orders` | `id, customer_id, total_amount, payment_status, created_at` | 訂單主表，記錄交易狀態。 |
| `order_items` | `order_id, service_id, technician_id, price, commission_amount` | 訂單明細，關聯技師與佣金計算。 |

### 💆 技師與佣金 (Technician & Finance)
| 資料表 | 關鍵欄位 | 說明 |
| :--- | :--- | :--- |
| `technicians` | `id, user_id, store_id, level, commission_rate` | 技師個人資料與預設抽成比例。 |
| `commissions` | `id, tech_id, order_id, amount, status (held/payable/paid)` | 佣金流水，包含 30 天帳期保護邏輯。 |
| `expenses` | `id, tech_id, category_id, amount, receipt_url, status (pending/approved)` | 報銷申請紀錄與單據連結。 |
| `payouts` | `id, tech_id, amount, method, period_start, period_end` | 佣金批量支付的歷史發放紀錄。 |

### 👔 系統與權限 (System & Auth)
| 資料表 | 關鍵欄位 | 說明 |
| :--- | :--- | :--- |
| `users` | `id, username, password_hash, pin_code (4-digit), role_id` | 使用者帳戶與 4 位數安全碼。 |
| `roles_permissions`| `role_id, permission_key (e.g., pos.refund, admin.finance)` | 基於角色的權限訪問控制 (RBAC)。 |
| `audit_logs` | `id, user_id, action, table_name, old_value, new_value` | 系統審計日誌，記錄敏感操作。 |

---

## 2. 三大 App 數據流轉邏輯 (Data Flow)

### 🔄 POS 總機 -> 數據庫 -> 技師端
1. **開單**：POS 端提交 `orders` 請求。
2. **分配**：POS 提交 `technician_id` 至 `order_items`。
3. **即時通知**：數據庫觸發器或 Websocket 推送任務至該技師的 `Technician App`。
4. **服務結束**：技師端更新 `commissions.status = 'held'`，開始 30 天帳期計算。

### 🔄 技師端 -> 數據庫 -> 老闆端
1. **報銷**：技師提交 `expenses` 請求（含圖片 URL）。
2. **審核**：老闆端 `Admin App` 查詢 `status = 'pending'` 的報銷單進行審批。
3. **結算**：老闆端發起 `payouts`，更新 `commissions.status = 'paid'`。

---

## 3. 雲端備份架構 (Google Drive Sync)
系統設定 `backup_config` 表，紀錄 Google API Token 與自動同步頻率。
- **每日增量備份**：僅同步當日 `orders` 與 `commissions` 的 JSON 快照。
- **全量還原**：從 Google Drive 專屬資料夾下載最新的 `savpos_full_db.sql` 並執行覆蓋。

---

## 4. 目錄結構建議 (Backend Repository Structure)
```text
/savpos-backend
  ├── /api             # API 入口 (Express/Node.js)
  ├── /models          # 資料庫模型定義 (Sequelize/Prisma)
  ├── /services        # 業務邏輯 (佣金計算、帳期校驗)
  ├── /middlewares     # 權限驗證 (4位數 PIN 碼校驗)
  ├── /backups         # Google Drive 同步腳本
  └── server.js        # 啟動程序
```

---
*狀態：後台數據架構已整理完成，作為專案交付的技術底層文件。*
