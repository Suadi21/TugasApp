import React from 'react'
import {View,Text, Image} from 'react-native'
import {
    ScrollView,
    TouchableOpacity} 
    from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'


export default class Ayam extends React.Component{
    state={
        quantity:1
    }

    addQuantity = (quantity) => {
        this.setState({quantity: this.state.quantity + 1});
    }
    subtractQuantity = (quantity) => {
      if (this.state.quantity > 0) {
        this.setState({quantity: this.state.quantity - 1});
      }
       
    }

    render(){
        return(
            <View style={{backgroundColor:"#FFF"}}>
               <ScrollView>
                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       marginTop:40,
                       marginHorizontal:20
                   }}>
                       <View style={{width:"10%"}}>
                            <TouchableOpacity
                                onPress={()=>this.props.navigation.goBack()}
                            >
                                <Image
                                    source={require('../images/ayam/back.png')}
                                />
                            </TouchableOpacity>
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
                                    fontSize:16
                                }}>Ayam Geprek Maknyus</Text>
                                <Image
                                    source={require('../images/ayam/hot.png')}
                                    style={{height:25,width:20}}
                                />
                            </View>
                       </View>
                       <View style={{width:"10%"}}>
                                <Icon
                                    name="heart"
                                    color="#f9dd7a"
                                    size={30}
                                />
                       </View>
                   </View>
                   <Image
                        source={require('../images/ayam/ayam0.png')}
                        style={{
                            height:300,
                            width:300,
                            alignSelf:"center"
                        }}
                   />
                   <View
                    style={{
                        flexDirection:"row",
                        alignSelf:"center",
                        alignItems:"center",
                        backgroundColor:"#f6f3fb",
                        paddingHorizontal:20,
                        paddingVertical:8,
                        borderRadius:20
                    }}
                   >
                      <TouchableOpacity
                       onPress={this.addQuantity}
                      >
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:18
                          }}>+</Text>
                      </TouchableOpacity> 
                      
                      <Text style={{
                          fontSize:18,
                          fontWeight:"bold",
                          paddingHorizontal:20
                      }}>
                          {this.state.quantity}
                      </Text>

                      <TouchableOpacity
                       onPress={this.subtractQuantity}
                      >
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:18
                          }}>-</Text>
                      </TouchableOpacity> 
                   </View>

                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       marginHorizontal:20,
                       marginTop:30
                   }}>
                       <View>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:25
                           }}>Ayam Geprek </Text>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:15,
                               color:"#a4a4a9"
                           }}>
                               Makanan Ndeso
                           </Text>
                       </View>
                      <Text style={{
                          fontWeight:"bold",
                          fontSize:28,
                          marginLeft:50
                      }}>Rp.12000</Text>
                   </View>
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:20,
                       marginTop:30,
                       marginHorizontal:20
                   }}>
                       Terbuat dari
                   </Text>
                   
                   <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:20,marginHorizontal:20}}
                   >
                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/ayam/ayam1.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/ayam/ayam2.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/ayam/ayam3.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/ayam/ayam4.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/ayam/ayam5.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/ayam/ayam6.png')}
                            style={{height:30,width:30}}
                           />
                       </View>
                   </ScrollView>
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:20,
                       marginTop:30,
                       marginHorizontal:20
                   }}>
                       Kandungan Gizi
                   </Text>
                   <Text style={{
                       color:"#a4a4a9",
                       fontWeight:"bold",
                       fontSize:15,
                       marginTop:10,
                       marginHorizontal:20,
                       textAlign:"justify"
                   }}>
                        Dalam ukuran Porsi 100 gram mengandung
                        Energi 1100 kj 263 kkal
                        Lemak 17,99g
                        Lemak Jenuh2,672g
                        Lemak tak Jenuh Ganda 4,741g
                        Lemak tak Jenuh Tunggal 9,191g
                        Kolesterol 139mg
                        Protein1 7,61g
                        Karbohidrat 7,6g
                        Serat 0,8g
                        Gula 0,78g
                        Sodium 460mg
                        Kalium 216mg
                   </Text>
               </ScrollView>
               <View style={{
                   position:"absolute",
                   backgroundColor:"#000",
                   height:50,
                   width:50,
                   bottom:20,
                   alignItems:"center",
                   justifyContent:"center",
                   alignSelf:"center",
                   borderRadius:25
               }}>
                   <Icon
                    name="shopping-cart"
                    size={24}
                    color="#FFF"
                    onPress={() => this.props.navigation.navigate('mbasayam')}
                   />
               </View>
            </View>
        )
    }
}