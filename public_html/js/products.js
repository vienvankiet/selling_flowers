// --- START: PRODUCT DATA AND FILTERING LOGIC (Bootstrap only, no AOS) ---

// Dữ liệu sản phẩm (thay vì hard-code trong HTML)
const allProducts = [
  {
    id: 1,
    name: "Tulip Sắc Màu",
    price: 559000,
    category: "Tulip",
    image:
      "../images/HoaTulip.jpg",
    isNew: true,
    desc: "Tươi trẻ, rực rỡ cho ngày đặc biệt.",
  },
  {
    id: 2,
    name: "Hồng Pastel Tinh Khôi",
    price: 489000,
    category: "Hoa hồng",
    image:
      "../images/Hoahongpastel.jpeg",
    isNew: false,
    desc: "Nhẹ nhàng và tinh tế, hợp sinh nhật & kỷ niệm.",
  },
  {
    id: 3,
    name: "Cẩm Tú Cầu Xanh",
    price: 629000,
    category: "Cẩm tú cầu",
    image:
      "../images/Camtucau.jpg",
    isNew: false,
    desc: "Trang nhã, phù hợp khai trương & chúc mừng.",
  },
  {
    id: 4,
    name: "Hoa cưới",
    price: 450000,
    category: "Hoa hướng dương",
    image: "../images/HoaCuoi.png",
    isNew: true,
    desc: "Mang năng lượng tích cực và niềm vui.",
  },
  {
    id: 5,
    name: "Hoa hồng tặng nàng",
    price: 510000,
    category: "Tulip",
    image:
      "../images/Hoahong.jpg",
    isNew: false,
    desc: "Lãng mạn, thủy chung và đầy mộng mơ.",
  },
  {
    id: 6,
    name: "Hoa sinh nhật tình yêu",
    price: 599000,
    category: "Hoa hồng",
    image:
      "../images/Hoasinhnhatem.jpg",
    isNew: false,
    desc: "Biểu tượng của tình yêu mãnh liệt, vĩnh cửu.",
  },
];

const productGrid = document.getElementById("product-grid");
const noResultsMsg = document.getElementById("no-results");

// Hàm để hiển thị sản phẩm ra grid
function renderProducts(products) {
  productGrid.innerHTML = ""; // Xóa grid cũ
  if (products.length === 0) {
    noResultsMsg.classList.remove("d-none");
  } else {
    noResultsMsg.classList.add("d-none");
  }

  products.forEach((product, index) => {
    const cardHTML = `
              <div class="col d-flex">
                <div class="card product-card w-100">
                  ${
                    product.isNew
                      ? '<span class="position-absolute top-0 end-0 m-2 badge badge-new">Mới</span>'
                      : ""
                  }
                  <img src="${product.image}" alt="${product.name}" />
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-muted flex-grow-1">${
                      product.desc
                    }</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <span class="price">${product.price.toLocaleString(
                        "vi-VN"
                      )}₫</span>
                      <a class="btn btn-outline-success btn-sm" href="product-detail.html?id=${
                        product.id
                      }">Xem chi tiết</a>
                    </div>
                  </div>
                </div>
              </div>
            `;
    productGrid.innerHTML += cardHTML;
  });
}

// Logic lọc và sắp xếp
document.getElementById("filter-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn form reload trang

  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const category = document.getElementById("category-select").value;
  const sortBy = document.getElementById("sort-select").value;

  let filteredProducts = [...allProducts];

  // 1. Lọc theo tên
  if (searchTerm) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(searchTerm)
    );
  }

  // 2. Lọc theo danh mục
  if (category !== "all") {
    filteredProducts = filteredProducts.filter((p) => p.category === category);
  }

  // 3. Sắp xếp
  switch (sortBy) {
    case "price-asc":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
  }

  renderProducts(filteredProducts);
});

// Hiển thị tất cả sản phẩm khi tải trang lần đầu
renderProducts(allProducts);
