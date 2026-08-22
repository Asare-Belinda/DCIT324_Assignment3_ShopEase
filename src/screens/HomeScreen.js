import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { colors } from '../theme/colors';

export default function HomeScreen({ navigation }) {
  const { addToCart } = useCart();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>ShopEase</Text>
        <Ionicons name="notifications-outline" size={22} color={colors.black} />
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={18} color={colors.gray} />
        <TextInput
          placeholder="Search products"
          placeholderTextColor={colors.gray}
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.sectionTitle}>New Release</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <ProductCard
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}
            onPress={() =>
              navigation.navigate('ProductDetails', { product: item })
            }
            onAddToCart={() => addToCart(item, 1)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  logo: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.primary,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    color: colors.black,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 12,
  },
  row: {
    justifyContent: 'space-between',
  },
  listContent: {
    paddingBottom: 24,
  },
});
