import React from "react";
import{View,Text,StyleSheet,SafeAreaView,StatusBar,Image,Pressable, Linking} from "react-native";


//url da imagem
const ImageProfGitHub='https://hermes.digitalinnovation.one/users/student/4157fdc5-d657-4293-a052-b5df798f5a82.png';
//url do github
const githubUrl='https://github.com/pessouza';
//código das cores
const colorGitHub='#010409';
const colorFont='#C9D1D9';
const colorFontDark='#4F565B';
//função que executa nosso aplicativo
const App = () =>{
    const handlePressGoToGithub= async () => {
        console.log('verificando link')
        const res= await Linking.canOpenURL(githubUrl);
        if(res){
        console.log('link aprovado')
        console.log('abrindo link...')
        await Linking.openURL(githubUrl)
        }
    }
    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGitHub} barStyle='light-content'/>
        <View style={style.content}>
            <Image  accessibilityLabel="Alexandre com uma arara no ombro" 
            style={style.avatar} 
            source={{uri:ImageProfGitHub}}/>
            <Text accessibilityLabel="Nome: Alexandre Filho"
             style={[style.textoPadrao, style.nome]}>Alexandre Filho</Text>
            <Text accessibilityLabel="Nickname do GitHub: pessouza"
             style={[style.textoPadrao, style.nickname]}>@pessouza</Text>
            <Text accessibilityLabel="Alexandre é estudante de Análise e Desenvolvimento de Sistemas" 
            style={[style.textoPadrao, style.descricao]}>Estudante de Análise e Desenvolvimento de Sistemas</Text>
        </View>
        <Pressable onPress={handlePressGoToGithub}>
        <View style={style.content}>
            <Text style={style.botao}>Abrir no GitHub</Text>
        </View>
        </Pressable>
    </SafeAreaView>
    );
}

export default App

//criaçao de estilo para algum lugar
//separamos os elementos através do ,
const style = StyleSheet.create({
    container:{
        //as views se organizam como colunas, se alinhando abaixo da outra. Caso quiséssemos ajustar isso, deveremos inserir no container um flexDirection:'row'
        backgroundColor: colorGitHub,
        flex:1, // o 1 expande para a tela inteira
        justifyContent: 'center', // enquanto no content ele alinhou horizontalmente, aqui ele alinha verticalmente
    },
    content:{
        // o content se refere ao conteúdo da página propriamente dito
        alignItems:"center",
        padding: 20,
    },
   avatar:{
       height:200,
       width: 200,
       borderRadius: 200/2,
       borderWidth:1,
       borderColor:'white',
       marginBottom:20,
   },
   //este será a formatação padrão de nossos textos.
   textoPadrao:{
        color:colorFont
   },
   //o nome será a fonte de mais destaque, ele irá pegar as características do texto padrao e acrescentar essas
   nome:{
       fontWeight:'bold',
       fontSize:25,
   },
   //nickname será para o apelido, ele irá pegar as características do texto padrao e acrescentar essas
   nickname:{
       fontSize:20,
       color: colorFontDark
   },
   //para nossa descrição, ele irá pegar as características do texto padrao e acrescentar essas
   descricao:{
        fontWeight:'bold',
   },
   botao:{
       alignItems:'center',
       backgroundColor:'white',
       color:colorGitHub,
       borderRadius:10,
        padding:20,
        fontWeight:'bold',
   }
})