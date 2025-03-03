document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    updateDateTime(); // تحديث الوقت عند تحميل الصفحة
    setInterval(updateDateTime, 1000); // تحديث الوقت كل ثانية

    displaySchedule(); // عرض الجدول بناءً على اليوم الحالي
});

// تحديث الوقت والتاريخ
function updateDateTime() {
    let now = new Date();
    let dayName = now.toLocaleDateString("en-US", { weekday: "long" }); 
    let timeString = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    console.log("Today is:", dayName);
    console.log("Current Time:", timeString);

    document.getElementById("current-day").innerText = Today: ${dayName};
    document.getElementById("current-time").innerText = Time: ${timeString};
}

// بيانات الجدول الدراسي
const schedule = {
    "Saturday": [{ course: "Pathology", type: "Sec", group: "7", time: "08:00 - 10:00", room: "B122" }],
    "Sunday": [{ course: "Oral Biology", type: "Sec", group: "4", time: "08:00 - 10:00", room: "B103" }],
    "Monday": [{ course: "Biochemistry", type: "Sec", group: "8", time: "08:00 - 10:00", room: "B129" }],
    "Tuesday": [{ course: "H-Anatomy", type: "Lec", group: "E", time: "08:00 - 10:00", room: "B002" }],
    "Thursday": [{ course: "Ethics", type: "Lec", group: "A", time: "15:00 - 16:00", room: "Online" }]
};

// عرض الجدول حسب اليوم الحالي
function displaySchedule() {
    let now = new Date();
    let today = now.toLocaleDateString("en-US", { weekday: "long" });

    let scheduleContainer = document.getElementById("classes-list");
    scheduleContainer.innerHTML = ""; // مسح القديم

    let todaysClasses = schedule[today] || [];

    if (todaysClasses.length === 0) {
        scheduleContainer.innerHTML = "<p>No classes today!</p>";
    } else {
        todaysClasses.forEach((cls) => {
            let classDiv = document.createElement("div");
            classDiv.classList.add("class-item");
            classDiv.innerHTML = `
                <h3>${cls.course} (${cls.type})</h3>
                <p>Group: ${cls.group}</p>
                <p>Time: ${cls.time}</p>
                <p>Room: ${cls.room}</p>
            `;
            scheduleContainer.appendChild(classDiv);
        });

        // تنبيه عند وجود محاضرات
        alert(You have a class today: ${todaysClasses[0].course} at ${todaysClasses[0].time});
    }
}