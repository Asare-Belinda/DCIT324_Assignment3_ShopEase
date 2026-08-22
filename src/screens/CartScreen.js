import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';
import { colors } from '../theme/colors';

export default function CartScreen() {
  const { items, removeFromCart, total } = useCart();

  if (items.length === 0) {
    return (
      <SafeAreaView style={styles.emptyContainer}>
        <Ionicons name="cart-outline" size={48} color={colors.gray} />
        <Text style={styles.emptyText}>Your cart is empty</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.product.id}
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image source={{ uri: item.product.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name} numberOfLines={1}>
                {item.product.name}
              </Text>
              <Text style={styles.qty}>Qty: {item.quantity}</Text>
              <Text style={styles.price}>
                ${(item.product.price * item.quantity).toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.product.id)}>
              <Ionicons name="trash-outline" size={20} color={colors.danger} />
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.checkoutBtn}>
        <Text style={styles.checkoutText}>Confirm Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    marginTop: 10,
    fontSize: 15,
    color: colors.gray,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.black,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
  },
  qty: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
    marginTop: 2,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 12,
    marginBottom: 12,
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
  checkoutBtn: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  checkoutText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
  },
});
