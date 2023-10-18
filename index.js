var dssv = [];

var dataJson = localStorage.getItem("DSSV_LOCAL");
if (dataJson != null) {
  // convert 1 array chứa obj k có method trở thành 1 aray chứa obj có method
  var dssv = JSON.parse(dataJson).map(
    (svItem) =>
      new SinhVien(
        svItem.maSV,
        svItem.tenSV,
        svItem.mailSV,
        svItem.passSV,
        svItem.diemToan,
        svItem.diemVan
      )
  );
  renderDSSV(dssv);
}

function themSV() {
  var maSV = document.getElementById("txtMaSV").value;
  var tenSV = document.getElementById("txtTenSV").value;
  var mailSV = document.getElementById("txtEmail").value;
  var passSV = document.getElementById("txtPass").value;
  var diemToan = Number(document.getElementById("txtDiemToan").value);
  var diemVan = Number(document.getElementById("txtDiemVan").value);
  var svItem = new SinhVien(maSV, tenSV, mailSV, passSV, diemToan, diemVan);
  // validate
  // maSV
  var isValid =
    ktRequired(maSV, "spanMaSV") &&
    ktMaSV(maSV, dssv) &&
    ktDoDai(maSV, 3, 6, "spanMaSV");
  // tenSV
  isValid &= ktRequired(tenSV, "spanTenSV");
  // mailSV
  isValid &= ktRequired(mailSV, "spanEmailSV") && ktEmail(mailSV);
  // passSV
  isValid &=
    ktRequired(passSV, "spanMatKhau") && ktDoDai(passSV, 3, 15, "spanMatKhau");
  // diemToan
  isValid &= ktRequired(diemToan, "spanToan") && ktDiem(diemToan, "spanToan");
  //diemVan
  isValid &= ktRequired(diemVan, "spanVan") && ktDiem(diemVan, "spanVan");
  if (isValid) {
    dssv.push(svItem);
    // lưu thông tin dssv vào localStorage
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV_LOCAL", dataJson);
    renderDSSV(dssv);
    clearFields();
  }
}

function xoaSV(_maSV) {
  var viTri = dssv.findIndex((svItem) => svItem.maSV === _maSV);
  dssv.splice(viTri, 1);
  console.log(dssv);
  // lưu thông tin dssv vào localStorage
  var dataJson = JSON.stringify(dssv);
  localStorage.setItem("DSSV_LOCAL", dataJson);
  renderDSSV(dssv);
  clearFields();
  clearErrors();
  document.getElementById("txtMaSV").readOnly = false;
  document.getElementById("btnThemSV").disabled = false;
  document.getElementById("btnUpdateSV").disabled = true;
}

function suaSV(_maSV) {
  var viTri = dssv.findIndex((svItem) => svItem.maSV === _maSV);
  var targetSV = dssv[viTri];
  document.getElementById("txtMaSV").value = targetSV.maSV;
  document.getElementById("txtTenSV").value = targetSV.tenSV;
  document.getElementById("txtEmail").value = targetSV.mailSV;
  document.getElementById("txtPass").value = targetSV.passlSV;
  document.getElementById("txtDiemToan").value = targetSV.diemToan;
  document.getElementById("txtDiemVan").value = targetSV.diemVan;
  clearErrors();
  document.getElementById("txtMaSV").readOnly = true;
  document.getElementById("btnThemSV").disabled = true;
  document.getElementById("btnUpdateSV").disabled = false;
}

function updateSV() {
  // tìm vị trí dựa vào maSV => return viTri
  var maSV = document.getElementById("txtMaSV").value;
  var viTri = dssv.findIndex((svItem) => svItem.maSV === maSV);
  // lấy thông tin user từ form dưới dạng object
  var tenSV = document.getElementById("txtTenSV").value;
  var mailSV = document.getElementById("txtEmail").value;
  var passSV = document.getElementById("txtPass").value;
  var diemToan = Number(document.getElementById("txtDiemToan").value);
  var diemVan = Number(document.getElementById("txtDiemVan").value);
  targetSV = new SinhVien(maSV, tenSV, mailSV, passSV, diemToan, diemVan);
  // validate
  // tenSV
  isValid = ktRequired(tenSV, "spanTenSV");
  // mailSV
  isValid &= ktRequired(mailSV, "spanEmailSV") && ktEmail(mailSV);
  // passSV
  isValid &=
    ktRequired(passSV, "spanMatKhau") && ktDoDai(passSV, 3, 15, "spanMatKhau");
  // diemToan
  isValid &= ktRequired(diemToan, "spanToan") && ktDiem(diemToan, "spanToan");
  //diemVan
  isValid &= ktRequired(diemVan, "spanVan") && ktDiem(diemVan, "spanVan");
  // cập nhật dssv[viTri]
  if (isValid) {
    dssv[viTri] = targetSV;
    // lưu thông tin dssv vào localStorage
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV_LOCAL", dataJson);
    renderDSSV(dssv);
    clearFields();
    document.getElementById("txtMaSV").readOnly = false;
    document.getElementById("btnThemSV").disabled = false;
    document.getElementById("btnUpdateSV").disabled = true;
  }
}

function resetSV() {
  dssv = [];
  var dataJson = JSON.stringify(dssv);
  localStorage.setItem("DSSV_LOCAL", dataJson);
  renderDSSV(dssv);
  clearFields();
  clearErrors();
  document.getElementById("txtMaSV").readOnly = false;
  document.getElementById("btnThemSV").disabled = false;
  document.getElementById("btnUpdateSV").disabled = true;
}
