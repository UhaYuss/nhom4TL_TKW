// Lấy tham chiếu đến form
const contactForm = document.querySelector('#contact-form');

// Lắng nghe sự kiện "submit" của form
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn form gửi đi

  // Lấy giá trị của các trường trong form
  const fullName = contactForm.querySelector('#full-name').value;
  const email = contactForm.querySelector('#email').value;
  const gender = contactForm.querySelector('#gender').value;
  const phoneNumber = contactForm.querySelector('#phone-number').value;
  const address = contactForm.querySelector('#address').value;
  const province = contactForm.querySelector('#province').value;

  // Gửi dữ liệu form đến server
  fetch('http://tranvanhung.fitstu.net/hufi/thiet-ke-web/form.php', {
    method: 'POST', // Phương thức gửi dữ liệu
    body: JSON.stringify({ // Chuyển đổi dữ liệu thành JSON
      fullName,
      email,
      gender,
      phoneNumber,
      address,
      province
    }),
    headers: {
      'Content-Type': 'application/json' // Định dạng dữ liệu gửi đi
    }
  })
  .then(response => {
    if (response.ok) {
      // Nếu gửi thành công, hiển thị thông báo
      alert('Gửi form thành công!');
      contactForm.reset(); // Xóa nội dung của form
    } else {
      // Nếu có lỗi, hiển thị thông báo lỗi
      alert('Có lỗi xảy ra khi gửi form!');
    }
  })
  .catch(error => {
    // Nếu có lỗi xảy ra trong quá trình gửi form, hiển thị thông báo lỗi
    alert('Có lỗi xảy ra khi gửi form!');
    console.error(error);
  });
});
