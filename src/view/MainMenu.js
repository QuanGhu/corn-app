import React from 'react'
import { Card, CardItem, Body, Button } from 'native-base';
import { View, Text } from 'react-native';

class Home extends React.Component {
    render() {
        return (
            <View style={ { 
                justifyContent: 'center', alignContent: 'space-between', 
                flex : 1, padding : 25}
            }>
                <Card style={{
                    borderRadius : 15,
                    padding : 15
                }}>
                    <CardItem>
                        <Body>
                            <Text style={ {
                                textAlign : 'center',
                                fontSize : 14,
                                fontWeight : 'bold'
                            }}>
                                Menu Utama
                            </Text>
                            <Text style={ {
                                textAlign : 'center',
                                fontSize : 12,
                                marginTop : 15
                            }}>
                                Silakan Pilih Menu Yang Tersedia
                            </Text>

                            <Button style={{
                                    textAlign : 'center',
                                    padding : 15,
                                    backgroundColor : '#2c0692',
                                    color : '#fff',
                                    marginTop : 45
                                }} 
                            onPress={() => this.props.navigation.navigate('Info')}
                            block>
                                    <Text style={{
                                        color : '#fff'
                                    }}>Informasi Pembuat Program</Text>
                            </Button>
                            <Button style={{
                                    textAlign : 'center',
                                    padding : 15,
                                    backgroundColor : '#2c0692',
                                    color : '#fff',
                                    marginTop : 15
                                }} 
                            onPress={() => this.props.navigation.navigate('Diagnose')}
                            block>
                                    <Text style={{
                                        color : '#fff'
                                    }}>Mulai Sistem Pakar</Text>
                            </Button>
                            <Button style={{
                                    textAlign : 'center',
                                    padding : 15,
                                    backgroundColor : 'transparent',
                                    color : '#2c0692',
                                    marginTop : 15,
                                    borderColor : '#2c0692'
                                }} 
                            onPress={() => this.props.navigation.navigate('Home')}
                            block>
                                    <Text style={{
                                        color : '#2c0692'
                                    }}>Keluar</Text>
                            </Button>
                            
                        </Body>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

export default Home