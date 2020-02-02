import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { render } from 'react-dom';
class Screen extends Component {
  render() {
    const { displayNumber } = this.props
    const { type } = this.props
    return (
      <View style={styles.screenStyle}>
        <Text style={styles.textScreenStyle}> {displayNumber}</Text>
      </View>
    )
  }
}
class MyButton extends Component {
  press7Handle = () => {
    this.props.onChangePress7()     // nếu chỉ viết : this.props.onChangePress7 *ko có ngoặc đơn* => doesnt work vì react sẽ hiểu đây chỉ là 1 biền thông thường ko phải là 1 function
  }
  pressC_Handle = () => {
    this.props.onChangePress_C()
  }
  pressAddHandle = () => {
    this.props.onChagnePressAdd()
  }
  render() {
    // const result = eval ('19+23*5+2');
    return (

      <View style={styles.buttonallStyle}>
        <View style={styles.columnStyle}>
          <TouchableOpacity onPress={() => { this.press7Handle() }} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressC_Handle} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>C</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnStyle}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnStyle}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnStyle}>
          <TouchableOpacity style={styles.button1Style}>
            <Text style={styles.textStyle}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1Style}>
            <Text style={styles.textStyle}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressAddHandle} style={styles.button1Style}>
            <Text style={styles.textStyle}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1Style}>
            <Text style={styles.textStyle}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1Style}>
            <Text style={styles.textStyle}>=</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputData: '',
      inputNumber:'',
      displayNumber: '0',
      previNumber: '',
      previType:'',
      type: 'n',
      previCount:0,
      count:0,
    }
  }
  press7Handle = () => {
    this.setState(
     (previCount) =>({count:previCount.count+1})
    )
    this.setState(
      {previType:this.state.type}, ()=> {

      }
    )

    
    this.setState(
      { type: 'n' }
    )
    this.setState(
      (previNumber) => ({ inputNumber: previNumber.inputNumber + '7' })
    )
    this.setState(
      (previInput) => ({ inputData: previInput.inputData + '7' })
    )
  }
  pressAddHandle = () => {
    this.setState(
      {previType:this.state.type}
    )
    this.setState(
      { type: 'c' }
    )
    this.setState(
      (previInput) => ({ inputData: previInput.inputData + '+' })
    )
  }
  pressC_Handle = () => {
    this.setState(
      { inputNumber: '0' }
    )
  }
  render() {
    let { displayNumber } = this.state
    let {inputNumber} = this.state
    let {count} = this.state
    let {previCount} = this.state
    let {type} = this.state
    let {previType} = this.state
    if(count !== previCount & type ==='n' & previType === 'n'){
      this.setState({displayNumber:inputNumber})
      this.setState ({previCount:count})
    }
    if(count !== previCount & type === 'c'& previType ==='n'){}
    return (
      <View style={styles.container}>
        <Screen displayNumber={displayNumber} />
        <MyButton
          onChangePress7={this.press7Handle}
          onChagnePressAdd={this.pressAddHandle}
          onChangePress_C={this.pressC_Handle}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  screenStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 10,
    // marginLeft: 200,
  },
  buttonallStyle: {
    flex: 1.5,                                // this make the touchableopacity net doesnt work
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  columnStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: '#C0C0C0',
    paddingTop: 20,
    paddingBottom: 20,
    // width:85,
    // paddingLeft:37,
    // paddingRight:37,
    // // marginLeft:1,
    // // marginRight:1,
    marginBottom: 5,
    marginTop: 5
  },
  button1Style: {

    borderRadius: 10,
    backgroundColor: '#C0C0C0',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 37,
    paddingRight: 37,
    marginBottom: 5,
    marginTop: 5
  },
  textStyle: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 30,
  },
  textScreenStyle: {
    color: '#000000',
    fontSize: 50,
  },



});
