import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Ionicons name="person" size={40} color={colors.white} />
      </View>
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.subtitle}>Accra, Ghana</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} defaultValue="John Doe" />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} defaultValue="Accra, Ghana" />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} defaultValue="johndoe@example.com" />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Phone</Text>
        <TextInput style={styles.input} defaultValue="+233 000 000 000" />
      </View>

      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    alignItems: 'center',
  },
  avatarWrapper: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
  },
  subtitle: {
    fontSize: 13,
    color: colors.gray,
    marginBottom: 24,
  },
  field: {
    width: '100%',
    marginBottom: 14,
  },
  label: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: colors.black,
  },
  editBtn: {
    width: '100%',
    backgroundColor: colors.black,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  editText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
  },
});
