const courses = [
     
  {
    code: "D-Online",
    type: "Drill Writing/Speaking ONLINE",
    target: "Học viên đã nắm được các dạng bài IELTS hoặc đã thi được 5.5+",
    goal: "IELTS 6.5+",
    schedule: "Thứ 3-5 hàng tuần lúc 19.30",
    startDate: "1/7",
    fee: "1200k/tháng"
  },
  
  {
    code: "F81",
    type: "Foundation",
    target: "Học viên muốn ôn lại nền tảng từ vựng ngữ pháp cho IELTS",
    goal: "IELTS 5.5+",
    schedule: "Thứ 4-6 hàng tuần lúc 19.30",
    startDate: "1/7",
    fee: "3000k/khóa"
  },
  {
    code: "P76",
    type: "Pre-IELTS W-R-S",
    target: "Học viên đã có nền tảng cơ bản muốn làm quen với các dạng bài IELTS",
    goal: "Làm quen với các dạng bài IELTS",
    schedule: "Thứ 3-4-5 hàng tuần lúc 19.30",
    startDate: "27/6",
    fee: "3900k/khóa"
  },
  {
    code: "I76",
    type: "Intensive 4 kỹ năng",
    target: "Học viên muốn học chuyên sâu về các kỹ năng để làm bài IELTS",
    goal: "IELTS 5.5+",
    schedule: "Thứ 3456 hàng tuần lúc 19.30",
    startDate: "1/8",
    fee: "3000k/khóa"
  }
];

document.addEventListener("DOMContentLoaded", () => {

  // ── render upcoming cards ──
  const grid = document.querySelector(".upcoming-grid");
  if (grid) {
    grid.innerHTML = courses.map(c => `
      <div class="upcoming-card">
        <h3 class="upcoming-name">${c.type} | ${c.code}</h3>
        <div class="upcoming-achievements">
          <p>Đối tượng học: ${c.target}</p>
          <p>Mục tiêu: ${c.goal}</p>
          <span class="upcoming-role"> ${c.schedule}</span>
          <span class="upcoming-role">Ngày khai giảng: ${c.startDate}</span>
          <span class="upcoming-role">Học phí: ${c.fee}</span>
        </div>
      </div>
    `).join("");
  }

  // ── render contact dropdown ──
  const select = document.getElementById("course-select");
  if (select) {
    const options = courses.map(c =>
      `<option value="${c.code} | Mục tiêu: ${c.goal}| ${c.schedule} | Học phí: ${c.fee}">
        ${c.code} — ${c.type} · ${c.goal} · ${c.fee}
      </option>`
    ).join("");
    select.innerHTML =
      `<option value="">-- Chọn khóa học --</option>` +
      options +
      `<option value="Chưa biết, cần tư vấn thêm">Chưa biết, cần tư vấn thêm</option>`;
  }

});