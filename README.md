# HEI & VPRF Centre Activation Dashboard — Backend API

Express REST API for serving Higher Education Institutions (HEIs) onboarding data, MoU signatures, VPRF Centre activation status, and 30-day action items.

---

## 🚀 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check endpoint returning backend status |
| `GET` | `/api/institutions` | Returns all sample institution records |
| `GET` | `/api/institutions/:id` | Returns single institution record by ID (or 404 if missing) |

---

## 🛠️ Setup & Execution

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   Server listens on `http://localhost:5000`.

---

## 🔒 Data Safety & Compliance Note

- Uses **sample / non-sensitive JSON data** strictly for prototype demonstration.
- No production credentials, database URIs, live API keys, or PII are contained in this repository.

---

## Limitations / Recommended Next Phase

This submission is a prototype intended for QA and review. Current limitations:
- Uses sample/non-sensitive JSON data only.
- Evidence links are demonstration/sample evidence links.
- No production database integration is included.
- No production authentication or role-based access control is included.
- No live Veterans India website deployment has been performed.
- No production credentials or secrets are used.

Recommended next-phase improvements:
- Connect to an approved production data source after written authorization.
- Add authentication and role-based access control.
- Replace sample evidence links with an approved evidence/document repository.
- Add production-grade logging, monitoring and audit trails.
- Deploy only after formal review and written approval.
