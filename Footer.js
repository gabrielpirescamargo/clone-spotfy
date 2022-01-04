import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Audio} from 'expo-av';

import { LinearGradient } from "expo-linear-gradient";


export default function Player(props) {
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
    
    return(
        
        
        <View >
            <AnimatedLinearGradient colors={["rgba(20, 20, 20,0.9)","rgba(10, 10, 10,1)"]} start={{x: 0, y: 0}} end={{x: 0, y: 1}} style={styles.footer}>



            <TouchableOpacity style={styles.navConjunto}>
                <Image style={styles.navIconSelected} source={{uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png'}}/>
                <Text style={styles.navTextSelected}>Home</Text>
            </TouchableOpacity>
            
    
            <TouchableOpacity style={styles.navConjunto}>
            <Image style={styles.navIcon} source={require('./assets/search.png')}/>
                <Text style={styles.navText}>Buscar</Text>
            </TouchableOpacity>
         
            
            <TouchableOpacity style={styles.navConjunto}>
            <Image style={styles.navIcon} source={require('./assets/lib.png')}/>
                <Text style={styles.navText}>Sua biblioteca</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navConjunto}>
            <Image style={styles.navIcon} source={require('./assets/spotfy.png')}/>
                <Text style={styles.navText}>Premium</Text>
            </TouchableOpacity>

            </AnimatedLinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    navConjunto:{
       
        justifyContent:'center',
        alignItems:'center',
        marginBottom:38 ,
        width:"25%"
    },
    navIconSelected:{
        tintColor:'white',
        width: 25,
        height:25,
        marginBottom:5
        
    },
    navIcon:{
        tintColor:'#B3B3B3',
        width: 25,
        height:25,
        marginBottom:5
        
    },
    navTextSelected:{
        color:"white",
        fontSize:10
    },
    navText:{
        color:"#B3B3B3",
        fontSize:10
    },
    footer:{
        paddingTop: 10,
        width: 414,
        height: 92,
        position:'absolute',
        bottom:0,
        left:0,
        zIndex:2,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row', 
      
        
    }
})