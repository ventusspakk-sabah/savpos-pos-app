# Vsevice POS System Requirements

## Roles
- Cashier/Receptionist: Room control, billing, technician assignment.
- Technician: Personal service view, countdown.
- Manager/Admin: Reporting, commission settlement, system settings.
- Finance: Commission payment, revenue auditing.

## Core Flows
1. **Room Control & Billing (Front Desk)**
   - View room status (Idle, In-use, Cleaning).
   - Create order from room selection.
   - Add services (Price, duration, tech count).
   - Assign technicians (Manual/Auto).
   - Add retail products.
   - Payment (Multiple methods) -> Start Countdown.

2. **In-Service Monitoring**
   - Progress bar (Green -> Yellow -> Red).
   - Room/Service/Tech info.
   - Finish service (Auto or manual).

3. **Settlement & Checkout**
   - Order status: Billing -> Paid -> Serving -> Pending Checkout -> Settled.
   - Commission calculation for technicians.
   - Room cleaning workflow.

4. **Appointment Management**
   - Booking calendar.
   - Tech/Room availability check.
   - Convert appointment to order.

5. **Commission & Finance**
   - Settlement list (Order, Tech, Service, Commission).
   - Batch payment.
   - Refund/Revocation handling.

6. **Reporting**
   - Daily Revenue, Tech Performance, Room Utilization, Product Sales.