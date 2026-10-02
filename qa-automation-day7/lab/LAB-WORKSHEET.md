# Lab: Explore the Staff Directory like a tester

Module 4, Session 2. Work in pairs if one laptop is still setting up.
Fill in the **Actual** column yourself. The point is to *observe*, not to guess.

Before you start, get a token for each role (Git Bash, inside `api/`):

```bash
HR=$(node scripts/get-token.js hr.sita Hr@123)
EMP=$(node scripts/get-token.js emp.ram Emp@123)
ADMIN=$(node scripts/get-token.js admin.anil Admin@123)
```

## Task 1: Three roles, one screen
Sign in as each account at http://localhost:5173. Keep DevTools open on the **Network** tab.

| Check                       | admin.anil | hr.sita | emp.ram |
|-----------------------------|------------|---------|---------|
| Role badge in the nav       |  ADMIN     |   HR    | EMPLOYEE|
| "Add employee" link visible?|    YES     |   YES   |  NO     |
| Salary column visible?      |    YES     |   YES   |  NO     |
| Delete buttons visible?     |    YES     |   NO    |  NO     |

## Task 2: Call the API directly

| #   |                         Request                                       |Expected status| Actual status|        Message                    |
|-----|-----------------------------------------------------------------------|---------------|--------------|-----------------------------------|
| 2.1 | `curl -i http://localhost:3000/health`                                |     200       |      200     |{"status":"ok","api":"up","database":"connected"}|
| 2.2 | `curl -i http://localhost:3000/employees`                             |     401       |      401     |{"message":"Missing bearer token","error":"Unauthorized","statusCode":401}|
| 2.3 |`curl -i http://localhost:3000/employees -H "Authorization: Bearer $HR"`| 200          | 200          | all employee object with monthlySalaryPaisa key |
| 2.4 | Same as 2.3 with `$EMP`. Is `monthlySalaryPaisa` in the JSON?         | 200           |200           | all employee object without monthlySalaryPaisa key|

## Task 3: Break the DTO rules (as HR)

Put a valid body in a variable, then send it:

```bash
BODY='{"fullName":"Rita Lama","email":"rita.lama@qrius.test","department":"QA","designation":"QA Intern","phone":"9812345678","city":"Pokhara","monthlySalaryPaisa":3500000}'
curl -i -X POST http://localhost:3000/employees -H "Authorization: Bearer $HR" -H "Content-Type: application/json" -d "$BODY"
```

Then edit the `BODY=` line to break **one field at a time** and resend:

| #   | Change                                  | Expected | Actual status | Exact message |
|-----|-----------------------------------------|----------|---------------|---------------|
| 3.1 | none (valid body)                       | 201      | 201           |{"fullName":"Rita Lama","email":"rita.lama@qrius.test","department":"QA","designation":"QA Intern","phone":"9812345678","city":"Pokhara","monthlySalaryPaisa":3500000,"id":13,"isActive":true}
| 3.2 | send it again, unchanged                | 409      | 409           | "An employee with email rita.lama@qrius.test already exists","error":"Conflict","statusCode":409 |
| 3.3 | `"phone":"12345"`                       | 400      | 400           | ["phone must be a 10-digit Nepali mobile number starting with 97 or 98"],"error":"Bad Request","statusCode":400|
| 3.4 | `"department":"Marketing"`              | 400      | 400           | ["department must be one of the following values: Engineering, QA, HR, Finance, Operations"],"error":"Bad Request","statusCode":400|
| 3.5 | add `"isAdmin":true`                    | 400      | 400           |["property isAdmin should not exist"],"error":"Bad Request","statusCode":400 |
| 3.6 | `"monthlySalaryPaisa":"35000"` (a string) | 400    | 400           | ["monthlySalaryPaisa must not be less than 0","monthlySalaryPaisa must be an integer number"],"error":"Bad Request","statusCode":400 |


## Task 4: Try a forbidden role

| #   | Who                | Request                                      | Expected | Actual |
|-----|--------------------|----------------------------------------------|----------|--------|
| 4.1 | EMPLOYEE           | Task 3's `curl` with `$EMP` instead of `$HR` | 403      | 403    | "Role EMPLOYEE cannot perform this action","error":"Forbidden","statusCode":403
| 4.2 | HR                 | DELETE `/employees/1`                        | 403      | 403    |"Role HR cannot perform this action","error":"Forbidden","statusCode":...|
| 4.3 | EMPLOYEE           | POST `/employees` with body `{"fullName":"R"}` | 400    | 400    | "fullName must be longer than or equal to 2 characters","email must be an email","department must be..."|
| 4.4 | EMPLOYEE in the UI | open http://localhost:5173/employees/new directly and submit | 403 | 403 |


## Task 5: Prove it in the database (pgAdmin)
1. As hr.sita, add an employee through the UI. Use salary `85000.50`.
2. In pgAdmin (Query Tool on `qrius_hr`), run the second query in `03-handy-queries.sql`. Is your row at the top?
Ans: Yes the recently added row is shown at the top after I run this query.

3. Does `monthly_salary_paisa` read `8500050`? Compare it with the rupees shown in the UI.
Ans: Yes `monthly_salary_paisa` read `8500050`. In the UI the salary amount is shown in rupees `85000.50`. The application converts the value between rupees and paisa, when saving it is stored in paisa, and when displaying the salary in the UI, the paisa value is converted back to rupees.

4. Note the column names: `monthly_salary_paisa` in the database, `monthlySalaryPaisa` in the JSON. Which file translates between them?
Ans: employees.entity.ts file translate between them
This file maps the database column to the entity property using the column configuration.
  @Column({ name: 'monthly_salary_paisa' }) monthlySalaryPaisa: number;  

