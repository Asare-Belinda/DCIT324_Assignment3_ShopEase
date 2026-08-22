import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

// A pure, reusable card. It only knows about the props it receives —
// image, name, price, rating — plus two callbacks for interaction.
export default function ProductCard({
  image,
  name,
  price,
  rating,
  onPress,
  onAddToCart,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.heartBadge}>
          <Ionicons name="heart-outline" size={16} color={colors.black} />
        </View>
      </View>

      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>

      <View style={styles.ratingRow}>
        <Ionicons name="star" size={13} color={colors.star} />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>

      <View style={styles.bottomRow}>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addBtn} onPress={onAddToCart}>
          <Ionicons name="cart-outline" size={16} color={colors.white} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '47%',
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.lightGray,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  heartBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 4,
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingText: {
    fontSize: 12,
    color: colors.gray,
    marginLeft: 4,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  addBtn: {
    backgroundColor: colors.black,
    borderRadius: 8,
    padding: 6,
  },
});
