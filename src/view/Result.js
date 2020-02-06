import React from 'react'
import { AsyncStorage, View } from 'react-native' 
import { Container, Content, List, ListItem, Text, Toast, Button,Card, CardItem, Body } from 'native-base'

class Result extends React.Component {
    constructor() {
        super()
        this.state = {
            result : "",
            causes : [],
            solutions : []
        }
    }
    componentDidMount = () => {
        const data = this.props.navigation.state.params.data
        console.log(data)
        this.setState({
            result : data.nama_penyakit,
            causes : data.gejala,
            solutions : data.solusi,
        })
    }

    render() {
        return (
            <Container>
                <Content>
                    <Card style={{
                        borderRadius : 15,
                        padding : 15
                    }}>
                        <CardItem>
                            <Body>
                                <List>
                                    <ListItem itemDivider>
                                        <Text>Gejala</Text>
                                    </ListItem>

                                    {this.state.causes.map((data, index) => (
                                        <View key={index}>
                                            <ListItem>
                                                <Text>{data}</Text>
                                            </ListItem>
                                        </View>
                                    ))}                   
                                    
                                    <ListItem itemDivider>
                                        <Text>Hama</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>{this.state.result}</Text>
                                    </ListItem>
                                    <ListItem itemDivider>
                                        <Text>Solusi</Text>
                                    </ListItem>
                                    {this.state.solutions.map(data => (
                                        <View key={data.id}>
                                            <ListItem>
                                                <Text>{data.name}</Text>
                                            </ListItem>
                                        </View>
                                    ))}     
                                </List>

                                <Button style={{
                                        textAlign : 'center',
                                        padding : 15,
                                        backgroundColor : '#2c0692',
                                        color : '#fff',
                                        marginTop : 45
                                    }} 
                                onPress={() => this.props.navigation.navigate('Home')}
                                block>
                                        <Text style={{
                                            color : '#fff'
                                        }}>Kembali K Halaman Utama</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default Result
