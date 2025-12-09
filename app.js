// ==== LOGIN SIMPLE ====
const APP_PASSWORD = "1122334455"; // 🔐 Đổi pass ở đây
const PASS_KEY = "workout_auth";

function showApp() {
    const loginBox = document.getElementById("login-box");
    const appWrapper = document.getElementById("app-wrapper");
    if (loginBox) loginBox.style.display = "none";
    if (appWrapper) appWrapper.style.display = "block";
}

function checkPassword() {
    const input = document.getElementById("loginPassword");
    const error = document.getElementById("loginError");
    if (!input) return;

    if (input.value === APP_PASSWORD) {
        try {
            localStorage.setItem(PASS_KEY, "ok");
        } catch (e) {}
        showApp();
    } else {
        if (error) error.textContent = "Sai mật khẩu rồi 😅";
    }
}

window.addEventListener("load", () => {
    try {
        if (localStorage.getItem(PASS_KEY) === "ok") {
            showApp();
        }
    } catch (e) {}
});

// ==== PLAN CÁCH 1 ====

// 1) Nhảy dây 30s / nghỉ 30s x 7 vòng
function planWarmup() {
    const arr = [];
    for (let i = 1; i <= 7; i++) {
        arr.push({
            label: `Nhảy dây – vòng ${i}`,
            seconds: 30,
            type: "work"
        });
        arr.push({
            label: `Nghỉ – sau vòng ${i}`,
            seconds: 30,
            type: "rest"
        });
    }
    return arr;
}


// 2) Bài chính: JJ 5', Squat, High knees, Plank, Mountain climber
function planCardioA() {
    return [
        // Jumping jack 5 phút
        {
            label: "Jumping jack 5 phút (150–200 cái)",
            seconds: 300,
            type: "work"
        },
        {
            label: "Nghỉ ngắn sau jumping jack",
            seconds: 30,
            type: "rest"
        },

        // Squat 3 x 20 (ước lượng thời gian)
        {
            label: "Squat set 1 – 20 cái",
            seconds: 45,
            type: "work"
        },
        {
            label: "Nghỉ sau squat set 1",
            seconds: 25,
            type: "rest"
        },
        {
            label: "Squat set 2 – 20 cái",
            seconds: 45,
            type: "work"
        },
        {
            label: "Nghỉ sau squat set 2",
            seconds: 25,
            type: "rest"
        },
        {
            label: "Squat set 3 – 20 cái",
            seconds: 45,
            type: "work"
        },
        {
            label: "Nghỉ sau squat set 3",
            seconds: 25,
            type: "rest"
        },

        // High knees 3 x 30s
        {
            label: "High knees set 1 – 30s",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ sau high knees set 1",
            seconds: 20,
            type: "rest"
        },
        {
            label: "High knees set 2 – 30s",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ sau high knees set 2",
            seconds: 20,
            type: "rest"
        },
        {
            label: "High knees set 3 – 30s",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ sau high knees set 3",
            seconds: 20,
            type: "rest"
        },

        // Plank 4 x 30s
        {
            label: "Plank set 1 – 30s",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ sau plank set 1",
            seconds: 20,
            type: "rest"
        },
        {
            label: "Plank set 2 – 30s",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ sau plank set 2",
            seconds: 20,
            type: "rest"
        },
        {
            label: "Plank set 3 – 30s",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ sau plank set 3",
            seconds: 20,
            type: "rest"
        },
        {
            label: "Plank set 4 – 30s",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ sau plank set 4",
            seconds: 20,
            type: "rest"
        },

        // Mountain climber 4 x 20 lần (ước lượng ~30s)
        {
            label: "Mountain climber set 1 – 20 lần",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ sau MC set 1",
            seconds: 20,
            type: "rest"
        },
        {
            label: "Mountain climber set 2 – 20 lần",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ sau MC set 2",
            seconds: 20,
            type: "rest"
        },
        {
            label: "Mountain climber set 3 – 20 lần",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ sau MC set 3",
            seconds: 20,
            type: "rest"
        },
        {
            label: "Mountain climber set 4 – 20 lần",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ sau MC set 4",
            seconds: 20,
            type: "rest"
        },
    ];
}

// 3) Chỉ plank + mountain climber
function planCore() {
    return [{
            label: "Plank set 1 – 30s",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ",
            seconds: 20,
            type: "rest"
        },
        {
            label: "Plank set 2 – 30s",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ",
            seconds: 20,
            type: "rest"
        },
        {
            label: "Plank set 3 – 30s",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ",
            seconds: 20,
            type: "rest"
        },
        {
            label: "Plank set 4 – 30s",
            seconds: 30,
            type: "work"
        },
        {
            label: "Mountain climber set 1 – 20 lần",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ",
            seconds: 20,
            type: "rest"
        },
        {
            label: "Mountain climber set 2 – 20 lần",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ",
            seconds: 20,
            type: "rest"
        },
        {
            label: "Mountain climber set 3 – 20 lần",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ",
            seconds: 20,
            type: "rest"
        },
        {
            label: "Mountain climber set 4 – 20 lần",
            seconds: 30,
            type: "work"
        },
        {
            label: "Nghỉ",
            seconds: 20,
            type: "rest"
        },
    ];
}

// 4) Full buổi = Nhảy dây + Bài chính
function planFullA() {
    return [
        ...planWarmup(),
        ...planCardioA()
    ];
}

// ==== PLAYBACK STATE ====
let currentPlanKey = "fullA";
let currentPlan = planFullA();
let currentIndex = 0;
let remaining = currentPlan[0].seconds;
let elapsedTotal = 0;
let totalSeconds = currentPlan.reduce((sum, step) => sum + step.seconds, 0);
let timerId = null;
let isRunning = false;

// ==== DOM ====
const timeMainEl = document.getElementById("timeMain");
const timeLabelEl = document.getElementById("timeLabel");
const currentStepTextEl = document.getElementById("currentStepText");
const progressInnerEl = document.getElementById("progressInner");
const elapsedTextEl = document.getElementById("elapsedText");
const remainingTextEl = document.getElementById("remainingText");
const startPauseBtn = document.getElementById("startPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");
const phaseDotEl = document.getElementById("phaseDot");
const phaseTextEl = document.getElementById("phaseText");
const stepIndexEl = document.getElementById("stepIndex");
const sessionSelectEl = document.getElementById("sessionSelect");
const sessionInfoEl = document.getElementById("sessionInfo");

function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
}

function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(180);
    }
}

function loadPlan(key) {
    currentPlanKey = key;
    if (key === "fullA") {
        currentPlan = planFullA();
        sessionInfoEl.textContent = "Full buổi – Cách 1";
    } else if (key === "warmup") {
        currentPlan = planWarmup();
        sessionInfoEl.textContent = "Chỉ nhảy dây";
    } else if (key === "cardioA") {
        currentPlan = planCardioA();
        sessionInfoEl.textContent = "Chỉ bài chính (sau nhảy dây)";
    } else if (key === "core") {
        currentPlan = planCore();
        sessionInfoEl.textContent = "Plank + Mountain climber";
    }
    totalSeconds = currentPlan.reduce((sum, step) => sum + step.seconds, 0);
    currentIndex = 0;
    remaining = currentPlan[0].seconds;
    elapsedTotal = 0;
    stopTimer();
    isRunning = false;
    startPauseBtn.textContent = "Start";
    updateUI();
}

function updateUI() {
    const step = currentPlan[currentIndex];
    const type = step.type || "work";

    timeMainEl.textContent = formatTime(remaining);
    timeMainEl.classList.toggle("work", type === "work");
    timeMainEl.classList.toggle("rest", type === "rest");
    currentStepTextEl.textContent = step.label;

    phaseDotEl.classList.toggle("work", type === "work");
    phaseDotEl.classList.toggle("rest", type === "rest");
    phaseTextEl.textContent = type === "work" ? "Đang tập" : "Đang nghỉ";

    if (!isRunning) {
        timeLabelEl.textContent = "Bấm Start để bắt đầu";
    } else {
        timeLabelEl.textContent = "Đang chạy – cố lên!";
    }

    const progress = totalSeconds === 0 ? 0 : (elapsedTotal / totalSeconds) * 100;
    progressInnerEl.style.width = progress.toFixed(2) + "%";

    elapsedTextEl.textContent = formatTime(elapsedTotal);
    const remainingSession = Math.max(totalSeconds - elapsedTotal, 0);
    remainingTextEl.textContent = "-" + formatTime(remainingSession);

    stepIndexEl.textContent = "Bước " + (currentIndex + 1) + " / " + currentPlan.length;
}

function tick() {
    if (!isRunning) return;
    if (remaining > 0) {
        remaining -= 1;
        elapsedTotal += 1;
        updateUI();
    } else {
        vibrate();
        if (currentIndex < currentPlan.length - 1) {
            currentIndex += 1;
            remaining = currentPlan[currentIndex].seconds;
            updateUI();
        } else {
            stopTimer();
            isRunning = false;
            startPauseBtn.textContent = "Start";
            timeLabelEl.textContent = "Xong buổi tập! Nice ✅";
            vibrate();
        }
    }
}

function startTimer() {
    if (timerId) return;
    timerId = setInterval(tick, 1000);
}

function stopTimer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
}

// ==== BUTTON EVENTS ====
startPauseBtn.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        startPauseBtn.textContent = "Pause";
        timeLabelEl.textContent = "Đang chạy – cố lên!";
        startTimer();
    } else {
        isRunning = false;
        startPauseBtn.textContent = "Resume";
        timeLabelEl.textContent = "Đang tạm dừng";
        stopTimer();
    }
});

resetBtn.addEventListener("click", () => {
    stopTimer();
    isRunning = false;
    startPauseBtn.textContent = "Start";
    currentIndex = 0;
    remaining = currentPlan[0].seconds;
    elapsedTotal = 0;
    timeLabelEl.textContent = "Reset về bước đầu";
    updateUI();
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < currentPlan.length - 1) {
        currentIndex += 1;
        remaining = currentPlan[currentIndex].seconds;
        updateUI();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        remaining = currentPlan[currentIndex].seconds;
        updateUI();
    }
});

sessionSelectEl.addEventListener("change", (e) => {
    loadPlan(e.target.value);
});

// Khởi tạo giao diện ban đầu
loadPlan("fullA");