# City Management System: Backend

Microservices backend for a multi-service residential compound. Residents and staff use one API to manage accounts, real estate, restaurants, car services, general services, ads and e-mail notifications.

Built by a small team; part of a three-repo system:

- **Backend** (this repo)
- [Admin dashboard](https://github.com/Muhammad-Nawlo/dashboard-city-management-system) (React + Ant Design)
- [Frontend](https://github.com/Muhammad-Nawlo/frontend-city-management-system)

## Architecture

```
                         ┌──────────────────────┐
  clients ──► /api/* ──► │  gateway             │  express-http-proxy, multipart-aware
                         └──────────┬───────────┘
        ┌──────────┬──────────┬─────┴─────┬──────────┬──────────┬──────────┐
        ▼          ▼          ▼           ▼          ▼          ▼          ▼
     user     real-estate  restaurant    car      service      ads       mail
  management  management   management management management management management
        │          │          │           │          │          │          │
        └──────────┴──────────┴─── MongoDB (one database per service) ─────┘
```

| Gateway route        | Service                  |
| -------------------- | ------------------------ |
| `/api/real-estates`  | `realestate-management`  |
| `/api/restaurants`   | `restaurant-management`  |
| `/api/cars`          | `car-management`         |
| `/api/services`      | `service-management`     |
| `/api/ads`           | `ad-management`          |
| `/api/emails`        | `mail-management`        |
| `/api/*` (default)   | `user-management`        |

Every service shares the same layout (`controllers`, `dto`, `handlers`, `middlewares`, `models`, `errors`) and validates JWTs signed with a shared secret, so any service can authorise a request without calling the user service.

## Tech stack

- **Runtime:** Node.js, Express (ES modules)
- **Data:** MongoDB with Mongoose
- **Auth:** JWT, bcrypt
- **Validation:** express-validator with DTOs
- **Uploads:** Multer (streamed through the gateway as raw buffers)
- **Notifications:** Firebase Cloud Messaging (firebase-admin), Nodemailer + Pug templates

## Running locally

Each service is a standalone Express app. For every folder:

```bash
cd user-management
npm install
cp .env.example .env   # or create .env with the variables below
npm start
```

Service variables:

```env
PORT=3001
MONGODB_CONNECTION=mongodb://localhost:27017/user-management
SHARED_SECRET_KEY_JWT=change-me
BCRYPT_SALT=10
TOKEN_EXPIRED_TIME_HOUR=24
FILE_URL=http://localhost:3001
```

Gateway variables:

```env
PORT=3000
USER_MANAGEMENT_SERVICE_URI=http://localhost:3001
REALESTATE_MANAGEMENT_SERVICE_URI=http://localhost:3002
RESTAURANT_MANAGEMENT_SERVICE_URI=http://localhost:3003
CAR_MANAGEMENT_SERVICE_URI=http://localhost:3004
SERVICE_MANAGEMENT_SERVICE_URI=http://localhost:3005
AD_MANAGEMENT_SERVICE_URI=http://localhost:3006
EMAIL_MANAGEMENT_SERVICE_URI=http://localhost:3007
```

Then call everything through the gateway at `http://localhost:3000/api`.
