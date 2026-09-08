import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Café do código</Text>
          <Text style={styles.headerSubtitle}>Seu café. uma linha por vez</Text>
        </View>
        <View style={styles.avatarPlaceholder}>
          <Ionicons name="person" size={20} color="#2f2d2c"></Ionicons>
        </View>
      </View>
      {/*Header*/}
      {/*Body*/}
      <View style={styles.body}>
        <View>
          <Text style={styles.bodyTitle}>Bom dia!</Text>
          <Text style={styles.bodySubtitle}>Que tal um café hoje?</Text>
        </View>
      </View>
      {/*Body*/}
    </ScrollView>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
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
  headerTitle:{
    fontSize:22,
    fontWeight:'800',
    color: "#2f2d2c"
  },
  headerSubtitle:{
    fontSize:14,
    color:"#9b9b9b",
    marginTop:4
  },
  avatarPlaceholder:{
    width:44,
    height: 44,
    borderRadius:22,
    backgroundColor:"#f0f0f0",
    justifyContent:"center",
    alignItems:"center"
  },
  body:{
    width: '100%',
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bodyTitle:{
    fontSize:32,
    fontWeight:"800",
    color: "#2f2d2c"
  },
  bodySubtitle:{
    fontSize:16,
    color:"#9b9b9b",
    marginTop:8
  }
})

