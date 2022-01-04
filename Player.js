import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Animated, Image } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Audio} from 'expo-av';
import { LinearGradient } from "expo-linear-gradient";
import {musicas, val} from './App'


export default function Player(props) {
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
    
    const handleBack = async ()=>{
        let newIndex = props.audioIndex - 1;
        if(newIndex < 0){
            newIndex = props.musicas.length - 1;
        }
        props.setarAudioIndex(newIndex);

        let curFile = props.musicas[newIndex].file;
        //Atualizar interface do app.
        let newMusics = props.musicas.filter((val,k)=>{
            if(newIndex == k){
                props.musicas[k].playing = true;
               
                curFile = props.musicas[k].file;
                
            }
            else{
                props.musicas[k].playing = false;
            }

            return props.musicas[k];
      })

        //Reproduzir audio em questao.
        if(props.audio != null){
            props.audio.unloadAsync();
        }
        let curAudio = new Audio.Sound();
        try{
           await curAudio.loadAsync(curFile);
            await curAudio.playAsync();
        }catch(error){}

        props.setarAudio(curAudio);
        props.setarMusicas(newMusics);
        props.setPlaying(true);


    }

    const handleNext = async () =>{
        let newIndex = props.audioIndex + 1;
        if(newIndex >= props.musicas.length){
            newIndex = 0;
        }
        props.setarAudioIndex(newIndex);

        let curFile = props.musicas[newIndex].file;
        //Atualizar interface do app.
        let newMusics = props.musicas.filter((val,k)=>{
            if(newIndex == k){
                props.musicas[k].playing = true;
               
                curFile = props.musicas[k].file;
                
            }
            else{
                props.musicas[k].playing = false;
            }

            return props.musicas[k];
      })

        //Reproduzir audio em questao.
        if(props.audio != null){
            props.audio.unloadAsync();
        }
        let curAudio = new Audio.Sound();
        try{
           await curAudio.loadAsync(curFile);
            await curAudio.playAsync();
        }catch(error){}

        props.setarAudio(curAudio);
        props.setarMusicas(newMusics);
        props.setPlaying(true);

    }


    const handlePlay = async()=>{
        let curFile = props.musicas[props.audioIndex].file;

        let newMusics = props.musicas.filter((val,k)=>{
            if(props.audioIndex == k){
                props.musicas[k].playing = true;
               
                curFile = props.musicas[k].file;
                
            }
            else{
                props.musicas[k].playing = false;
            }

            return props.musicas[k];
      })


      try{

        if(props.audio != null){
                props.setPlaying(true);
                props.setarMusicas(newMusics);
                await props.audio.playAsync();
        }else{
                let curAudio = new Audio.Sound();
                try{
                    await curAudio.loadAsync(curFile);
                    await curAudio.playAsync();
                }catch(error){}

                props.setarAudio(curAudio);
                props.setarMusicas(newMusics);
                props.setPlaying(true);
        }


      }catch(error){}


    }

    const handlePause = async()=>{
        if(props.audio!= null){
            props.audio.pauseAsync();
        }
        props.setPlaying(false);
    }
    
    return(

        
            
             <AnimatedLinearGradient colors={["#323232", "#2A2A2A", "#272727"]} style={styles.player}>
            <View style={styles.component}> 
            <TouchableOpacity onPress={()=>handleBack()} style={styles.botao}>
            <Image style={styles.botao} source={require('./assets/back.png')}/>
            </TouchableOpacity>
            {
            (!props.playing)?
            <TouchableOpacity onPress={()=>handlePlay()} style={styles.botao}>
               <Image style={styles.botao} source={require('./assets/play.png')}/>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={()=>handlePause()} style={styles.botao}>
             <Image style={styles.botao} source={require('./assets/pause.png')}/>
            </TouchableOpacity>

            }
            <TouchableOpacity onPress={()=>handleNext()}  style={styles.botao}>
            <Image style={styles.botao} source={require('./assets/next.png')}/>
            </TouchableOpacity>
            </View>
            </AnimatedLinearGradient>
       
        
      )

}

const styles = StyleSheet.create({
    component:{
        flexDirection:'row',

        
    },
    texto:{
        color:"white"
    },
    botao:{
        width:24,
        height:24,
        marginLeft:15,
        tintColor:'white'
    },
    player:{
        width: 400,
        bottom:90,
        left:10,
        height: 59,
        position:'absolute',
        alignItems:'flex-end',
        paddingRight:40,
        justifyContent:'center',
        borderRadius:10,

      
    }
})