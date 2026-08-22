# ShopEase - Product Catalogue (DCIT 324, Assignment 3)

**Student ID:** 22171739

A React Native (Expo) app built from the ShopEase eCommerce Figma UI kit.
Covers a product catalogue, product details screen, and cart, using
reusable components, props, state, and navigation.

## Requirements covered

- **Reusable `ProductCard`** (`src/components/ProductCard.js`). Receives
  `image`, `name`, `price`, `rating` as props.
- **Home screen** (`src/screens/HomeScreen.js`). Maps over
  `src/data/products.js` and renders a 2-column grid with `ProductCard`.
- **Bottom tab navigator** (`src/navigation/MainTabs.js`). Home, Cart,
  Profile.
- **Stack navigator** (`src/navigation/AppNavigator.js`). Wraps the tabs.
  Tapping a product pushes `ProductDetailsScreen`, passing the product
  through `route.params`.
- **Product Details screen** (`src/screens/ProductDetailsScreen.js`).
  Quantity selector (+ / -) managed with `useState`, and an Add to Cart
  button.
- Cart state is shared across screens with a small `CartContext`
  (`src/context/CartContext.js`), so items added on the details screen
  show up on the Cart tab.

## Project structure

```
App.js
app.json
babel.config.js
package.json
src/
  components/
    ProductCard.js
  context/
    CartContext.js
  data/
    products.js
  navigation/
    AppNavigator.js      # root stack: MainTabs + ProductDetails
    MainTabs.js           # bottom tabs: Home, Cart, Profile
  screens/
    HomeScreen.js
    ProductDetailsScreen.js
    CartScreen.js
    ProfileScreen.js
  theme/
    colors.js
```

## Setup

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go (Android/iOS) or press `a` / `i` for an
emulator.

## Design reference

Colours, layout, and spacing are based on the ShopEase Figma kit:
https://www.figma.com/community/file/1539127084554643436/shopease-ecommerce-mobile-app-ui-kit

Only the Home/listing and Product Details flows were required, so
onboarding, login, and checkout/payment screens from the kit were not
built. Product images are placeholders (picsum.photos). Swap the
`image` field in `src/data/products.js` for real product photos any
time.

## Submitting

1. Push this project to a GitHub repository.
2. On GitHub: **Code → Download ZIP**.
3. Submit the ZIP on Sakai under Assignment 3.
