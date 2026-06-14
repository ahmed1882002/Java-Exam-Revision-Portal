// Application State Management
const state = {
  mode: 'exam', // 'exam' or 'study'
  section: ['mcq'], // Maps to array of active sections chosen for study mode
  questions: [], // Active questions pool (shuffled)
  currentIndex: 0,
  userAnswers: {}, // Maps question index -> user selection or text input
  checkedAnswers: {}, // Maps question index -> true/false
  flaggedQuestions: {}, // Maps question index -> boolean (for flagging in exam mode)
  timerId: null,
  elapsedTime: 0, // In seconds (counts up in study mode, counts down in exam mode)
  arabicSupport: false, // Whether to show Arabic translations
  theme: 'dark' // 'dark' or 'light'
};

// DOM Elements
const welcomeModal = document.getElementById('welcome-modal');
const langEnCard = document.getElementById('lang-en-card');
const langArCard = document.getElementById('lang-ar-card');
const modeExamCard = document.getElementById('mode-exam-card');
const modeStudyCard = document.getElementById('mode-study-card');
const sectionSelectorGroup = document.getElementById('section-selector-group');
const startBtn = document.getElementById('start-btn');

const mainAppLayout = document.getElementById('main-app-layout');
const questionsViewport = document.getElementById('questions-viewport');
const controlsBar = document.getElementById('controls-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const controlsProgressTxt = document.getElementById('controls-progress-txt');
const progressBarFill = document.getElementById('progress-bar-fill');
const examProgressBar = document.getElementById('exam-progress-bar');

const examTimer = document.getElementById('exam-timer');
const timerVal = document.getElementById('timer-val');
const progressStat = document.getElementById('progress-stat');
const progressVal = document.getElementById('progress-val');
const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
const themeIconDark = document.getElementById('theme-icon-dark');
const themeIconLight = document.getElementById('theme-icon-light');

const questionNavigator = document.getElementById('question-navigator');
const submitExamBtn = document.getElementById('submit-exam-btn');
const sidebarTitle = document.getElementById('sidebar-title');
const studyHelpCard = document.getElementById('study-help-card');

const resultsPanel = document.getElementById('results-panel');
const resultsMotivationalBanner = document.getElementById('results-motivational-banner');
const resultScorePercent = document.getElementById('result-score-percent');
const resultScoreGrade = document.getElementById('result-score-grade');
const scoreGaugeFill = document.getElementById('score-gauge-fill');
const statCorrect = document.getElementById('stat-correct');
const statIncorrect = document.getElementById('stat-incorrect');
const statTime = document.getElementById('stat-time');
const statMode = document.getElementById('stat-mode');
const restartExamBtn = document.getElementById('restart-exam-btn');
const changeModeBtn = document.getElementById('change-mode-btn');
const exitBtn = document.getElementById('exit-btn');
const sidebarExitBtn = document.getElementById('sidebar-exit-btn');
const reviewListViewport = document.getElementById('review-list-viewport');

// Helper: Fisher-Yates Shuffling Algorithm
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Helper: Format Time (seconds -> MM:SS)
function formatTime(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Helper: Normalize user answers for text comparison
function normalizeText(text) {
  if (!text) return '';
  return text.toLowerCase()
             .replace(/\s+/g, ' ')
             .replace(/["']/g, '"') // Normalize quotes
             .replace(/;\s*$/g, '') // Strip trailing semicolon
             .trim();
}

// Toast Notification System (Salla ala Al-Nabi ❤️)
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<span>❤️</span> <span>${message}</span>`;
  container.appendChild(toast);
  
  // Slide in
  setTimeout(() => {
    toast.classList.add('show');
  }, 50);
  
  // Slide out and remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 6000);
}

// Custom Chic Alert Modal
function chicAlert(message, title = 'Attention') {
  return new Promise((resolve) => {
    const modal = document.getElementById('custom-alert-modal');
    const titleEl = document.getElementById('custom-alert-title');
    const msgEl = document.getElementById('custom-alert-message');
    const okBtn = document.getElementById('custom-alert-ok-btn');
    
    titleEl.innerText = title;
    msgEl.innerText = message;
    modal.classList.add('active');
    
    const handler = () => {
      modal.classList.remove('active');
      okBtn.removeEventListener('click', handler);
      resolve();
    };
    okBtn.addEventListener('click', handler);
  });
}

// Custom Chic Confirm Modal
function chicConfirm(message, title = 'Confirmation', okText = 'Yes', cancelText = 'Cancel') {
  return new Promise((resolve) => {
    const modal = document.getElementById('custom-confirm-modal');
    const titleEl = document.getElementById('custom-confirm-title');
    const msgEl = document.getElementById('custom-confirm-message');
    const okBtn = document.getElementById('custom-confirm-ok-btn');
    const cancelBtn = document.getElementById('custom-confirm-cancel-btn');
    
    titleEl.innerText = title;
    msgEl.innerText = message;
    okBtn.innerText = okText;
    cancelBtn.innerText = cancelText;
    modal.classList.add('active');
    
    const handleOk = () => {
      modal.classList.remove('active');
      cleanup();
      resolve(true);
    };
    
    const handleCancel = () => {
      modal.classList.remove('active');
      cleanup();
      resolve(false);
    };
    
    const cleanup = () => {
      okBtn.removeEventListener('click', handleOk);
      cancelBtn.removeEventListener('click', handleCancel);
    };
    
    okBtn.addEventListener('click', handleOk);
    cancelBtn.addEventListener('click', handleCancel);
  });
}


// Study Mode Topics Checkboxes Controls
function initStudyTopicsControls() {
  const topicCards = document.querySelectorAll('.topic-checkbox-card');
  const toggleAllBtn = document.getElementById('toggle-all-sections-btn');
  
  topicCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Prevent label-checkbox double click trigger
      if (e.target.tagName === 'INPUT') {
        updateCardSelectionState(card);
        return;
      }
      const checkbox = card.querySelector('input[type="checkbox"]');
      checkbox.checked = !checkbox.checked;
      updateCardSelectionState(card);
    });
  });
  
  toggleAllBtn.addEventListener('click', () => {
    const allChecked = Array.from(topicCards).every(card => card.querySelector('input').checked);
    topicCards.forEach(card => {
      card.querySelector('input').checked = !allChecked;
      updateCardSelectionState(card);
    });
    
    toggleAllBtn.innerText = allChecked
      ? "Select All Sections / تحديد كل المنهج"
      : "Deselect All Sections / إلغاء تحديد الكل";
  });
}

function updateCardSelectionState(card) {
  const isChecked = card.querySelector('input').checked;
  card.classList.toggle('selected', isChecked);
}

// State Persistence in Local Storage
function saveStateToLocalStorage() {
  if (state.questions && state.questions.length > 0) {
    const stateCopy = {
      mode: state.mode,
      section: state.section,
      currentIndex: state.currentIndex,
      userAnswers: state.userAnswers,
      checkedAnswers: state.checkedAnswers,
      flaggedQuestions: state.flaggedQuestions,
      elapsedTime: state.elapsedTime,
      arabicSupport: state.arabicSupport,
      questions: state.questions
    };
    localStorage.setItem('java_revision_state', JSON.stringify(stateCopy));
  }
}

function clearStateFromLocalStorage() {
  localStorage.removeItem('java_revision_state');
}

async function checkAndResumeSession() {
  const saved = localStorage.getItem('java_revision_state');
  if (!saved) return;
  
  try {
    const data = JSON.parse(saved);
    if (data && data.questions && data.questions.length > 0) {
      const isArabic = data.arabicSupport;
      const resumeMsg = "We found a saved revision session. Do you want to resume where you left off?\n\nلقد وجدنا جلسة مراجعة سابقة محفوظة. هل تريد الاستمرار من حيث توقفت؟";
      const confirmResume = await chicConfirm(resumeMsg, "Resume Session | استئناف الجلسة", "Yes | نعم", "Cancel | إلغاء");
      if (confirmResume) {
        state.mode = data.mode;
        state.section = data.section;
        state.currentIndex = data.currentIndex;
        state.userAnswers = data.userAnswers || {};
        state.checkedAnswers = data.checkedAnswers || {};
        state.flaggedQuestions = data.flaggedQuestions || {};
        state.elapsedTime = data.elapsedTime;
        state.arabicSupport = data.arabicSupport;
        state.questions = data.questions;
        
        // Restore Welcome Modal Inputs
        selectLanguagePref(state.arabicSupport ? 'ar' : 'en');
        selectModePref(state.mode);
        
        if (state.mode === 'study') {
          const sections = Array.isArray(state.section) ? state.section : [state.section];
          document.querySelectorAll('.topic-checkbox-card').forEach(card => {
            const sec = card.getAttribute('data-section');
            const checkbox = card.querySelector('input');
            const isSelected = sections.includes(sec);
            checkbox.checked = isSelected;
            updateCardSelectionState(card);
          });
        }
        
        // Transition welcome modal
        welcomeModal.classList.remove('active');
        mainAppLayout.classList.add('active');
        resultsPanel.classList.remove('active');
        
        // Setup navbar controls & dynamic text label
        langToggle.style.display = 'block';
        langToggle.classList.toggle('selected', state.arabicSupport);
        langToggle.innerHTML = state.arabicSupport 
          ? '<span style="font-weight: 700; font-size: 0.8rem;">EN</span>' 
          : '<span style="font-weight: 700; font-size: 0.85rem;">عربي</span>';
          
        examProgressBar.style.display = 'block';
        controlsBar.style.display = 'flex';
        examTimer.style.display = 'flex';
        progressStat.style.display = 'flex';
        
        if (state.mode === 'exam') {
          sidebarTitle.innerText = "Exam Navigator";
          submitExamBtn.style.display = 'block';
          submitExamBtn.innerText = "Submit Answers";
          studyHelpCard.style.display = 'none';
        } else {
          sidebarTitle.innerText = "Section Progress";
          submitExamBtn.style.display = 'block';
          submitExamBtn.innerText = "Finish Section";
          studyHelpCard.style.display = 'block';
        }
        
        // Resume Timer
        if (state.timerId) clearInterval(state.timerId);
        timerVal.innerText = formatTime(state.elapsedTime);
        
        startTimerInterval();
        
        renderQuestion(state.currentIndex);
        renderSidebarNavigator();
        updateProgressUI();
      } else {
        clearStateFromLocalStorage();
      }
    }
  } catch (e) {
    console.error("Error loading progress state:", e);
    clearStateFromLocalStorage();
  }
}

// Initial Configuration Setup
document.addEventListener('DOMContentLoaded', () => {
  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('java-theme') || 'dark';
  setTheme(savedTheme);
  
  // Set up welcome form controls
  langEnCard.addEventListener('click', () => selectLanguagePref('en'));
  langArCard.addEventListener('click', () => selectLanguagePref('ar'));
  
  modeExamCard.addEventListener('click', () => selectModePref('exam'));
  modeStudyCard.addEventListener('click', () => selectModePref('study'));
  
  startBtn.addEventListener('click', startRevision);
  themeToggle.addEventListener('click', toggleTheme);
  langToggle.addEventListener('click', toggleLanguageSupportOnTheFly);
  
  prevBtn.addEventListener('click', goPrev);
  nextBtn.addEventListener('click', goNext);
  submitExamBtn.addEventListener('click', () => submitExam(false));
  
  restartExamBtn.addEventListener('click', restartCurrentSession);
  changeModeBtn.addEventListener('click', returnToSetup);
  exitBtn.addEventListener('click', exitCurrentSession);
  sidebarExitBtn.addEventListener('click', exitCurrentSession);
  
  // Initialize grid checklist controls
  initStudyTopicsControls();
  
  // Salat alarm every 10 minutes (600,000ms)
  setTimeout(() => showToast("صلِّ على محمد ﷺ ❤️"), 60000);
  setInterval(() => {
    showToast("صلِّ على محمد ﷺ ❤️");
  }, 10 * 60 * 1000);
  
  // Register accidental refresh preventer
  window.addEventListener('beforeunload', (e) => {
    if (state.questions && state.questions.length > 0 && !resultsPanel.classList.contains('active')) {
      e.preventDefault();
      e.returnValue = ''; // standard prompt
    }
  });
  
  // Check if saved session exists to resume
  checkAndResumeSession();
});

// Theme Management
function setTheme(theme) {
  state.theme = theme;
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('java-theme', theme);
  
  if (theme === 'dark') {
    themeIconDark.style.display = 'block';
    themeIconLight.style.display = 'none';
  } else {
    themeIconDark.style.display = 'none';
    themeIconLight.style.display = 'block';
  }
}

// Flag Button handler (Exam Mode)
function toggleFlagCurrentQuestion() {
  const idx = state.currentIndex;
  state.flaggedQuestions[idx] = !state.flaggedQuestions[idx];
  saveStateToLocalStorage();
  renderQuestion(idx);
  renderSidebarNavigator();
}

function toggleTheme() {
  setTheme(state.theme === 'dark' ? 'light' : 'dark');
}

// Welcome Modal Language Selection
function selectLanguagePref(lang) {
  state.arabicSupport = (lang === 'ar');
  if (lang === 'en') {
    langEnCard.classList.add('selected');
    langEnCard.querySelector('input').checked = true;
    langArCard.classList.remove('selected');
  } else {
    langArCard.classList.add('selected');
    langArCard.querySelector('input').checked = true;
    langEnCard.classList.remove('selected');
  }
}

// Welcome Modal Mode Selection
function selectModePref(mode) {
  state.mode = mode;
  if (mode === 'exam') {
    modeExamCard.classList.add('selected');
    modeExamCard.querySelector('input').checked = true;
    modeStudyCard.classList.remove('selected');
    sectionSelectorGroup.style.display = 'none';
  } else {
    modeStudyCard.classList.add('selected');
    modeStudyCard.querySelector('input').checked = true;
    modeExamCard.classList.remove('selected');
    sectionSelectorGroup.style.display = 'block';
  }
}

// Language Toggle on the fly
function toggleLanguageSupportOnTheFly() {
  state.arabicSupport = !state.arabicSupport;
  langToggle.classList.toggle('selected', state.arabicSupport);
  langToggle.innerHTML = state.arabicSupport 
    ? '<span style="font-weight: 700; font-size: 0.8rem;">EN</span>' 
    : '<span style="font-weight: 700; font-size: 0.85rem;">عربي</span>';
    
  renderQuestion(state.currentIndex);
  saveStateToLocalStorage();
}

// START REVISION / EXAM
async function startRevision() {
  // 1. Save preferences
  const selectedLang = document.querySelector('input[name="pref_lang"]:checked').value;
  state.arabicSupport = (selectedLang === 'ar');
  
  const selectedMode = document.querySelector('input[name="pref_mode"]:checked').value;
  state.mode = selectedMode;
  
  if (state.mode === 'study') {
    const selectedSections = [];
    document.querySelectorAll('.topic-checkbox-card').forEach(card => {
      if (card.querySelector('input').checked) {
        selectedSections.push(card.getAttribute('data-section'));
      }
    });
    
    if (selectedSections.length === 0) {
      await chicAlert("Please select at least one study section / الرجاء اختيار قسم واحد على الأقل للمذاكرة.", "No Section Selected");
      return;
    }
    state.section = selectedSections;
  }
  
  // Setup interface language toggle dynamic text
  langToggle.style.display = 'block';
  langToggle.classList.toggle('selected', state.arabicSupport);
  langToggle.innerHTML = state.arabicSupport 
    ? '<span style="font-weight: 700; font-size: 0.8rem;">EN</span>' 
    : '<span style="font-weight: 700; font-size: 0.85rem;">عربي</span>';
  
  // 2. Build active questions
  buildQuestionsPool();
  
  if (state.questions.length === 0) {
    await chicAlert("Question Database is still compiling. Please wait a few seconds and try again.", "Database Error");
    return;
  }

  // 3. Clear existing states
  state.currentIndex = 0;
  state.userAnswers = {};
  state.checkedAnswers = {};
  state.flaggedQuestions = {};
  
  // Set initial time budget
  if (state.mode === 'exam') {
    state.elapsedTime = 3600; // 60 minutes countdown
  } else {
    state.elapsedTime = 0; // standard stopwatch
  }
  
  // Hide Welcome Modal and show app layout
  welcomeModal.classList.remove('active');
  mainAppLayout.classList.add('active');
  resultsPanel.classList.remove('active');
  
  // Configure UI Components
  examProgressBar.style.display = 'block';
  controlsBar.style.display = 'flex';
  examTimer.style.display = 'flex';
  progressStat.style.display = 'flex';
  
  if (state.mode === 'exam') {
    sidebarTitle.innerText = "Exam Navigator";
    submitExamBtn.style.display = 'block';
    submitExamBtn.innerText = "Submit Answers";
    studyHelpCard.style.display = 'none';
  } else {
    sidebarTitle.innerText = "Section Progress";
    submitExamBtn.style.display = 'block';
    submitExamBtn.innerText = "Finish Section";
    studyHelpCard.style.display = 'block';
  }
  
  // Start Timer
  if (state.timerId) clearInterval(state.timerId);
  timerVal.innerText = formatTime(state.elapsedTime);
  startTimerInterval();
  
  // Initial Renders
  renderQuestion(state.currentIndex);
  renderSidebarNavigator();
  updateProgressUI();
  saveStateToLocalStorage();
}

function startTimerInterval() {
  state.timerId = setInterval(() => {
    if (state.mode === 'exam') {
      state.elapsedTime--;
      timerVal.innerText = formatTime(state.elapsedTime);
      
      examTimer.classList.toggle('warning', state.elapsedTime <= 300);
      
      if (state.elapsedTime <= 0) {
        clearInterval(state.timerId);
        submitExam(true); // Auto submit on timeout
      }
    } else {
      state.elapsedTime++;
      timerVal.innerText = formatTime(state.elapsedTime);
    }
    saveProgressTick();
  }, 1000);
}

// Throttle progress saving slightly to prevent write overheads
let lastSaveTime = 0;
function saveProgressTick() {
  const now = Date.now();
  if (now - lastSaveTime > 3000) {
    saveStateToLocalStorage();
    lastSaveTime = now;
  }
}

// Assemble questions based on mode
function buildQuestionsPool() {
  if (typeof javaQuestions === 'undefined') {
    state.questions = [];
    return;
  }
  
  if (state.mode === 'exam') {
    // Exam mode requirement: 35 MCQs, 15 T/F, 2 Predict Output, 2 Correct Code, 2 Coding Tasks
    const mcqs = shuffle(javaQuestions.mcq).slice(0, 35);
    const tfs = shuffle(javaQuestions.tf).slice(0, 15);
    const pos = shuffle(javaQuestions.po).slice(0, 2);
    const ccs = shuffle(javaQuestions.cc).slice(0, 2);
    const codings = shuffle(javaQuestions.coding).slice(0, 2); // Pull EXACTLY 2 coding tasks!
    
    mcqs.forEach(q => q.type = 'mcq');
    tfs.forEach(q => q.type = 'tf');
    pos.forEach(q => q.type = 'po');
    ccs.forEach(q => q.type = 'cc');
    codings.forEach(q => q.type = 'coding');
    
    const rawExamPool = [...mcqs, ...tfs, ...pos, ...ccs, ...codings];
    state.questions = shuffle(rawExamPool);
    
  } else {
    // Study mode: load all from selected sections array
    let rawPool = [];
    const sections = Array.isArray(state.section) ? state.section : [state.section];
    
    sections.forEach(sec => {
      if (javaQuestions[sec]) {
        const questionsOfSec = javaQuestions[sec].map(q => ({ ...q, type: sec }));
        rawPool = rawPool.concat(questionsOfSec);
      }
    });
    
    state.questions = shuffle(rawPool);
  }
  
  state.questions.forEach(q => {
    if (q.type === 'mcq') {
      q.shuffledOpts = shuffle(q.opts);
    } else if (q.type === 'tf') {
      q.shuffledOpts = [true, false];
    }
  });
}

// RENDER ACTIVE QUESTION CARD
function renderQuestion(index) {
  if (index < 0 || index >= state.questions.length) return;
  state.currentIndex = index;
  
  const q = state.questions[index];
  let html = '';
  
  const categoryNames = {
    'mcq': 'Multiple Choice (MCQ)',
    'tf': 'True or False (T/F)',
    'po': 'Predict the Output (Code Trace)',
    'cc': 'Correct the Code (Bug Fix)',
    'coding': 'Programming & Code Writing Task'
  };
  
  const isChecked = state.checkedAnswers[index];
  const isFlagged = state.flaggedQuestions[index];
  
  html += `
    <div class="question-card">
      <div class="question-header">
        <div>
          <span class="question-meta">${categoryNames[q.type]}</span>
          <span class="question-meta" style="background: rgba(0, 0, 0, 0.2); color: var(--text-secondary);">Q. ${index + 1} / ${state.questions.length}</span>
        </div>
        <button class="btn-secondary" style="padding: 4px 10px; font-size: 0.8rem; display: flex; align-items: center; gap: 4px; cursor: pointer; transition: all 0.2s; ${isFlagged ? 'border-color: var(--accent-warning); color: var(--accent-warning); box-shadow: var(--glow-primary); background: rgba(245, 158, 11, 0.1);' : ''}" onclick="toggleFlagCurrentQuestion()">
          <span>${isFlagged ? '🚩 Flagged' : '🚩 Flag'}</span>
        </button>
      </div>
  `;
  
  if (q.type === 'po' || q.type === 'cc') {
    html += `<div class="question-text">Analyze the code block and complete the task: <strong>${q.title}</strong></div>`;
    if (state.arabicSupport && q.title_ar) {
      html += `<div class="question-text-ar">حلل الكود البرمجي وأكمل المهمة: <strong>${q.title_ar}</strong></div>`;
    }
  } else if (q.type === 'coding') {
    html += `<div class="question-text"><strong>Task:</strong> ${q.title}<br/><span style="font-size: 0.95rem; font-weight: 400; color: var(--text-secondary);">${q.desc}</span></div>`;
    if (state.arabicSupport) {
      html += `<div class="question-text-ar"><strong>المهمة:</strong> ${q.title_ar}<br/><span style="font-size: 0.9rem; font-weight: 400;">${q.desc_ar}</span></div>`;
    }
  } else {
    html += `<div class="question-text">${q.q}</div>`;
    if (state.arabicSupport && q.q_ar) {
      html += `<div class="question-text-ar">${q.q_ar}</div>`;
    }
  }
  
  if (q.code) {
    html += `
      <div class="code-container">
        <div class="code-header">
          <span>Java Code Snippet</span>
          <button class="btn-secondary" style="padding: 2px 8px; font-size: 0.7rem;" onclick="copyCode(this)">Copy</button>
        </div>
        <div class="code-body" id="code-snippet-box">${escapeHtml(q.code)}</div>
      </div>
    `;
  }
  
  if (q.type === 'mcq') {
    html += `<div class="options-list">`;
    q.shuffledOpts.forEach((opt, optIdx) => {
      const isSelected = (state.userAnswers[index] === opt);
      let classList = 'option-btn';
      if (isSelected) classList += ' selected';
      
      // If checked at the end results review
      if (isChecked) {
        if (opt === q.correct) {
          classList += ' correct-glow';
        } else if (isSelected) {
          classList += ' incorrect-glow';
        }
      }
      
      html += `
        <button class="${classList}" onclick="selectOptionByIndex(${optIdx})">
          <div class="option-indicator"></div>
          <div class="option-label">${escapeHtml(opt)}</div>
        </button>
      `;
    });
    html += `</div>`;
    
  } else if (q.type === 'tf') {
    html += `<div class="options-list" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">`;
    q.shuffledOpts.forEach(opt => {
      const optStr = opt ? "True (T)" : "False (F)";
      const isSelected = (state.userAnswers[index] === opt);
      let classList = 'option-btn';
      if (isSelected) classList += ' selected';
      
      if (isChecked) {
        if (opt === q.ans) {
          classList += ' correct-glow';
        } else if (isSelected) {
          classList += ' incorrect-glow';
        }
      }
      
      html += `
        <button class="${classList}" onclick="selectTfOption(${opt})">
          <div class="option-indicator"></div>
          <div class="option-label">${optStr}</div>
        </button>
      `;
    });
    html += `</div>`;
    
  } else if (q.type === 'po' || q.type === 'cc') {
    const userVal = state.userAnswers[index] || '';
    const readOnlyAttr = isChecked ? 'readonly' : '';
    
    html += `
      <div class="input-container">
        <label class="form-label">${q.type === 'po' ? 'Predict the Output:' : 'Write the Corrected Code Lines:'}</label>
        <textarea class="textarea-field" placeholder="Type your answer here..." oninput="saveTextAnswer(this.value)" ${readOnlyAttr}>${escapeHtml(userVal)}</textarea>
      </div>
    `;
    
  } else if (q.type === 'coding') {
    const userVal = state.userAnswers[index] || '';
    const readOnlyAttr = isChecked ? 'readonly' : '';
    
    html += `
      <div class="input-container">
        <label class="form-label">Write your Java program solution:</label>
        <textarea class="textarea-field coding" placeholder="public class MySolution { ... }" oninput="saveTextAnswer(this.value)" ${readOnlyAttr}>${escapeHtml(userVal)}</textarea>
      </div>
    `;
  }
  
  // Render Hint buttons in Study Mode instead of immediate checks
  if (state.mode === 'study') {
    if (isChecked) {
      // Study session is finalized/evaluated - display solutions
      let correctAnsStr = '';
      if (q.type === 'mcq') correctAnsStr = q.correct;
      else if (q.type === 'tf') correctAnsStr = q.ans ? "True (T)" : "False (F)";
      else if (q.type === 'po' || q.type === 'cc') correctAnsStr = q.ans;
      else if (q.type === 'coding') correctAnsStr = q.code_ans;
      
      html += `
        <div style="margin-top: 25px; animation: slideUp 0.3s ease;">
          <div class="explanation-box" style="border-color: var(--accent-secondary); background: rgba(16, 185, 129, 0.05); margin-bottom: 15px;">
            <div class="explanation-title" style="color: var(--accent-secondary);">Model Solution / Answer:</div>
            <pre style="white-space: pre-wrap; font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-primary);">${escapeHtml(correctAnsStr)}</pre>
          </div>
          <div class="explanation-box">
            <div class="explanation-title">Explanation:</div>
            <p>${q.exp || 'This question covers standard Java programming concepts.'}</p>
          </div>
        </div>
      `;
    } else {
      // Study mode - show Hint button to help them study/remember
      html += `
        <div style="margin-top: 25px; display: flex; gap: 15px;">
          <button class="btn-secondary" style="border-color: var(--accent-warning); color: var(--accent-warning); display: flex; align-items: center; gap: 6px;" onclick="showHint()">
            💡 Show Hint / تلميح مساعد
          </button>
        </div>
      `;
    }
  }
  
  html += `</div>`; // Close card
  
  questionsViewport.innerHTML = html;
  
  prevBtn.disabled = (index === 0);
  if (index === state.questions.length - 1) {
    nextBtn.querySelector('span').innerText = (state.mode === 'exam') ? "Submit Exam" : "Finish Review";
    nextBtn.style.background = 'var(--accent-secondary)';
  } else {
    nextBtn.querySelector('span').innerText = "Next";
    nextBtn.style.background = 'var(--accent-primary)';
  }
  
  controlsProgressTxt.innerText = `Question ${index + 1} of ${state.questions.length}`;
  
  document.querySelectorAll('.nav-dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

// Show Hint system (First sentence of explanation as a clue)
window.showHint = async function() {
  const q = state.questions[state.currentIndex];
  let hintText = "Hint: Review course notes for this topic.";
  if (q.exp) {
    const sentences = q.exp.split('.');
    if (sentences.length > 0 && sentences[0].trim().length > 5) {
      hintText = sentences[0].trim() + ".";
    }
  }
  
  let hintTitle = "Helpful Hint";
  if (state.arabicSupport) {
    hintTitle = "تلميح مساعد";
    hintText = "تلميح: " + hintText;
  }
  
  await chicAlert(hintText, hintTitle);
};

// Option Selections
window.selectOptionByIndex = function(optIdx) {
  if (state.mode === 'study' && state.checkedAnswers[state.currentIndex]) return;
  const q = state.questions[state.currentIndex];
  const opt = q.shuffledOpts[optIdx];
  state.userAnswers[state.currentIndex] = opt;
  renderQuestion(state.currentIndex);
  renderSidebarNavigator();
  updateProgressUI();
  saveStateToLocalStorage();
};

window.selectTfOption = function(val) {
  if (state.mode === 'study' && state.checkedAnswers[state.currentIndex]) return;
  state.userAnswers[state.currentIndex] = val;
  renderQuestion(state.currentIndex);
  renderSidebarNavigator();
  updateProgressUI();
  saveStateToLocalStorage();
};

window.saveTextAnswer = function(val) {
  state.userAnswers[state.currentIndex] = val;
  updateSidebarIndicator(state.currentIndex, val.trim().length > 0);
  updateProgressUI();
  saveProgressTick();
};

window.copyCode = function(btn) {
  const codeBox = document.getElementById('code-snippet-box');
  if (codeBox) {
    navigator.clipboard.writeText(codeBox.innerText);
    const oldTxt = btn.innerText;
    btn.innerText = 'Copied!';
    setTimeout(() => btn.innerText = oldTxt, 2000);
  }
};

// Navigation Flow
function goPrev() {
  if (state.currentIndex > 0) {
    renderQuestion(state.currentIndex - 1);
  }
}

function goNext() {
  if (state.currentIndex < state.questions.length - 1) {
    renderQuestion(state.currentIndex + 1);
  } else {
    submitExam(false);
  }
}

// Render Sidebar Navigator Panel
function renderSidebarNavigator() {
  let html = '';
  state.questions.forEach((q, idx) => {
    const isAnswered = state.userAnswers[idx] !== undefined && state.userAnswers[idx] !== '';
    const isActive = idx === state.currentIndex;
    const isFlagged = state.flaggedQuestions[idx];
    
    let btnClass = 'nav-dot';
    if (isActive) btnClass += ' active';
    
    let style = '';
    if (isFlagged) {
      // Flagged styling takes priority
      style = 'background-color: var(--accent-warning); color: white; border-color: var(--accent-warning); box-shadow: 0 0 8px rgba(245, 158, 11, 0.5);';
    } else if (state.mode === 'study' && state.checkedAnswers[idx]) {
      const isCorrect = evaluateAnswer(q, state.userAnswers[idx]);
      style = isCorrect ? 'background-color: var(--accent-secondary); color: white; border-color: var(--accent-secondary);' : 'background-color: var(--accent-danger); color: white; border-color: var(--accent-danger);';
    } else if (isAnswered) {
      style = 'background-color: var(--accent-primary); color: white; border-color: var(--accent-primary);';
    }
    
    html += `
      <button class="${btnClass}" style="${style} border-radius: var(--border-radius-sm); border: 1px solid var(--card-border); padding: 8px 0; font-weight: 700; cursor: pointer; transition: all 0.2s;" onclick="jumpToQuestion(${idx})">
        ${idx + 1}
      </button>
    `;
  });
  
  questionNavigator.innerHTML = html;
}

function updateSidebarIndicator(idx, hasValue) {
  const buttons = questionNavigator.querySelectorAll('button');
  if (buttons[idx]) {
    const isFlagged = state.flaggedQuestions[idx];
    if (isFlagged) {
      buttons[idx].style.backgroundColor = 'var(--accent-warning)';
      buttons[idx].style.color = 'white';
      buttons[idx].style.borderColor = 'var(--accent-warning)';
    } else if (hasValue) {
      buttons[idx].style.backgroundColor = 'var(--accent-primary)';
      buttons[idx].style.color = 'white';
      buttons[idx].style.borderColor = 'var(--accent-primary)';
    } else {
      buttons[idx].style.backgroundColor = '';
      buttons[idx].style.color = '';
      buttons[idx].style.borderColor = '';
    }
  }
}

window.jumpToQuestion = function(idx) {
  renderQuestion(idx);
};

// Update Progress Counters
function updateProgressUI() {
  const total = state.questions.length;
  let answeredCount = 0;
  for (let i = 0; i < total; i++) {
    if (state.userAnswers[i] !== undefined && state.userAnswers[i] !== '') {
      answeredCount++;
    }
  }
  
  progressVal.innerText = `${answeredCount} / ${total}`;
  const pct = (answeredCount / total) * 100;
  progressBarFill.style.width = `${pct}%`;
}

// Helper: Evaluate Java Coding Tasks using specific semantic keywords
function evaluateCodingAnswer(q, userAns) {
  if (!userAns || userAns.trim().length < 30) return false;
  
  const code = userAns.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '') // Strip comments
                      .replace(/\s+/g, ' ') // Normalize spaces
                      .toLowerCase();
                      
  const id = q.id; // Coding task ID (1 to 7)
  
  switch(id) {
    case 1: // Calculator using Switch-Case Statement
      return code.includes('switch') && 
             code.includes('case') && 
             code.includes('scanner') && 
             (code.includes('double') || code.includes('float')) &&
             (code.includes('/') || code.includes('division')) &&
             (code.includes('== 0') || code.includes('==0') || code.includes('equals(0)') || code.includes('0.0') || code.includes('is zero') || code.includes('division by zero') || code.includes('0'));
             
    case 2: // Array Operations (Min/Max/Average)
      return code.includes('new int[8]') && 
             code.includes('for') && 
             (code.includes('min') || code.includes('< min') || code.includes('<min')) && 
             (code.includes('max') || code.includes('> max') || code.includes('>max')) && 
             code.includes('sum') && 
             (code.includes('average') || code.includes('/') || code.includes('double'));
             
    case 3: // Recursive Fibonacci Sequence
      return code.includes('fib(') && 
             (code.includes('fib(n-1)') || code.includes('fib(n - 1)')) && 
             (code.includes('fib(n-2)') || code.includes('fib(n - 2)')) && 
             code.includes('static int fib');
             
    case 4: // Object-Oriented Design & Encapsulation
      return code.includes('class book') && 
             code.includes('private string title') && 
             code.includes('private string author') && 
             code.includes('private double price') && 
             code.includes('setprice') && 
             (code.includes('price < 0') || code.includes('price<0') || code.includes('price = 0.0') || code.includes('0'));
             
    case 5: // ArrayList Sorting and Filtering
      return code.includes('arraylist') && 
             (code.includes('collections.sort') || code.includes('.sort')) && 
             (code.includes('remove') || code.includes('clear')) && 
             (code.includes('% 2 != 0') || code.includes('% 2 !=0') || code.includes('%2!=0') || code.includes('% 2 == 1') || code.includes('% 2 ==1') || code.includes('%2==1') || code.includes('odd'));
             
    case 6: // Working with the LocalDate API
      return code.includes('localdate') && 
             (code.includes('datetimeformatter') || code.includes('ofpattern')) && 
             (code.includes('isbefore') || code.includes('isafter') || code.includes('equal') || code.includes('compareto'));
             
    case 7: // Polymorphism with Shape and Circle
      return code.includes('class shape') && 
             code.includes('class circle extends shape') && 
             code.includes('area()') && 
             (code.includes('shape s = new circle()') || code.includes('shape s = new circle();') || code.includes('shape s; s = new circle()') || code.includes('shape s; s = new circle();') || code.includes('shape s=new circle()') || code.includes('shape s =new circle()') || code.includes('shape s= new circle()'));
  }
  return false;
}

// Evaluate Single Answer correctness
function evaluateAnswer(q, userAns) {
  if (userAns === undefined || userAns === '') return false;
  
  if (q.type === 'mcq') {
    return userAns === q.correct;
  } else if (q.type === 'tf') {
    return userAns === q.ans;
  } else if (q.type === 'po' || q.type === 'cc') {
    const cleanUser = normalizeText(userAns);
    const cleanCorrect = normalizeText(q.ans);
    return cleanUser === cleanCorrect || cleanCorrect.includes(cleanUser) && cleanUser.length > 3;
  } else if (q.type === 'coding') {
    return evaluateCodingAnswer(q, userAns);
  }
  return false;
}

// SUBMIT EXAM & GENERATE RESULTS
async function submitExam(isTimeout = false) {
  const total = state.questions.length;
  
  // 1. Handle confirmation if triggered manually
  if (!isTimeout) {
    let answeredCount = 0;
    for (let i = 0; i < total; i++) {
      if (state.userAnswers[i] !== undefined && state.userAnswers[i] !== '') {
        answeredCount++;
      }
    }
    
    let confirmPrompt = `Are you sure you want to finish and submit your answers?`;
    if (answeredCount < total) {
      confirmPrompt = `You have only answered ${answeredCount} out of ${total} questions. Are you sure you want to finish and submit your exam?`;
    }
    if (state.mode === 'study') {
      confirmPrompt = `Do you want to finish this study session and view your score sheet?`;
    }
    
    const confirmSubmit = await chicConfirm(confirmPrompt, state.mode === 'exam' ? 'Submit Exam' : 'Finish Session');
    if (!confirmSubmit) return;
  }
  
  // Stop timer interval
  if (state.timerId) clearInterval(state.timerId);
  
  // Hide exam active layouts
  mainAppLayout.classList.remove('active');
  examProgressBar.style.display = 'none';
  controlsBar.style.display = 'none';
  progressStat.style.display = 'none';
  
  // 2. Evaluate scores
  let correctCount = 0;
  let incorrectCount = 0;
  let reviewHtml = '';
  
  state.questions.forEach((q, idx) => {
    state.checkedAnswers[idx] = true;
    
    const userAns = state.userAnswers[idx];
    const isCorrect = evaluateAnswer(q, userAns);
    if (isCorrect) correctCount++;
    else incorrectCount++;
    
    const cardClass = isCorrect ? 'review-item correct' : 'review-item incorrect';
    const badgeClass = isCorrect ? 'badge badge-success' : 'badge badge-danger';
    const badgeLabel = isCorrect ? 'Correct' : 'Incorrect / Model Solution';
    
    let questionTextHtml = '';
    const categoryNames = {
      'mcq': 'Multiple Choice (MCQ)',
      'tf': 'True or False (T/F)',
      'po': 'Predict the Output (Code Trace)',
      'cc': 'Correct the Code (Bug Fix)',
      'coding': 'Programming & Code Writing Task'
    };
    
    if (q.type === 'po' || q.type === 'cc') {
      questionTextHtml += `<strong>Task:</strong> ${q.title}`;
      if (state.arabicSupport && q.title_ar) {
        questionTextHtml += `<br/><span style="direction: rtl; text-align: right; display: block; color: var(--text-muted); font-size: 0.85rem;">المهمة: ${q.title_ar}</span>`;
      }
    } else if (q.type === 'coding') {
      questionTextHtml += `<strong>Task:</strong> ${q.title}<br/><span style="font-size: 0.9rem; font-weight: 400;">${q.desc}</span>`;
      if (state.arabicSupport && q.desc_ar) {
        questionTextHtml += `<br/><span style="direction: rtl; text-align: right; display: block; color: var(--text-muted); font-size: 0.85rem;">${q.desc_ar}</span>`;
      }
    } else {
      questionTextHtml += q.q;
      if (state.arabicSupport && q.q_ar) {
        questionTextHtml += `<br/><span style="direction: rtl; text-align: right; display: block; color: var(--text-muted); font-size: 0.85rem;">${q.q_ar}</span>`;
      }
    }
    
    let userAnsStr = userAns !== undefined ? userAns.toString() : '[No Answer Provided]';
    if (q.type === 'tf' && userAns !== undefined) {
      userAnsStr = userAns ? 'True (T)' : 'False (F)';
    }
    
    let correctAnsStr = '';
    if (q.type === 'mcq') correctAnsStr = q.correct;
    else if (q.type === 'tf') correctAnsStr = q.ans ? 'True (T)' : 'False (F)';
    else if (q.type === 'po' || q.type === 'cc') correctAnsStr = q.ans;
    else if (q.type === 'coding') correctAnsStr = q.code_ans;
    
    reviewHtml += `
      <div class="${cardClass}" style="animation: fadeIn 0.4s ease;">
        <div class="review-item-header">
          <span class="badge ${badgeClass}">${badgeLabel}</span>
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">${categoryNames[q.type]}</span>
        </div>
        
        <div class="review-question-text">${questionTextHtml}</div>
    `;
    
    if (q.code) {
      reviewHtml += `
        <div class="code-container" style="margin: 5px 0;">
          <div class="code-body" style="padding: 10px; font-size: 0.8rem;">${escapeHtml(q.code)}</div>
        </div>
      `;
    }
    
    if (q.type !== 'coding') {
      reviewHtml += `
        <div class="answer-comparison">
          <div class="ans-pane">
            <span class="ans-pane-lbl">Your Answer:</span>
            <span class="ans-pane-val ${isCorrect ? 'correct' : 'incorrect'}">${escapeHtml(userAnsStr)}</span>
          </div>
          <div class="ans-pane">
            <span class="ans-pane-lbl">Correct Answer:</span>
            <span class="ans-pane-val correct">${escapeHtml(correctAnsStr)}</span>
          </div>
        </div>
      `;
    } else {
      reviewHtml += `
        <div class="answer-comparison" style="grid-template-columns: 1fr;">
          <div class="ans-pane" style="margin-bottom: 15px;">
            <span class="ans-pane-lbl">Your Submitted Code:</span>
            <pre style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; font-family: var(--font-mono); font-size: 0.8rem; overflow-x: auto; white-space: pre-wrap;">${escapeHtml(userAnsStr)}</pre>
          </div>
          <div class="ans-pane">
            <span class="ans-pane-lbl">Eng Ahmed Elfaky's Model Solution:</span>
            <pre style="background: rgba(16, 185, 129, 0.05); border-left: 3px solid var(--accent-secondary); padding: 10px; border-radius: 4px; font-family: var(--font-mono); font-size: 0.8rem; overflow-x: auto; white-space: pre-wrap;">${escapeHtml(correctAnsStr)}</pre>
          </div>
        </div>
      `;
    }
    
    if (q.exp) {
      reviewHtml += `
        <div class="explanation-box">
          <div class="explanation-title">Explanation &amp; Logic:</div>
          <p>${q.exp}</p>
        </div>
      `;
    }
    
    reviewHtml += `</div>`;
  });
  
  reviewListViewport.innerHTML = reviewHtml;
  
  // Calculate Score Metrics
  const scorePct = Math.round((correctCount / total) * 100);
  resultScorePercent.innerText = `${scorePct}%`;
  
  let grade = 'FAIL';
  let gaugeClass = 'danger';
  if (scorePct >= 85) {
    grade = 'EXCELLENT';
    gaugeClass = 'success';
  } else if (scorePct >= 75) {
    grade = 'VERY GOOD';
    gaugeClass = 'success';
  } else if (scorePct >= 65) {
    grade = 'GOOD';
    gaugeClass = 'warning';
  } else if (scorePct >= 50) {
    grade = 'PASS';
    gaugeClass = 'warning';
  }
  
  resultScoreGrade.innerText = grade;
  resultScoreGrade.className = `score-label ${gaugeClass}`;
  
  const offset = 440 - (440 * scorePct) / 100;
  scoreGaugeFill.setAttribute('class', `gauge-fill ${gaugeClass}`);
  scoreGaugeFill.style.strokeDashoffset = offset;
  
  // Calculate correct time spent display
  let displayTimeSec = state.elapsedTime;
  if (state.mode === 'exam') {
    displayTimeSec = 3600 - state.elapsedTime; // time elapsed = limit minus remaining
  }
  statCorrect.innerText = correctCount;
  statIncorrect.innerText = incorrectCount;
  statTime.innerText = formatTime(displayTimeSec);
  statMode.innerText = state.mode.toUpperCase();
  
  // 3. Show Motivational Banners strictly in Arabic as requested
  resultsMotivationalBanner.style.display = 'block';
  let bannerMsg = '';
  
  if (isTimeout) {
    resultsMotivationalBanner.style.background = 'rgba(239, 68, 68, 0.1)';
    resultsMotivationalBanner.style.border = '1.5px solid var(--accent-danger)';
    resultsMotivationalBanner.style.color = 'var(--accent-danger)';
    bannerMsg = "انتهى وقت الامتحان! اجتهد اكتر انت تقدر تكمل بالتوفيق❤️";
  } else if (scorePct >= 75) {
    resultsMotivationalBanner.style.background = 'rgba(16, 185, 129, 0.1)';
    resultsMotivationalBanner.style.border = '1.5px solid var(--accent-secondary)';
    resultsMotivationalBanner.style.color = 'var(--accent-secondary)';
    bannerMsg = "بالتوفيق انت قدها ان شاء الله❤️";
  } else {
    resultsMotivationalBanner.style.background = 'rgba(245, 158, 11, 0.1)';
    resultsMotivationalBanner.style.border = '1.5px solid var(--accent-warning)';
    resultsMotivationalBanner.style.color = 'var(--accent-warning)';
    bannerMsg = "اجتهد اكتر انت تقدر تكمل بالتوفيق❤️";
  }
  
  resultsMotivationalBanner.innerHTML = bannerMsg;
  
  // Show results pane
  resultsPanel.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Clear cached progress
  clearStateFromLocalStorage();
  
  // Show custom popup alert strictly in Arabic
  await chicAlert(bannerMsg, "تقييم الأداء");
}

// Reset current session with same settings
function restartCurrentSession() {
  startRevision();
}

// Open modal settings
function returnToSetup() {
  resultsPanel.classList.remove('active');
  welcomeModal.classList.add('active');
  langToggle.style.display = 'none';
  clearStateFromLocalStorage();
}

// Exit current session and return to welcome modal
async function exitCurrentSession() {
  const confirmMsg = state.arabicSupport
    ? "هل أنت متأكد من الخروج من المراجعة والعودة إلى الشاشة الرئيسية؟ سيتم فقدان تقدمك الحالي."
    : "Are you sure you want to exit the revision and return to the main screen? Your current progress will be lost.";
  
  const title = state.arabicSupport ? "خروج من المراجعة" : "Exit Session";
  const okText = state.arabicSupport ? "خروج | Exit" : "Exit | خروج";
  const cancelText = state.arabicSupport ? "إلغاء | Cancel" : "Cancel | إلغاء";
  
  const confirmed = await chicConfirm(confirmMsg, title, okText, cancelText);
  if (confirmed) {
    if (state.timerId) clearInterval(state.timerId);
    clearStateFromLocalStorage();
    
    // Hide active session panel elements
    mainAppLayout.classList.remove('active');
    resultsPanel.classList.remove('active');
    welcomeModal.classList.add('active');
    
    // Hide stats in header
    langToggle.style.display = 'none';
    examProgressBar.style.display = 'none';
    controlsBar.style.display = 'none';
    examTimer.style.display = 'none';
    progressStat.style.display = 'none';
  }
}

// Helpers for HTML escaping
function escapeHtml(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeQuote(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/'/g, "\\'");
}
