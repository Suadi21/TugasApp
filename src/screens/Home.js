import React from 'react'
import {View,Image, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from "@expo/vector-icons/Entypo"
import Product from '../components/Product'

export default class Home extends React.Component{
    render(){
        return(
           <ScrollView style={{backgroundColor:"#c8ff97"}}>
               <View style={{
                   paddingHorizontal:10,
                   marginTop:30
               }}>
                   <Text style={{
                       fontSize:30,
                       fontWeight:"bold"
                   }}>Makanan Ndeso</Text>
                   <Text style={{
                       color:"#a4a4a9",
                       fontWeight:"bold",
                       fontSize:20,
                       marginTop:0
                       
                   }}>mantap dijamin ketagihan</Text>
               </View>


               <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginTop:40}}
               >
                   <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"#e5e4eb",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../images/home/bakso.png')}
                        style={{height:40,width:40}}
                       />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:18,
                           paddingLeft:10
                       }}>
                           Bakso
                       </Text>
                   </View>

                   <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"#e5e4eb",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../images/home/ayam.png')}
                        style={{height:40,width:40}}
                       />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:18,
                           paddingLeft:10
                       }}>
                           Ayam Geprek
                       </Text>
                   </View>

                   <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"#e5e4eb",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../images/home/mie.png')}
                        style={{height:40,width:40}}
                       />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:18,
                           paddingLeft:10
                       }}>
                           Mie Telur
                       </Text>
                   </View>
                   <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"#e5e4eb",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../images/home/nasi.png')}
                        style={{height:40,width:40}}
                       />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:18,
                           paddingLeft:10
                       }}>
                           Nasi Goreng
                       </Text>
                   </View>
            </ScrollView>
                   <View style={{
                       alignItems:"center",
                       marginHorizontal:20,
                       flexDirection:"row",
                       marginTop:40
                   }}>
                       <View style={{
                           width:"50%"
                       }}>
                           <Text style={{
                               fontSize:22,
                               fontWeight:"bold"
                           }}>List Menu</Text>
                       </View>
                       <View style={{
                           width:"50%",
                           alignItems:"flex-end"
                       }}>
                           <Icon
                            name="dots-three-horizontal"
                            size={25}
                            color="#848385"
                           />
                       </View>
                   </View>
                  
                  
                   <View style={{
                       flexDirection:"row",
                       marginHorizontal:15,
                       marginTop:30,
                   }}>
                       <Product
                            image={require("../images/home/bakso1.png")}
                            title="Bakso"
                            price="12.99"
                            onPress={() => this.props.navigation.navigate('Bakso')}
                       />
                       <Product
                            image={require("../images/home/ayam1.png")}
                            title="Ayam Geprek"
                            price="10.99"
                            marginTop={25}
                            onPress={() => this.props.navigation.navigate('Ayam')}
                       />
                   </View>

                   <View style={{
                       flexDirection:"row",
                       marginHorizontal:15,
                       marginTop:30,
                   }}>
                       <Product
                            image={require("../images/home/mie1.png")}
                            title="Mie Telur"
                            price="11.99"
                            onPress={() => this.props.navigation.navigate('Mie')}
                       />
                       <Product
                            image={require("../images/home/nasi1.png")}
                            title="Nasi Goreng"
                            price="10.99"
                            marginTop={25}
                            onPress={() => this.props.navigation.navigate('Nasi')}
                       />
                   </View>
           </ScrollView>
        )
    }
}