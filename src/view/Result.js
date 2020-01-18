import React from 'react'
import { AsyncStorage, View } from 'react-native' 
import { Container, Content, List, ListItem, Text, Toast, Button } from 'native-base'

class Result extends React.Component {
    constructor() {
        super()
        this.state = {
            result : "",
            causes : [],
            solutions : []
        }
    }
    componentDidMount = async () => {
        
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>Gejala</Text>
                        </ListItem>

                        <View>
                            <ListItem>
                                <Text>Gejala A</Text>
                            </ListItem>
                        </View>                  
                        
                        <ListItem itemDivider>
                            <Text>Hama</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Nama Hama A</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>Pestisida</Text>
                        </ListItem>
                        <View >
                            <ListItem>
                                <Text>Pestisida A</Text>
                            </ListItem>
                        </View>  
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
                </Content>
            </Container>
        )
    }
}

export default Result
