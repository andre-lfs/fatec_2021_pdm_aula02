import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{ //default qd não tem nome - tudo isso é um construtor
  constructor(props){
    super(props);
    this.state={
      meuTexto: "um texto inicial", //component
      contador: 0 // par - chave -valor
    }
  }
  render (){
    return(
      <View style={styles.container}>
      <Text>{this.state.contador}</Text>
      <Button //cria um botão
      title="Incrementar"
      onPress={_ => this.setState({contador: this.state.contador + 1})}
      />
      </View>
    );
  }
}

/*export default function App() {
  const[outputText, setOutputText] = useState('Texto inicial'); //me dando um par
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
      tittle = "Alterar texto"
      onPress = {() => {setOutputText('Novo texto')}} // isso é uam função
      />
      <StatusBar style="auto" />
    </View>
  );
}
*/
const styles = StyleSheet.create({ //criando objeto de estilos - css
  container: {                 // par chave
    flex: 1,                   //valores associados abaixo
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
