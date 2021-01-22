import React from 'react'
import {View,Text, Image} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'


export default class Beli_nasi extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:"#FFF"}}>
               <ScrollView>
                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       marginTop:50,
                       marginHorizontal:20
                   }}>
                       <View style={{width:"10%"}}>
                       </View>
                       <View style={{width:"80%",alignItems:"center"}}>
                            <View style={{
                                flexDirection:"row",
                                alignItems:"center",
                                alignSelf:"center"
                            }}>
                                <Text style={{
                                    paddingHorizontal:10,
                                    fontWeight:"bold",
                                    fontSize:20
                                }}>Pesanan sedang dikemas</Text>
                                
                            </View>
                       </View>
                   </View>
                   <Image
                        source={require('../images/nasi/nasi0.png')}
                        style={{
                            height:300,
                            width:300,
                            marginTop: 20,
                            alignSelf:"center"
                            
                        }}
                   />
                   
                   <Text style={{
                       paddingHorizontal:10,
                       color:"#a4a4a9",
                       fontWeight:"bold",
                       fontSize:15,
                       marginTop:20,
                       marginHorizontal:20,
                       textAlign:"center"
                   }}>
                        Sembari menunggu pesananmu datan
                        bisa memilih-milih menu yang lain.
                   </Text>
               </ScrollView>
               <View style={{
                   backgroundColor:"#000",
                   height:50,
                   width:50,
                   marginTop:50,
                   alignItems:"center",
                   justifyContent:"center",
                   alignSelf:"center",
                   borderRadius:30
               }}>
                   <Icon
                    name="home"
                    size={24}
                    color="#FFF"
                    onPress={() => this.props.navigation.navigate('Home')}
                   />
               </View>   
            </View>
        )
    }
}