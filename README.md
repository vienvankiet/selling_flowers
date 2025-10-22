# 🌸 Flowerly - Website Cửa hàng hoa (Bootstrap 5)

Đây là một dự án website tĩnh (static website) cho một cửa hàng hoa có tên **Flowerly**. Dự án được xây dựng hoàn toàn bằng HTML, CSS và JavaScript, trong đó tận dụng mạnh mẽ framework **Bootstrap 5** để xây dựng giao diện người dùng một cách nhanh chóng, đẹp mắt và có tính thích ứng cao (responsive).

## 🚀 Các chức năng chính

* **Trang chủ (`index.html`):** Giới thiệu cửa hàng với banner (carousel), các sản phẩm nổi bật, một phần bộ sưu tập và đánh giá của khách hàng.
* **Trang sản phẩm (`products.html`):** Hiển thị tất cả sản phẩm. Tích hợp chức năng tìm kiếm, lọc theo danh mục và sắp xếp (theo giá, mới nhất) bằng JavaScript.
* **Trang chi tiết sản phẩm (`product-detail.html`):** Trang động (sử dụng JavaScript) hiển thị thông tin chi tiết cho một sản phẩm cụ thể khi người dùng nhấp vào, bao gồm hình ảnh, giá, mô tả và các thông tin liên quan.
* **Trang bộ sưu tập (`gallery.html`):** Một thư viện ảnh trưng bày các thiết kế hoa, có chức năng lọc ảnh theo danh mục (Hoa cưới, Sự kiện...).
* **Trang liên hệ (`contact.html`):** Bao gồm một biểu mẫu (form) liên hệ có xác thực (validation) và thông tin địa chỉ, SĐT, email.
* **Thiết kế Responsive:** Giao diện tự động co dãn, tối ưu cho cả máy tính, máy tính bảng và thiết bị di động.

## 🏃 Cách chạy dự án

Vì đây là một dự án web tĩnh, bạn không cần máy chủ (server) phức tạp:

1.  Clone (tải) repository này về máy của bạn.
2.  Mở thư mục dự án (ví dụ: `public_html`).
3.  Mở tệp `index.html` bằng trình duyệt (Chrome, Firefox, v.v.) để xem trang chủ.
4.  (Khuyến nghị) Sử dụng một tiện ích live server (như **"Live Server"** trên VS Code) để chạy dự án. Điều này sẽ giúp các tính năng JavaScript (như tải chi tiết sản phẩm) hoạt động chính xác.

---

## 🛠️ Phân tích chi tiết việc sử dụng Bootstrap 5

Dự án này sử dụng Bootstrap 5 (phiên bản 5.3.3) làm nền tảng chính cho toàn bộ giao diện và bố cục. Dưới đây là phân tích các thành phần và lớp tiện ích được sử dụng:

### 1. Bố cục & Hệ thống Lưới (Layout & Grid System)

Đây là "xương sống" của toàn bộ website, đảm bảo tính responsive.

* **Container (`.container`):** Được sử dụng làm lớp bọc (wrapper) chính ở hầu hết các trang (`index.html`, `products.html`, v.v.) để căn giữa nội dung và giới hạn chiều rộng, tạo ra lề hai bên hợp lý trên màn hình lớn.
* **Hàng & Cột (`.row`, `.col-*`):**
    * Sử dụng `.row` để bọc các nhóm cột.
    * Lưới sản phẩm (`index.html`, `products.html`) sử dụng `.row-cols-1 .row-cols-md-3 .g-4`. Ý nghĩa: mặc định hiển thị 1 cột, nhưng trên màn hình trung bình (md) trở lên, hiển thị 3 cột. `.g-4` tạo khoảng cách (gap) 4 đơn vị giữa các cột.
    * Trang liên hệ (`contact.html`) sử dụng `.row` với `.col-lg-5` (cho thông tin địa chỉ) và `.col-lg-7` (cho form). Trên màn hình nhỏ hơn `lg`, hai cột này sẽ tự động xếp chồng lên nhau.
* **Khoảng cách (Gap Utilities - `.g-*`):** Lớp `.g-4` được dùng để tạo khoảng cách (cả ngang và dọc) nhất quán giữa các cột trong lưới sản phẩm và bộ sưu tập.

### 2. Thành phần (Components)

Dự án sử dụng rất nhiều thành phần dựng sẵn của Bootstrap để tiết kiệm thời gian:

* **Navbar (`.navbar`):** Thanh điều hướng chính của website.
    * `.navbar-expand-lg`: Giúp menu tự động thu gọn thành nút "hamburger" (`.navbar-toggler`) trên các màn hình nhỏ hơn `lg` (large).
    * `.sticky-top`: Giữ cho menu luôn dính ở trên cùng màn hình khi người dùng cuộn trang.
    * `.ms-auto`: Đẩy các liên kết menu (`.navbar-nav`) sang bên phải.
* **Carousel (`.carousel`):** Sử dụng trong `index.html` để tạo slider ảnh banner tự động chạy (`data-bs-ride="carousel"`), kèm theo các nút điều khiển (`.carousel-control-prev`, `.carousel-control-next`).
* **Card (`.card`):** Thành phần quan trọng nhất, được dùng để hiển thị các sản phẩm (`index.html`, `products.html`).
    * Mỗi thẻ gồm `.card-img-top` (ảnh), `.card-body` (nội dung text), `.card-title` (tên hoa), và `.card-text` (mô tả).
    * Lớp `.h-100` (height 100%) được thêm vào để đảm bảo các thẻ trong cùng một hàng có chiều cao bằng nhau.
* **Forms (`.form-control`, `.form-label`, `.input-group`):**
    * Sử dụng rộng rãi trong `contact.html` (form liên hệ) và `products.html` (thanh lọc).
    * `.form-control` được áp dụng cho `<input>`, `<textarea>`, và `<select>`.
    * `.input-group` được dùng để kết hợp icon (`.input-group-text`) với ô input trong form liên hệ, tạo giao diện đẹp mắt.
    * Trang liên hệ cũng sử dụng các lớp validation (`.needs-validation`, `.invalid-feedback`) để kiểm tra dữ liệu đầu vào.
* **Accordion (`.accordion`):** Dùng trong `product-detail.html` để tạo các mục "Thông tin thiết kế", "Lưu ý", "Voucher" có thể bấm để mở/đóng.
* **Buttons (`.btn`, `.btn-primary`, `.btn-outline-primary`, `.btn-sm`):** Dùng cho tất cả các nút tương tác (Mua ngay, Gửi tin nhắn, Lọc...).
* **Breadcrumb (`.breadcrumb`):** Dùng trong `product-detail.html` để tạo đường dẫn điều hướng (ví dụ: Trang chủ > Sản phẩm > Tên sản phẩm).
* **Pagination (`.pagination`):** Tạo thanh phân trang ở cuối `products.html`.
* **Badge (`.badge`):** Dùng để hiển thị nhãn "Mới" trên các sản phẩm mới (`products.html`).

### 3. Lớp tiện ích (Utility Classes)

Đây là các lớp nhỏ, thực hiện một chức năng duy nhất, giúp tùy chỉnh thiết kế nhanh chóng mà không cần viết CSS:

* **Spacing (`.p-*`, `.m-*`):** Sử dụng liên tục.
    * `py-5` (padding top/bottom 5 đơn vị) dùng để tạo khoảng đệm lớn cho các `section`.
    * `mb-3` (margin-bottom 3 đơn vị) dùng để tạo lề dưới cho các tiêu đề.
    * `ms-auto` (margin-start: auto) dùng trong navbar để đẩy menu sang phải.
* **Text (`.text-center`, `.text-muted`, `.fw-bold`, `.text-primary`):**
    * `.text-center`: Căn giữa văn bản (dùng ở tiêu đề các section).
    * `.text-muted`: Tạo màu chữ mờ, xám (dùng cho mô tả phụ).
    * `.fw-bold`: In đậm phông chữ (dùng cho tiêu đề, giá tiền).
    * `.text-primary`, `.text-success`: Áp dụng màu chủ đề cho văn bản.
* **Flexbox (`.d-flex`, `.justify-content-between`, `.align-items-center`):**
    * Sử dụng trong thẻ sản phẩm (`.card-body`) để căn chỉnh giá (bên trái) và nút "Mua ngay" (bên phải) luôn thẳng hàng và nằm ở hai đầu (`.justify-content-between`).
* **Shadows (`.shadow-sm`, `.shadow-lg`):**
    * `.shadow-sm` được áp dụng cho `.navbar` và các `.card` để tạo hiệu ứng đổ bóng nhẹ, tinh tế.
    * `.shadow-lg` được dùng trong `product-detail.html` để làm thẻ chi tiết sản phẩm nổi bật hơn.
* **Borders & Rounded (`.border-*`, `.rounded`):**
    * `.rounded`: Dùng để bo tròn các góc ảnh trong bộ sưu tập (`gallery.html`).
    * `.border-start .border-4`: Dùng trong mục đánh giá (`index.html`) để tạo một đường viền dày bên trái.

## 📚 Các thư viện khác

* **Bootstrap Icons:** Dự án sử dụng thư viện [Bootstrap Icons](https://icons.getbootstrap.com/) cho tất cả các biểu tượng (icon tìm kiếm, giỏ hàng, mạng xã hội) thông qua thẻ `<i>` với các lớp `bi bi-*`.
* **(Các thư viện JS khác):** `glightbox` (cho gallery) và `aos` (hiệu ứng khi cuộn) cũng được sử dụng để tăng trải nghiệm người dùng.