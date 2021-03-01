import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper'
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LinearGradient } from "expo-linear-gradient";
import { Button, Input, ButtonGroup } from "react-native-elements";


const data = [
  {id: 'blablabla',
  price:'20€',
  name:'Maxime',
  image:'https://i.pinimg.com/474x/d8/1c/ae/d81caed831c47cdd329baf6dc304cbcb.jpg'
  },
  {id: 'blobloblo',
  price:'30€',
  name:'Tom',
  image:'https://i.pinimg.com/474x/a0/ef/35/a0ef352c96992ef65c5e8e65c3614807.jpg'
  },
  {id: 'kdahedjaeh',
  price:'450€',
  name:'audrie',
  image:'https://i.pinimg.com/474x/f9/a9/1d/f9a91daa7ec59be23274f596957edfef.jpg'
  },
  {id: 'feaefe',
  price:'600€',
  name:'juliette',
  image:'https://i.pinimg.com/474x/e0/f0/15/e0f0158abc9203386739cd9789d0a585.jpg'
  },
]

const colors = {
  red : '#C93028',
  blue: '#28A7C9',
  grey: '#777777',
  black: '#000000',
  white: '#FFFFFF'
}
export default function App() {
  const [index, setIndex] = useState(0)



  const onSwiped = () => {
    setIndex((index+1)%data.length)
  }

  const Swiperz = () =>{
    return(
<View style={styles.container}>
      <Swiper
        cards={data}
        cardIndex={index}
        renderCard={(card) => <Card card={card}/>}
        onSwiped= {onSwiped}
        stackSize={4}
        stackScale={10}
        stackSeparation={30}
        disableTopSwipe
        disableBottomSwipe
        animateOverlayLabelsOpacity
        animateCardOpacity
        overlayLabels= {{}}
        overlayLabelStyle={{
          
          left:{title:'Nope',
            style: {
              backgroundColor:colors.red,
              color: colors.white,
              fontSize: 12
            },
            wrapper: {
              flexDirection:'column',
              alignItems:'flex-end',
              justifyContent:'flex-start',
            },
          },
          right:{
            title: 'Like',
            label: {
              backgroundColor:colors.blue,
              color: colors.white,
              fontSize: 12
            },
            wrapper: {
              flexDirection:'column',
              alignItems:'flex-end',
              justifyContent:'flex-start',
            },
          }
        }}
      >
      </Swiper>
      <StatusBar style="auto" />
    </View>
  )}
  const Card = ({card}) => (
    <View style={{
      height:400,
      borderRadius:8,
      shadowRadius:25,
      shadowOpacity:0.08,
      shadowColor:colors.black,
      shadowOffset:{width:0,height:0},
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: colors.white
    }} 
    >
      <Image source={{uri: card.image}} style={{
        width:160,
        height:100,
        flex:1,
        resizeMode:'contain'}}
        />
      <Text style={{height:30, color:'black'}}>{card.name}</Text>
    </View>
  )


  return (
    <LinearGradient
    style={{ flex: 1, alignItems:'center' }}
    // Background Linear Gradient
    colors={["rgba(255,188,62,1)", "rgba(255,170,63,1)", "rgba(255,67,67,1)"]}
    locations={[0, 0.7, 1]}
    >
      <Swiperz/>
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    height:400,
    borderRadius:8,
    shadowRadius:25,
    shadowOpacity:0.08,
    shadowColor:colors.black,
    shadowOffset:{width:0,height:0},
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors.white

  },
  cardImage:{
    width:160,
    height:100,
    flex:1,
    resizeMode:'contain'
  }
});
