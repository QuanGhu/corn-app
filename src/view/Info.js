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
                                Informasi Pembuat Program
                            </Text>
                            <Text style={ {
                                textAlign : 'left',
                                fontSize : 12,
                                marginTop : 15
                            }}>
                                Nama : Nama
                            </Text>

                            <Text style={ {
                                textAlign : 'left',
                                fontSize : 12,
                                marginTop : 5
                            }}>
                                Nomor BP : 12312312
                            </Text>

                            <Button style={{
                                    textAlign : 'center',
                                    padding : 15,
                                    backgroundColor : '#2c0692',
                                    color : '#fff',
                                    marginTop : 15
                                }} 
                            onPress={() => this.props.navigation.navigate('MainMenu')}
                            block>
                                    <Text style={{
                                        color : '#fff'
                                    }}>Kembali Ke Menu Utama</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

export default Home