import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import CoffeeCard from './components/CoffeeCard';

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
            <CoffeeCard name="Expresso" description="Puro e forte" price="7,00"></CoffeeCard>
            <CoffeeCard name="Cappucino" description="Clássico com espuma" price="12,90"></CoffeeCard>
            <CoffeeCard name="Latter" description="Leite cremoso" price="11,50"></CoffeeCard>
            <CoffeeCard name="Mocha" description="Toque de chocolate" price="13,50"></CoffeeCard>
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
        <Footer></Footer>
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