import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';
import { colors } from '../theme/colors';

export default function ProductDetailsScreen({ route, navigation }) {
  // The selected product travels here through route.params from HomeScreen.
  const { product } = route.params;
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    Alert.alert('Added to cart', `${quantity} x ${product.name}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Product Details</Text>
        <View style={{ width: 24 }} />
      </View>

      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.body}>
        <Text style={styles.name}>{product.name}</Text>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color={colors.star} />
          <Text style={styles.ratingText}>{product.rating}</Text>
        </View>

        <Text style={styles.price}>${product.price.toFixed(2)}</Text>

        <View style={styles.quantityRow}>
          <Text style={styles.quantityLabel}>Quantity</Text>
          <View style={styles.stepper}>
            <TouchableOpacity style={styles.stepperBtn} onPress={decrease}>
              <Ionicons name="remove" size={18} color={colors.white} />
            </TouchableOpacity>
            <Text style={styles.quantityValue}>{quantity}</Text>
            <TouchableOpacity style={styles.stepperBtn} onPress={increase}>
              <Ionicons name="add" size={18} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>
            ${(product.price * quantity).toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity style={styles.addToCartBtn} onPress={handleAddToCart}>
          <Ionicons name="cart-outline" size={18} color={colors.white} />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  image: {
    width: '100%',
    height: 280,
    backgroundColor: colors.lightGray,
  },
  body: {
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 13,
    color: colors.gray,
    marginLeft: 4,
  },
  price: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 20,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  quantityLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.black,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepperBtn: {
    backgroundColor: colors.black,
    borderRadius: 8,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
    marginHorizontal: 16,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 14,
    marginBottom: 24,
  },
  totalLabel: {
    fontSize: 15,
    color: colors.gray,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.black,
  },
  addToCartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    borderRadius: 12,
    paddingVertical: 14,
  },
  addToCartText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 8,
  },
});
