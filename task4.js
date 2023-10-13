function printProductInfo(product) {
  const { name, category, available, price } = product;
  console.log(`Назва: ${name}`);
  console.log(`Категорія: ${category}`);
  console.log(`Доступність: ${available ? "Так" : "Ні"}`);
  console.log(`Ціна: ${price} грн`);
}

const product = {
  id: 1,
  name: "Ноутбук Lenovo IdeaPad 3",
  price: 15000,
  description: "15.6 дюймовий, AMD Ryzen 5, 8 ГБ ОЗУ, 512 ГБ SSD",
  images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  category: "Ноутбуки",
  available: true,
};

printProductInfo(product);
