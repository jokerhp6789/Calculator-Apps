import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { render } from 'react-dom';
const START = 's', NUMBER = 'n', OPERATOR = 'o', EQUAL = 'e', DOT = 'd'
class Screen extends Component {
  render() {
    const { displayNumber } = this.props
    return (
      <View style={styles.screenStyle}>
        <Text style={styles.textScreenStyle}>{parseFloat(displayNumber)}</Text>
      </View>
    )
  }
}
class MyButton extends Component {
  pressHandle = (valuePress) => {
    this.props.onchangePress(valuePress)
  }
  render() {
    return (
      <View style={styles.buttonallStyle}>
        <View style={styles.columnStyle}>
          <TouchableOpacity onPress={() => { this.pressHandle(7) }} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pressHandle(4) }} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pressHandle(1) }} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pressHandle('RESET') }} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>C</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnStyle}>
          <TouchableOpacity onPress={() => { this.pressHandle(8) }} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pressHandle(5) }} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pressHandle(2) }} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pressHandle(0) }} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnStyle}>
          <TouchableOpacity onPress={() => { this.pressHandle(9) }} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pressHandle(6) }} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pressHandle(3) }} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pressHandle('DOT') }} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnStyle}>
          <TouchableOpacity onPress={() => { this.pressHandle('DIV') }} style={styles.button1Style}>
            <Text style={styles.textStyle}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pressHandle('MUL') }} style={styles.button1Style}>
            <Text style={styles.textStyle}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pressHandle('ADD') }} style={styles.button1Style}>
            <Text style={styles.textStyle}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pressHandle('MIN') }} style={styles.button1Style}>
            <Text style={styles.textStyle}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pressHandle('EQUAL') }} style={styles.button1Style}>
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
      inputNumber: '',
      displayNumber: '0',
      previType: '',
      type: START,
      previCount: 0,
      count: 0,    // => tránh vòng lắp vô hạn khi sử dụng lệnh if
      operator: '',
      result: 0,
      dotCount: 0,
    }
  }
  setNumberState = (valuePress) => {
    this.setState(
      (previState) => ({ count: previState.count + 1 })
    )
    this.setState(
      {
        previType: this.state.type,
        type: NUMBER,
        inputNumber: valuePress
      }
    )

  }
  setOperatorState = (valuePress) => {
    this.setState(
      (previState) => ({ count: previState.count + 1 })
    )
    this.setState(
      {
        previType: this.state.type,
        type: OPERATOR,
        inputNumber: '',
        operator: valuePress,
        dotCount: 0
      }
    )
  }
  setDotState = () => {
    this.setState(
      (previState) => ({ count: previState.count + 1 })
    )
    this.setState(
      {
        previType: this.state.type,
        type: DOT,
        inputNumber: '.'
      }
    )
  }
  setResetState = () => {
    this.setState(
      (previState) => ({ count: previState.count + 1 })
    )
    this.setState(
      {
        previType: this.state.type,
        type: START,
        inputNumber: '',
        dotCount: 0
      }
    )
  }
  setEqualState = () => {
    let input = this.state.inputData
    if (input.slice(-1) === '+') { input = input.slice(0, -1) }  //kiểm tra chuỗi nhập vào trước khi nhán phím =,nếu có phép tính ở cuối chuỗi thì loại bỏ
    let result = eval(input)
    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      {
        previType: this.state.type,
        type: EQUAL,
        result,
        dotCount: 0
      }
    )

  }
  pressHandle = (valuePress) => {
    switch (valuePress) {
      case 9:
        this.setNumberState('9')
        break
      case 8:
        this.setNumberState('8')
        break
      case 7:
        this.setNumberState('7')
        break
      case 6:
        this.setNumberState('6')
        break
      case 5:
        this.setNumberState('5')
        break
      case 4:
        this.setNumberState('4')
        break
      case 3:
        this.setNumberState('3')
        break
      case 2:
        this.setNumberState('2')
        break
      case 1:
        this.setNumberState('1')
        break
      case 0:
        this.setNumberState('0')
        break
      case 'ADD':
        this.setOperatorState('+')
        break
      case ' MIN':
        this.setOperatorState('-')
        break
      case 'MUL':
        this.setOperatorState('*')
        break
      case 'DIV':
        this.setOperatorState('/')
        break
      case 'DOT':
        this.setDotState()
        break
      case 'EQUAL':
        this.setEqualState()
        break
      case 'RESET':
        this.setResetState()
        break

    }
  }


  render() {

    let { displayNumber, inputNumber, count, previCount, type, previType, operator, result, dotCount } = this.state

    if (count !== previCount & type === NUMBER & (previType === NUMBER || previType === START || previType === DOT)) {  // trường hợp ấn phím số khi phím trước là phím (số hoặc C hoặc .)
      this.setState({ previCount: count })
      this.setState(
        (e) => ({ displayNumber: e.displayNumber + inputNumber })
      )
      this.setState(
        (e) => ({ inputData: e.inputData + inputNumber })
      )
    }
    if (count !== previCount & type === NUMBER & previType === OPERATOR) {    // trường hợp ấn phím số khi phím trước là phím tính 
      this.setState({ previCount: count })
      this.setState(
        () => ({ displayNumber: inputNumber })
      )
      this.setState(
        (e) => ({ inputData: e.inputData + inputNumber })
      )
    }
    if (count !== previCount & type === NUMBER & previType === EQUAL) {  // trường hợp ấn phím số khi phím trước là phím =
      this.setState({ previCount: count })
      this.setState(
        () => ({ displayNumber: inputNumber })
      )
      this.setState(
        () => ({ inputData: inputNumber })
      )

    }
    if (count !== previCount & type === DOT & previType === NUMBER & dotCount !== 1) {   // trường hợp ấn phím . lần đầu và khi phím trước là phím số 
      this.setState(
        {
          previCount: count,
          dotCount: 1
        }
      )
      this.setState(
        (e) => ({ displayNumber: e.displayNumber + inputNumber })
      )
      this.setState(
        (e) => ({ inputData: e.inputData + inputNumber })
      )
    }
    if (count !== previCount & type === DOT & (previType === EQUAL || previType === START) & dotCount !== 1) {        // trường hợp ấn phím . khi phím trước là phím (= hoặc C)
      this.setState(
        {
          previCount: count,
          displayNumber: '0.',
          inputData: '0.',
          dotCount: 1
        }
      )
    }
    if (count !== previCount & type === DOT & previType === OPERATOR & dotCount !== 1) {        // trường hợp ấn phím . khi phím trước là phím tính
      this.setState(
        {
          previCount: count,
          displayNumber: '0.',
          dotCount: 1
        }
      )
      this.setState(
        (e) => ({ inputData: e.inputData + '0.' })
      )
    }
    if (count !== previCount & type === OPERATOR & previType === NUMBER) { // trường hợp ấn phím tính khi phía trước là phím số
      this.setState({ previCount: count })
      this.setState(
        (e) => ({ inputData: e.inputData + operator })
      )
    }
    if (count !== previCount & type === OPERATOR & previType === OPERATOR) {  // trường hợp ấn phím tính khi phím trước là phím tính 
      this.setState({ previCount: count })
      let { inputData } = this.state
      inputData = inputData.slice(0, -1)
      inputData = inputData + operator
      this.setState(
        () => ({ inputData: inputData })
      )
    }
    if (count !== previCount & type === OPERATOR & (previType === EQUAL || previType === START)) {  // trường hợp ấn phím tính khi phím trước là phím =
      this.setState({ previCount: count })
      this.setState(
        (e) => ({ inputData: e.inputData + operator })
      )
    }
    if (count !== previCount & type === OPERATOR & previType === DOT) { //trường hợp ấn phím tính khi trước là phím . đầu tiên của 1 số
      this.setState({ previCount: count })
      this.setState(
        (e) => ({ inputData: e.inputData + operator })
      )
    }
    if (count !== previCount & type === EQUAL & (previType === NUMBER || previType === OPERATOR || previType === DOT)) {  // trường hợp ấn phím = khi phím trước là phím số 
      this.setState({ previCount: count })
      this.setState(
        { displayNumber: result.toString() }, () => { console.log(this.state.inputData) }
      )
      this.setState(
        { inputData: result.toString() }, () => { console.log(this.state.inputData) }
      )
    }
    if (count !== previCount & type === START) {       // trường hợp ấn phím C khi phím trước là bất kì phím gì 
      this.setState(
        {
          previCount: count,
          inputData: '',
          displayNumber: '0',
          result: 0
        }
      )
    }
    return (
      <View style={styles.container}>
        <Screen
          displayNumber={displayNumber}
        />
        <MyButton
          onchangePress={this.pressHandle}
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
})

