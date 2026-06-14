# Java Exam Revision Portal | بوابة مراجعة البرمجة بجافا

An interactive Web Exam & Study Simulator coupled with automatic PDF compilation scripts built for the **Borg Al-Arab Technological University** Java Programming Final Exam Revision.

نظام تفاعلي متكامل لمراجعة مقرر برمجة الجافا لطلاب السنة الثانية بقسم تكنولوجيا المعلومات بجامعة برج العرب التكنولوجية.

---

## 🎨 Key Features | أهم المميزات

- **Bilingual Exam Simulator (عربي / English)**: Interactive practice interface with on-the-fly translation toggles for comprehension.
- **Bilingual Session Resume**: Prompts and button controls automatically load and save state in both English and Arabic.
- **Two Revision Modes | نظامين للمذاكرة**:
  - **Exam Mode**: A simulated exam environment with a 60-minute countdown timer and sidebar navigation.
  - **Section Study Mode**: Focus on specific topics (MCQs, True/False, Predict Output, Correct Code, Programming Tasks) with immediate validation, explanations, and question flagging.
- **Smart Semantic Code Evaluator**: Built-in logical grader that evaluates student code submissions semantically, avoiding string-exact matching.
- **Theme Controls**: Fully custom Pitch-Black/Electric-Blue (Dark) and White/Royal-Blue (Light) themes.
- **PDF Question Bank Sync**: Python scripts powered by ReportLab to compile and generate a comprehensive 51-page revision PDF.

---

## 📁 Repository Layout | الهيكل البرمجي للمشروع

This repository contains the full front-end portal code and PDF generator scripts (excluding binaries):

- **[index.html](index.html)**: Main web portal structural layout and welcome configurations.
- **[style.css](style.css)**: Custom light/dark themes, active navigator states, and responsive media queries.
- **[script.js](script.js)**: State management, event bindings, semantic coding evaluators, and session tracking.
- **[questions.js](questions.js)**: Global randomized database holding the 231 translated revision questions.
- **[generate_revision_bank.py](generate_revision_bank.py)**: PDF compiler script that builds the official 51-page physical revision sheet.
- **[generate_pdf.py](generate_pdf.py)**: Secondary PDF script generating the core revision exam sheet.

---

## 🚀 How to Run | طريقة التشغيل

### 1. Interactive Web Simulator
No server installation is required. Simply double-click **`index.html`** or open it in any modern web browser.

### 2. Generate Revision PDFs
To recompile the physical PDFs, ensure you have Python installed with ReportLab and PyPDF packages, then run:
```bash
pip install reportlab pypdf
python generate_revision_bank.py
```

---

## 🎓 Academic Context | السياق الأكاديمي
- **University**: Borg Al-Arab Technological University (جامعة برج العرب التكنولوجية)
- **Year**: IT Dept. (2nd Year) — 2025/2026
- **Lecturers**: Dr. Radwa Rady & Dr. Ghada Fathy
- **Created By**: Eng. Ahmed Elfaky (مهندس أحمد الفقي)
