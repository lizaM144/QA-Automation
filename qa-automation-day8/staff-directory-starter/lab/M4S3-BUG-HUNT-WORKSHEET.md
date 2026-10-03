# Lab: DevTools bug hunt + locator challenge

Module 4, Session 3. Work in pairs if a laptop is still setting up.

## Setup

1. Terminal 1: start the API as usual (`cd api && npm run start:dev`).
2. Terminal 2: `cd web && npm run dev:bugs`. You should see a coral **Bug mode** badge in the nav.
3. In pgAdmin, run `02-reset-and-seed.sql` on `qrius_hr` so everyone starts from the same data.
4. Open Chrome, press **F12**, and keep DevTools open for the whole lab.

**Rules:** find each defect with DevTools. Don't open `web/src` or the Sources panel.
Record what you *saw*, not what you guessed.

## Part A: Bug hunt

For each task, do the steps, then open the hint only if you are stuck.

| # | Do this | Symptom you noticed | DevTools panel that proved it | Evidence (paste the exact text) | Which layer is wrong? |
|---|---------|---------------------|-------------------------------|---------------------------------|-----------------------|
| 1 | Sign in as `hr.sita` with a **wrong** password |Login failed and the login error message was present but was invisible because the text and background were both white | Elements |<p class="error error-muted" role="alert" data-testid="login-error">Invalid username or password</p> | React(frontend) The error element is rendered by frontend, but its CSS makes the text invisible |
| 2 | Sign in correctly, then type a name in **Search** |The employee directory became completely blank when i searched   |Console + Network |Console: DirectoryPage.tsx:39 Uncaught TypeError: Cannot read properties of undefined (reading 'toLowerCase')     Network: GET / employees successfully returns the employee objects |React(frontend) The API successfully returns the employee data, but the frontend search crashed while calling toLowerCase() on an undefined value |
| 3 | As `hr.sita`, add an employee with monthly salary **35000** |The employee was added but the salary was displayed as 350.00 instead of 35000 |Network + pgAdmin |POST /employee response: "monthlySalaryPaisa": 35000      pgAdmin: monthly_salary_paisa = 35000 |React(frontend) The API and database correctly store 35000 paisa, so the frontend's rupees/paisa conversion caused the amount to be different |
| 4 | **Log out**, then press **F5** |After logging out and refreshing, I was still ont the dashboard and could see all employees |Application > Local Storage |qrius.token: eyJhbGci...        qrius.user:{"username":"hr.sita","name":"Sita Sharma","role":"HR"} |React(frontend) Authentication data remains in Local Storage even after logout, so the frontend restored the logged in state after refresh|
| 5 | Add an employee using **only the keyboard** (Tab, type, Enter) |When navigating with Tab, focus moved to Cancel button instead of the Save employee button, so the Save button could not be reached using the keyboard |Elements + Accessibility |<div class="primary fake-button" data-testid="add-submit">Save employee</div>  Accessibility: Role: generic;   |React(frontend) The frontend rendered Save employee as a generic <div> instead of a keyboard accessible button, so that is why it cannot receive normal keyboard focus|


## Part B: Locator challenge

Use **normal mode** for this part (`npm run dev`). For each element, write the best Playwright locator,
then prove it matches **exactly one** element (Elements panel Ctrl+F shows `1 of 1`, or check in the Console).

| # | Element | Your Playwright locator | DevTools check you ran | Matches |
|---|---------|-------------------------|------------------------|---------|
| B1 | The **Sign in** button |page.getByRole('button',{name: 'Sign In'}) |In Accessibility pane, Role: button "Sign in" |1 |
| B2 | The **Username** field |page.getByLabel('Username') |In Accessibility pane, Role: textbox "Username"|1 |
| B3 | The text **Showing 12 of 12 staff** |getByText('Showing 12 of 12 staff') |$x('//p[contains(., "Showing")]') |1 |
| B4 | The **Department** dropdown |page.getByRole('combobox',{name: 'Department'}) |In Accessibility pane, Role: combobox "Department" |1 |
| B5 (stretch) | **Kabita Rai's** Delete button (sign in as `admin.anil`) |page.getByTestId('employee-row').filter({hasText:'Kabita Rai'}).getByRole('button',{name: 'Delete'}) |$x('//tr[contains(., "Kabita Rai")]//button[text()="Delete"]').length |1 |

## Write one bug report

Pick one defect from Part A. Title, steps, expected, actual, **evidence from DevTools**, severity.
**Defect:** Search crashed the employee directory
**Title:** Search causes the employee directory page to become blank
**Env:** Chrome, web started with npm run dev, API on: 3000
**Steps:**
1. Open the HR application in bug mode.
2. Sign in as hr.sita with the correct password.
3. Go to the employee directory.
4. Type an employee's name in the Search field.
**Expected:** The employee directory should filter the list and display the matching employee.
**Actual:** The page becomes blank when a name is entered in the Search field.
**Evidence:** 
Network: GET /employees -> 304, X-Request-Id 928b6920
Console: DirectoryPage.tsx:39 Uncaught TypeError: Cannot read properties of undefined (reading 'toLowerCase')
**Severity:** High. Searching for employees causes the employee directory to become unusable and prevents the user from performing any actions

## When you finish

Stop `npm run dev:bugs`, start `npm run dev`, and re-run `02-reset-and-seed.sql`.
