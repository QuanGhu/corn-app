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
                                Sistem Pakar Mendiagnosis Hama Pada Tanaman Jagung
                            </Text>
                            <Text style={ {
                                textAlign : 'center',
                                fontSize : 12,
                                marginTop : 15
                            }}>
                                Selamat datang, silakan anda pakai aplikasi ini untuk mendiagnosa hama pada tanaman jagung anda
                            </Text>

                            <Button style={{
                                    textAlign : 'center',
                                    padding : 15,
                                    backgroundColor : '#2c0692',
                                    color : '#fff',
                                    marginTop : 45
                                }} 
                            onPress={() => this.props.navigation.navigate('Diagnose')}
                            block>
                                    <Text style={{
                                        color : '#fff'
                                    }}>Mulai</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

export default Home