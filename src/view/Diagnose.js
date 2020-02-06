import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert,
  AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Container, Card, Toast, Content } from 'native-base';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      causes: [],
      selectedCause: []
    }
  }

  press = (hey) => {
    this.state.causes.map((item) => {
      if (item.id === hey.id) {
        item.check = !item.check
        if (item.check === true) {
          this.state.selectedCause.push(item.id);
        } else if (item.check === false) {
          const i = this.state.selectedCause.indexOf(item)
          if (1 != -1) {
            this.state.selectedCause.splice(i, 1)
            return this.state.selectedCause
          }
        }
      }
    })
    this.setState({causes: this.state.causes})
  }

  _showSelectedCause() {
    return this.state.selectedCause.length;
  }

  componentDidMount = () => {
    axios({
        method : 'GET',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        url : "http://35.240.237.198/api/cause",
    })   
    .then((res) => {
        console.log(res.data.data)
        this.setState({
          causes : res.data.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  renderHeader = () => {
    return <Header/>
  };

  analyze() {
    axios({
        method : 'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        url : "http://35.240.237.198/api/diagnose/process",
        data : {
          causes_id : this.state.selectedCause
        }
    })   
    .then((res) => {
        this.props.navigation.navigate('Result',{
          data : res.data.data
        })
    })
    .catch((error) => {
      console.log(error.response)
    })
    
  }

  render() {
    return (
      <Container>
        <Content>
          <Card style={{ padding : 15, flex : 1 }}>
              <View style={styles.storyContainer}>
                  <FlatList data={this.state.causes} ListHeaderComponent={this.renderHeader} keyExtractor={(item, index) => `list-item-${index}`} extraData={this.state} renderItem={({item}) => {
                      return <TouchableOpacity style={{
                          flexDirection: 'row',
                          padding: 10,
                          borderBottomWidth: 1,
                          borderStyle: 'solid',
                          borderColor: '#ecf0f1'
                      }} onPress={() => {
                      this.press(item)
                      }}>
                        <View style={{
                            flex: 3,
                            alignItems: 'flex-start',
                            justifyContent: 'center'
                        }}>
                            {item.check
                            ? (
                                <Text style={{
                                fontWeight: 'bold'
                                }}>{`${item.name}`}</Text>
                            )
                            : (
                                <Text>{`${item.name}`}</Text>
                            )}
                        </View>
                        <View style={{
                            flex: 1,
                            alignItems: 'flex-end',
                            justifyContent: 'center'
                        }}>
                            {item.check
                            ? (
                                <Icon name="ios-checkbox" size={30} color={primaryColor}></Icon>
                            )
                            : (
                                <Icon name="ios-square-outline" size={30} color={darkGrey}></Icon>
                            )}
                        </View>
                      </TouchableOpacity>
                  }}/>
              </View>
          </Card>
          <Card>
            <View>
              {(this.state.selectedCause.length > 1)
                  ? (
                      <View style={{
                          flex: 1,
                          alignItems: 'stretch',
                          justifyContent: 'center',
                          alignContent: 'center'
                          }}>
                              <Button style={{justifyContent: 'center', marginTop : 15}} onPress={this.analyze.bind(this) }>
                                  <Text style={ { textAlign : 'center', color : 'white'}}> Analisa </Text>
                              </Button>
                      </View>
                  )
                  : null
                  }
              </View>
          </Card>

        </Content>
      </Container>
    );
  };
};

const primaryColor = "#1abc9c";
const lightGrey = "#ecf0f1";
const darkGrey = "#bdc3c7";

const Header = () => (
    <View style={{ flex : 1, alignItems: 'stretch',
            justifyContent: 'center',
            alignContent: 'center'}}>
        <Text style={{ textAlign : 'center', fontSize : 20, fontWeight : 'bold'}}> Pilih lah gejala dibawah ini </Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex : 0.9,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 0,
    marginBottom: 50
  },
  containerFooter: {
    height: 50,
    backgroundColor: '#1abc9c',
    padding: 5,
    flexDirection: 'row'
  },
  searchContainer: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecf0f1'
  }
});