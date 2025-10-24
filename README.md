## Project Overview

- This project is a fun game project done for fun among students, like a normal purity game, a maximum of 100 questions
is asked to the user and they can answer them with either a YES or NO.
- Once they pick their answers and the 100 questions are completed, the calculate button will display and they can then calculate thiers
- After clicking the calculate button, they will be redirected to a Result page where their result will be displayed


**Features**
- User Answering questions
- Calculating Results
- Displaying Results

## 🛠 Stack
- **FrameWork** NEXTJs + Typescript (Vite)
- Tailwind CSS
- NEXT Routing System


## Files Structure

Purity Test/
    src/
        app/                    ## Main Directory for all files and folders
            about/              ## About Route and Informations
            api/                ## APIs callers and route handler
                questions/
            test/               ## Test Route and Informations
                result/         ## Result Route and Informations
        components/
            layout/             ## Components to be displayed
            ui/                 ## Reusable components
        lib/                    ## Essentials like DB etc..
        pages/                  ## Pages to be displayed

📌 **Folder Naming Convention**: use **kebab-case**.
📌 **Component Naming**: React components use **PascalCase**.


## Getting Started

```bash
git clone projectURL
# This is done to get the project locally running on your PC
cd purity-test-app
# Changing directory to the main directory
npm install 
# After cloning, you need to install all dependecies in order to get started
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```


## 👥 Collaboration Guide

### Branching Strategy

- **Main (`main`)** → production-ready branch
- **Feature branches** → `feature/<name>`
- **Bugfix branches** → `fix/<name>`

👉 Example:

- `feature/authenctication`
- `fix/display-result-bug`

### Commit Messages (Conventional Commits)

- `feat(UI): add login form`
- `fix(API): resolve student ID mismatch`
- `refactor(DB): simplify user schema`
- `docs(README): update project overview`

### Rules of Thumb

- ❌ No direct pushes to `main`
- ✅ Every change must go through a Pull Request (PR)
- ✅ PRs require at least 1 reviewer approval
- ✅ Squash merges to keep history clean

---
