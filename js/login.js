$(document).ready(function () {
  $("#frm_login").submit(function (e) {
    e.preventDefault();
    if ($("#username").val().trim() && $("#password-input").val().trim()) {
      window.location.href = "trangchu.html";
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
  });

  $("#frm_signup").submit(function (e) {
    if (
      $("#name_input").val().trim() &&
      $("#username_input").val().trim() &&
      $("#password_input").val().trim()
    ) {
      window.location.href = "login.html";
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }

    
  });
});
