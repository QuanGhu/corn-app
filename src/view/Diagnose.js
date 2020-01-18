import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert,
  AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Container, Card, Toast } from 'native-base';

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      causes: [{
        id : 1,
        name : 'Penyebab A'
      },
      {
        id : 2,
        name : 'Penyebab B'
      },
      {
        id : 3,
        name : 'Penyebab C'
      }],
      selectedCause: []
    }
  }

  press = (hey) => {
    this.state.causes.map((item) => {
      if (item.id === hey.id) {
        item.check = !item.check
        if (item.check === true) {
          this.state.selectedCause.push(item);
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

  componentDidMount = async () => {
    
  }

  renderHeader = () => {
    return <Header/>
  };

  analyze = async () => {
      
  }

  render() {
    return (
      <Container>
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
            <View style={{ flexGrow : 2, marginTop : 40, flexDirection : 'row'}}>
            {(this.state.selectedCause.length > 1)
                ? (
                    <View style={{
                        flex: 1,
                        alignItems: 'stretch',
                        justifyContent: 'center',
                        alignContent: 'center'
                        }}>
                            <Button style={{justifyContent: 'center'}}>
                                <Text style={ { textAlign : 'center', color : 'white'}}> Analisa </Text>
                            </Button>
                    </View>
                )
                : null
                }
            </View>
        </Card>
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
    flex : 1,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 0,
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