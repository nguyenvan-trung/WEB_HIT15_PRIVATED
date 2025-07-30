// Chặn F12 và tổ hợp Ctrl+Shift+I
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === "I")
  ) {
    e.preventDefault();
  }
});

// Chặn chuột phải
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
