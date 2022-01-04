import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImagePropTypes, LogBox, ScrollView, StyleSheet, Text, TouchableOpacity, View, Animated, Image } from 'react-native';
import {Audio} from 'expo-av';
import {AntDesign} from '@expo/vector-icons';
import Player from './Player.js';
import Footer from './Footer.js';
import { LinearGradient } from "expo-linear-gradient";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);



  LogBox.ignoreAllLogs(true);

  const [audioIndex,setarAudioIndex] = useState(0);

  const [playing,setPlaying] = useState(false);
  
  const [audio,setarAudio] = useState(null);
 
  const [musicas,setarMusicas] = useState([

    

    {
        nome: 'Ela e Ela',
        artista: 'Zé Neto e Cristiano',
        playing: false,
        file: require('./assets/mp3/elaeela.mp3'),
        image: require('./assets/elaeela.jpg')
    },
    {
      nome: 'Nota de Repúdio',
      artista: 'Gusttavo Lima',
      playing: false,
      file: require('./assets/mp3/repudio.mp3'),
      image: require('./assets/repudio.jpg')
  },
  {
    nome: 'Expectativa x Realidade',
    artista: 'Matheus & Kauan',
    playing: false,
    file: require('./assets/mp3/expectativa.mp3'),
    image: require('./assets/expectativa.jpg')
},
{
  nome: 'Faz Amor Comigo Só Hoje',
  artista: 'Israel & Rodolffo part. Wesley Safadão',
  playing: false,
  file: require('./assets/mp3/sohoje.mp3'),
  image: require('./assets/amorcomigo.jpg')
},
{
  nome: 'Foi Pá Pum',
  artista: 'Simone & Simaria',
  playing: false,
  file: require('./assets/mp3/papum.mp3'),
  image: require('./assets/papum.jpg')
},
{
  nome: 'Meu pedaço de pecado',
  artista: 'João Gomes',
  playing: false,
  file: require('./assets/mp3/pecado.mp3'),
  image: require('./assets/pecado.jpg')
},
{
  nome: 'Lance Individual',
  artista: 'Jorge & Mateus ',
  playing: false,
  file: require('./assets/mp3/lance.mp3'),
  image: require('./assets/lance.jpg')
},
{
  nome: 'Todo Mundo Menos Você',
  artista: 'Marília Mendonça & Maiara e Maraisa',
  playing: false,
  file: require('./assets/mp3/menosvc.mp3'),
  image: require('./assets/menosvc.jpg')
},

  ]);
 
  const changeMusic = async (id) =>{
      let curFile = null;
      let newMusics = musicas.filter((val,k)=>{
            if(id == k){
                musicas[k].playing = true;
               
                curFile = musicas[k].file;
                setPlaying(true);
                setarAudioIndex(id);
            }
            else{
                musicas[k].playing = false;
            }

            return musicas[k];
      })

      if(audio != null){
          audio.unloadAsync();
      }

      let curAudio = new Audio.Sound();

      try{
          await curAudio.loadAsync(curFile);
          await curAudio.playAsync();
      }catch(error){}

      setarAudio(curAudio);
      setarMusicas(newMusics);

  }

  return (
     <View style={{flex:1}}>
       <StatusBar hidden/>
       <AnimatedLinearGradient colors={["#6fa6ad","#121212","#121212","#121212","#121212","#121212","#000000"] } start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}  style={styles.container}>
       <View>
            <Text style={{textAlign:'center',color:'white',fontSize:25}}></Text>
          </View>
      <ScrollView>
     <View style={styles.header}></View>
         
          

      {/* BOA NOITE */}
      <View style={styles.goodEvening}>
        <Text style={styles.titulo}>Boa tarde</Text>
        <View style={styles.horizontal}>
          {
            musicas.map((val,k)=>{
                
                if(val.playing){
                    //Renderiza algo aqui.
                    return(
                    

                      <TouchableOpacity onPress={()=>changeMusic(k)}>
                      <View style={styles.row}>
                          <View ></View>
                          <Image style={styles.image}source={val.image}></Image>
                          <View >
                          <AnimatedLinearGradient  style={styles.table} colors={["#323232","#2A2A2A", "#272727"] }  >
                            <View>
                                    <Text numberOfLines={1}  style={styles.tableTextSelected}>{val.nome} </Text>
                                    <Text numberOfLines={1}  style={styles.descMusica}>{val.artista}</Text>
                                    
                            </View>
                          </AnimatedLinearGradient>
                          </View>
                      </View>
                      </TouchableOpacity>
                    );
                }else{
                  //Renderiza outra coisa aqui.
                  return(


                    <TouchableOpacity onPress={()=>changeMusic(k)}>
                    <View style={styles.row}>
                        <View ></View>
                        <Image style={styles.image}source={val.image}></Image>
                        <View >
                        <AnimatedLinearGradient  style={styles.table} colors={["#323232","#2A2A2A", "#272727"] }  >
                          <View>
                                  <Text numberOfLines={1}  style={styles.tableText}>{val.nome} </Text>
                                  <Text numberOfLines={1}  style={styles.descMusica}>{val.artista}</Text>
                                  
                          </View>
                        </AnimatedLinearGradient>
                        </View>
                    </View>
                    </TouchableOpacity>
                    );
                }

            })
          }
            </View> 
          </View>
          {/* FIM BOA NOITE */}

          
        
        {/* RECOMENDADOS */}
        <View style={styles.recomendados}>
        <Text style={styles.titulo}>Recomendados</Text>
        
        <ScrollView style={styles.recentes} horizontal={true}>
        
        <View style={styles.horizontal2}>
          {
            musicas.map((val,k)=>{
                
                if(val.playing){
                    //Renderiza algo aqui.
                    return(
                 

                    
                      <TouchableOpacity onPress={()=>changeMusic(k)}>
                      <View style={styles.conjunto}>
                          <View ></View>
                          <Image style={styles.imageRecomendados}source={val.image}></Image>
                          <View style={styles.component}>
                          
                            <View>
                                    <Text numberOfLines={1}  style={styles.tableTextSelectedRecomendados}>{val.nome} </Text>
                                    <Text numberOfLines={1}  style={styles.descMusica}>{val.artista}</Text>
                                    
                            </View>
                        
                          </View>
                      </View>
                      </TouchableOpacity>
      
                    );
                }else{
                  //Renderiza outra coisa aqui.
                  return(

                    
                    <TouchableOpacity onPress={()=>changeMusic(k)}>
                    <View style={styles.conjunto}>
                        <View ></View>
                        <Image style={styles.imageRecomendados}source={val.image}></Image>
                        <View style={styles.component}>
                        
                          <View>
                                  <Text numberOfLines={1}  style={styles.recomendadosText}>{val.nome} </Text>
                                  <Text numberOfLines={1}  style={styles.descMusica}>{val.artista}</Text>
                                  
                          </View>
                      
                        </View>
                    </View>
                    </TouchableOpacity>
                    );
                }

            })
          }
            </View> 
        
        </ScrollView>

          </View>
    
             {/* FIM RECOMENDADOS */}
        {/* RECENTES */}
        <View style={styles.recomendados}>
              <Text style={styles.titulo}>Tocadas recentemente</Text>
              
              <ScrollView style={styles.recentes} horizontal={true}>
              
              <View style={styles.horizontal2}>
                {
                  musicas.map((val,k)=>{
                      
                      if(val.playing){
                          //Renderiza algo aqui.
                          return(
                      

                         
                            <TouchableOpacity onPress={()=>changeMusic(k)}>
                            <View style={styles.conjunto}>
                                <View ></View>
                                <Image style={styles.imageRecomendados}source={val.image}></Image>
                                <View style={styles.component}>
                                
                                  <View>
                                          <Text numberOfLines={1}  style={styles.tableTextSelectedRecomendados}>{val.nome} </Text>
                                          <Text numberOfLines={1}  style={styles.descMusica}>{val.artista}</Text>
                                          
                                  </View>
                              
                                </View>
                            </View>
                            </TouchableOpacity>
                      
            
                          );
                      }else{
                        //Renderiza outra coisa aqui.
                        return(

                          
                          <TouchableOpacity onPress={()=>changeMusic(k)}>
                          <View style={styles.conjunto}>
                              <View ></View>
                              <Image style={styles.imageRecomendados}source={val.image}></Image>
                              <View style={styles.component}>
                              
                                <View>
                                        <Text numberOfLines={1}  style={styles.recomendadosText}>{val.nome} </Text>
                                        <Text numberOfLines={1}  style={styles.descMusica}>{val.artista}</Text>
                                        
                                </View>
                            
                              </View>
                          </View>
                          </TouchableOpacity>
                          );
                      }

                  })
                }
                  </View> 
              
              </ScrollView>
                </View>
          
                  {/* FIM RECENTES */}

                  {/* PARA VOCÊ */}
        <View style={styles.recomendados}>
              <Text style={styles.titulo}>Para você</Text>
              
              <ScrollView style={styles.recentes} horizontal={true}>
              
              <View style={styles.horizontal2}>
                {
                  musicas.map((val,k)=>{
                      
                      if(val.playing){
                          //Renderiza algo aqui.
                          return(
                      

                     
                            <TouchableOpacity onPress={()=>changeMusic(k)}>
                            <View style={styles.conjunto}>
                                <View ></View>
                                <Image style={styles.imageRecomendados}source={val.image}></Image>
                                <View style={styles.component}>
                                
                                  <View>
                                          <Text numberOfLines={1}  style={styles.tableTextSelectedRecomendados}>{val.nome} </Text>
                                          <Text numberOfLines={1}  style={styles.descMusica}>{val.artista}</Text>
                                          
                                  </View>
                              
                                </View>
                            </View>
                            </TouchableOpacity>
                      
            
                          );
                      }else{
                        //Renderiza outra coisa aqui.
                        return(

                          
                          <TouchableOpacity onPress={()=>changeMusic(k)}>
                          <View style={styles.conjunto}>
                              <View ></View>
                              <Image style={styles.imageRecomendados}source={val.image}></Image>
                              <View style={styles.component}>
                              
                                <View>
                                        <Text numberOfLines={1}  style={styles.recomendadosText}>{val.nome} </Text>
                                        <Text numberOfLines={1}  style={styles.descMusica}>{val.artista}</Text>
                                        
                                </View>
                            
                              </View>
                          </View>
                          </TouchableOpacity>
                          );
                      }

                  })
                }
                  </View> 
              
              </ScrollView>
                </View>
          
                  {/* PARA VOCÊ */}

             <View style={styles.fimdepagina}></View>

      </ScrollView>
      
      </AnimatedLinearGradient>

      
       
     


      <View style={styles.footerPlayer}>
        
              {/* musica atual */}
       {
            musicas.map((val,k)=>{
                
                if(val.playing){
                    //Renderiza algo aqui.
                    return(

                      <View>
                         <Player  playing={playing}  setPlaying={setPlaying} setarAudioIndex={setarAudioIndex} audioIndex={audioIndex} musicas={musicas} setarMusicas={setarMusicas} audio={audio} setarAudio={setarAudio}>


</Player>
                        <View style={styles.atualConjunto}>
                          <View style={styles.row}>
                            
                                <Image style={styles.imageAtual}source={val.image}></Image>
                                <View>
                                  <View  style={styles.atual} >
                                    <View style={styles.nomeDesc}>
                                            <Text numberOfLines={1}  style={styles.textAtual}>{val.nome} </Text>
                                            <Text numberOfLines={1}  style={styles.descAtual}>{val.artista}</Text>
                                                
                                      </View>
                                      
                                    </View>
                                    
                                </View>
                                
                            </View>
                            
                        </View>
                         
                      </View>
                        

                );
                }else{
                  //Renderiza outra coisa aqui.
                  return(
                   <View></View>
                    );
                }

            })
          }


             {/* FIM musica atual */}
     
      <Footer></Footer>
      </View>
      </View>
      
  );
}

const styles = StyleSheet.create({

  nomeDesc:{
    paddingTop:15,
    paddingLeft:5
  },
  fimdepagina:{
    height:150
  },
  conjunto:{
    margin:16
  },
  imageRecomendados:{
    width:126,
    height:126,
   
  },
  recomendados:{
      justifyContent:'flex-start',
      marginTop:20
    
  
  },
  recentes:{
    width:"100%",
    height:220,
    zIndex:0
  },
  titulo:{
    fontSize:24,
     lineHeight: 24,
     color:'white',
     fontWeight: "bold",
     paddingLeft: 15,
     marginBottom:15
  },
  component:{
    width:100
  },
  goodEvening:{
    
  
  },
  horizontal:{
    flexDirection:"row",
    flexWrap:'wrap',
    width: "100%",
    alignItems:'center',
    justifyContent:'center',


  },
  horizontal2:{
    flexDirection:"row",
    width: "100%",




  },
  image:{
    backgroundColor: "#1B1B1B",
    width:62,
    height:62,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10
  },

  imageAtual:{
    backgroundColor: "#1B1B1B",
    width:60,
    height:60,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    
  },
  descMusica:{
    fontSize:10,
    color:"#c9c9c9",
    width:100

  },
  descAtual:{
    fontSize:10,
    color:'#1DB954',
    width:150,
    width:100
    

  },
  row:{
    flexDirection:'row',
    padding:5

  },
  container: {
    flex: 1,


  },
  header:{
    backgroundColor:'transparent',
    width:'100%',
    height:50,

  },

  table:{
    flexDirection:'row',
    paddingLeft:8,
    justifyContent:'flex-start',
    alignItems:'center',
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    backgroundColor:'#1B1B1B',
    width: 125,
    height:62,
   
    
    
  },
  atualConjunto:{

    position:'absolute',
    bottom:85,
    alignItems:'center',
    justifyContent:'center',
    
    
  },

  tableTextSelected:{
    width:100,
    color:'#1DB954',
    width:130,
    fontSize:12,
    fontWeight: "bold",
  },
  tableTextSelectedRecomendados:{
  
    marginTop:10,
    width:300,
    color:'#1DB954',
    fontWeight: "bold",
    fontSize:14,
    width:140,
    paddingRight:20
  },
  textAtual:{
    width:100,
    color:'white',
    width:130,
    fontSize:12,
    fontWeight: "bold",
  },

  recomendadosText:{
      marginTop:10,
      width:300,
      color:'white',
      fontWeight: "bold",
      fontSize:14,
      width:140,
      paddingRight:20
  },
  tableText:{
    marginTop:10,
    width:300,
    color:'white',
    fontWeight: "bold",
    fontSize:12,
    width:130,
    paddingRight:20

    
}
});
