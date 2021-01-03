function cfDelete(mess) {
  if(window.confirm(mess) == true) { //gọi hộp thoại confirm nếu trả về true thì sẽ chuyển trang
    return true;
  }
  return false;
}