# Bike Customer Service API

A RESTful API built with TypeScript, PostgreSQL, and Prisma ORM.  
Date manipulation is handled via [date-fns].  

> Live demo: https://bike-servicing-peach.vercel.app/

---

## 🚀 Features

- 🚲 **Bike** CRUD endpoints  
- 🧑‍🤝‍🧑 **Customer** CRUD endpoints  
- 🛠️ **Service** endpoints (including overdue‑status check)  
- 📦 TypeScript for type safety  
- 🐘 PostgreSQL database  
- 🔧 Prisma ORM for database modelling and migrations  
- 📅 date-fns for date parsing & formatting  

---

## 📦 Tech Stack

- **Language**: TypeScript  
- **Framework**: Node.js + Express  
- **Database**: PostgreSQL  
- **ORM**: Prisma  
- **Date Utils**: date-fns  


## 📥 Installation

1. Clone the repo  
   ```bash
   [git clone https://github.com/<your-username>/<repo-name>.git](https://github.com/mydul62/bike-servicing-api)
   cd <repo-name>
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Set up environment variables  
   Create a `.env` file in the root with:
   ```dotenv
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
   PORT=3000
   ```

4. Run Prisma migrations & generate client  
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. Start the server  
   ```bash
   npm run build
   npm start
   ```
   or for development:
   ```bash
   npm run dev
   ```

The API will be running by default on `http://localhost:3000/`.

---

## 🔗 API Endpoints

### Bike Routes

| Method | Path               | Description               |
| ------ | ------------------ | ------------------------- |
| POST   | `/api/bikes/`      | Create a new bike         |
| GET    | `/api/bikes/`      | Get all bikes             |
| GET    | `/api/bikes/:id`   | Get single bike by ID     |
| PUT    | `/api/bikes/:id`   | Update bike by ID         |
| DELETE | `/api/bikes/:id`   | Delete bike by ID         |

### Customer Routes

| Method | Path                    | Description                   |
| ------ | ----------------------- | ----------------------------- |
| POST   | `/api/customers/`       | Create a new customer         |
| GET    | `/api/customers/`       | Get all customers             |
| GET    | `/api/customers/:id`    | Get single customer by ID     |
| PUT    | `/api/customers/:id`    | Update customer by ID         |
| DELETE | `/api/customers/:id`    | Delete customer by ID         |

### Service Routes

| Method | Path                     | Description                         |
| ------ | ------------------------ | ----------------------------------- |
| GET    | `/api/services/status`   | Get all overdue services            |
| POST   | `/api/services/`         | Create a new service                |
| GET    | `/api/services/`         | Get all services                    |
| GET    | `/api/services/:id`      | Get single service by ID            |
| PUT    | `/api/services/:id`      | Update service by ID                |

---

## 📄 Usage

Use tools like [Postman] or [Insomnia] to interact with the endpoints. Ensure your `DATABASE_URL` is correctly configured in `.env` and that your database is running.

_Primers_:  
- Bike: `{ id, model, brand, year, customerId, createdAt }`  
- Customer: `{ id, name, email, phone, createdAt }`  
- Service: `{ id, bikeId, description, status, dueDate, createdAt }`




