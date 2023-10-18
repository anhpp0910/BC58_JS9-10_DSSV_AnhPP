function renderDSSV(dssv) {
  var htmls = "";
  for (var i = 0; i < dssv.length; i++) {
    var targetSV = dssv[i];
    htmls += `
  <tr>
    <th>${targetSV.maSV}</th>
    <th>${targetSV.tenSV}</th>
    <th>${targetSV.mailSV}</th>
    <th>${targetSV.tinhDTB()}</th>
    <th><button class="btn btn-danger mx-1" onclick="xoaSV('${
      targetSV.maSV
    }')">Xoá</button>
    <button class="btn btn-warning mx-1" onclick="suaSV('${
      targetSV.maSV
    }')">Sửa</button></th>
    </tr>
  `;
  }
  document.getElementById("tbodySinhVien").innerHTML = htmls;
}

function clearFields() {
  document.getElementById("txtMaSV").value = "";
  document.getElementById("txtTenSV").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtPass").value = "";
  document.getElementById("txtDiemToan").value = "";
  document.getElementById("txtDiemVan").value = "";
}

function clearErrors() {
  document.getElementById("spanMaSV").innerHTML = "";
  document.getElementById("spanTenSV").innerHTML = "";
  document.getElementById("spanEmailSV").innerHTML = "";
  document.getElementById("spanMatKhau").innerHTML = "";
  document.getElementById("spanToan").innerHTML = "";
  document.getElementById("spanVan").innerHTML = "";
}
