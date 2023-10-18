function SinhVien(_maSV, _tenSV, _mailSV, _passSV, _diemToan, _diemVan) {
  this.maSV = _maSV;
  this.tenSV = _tenSV;
  this.mailSV = _mailSV;
  this.passSV = _passSV;
  this.diemToan = _diemToan;
  this.diemVan = _diemVan;
  this.tinhDTB = function () {
    return (this.diemToan + this.diemVan) / 2;
  };
}
