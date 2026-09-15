import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [name,setName]=useState('');
  const [message,setMessage]=useState('');

  const handleOrder=() => {
    if(name.trim() ===''){
      setMessage('Por favor, informe seu nome!')
    }else{
      setMessage(`Olá, ${name}! Seu pedido foi recebido`)
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={30}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <Header></Header>
        {/* Header */}

        {/* Body */}
        <View style={styles.content}>

          {/* Title */}
          <View style={styles.contentInitial}>
            <Text style={styles.contentTitle}>Bom dia!</Text>
            <Text style={styles.contentSubtitle}>Que tal um café hoje?</Text>
          </View>
          {/* Title */}

          {/* Card */}
          <View style={styles.featured}>
            <Image
              source={require('./assets/coffee.jpg')}
              style={styles.image}>
            </Image>
            <Text style={styles.featuredTitle}>Cappucino Especial</Text>
            <Text style={styles.featuredDescription}>Cremoso e delicioso</Text>
            <Text style={styles.featuredPrice}>R$ 12,90</Text>
          </View>
          {/* Card */}

          {/* Section */}
          <Text style={styles.sectionTitle}>Nosso cardápio</Text>

          <View style={styles.menu}>
            <View style={styles.cardItem}>
              <Text style={styles.cardTitle}>Espresso</Text>
              <Text style={styles.cardDescription}>Puro e forte</Text>
              <Text style={styles.cardPrice}>R$ 7,00</Text>
            </View>
            <View style={styles.cardItem}>
              <Text style={styles.cardTitle}>Cappucino</Text>
              <Text style={styles.cardDescription}>Clássico com espuma</Text>
              <Text style={styles.cardPrice}>R$ 12,90</Text>
            </View>
            <View style={styles.cardItem}>
              <Text style={styles.cardTitle}>Latte</Text>
              <Text style={styles.cardDescription}>Leite cremoso</Text>
              <Text style={styles.cardPrice}>R$ 11,50</Text>
            </View>
            <View style={styles.cardItem}>
              <Text style={styles.cardTitle}>Mocha</Text>
              <Text style={styles.cardDescription}>Toque de chocolate</Text>
              <Text style={styles.cardPrice}>R$ 13,50</Text>
            </View>
          </View>
          {/* Section */}

          <View style={styles.orderSection}>
            <Text style={styles.question}>Qual é o seu nome?</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome"
            value={name}
            onChangeText={setName}
            ></TextInput>

            <TouchableOpacity style={styles.button} onPress={handleOrder}>
              <Text style={styles.buttonText}>Fazer meu pedido</Text>
            </TouchableOpacity>

            {message !== '' && (
              <Text style={styles.messageText}>{message}</Text>
            )}
          </View>
        </View>
        {/* Body */}
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Cafeteria de Fulano</Text>
        </View>
        {/* Footer */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'

    //Header
  },
  header: {
    width: '100%',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: "#2F2D2C"
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#9B9B9B",
    marginTop: 4
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center"
  },
  //Header

  //Body
  content: {
    paddingHorizontal: 24,
  },
  contentInitial: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contentTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: "#2F2D2C"
  },
  contentSubtitle: {
    fontSize: 16,
    color: "#9B9B9B",
    marginTop: 8
  },

  //Card
  featured: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4
  },
  image: {
    width: "100%",
    height: 188,
    borderRadius: 16,
    marginBottom: 16
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: "#2F2D2C"
  },
  featuredDescription: {
    fontSize: 14,
    color: "#9B9B9B",
    marginTop: 4
  },
  featuredPrice: {
    fontSize: 20,
    fontWeight: '800',
    color: "#C67C4E",
    marginTop: 8
  },
  //Card

  //Section
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2F2D2C",
    marginBottom: 16
  },
  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20
  },
  cardItem: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2F2D2C"
  },
  cardDescription: {
    fontSize: 12,
    color: "#9B9B9B",
    marginTop: 4,
    lineHeight: 16
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "800",
    color: "#C67C4E",
    marginTop: 12
  },
  orderSection: {
    padding: 24,
    backgroundColor: "#ffffff",
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 10
  },
  question: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },
  input: {
    width: "100%",
    height: 56,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#c67c4e",
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",

  },
  footer:{
    padding: 20,
    alignItems: "center",
    marginBlock: 20
  },
  footerText:{
    fontSize: 14,
    fontWeight: "600",
    color: "#9b9b9b"
  },
  messageText:{
    fontSize: 16,
    fontWeight:"800",
    color: "#c67c4e",
    alignItems: "center",
    marginTop: 20
  }
  //Section

  //Body
})