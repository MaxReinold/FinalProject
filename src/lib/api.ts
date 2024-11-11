export const GetItems = () => {
    return tempItems;
}

const tempItems = [
  {
    "name": "Wireless Earbuds",
    "salePrice": 29.99,
    "originalPrice": 49.99,
    "ratingoo5": 4.3,
    "ratingCount": 153,
    "imgSrc": "https://cdn1.ozone.ru/s3/multimedia-p/6812794753.jpg"
  },
  {
    "name": "Smartphone Case",
    "salePrice": 15.99,
    "originalPrice": 24.99,
    "ratingoo5": 4.0,
    "ratingCount": 89,
    "imgSrc": "https://avatars.mds.yandex.net/i?id=654fc384a0aaf199998a69e172e86ff6867fae06-4841302-images-thumbs&n=13"
  },
  {
    "name": "Bluetooth Speaker",
    "salePrice": 39.99,
    "originalPrice": 59.99,
    "ratingoo5": 4.5,
    "ratingCount": 245,
    "imgSrc": "https://avatars.mds.yandex.net/i?id=de953b6c1bd9d56e62b4d10d766f4fbc7e6cc35e-7333143-images-thumbs&n=13"
  },
//   {
//     "name": "Fitness Tracker",
//     "salePrice": 49.99,
//     "originalPrice": 79.99,
//     "ratingoo5": 4.2,
//     "ratingCount": 312,
//     "imgSrc": "https://example.com/images/fitnesstracker.jpg"
//   },
//   {
//     "name": "Laptop Stand",
//     "salePrice": 19.99,
//     "originalPrice": 29.99,
//     "ratingoo5": 4.4,
//     "ratingCount": 187,
//     "imgSrc": "https://example.com/images/laptopstand.jpg"
//   },
//   {
//     "name": "Gaming Mouse",
//     "salePrice": 25.99,
//     "originalPrice": 39.99,
//     "ratingoo5": 4.6,
//     "ratingCount": 432,
//     "imgSrc": "https://example.com/images/gamingmouse.jpg"
//   },
//   {
//     "name": "LED Desk Lamp",
//     "salePrice": 22.99,
//     "originalPrice": 34.99,
//     "ratingoo5": 4.1,
//     "ratingCount": 200,
//     "imgSrc": "https://example.com/images/desklamp.jpg"
//   },
//   {
//     "name": "Noise Cancelling Headphones",
//     "salePrice": 59.99,
//     "originalPrice": 89.99,
//     "ratingoo5": 4.7,
//     "ratingCount": 289,
//     "imgSrc": "https://example.com/images/headphones.jpg"
//   },
//   {
//     "name": "Portable Charger",
//     "salePrice": 18.99,
//     "originalPrice": 25.99,
//     "ratingoo5": 4.3,
//     "ratingCount": 123,
//     "imgSrc": "https://example.com/images/charger.jpg"
//   },
//   {
//     "name": "USB-C Hub",
//     "salePrice": 27.99,
//     "originalPrice": 39.99,
//     "ratingoo5": 4.5,
//     "ratingCount": 78,
//     "imgSrc": "https://example.com/images/usbhub.jpg"
//   },
//   {
//     "name": "Smartwatch",
//     "salePrice": 99.99,
//     "originalPrice": 149.99,
//     "ratingoo5": 4.6,
//     "ratingCount": 401,
//     "imgSrc": "https://example.com/images/smartwatch.jpg"
//   },
//   {
//     "name": "Wireless Keyboard",
//     "salePrice": 34.99,
//     "originalPrice": 54.99,
//     "ratingoo5": 4.4,
//     "ratingCount": 264,
//     "imgSrc": "https://example.com/images/keyboard.jpg"
//   },
//   {
//     "name": "HD Webcam",
//     "salePrice": 45.99,
//     "originalPrice": 69.99,
//     "ratingoo5": 4.3,
//     "ratingCount": 150,
//     "imgSrc": "https://example.com/images/webcam.jpg"
//   },
//   {
//     "name": "Bluetooth Adapter",
//     "salePrice": 12.99,
//     "originalPrice": 19.99,
//     "ratingoo5": 4.2,
//     "ratingCount": 76,
//     "imgSrc": "https://example.com/images/adapter.jpg"
//   },
//   {
//     "name": "Smart Light Bulb",
//     "salePrice": 16.99,
//     "originalPrice": 24.99,
//     "ratingoo5": 4.5,
//     "ratingCount": 203,
//     "imgSrc": "https://example.com/images/lightbulb.jpg"
//   },
//   {
//     "name": "4K HDMI Cable",
//     "salePrice": 9.99,
//     "originalPrice": 14.99,
//     "ratingoo5": 4.6,
//     "ratingCount": 103,
//     "imgSrc": "https://example.com/images/hdmicable.jpg"
//   },
//   {
//     "name": "Memory Card",
//     "salePrice": 12.99,
//     "originalPrice": 18.99,
//     "ratingoo5": 4.4,
//     "ratingCount": 134,
//     "imgSrc": "https://example.com/images/memorycard.jpg"
//   },
//   {
//     "name": "Laptop Cooling Pad",
//     "salePrice": 27.99,
//     "originalPrice": 39.99,
//     "ratingoo5": 4.2,
//     "ratingCount": 89,
//     "imgSrc": "https://example.com/images/coolingpad.jpg"
//   },
//   {
//     "name": "Tablet Stand",
//     "salePrice": 14.99,
//     "originalPrice": 22.99,
//     "ratingoo5": 4.1,
//     "ratingCount": 66,
//     "imgSrc": "https://example.com/images/tabletstand.jpg"
//   },
//   {
//     "name": "Wireless Charger",
//     "salePrice": 29.99,
//     "originalPrice": 44.99,
//     "ratingoo5": 4.6,
//     "ratingCount": 230,
//     "imgSrc": "https://example.com/images/wirelesscharger.jpg"
//   },
//   {
//     "name": "Smart Plug",
//     "salePrice": 13.99,
//     "originalPrice": 19.99,
//     "ratingoo5": 4.3,
//     "ratingCount": 120,
//     "imgSrc": "https://example.com/images/smartplug.jpg"
//   },
//   {
//     "name": "Digital Thermometer",
//     "salePrice": 11.99,
//     "originalPrice": 16.99,
//     "ratingoo5": 4.2,
//     "ratingCount": 98,
//     "imgSrc": "https://example.com/images/thermometer.jpg"
//   },
//   {
//     "name": "Desktop Fan",
//     "salePrice": 25.99,
//     "originalPrice": 35.99,
//     "ratingoo5": 4.5,
//     "ratingCount": 180,
//     "imgSrc": "https://example.com/images/fan.jpg"
//   },
//   {
//     "name": "Mini Projector",
//     "salePrice": 79.99,
//     "originalPrice": 129.99,
//     "ratingoo5": 4.3,
//     "ratingCount": 214,
//     "imgSrc": "https://example.com/images/projector.jpg"
//   },
//   {
//     "name": "Bluetooth Headset",
//     "salePrice": 21.99,
//     "originalPrice": 34.99,
//     "ratingoo5": 4.0,
//     "ratingCount": 76,
//     "imgSrc": "https://example.com/images/headset.jpg"
//   },
//   {
//     "name": "USB Flash Drive",
//     "salePrice": 8.99,
//     "originalPrice": 14.99,
//     "ratingoo5": 4.4,
//     "ratingCount": 154,
//     "imgSrc": "https://example.com/images/flashdrive.jpg"
//   },
//   {
//     "name": "Electric Toothbrush",
//     "salePrice": 24.99,
//     "originalPrice": 39.99,
//     "ratingoo5": 4.3,
//     "ratingCount": 172,
//     "imgSrc": "https://example.com/images/toothbrush.jpg"
//   },
//   {
//     "name": "VR Headset",
//     "salePrice": 199.99,
//     "originalPrice": 299.99,
//     "ratingoo5": 4.5,
//     "ratingCount": 301,
//     "imgSrc": "https://example.com/images/vrheadset.jpg"
//   },
//   {
//     "name": "Electric Kettle",
//     "salePrice": 19.99,
//     "originalPrice": 29.99,
//     "ratingoo5": 4.3,
//     "ratingCount": 142,
//     "imgSrc": "https://example.com/images/kettle.jpg"
//   },
//   {
//     "name": "Action Camera",
//     "salePrice": 89.99,
//     "originalPrice": 129.99,
//     "ratingoo5": 4.4,
//     "ratingCount": 192,
//     "imgSrc": "https://example.com/images/actioncamera.jpg"
//   }
]

  