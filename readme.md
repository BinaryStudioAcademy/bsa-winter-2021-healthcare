<h1 align="center">
  🧬 Health Care 🧪
</h1>

## ℹ️ General info

This is the repository responsible for HealthCare's app.
### 🖍 Requirements:

- NodeJS (14.x.x);
- NPM (6.x.x);
- PostgreSQL (latest);
- run **`npx simple-pre-commit`** at the root of the project, before the start (it will set the pre-commit hook for any commits).

## 🗂 Shared

This [folder](./shared) contains all common (helpers, enums and etc.) stuff for other applications (backend, frontend and etc.).

## ⚙️ BackEnd

For the [BackEnd](./backend) to work properly, you need to fill in the **`.env`** file. You can use the **`.env.example`** file as an example.

### 🛠 Useful Scripts

* **`npx sequelize-cli migration:create --name <migration-name>`** — create migration with **`<migration-name>`** param as name.


## 💡 FrontEnd

For the [FrontEnd](./frontend) to work properly, you need to fill in the **`.env`** file. You can use the **`.env.example`** file as an example.

## 🏃‍♂️ Simple start

1. **`npm run install:all`** at the root
2. Fill ENVs
3. **`npx simple-pre-commit`** at the root
4. **`npm run start`** at the root
5. Enjoy <3

*The root **package.json** includes many interesting scripts. You can view them to stay informed* 🙌
