function ktRequired(svProp, theSpan) {
  if (svProp !== "") {
    document.getElementById(theSpan).innerHTML = "";
    return true;
  }
  document.getElementById(theSpan).innerHTML = "Vui lòng nhập thông tin!";
  return false;
}

function ktMaSV(_maSV, dssv) {
  var viTri = dssv.findIndex((svItem) => svItem.maSV === _maSV);
  if (viTri == -1) {
    document.getElementById("spanMaSV").innerHTML = "";
    return true;
  }
  document.getElementById("spanMaSV").innerHTML = "Mã sinh viên đã tồn tại!";
  return false;
}

function ktDoDai(svProp, min, max, theSpan) {
  var length = svProp.length;
  if (length >= min && length <= max) {
    document.getElementById(theSpan).innerHTML = "";
    return true;
  }
  document.getElementById(
    theSpan
  ).innerHTML = `Vui lòng nhập từ ${min} đến ${max} kí tự!`;
  return false;
}

function ktEmail(_mailSV) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(_mailSV)) {
    document.getElementById("spanEmailSV").innerHTML = "";
    return true;
  }
  document.getElementById("spanEmailSV").innerHTML = "Email không hợp lệ!";
  return false;
}

function ktDiem(_diemSV, theSpan) {
  if (_diemSV >= 0 && _diemSV <= 10) {
    document.getElementById(theSpan).innerHTML = "";
    return true;
  }
  document.getElementById(theSpan).innerHTML = `Điểm không hợp lệ!`;
  return false;
}
