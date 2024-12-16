const display = document.getElementById("display");

// เคลียร์หน้าจอ
function clearDisplay() {
  display.value = "";
}

// ลบตัวสุดท้าย
function backspace() {
  display.value = display.value.slice(0, -1);
}

// เพิ่มตัวเลขหรือเครื่องหมายที่กด
function appendToDisplay(value) {
  display.value += value;
}

// คำนวณผลลัพธ์
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
