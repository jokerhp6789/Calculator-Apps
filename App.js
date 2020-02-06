import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { render } from 'react-dom';
const START = 's'
class Screen extends Component {
  render() {
    const { displayNumber } = this.props
    const { previNumber } = this.props
    const { type } = this.props
    const { previType } = this.props
    // if (type === 's') {                       // sử dụng trong trường hợp không dùng praseFloat,lúc này displayNumber phải set về '' => trong 1 số trường hợp không thể hiển thệ trực tiếp displayNumber
    //   return (
    //     <View style={styles.screenStyle}>
    //       <Text style={styles.textScreenStyle}>0</Text>
    //     </View>
    //   )
    // }
    // if (type === 'e' && previType === 's') {  // sử dụng trong trường hợp không dùng praseFloat,lúc này displayNumber phải set về '' => trong 1 số trường hợp không thể hiển thệ trực tiếp displayNumber    //   return (
    //     <View style={styles.screenStyle}>
    //       <Text style={styles.textScreenStyle}>0</Text>
    //     </View>
    //   )
    // }
    return (
      <View style={styles.screenStyle}>
        <Text style={styles.textScreenStyle}>{parseFloat(displayNumber)}</Text>
      </View>
    )
  }
}
class MyButton extends Component {
  press0Handle = () => {
    this.props.onChangePress0()
  }
  press1Handle = () => {
    this.props.onChangePress1()
  }
  press2Handle = () => {
    this.props.onChangePress2()
  }
  press3Handle = () => {
    this.props.onChangePress3()
  }
  press4Handle = () => {
    this.props.onChangePress4()
  }
  press5Handle = () => {
    this.props.onChangePress5()
  }
  press6Handle = () => {
    this.props.onChangePress6()
  }
  press7Handle = () => {
    this.props.onChangePress7()     // nếu chỉ viết : this.props.onChangePress7 *ko có ngoặc đơn* => doesnt work vì react sẽ hiểu đây chỉ là 1 biền thông thường ko phải là 1 function
  }
  press8Handle = () => {
    this.props.onChangePress8()
  }
  press9Handle = () => {
    this.props.onChangePress9()
  }
  pressDotHandle = () => {
    this.props.onChangePressDot()
  }
  pressAddHandle = () => {
    this.props.onChangePressAdd()
  }
  pressMinHandle = () => {
    this.props.onChangePressMin()
  }
  pressMulHandle = () => {
    this.props.onChangePressMul()
  }
  pressDivHandle = () => {
    this.props.onChangePressDiv()
  }
  pressC_Handle = () => {
    this.props.onChangePress_C()
  }
  pressEqualHandle = () => {
    this.props.onChangePressEqual()
  }
  render() {
    // const result = eval ('19+23*5+2');
    return (

      <View style={styles.buttonallStyle}>
        <View style={styles.columnStyle}>
          <TouchableOpacity onPress={() => { this.press7Handle() }} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.press4Handle} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.press1Handle} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressC_Handle} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>C</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnStyle}>
          <TouchableOpacity onPress={this.press8Handle} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.press5Handle} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.press2Handle} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.press0Handle} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnStyle}>
          <TouchableOpacity onPress={this.press9Handle} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.press6Handle} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.press3Handle} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressDotHandle} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnStyle}>
          <TouchableOpacity onPress={this.pressDivHandle} style={styles.button1Style}>
            <Text style={styles.textStyle}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressMulHandle} style={styles.button1Style}>
            <Text style={styles.textStyle}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressAddHandle} style={styles.button1Style}>
            <Text style={styles.textStyle}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressMinHandle} style={styles.button1Style}>
            <Text style={styles.textStyle}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressEqualHandle} style={styles.button1Style}>
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
    console.log("App constructor")
    this.state = {
      inputData: '',
      inputNumber: '',
      displayNumber: '0',
      previType: '',
      type: START,     // 's': start,'n': number,'c': calculator,'e' : equal
      previCount: 0,
      count: 0,    // => tránh vòng lắp vô hạn khi sử dụng lệnh if
      operator: '',
      result: 0,
      dotCount: 0,
    }
  }
  static getDerivedStateFromProps() {

    console.log("App getDerivedStateFromProps")

  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("App shouldComponentUpdate")
    
    return true  
  }
  getSnapshotBeforeUpdate() {
    console.log("App getSnapshotBeforeUpdate")
  }

  componentDidUpdate() {
    console.log("App componentDidUpdate")

  }


  press0Handle = () => {

    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      { previType: this.state.type }
    )

    this.setState(
      { type: 'n' }
    )
    this.setState(
      { inputNumber: '0' }
    )
  }
  press1Handle = () => {

    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      { previType: this.state.type }
    )

    this.setState(
      { type: 'n' }
    )
    this.setState(
      { inputNumber: '1' }
    )
  }
  press2Handle = () => {

    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      { previType: this.state.type }
    )

    this.setState(
      { type: 'n' }
    )
    this.setState(
      { inputNumber: '2' }
    )
  }
  press3Handle = () => {

    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      { previType: this.state.type }
    )

    this.setState(
      { type: 'n' }
    )
    this.setState(
      { inputNumber: '3' }
    )
  }
  press4Handle = () => {

    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      { previType: this.state.type }
    )

    this.setState(
      { type: 'n' }
    )
    this.setState(
      { inputNumber: '4' }
    )
  }
  press5Handle = () => {

    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      { previType: this.state.type }
    )

    this.setState(
      { type: 'n' }
    )
    this.setState(
      { inputNumber: '5' }
    )
  }
  press6Handle = () => {

    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      { previType: this.state.type }
    )

    this.setState(
      { type: 'n' }
    )
    this.setState(
      { inputNumber: '6' }
    )
  }
  press7Handle = () => {

    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      { previType: this.state.type }
    )

    this.setState(
      { type: 'n' }
    )
    this.setState(
      { inputNumber: '7' }
    )
  }
  press8Handle = () => {

    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      { previType: this.state.type }
    )

    this.setState(
      { type: 'n' }
    )
    this.setState(
      { inputNumber: '8' }
    )
  }
  press9Handle = () => {

    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      { previType: this.state.type }
    )

    this.setState(
      { type: 'n' }
    )
    this.setState(
      { inputNumber: '9' }
    )
  }
  pressDotHandle = () => {
    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      { previType: this.state.type }
    )
    this.setState(
      { type: 'd' }
    )
    this.setState(
      { inputNumber: '.' }
    )
  }
  pressAddHandle = () => {
    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      ({ previType: this.state.type })
    )
    this.setState(
      () => ({ type: 'c' })
    )
    this.setState(
      { inputNumber: '' }
    )
    this.setState(
      { operator: '+' }
    )
    this.setState(
      { dotCount: 0 }
    )
  }
  pressMinHandle = () => {
    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      ({ previType: this.state.type })
    )
    this.setState(
      () => ({ type: 'c' })
    )
    this.setState(
      { inputNumber: '' }
    )
    this.setState(
      { operator: '-' }
    )
    this.setState(
      { dotCount: 0 }
    )
  }
  pressMulHandle = () => {
    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      ({ previType: this.state.type })
    )
    this.setState(
      () => ({ type: 'c' })
    )
    this.setState(
      { inputNumber: '' }
    )
    this.setState(
      { operator: '*' }
    )
    this.setState(
      { dotCount: 0 }
    )
  }
  pressDivHandle = () => {
    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      ({ previType: this.state.type })
    )
    this.setState(
      () => ({ type: 'c' })
    )
    this.setState(
      { inputNumber: '' }
    )
    this.setState(
      { operator: '/' }
    )
    this.setState(
      { dotCount: 0 }
    )
  }
  pressC_Handle = () => {

    this.setState(
      { inputNumber: '' }
    )
    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      { previType: this.state.type }
    )

    this.setState(
      { type: 's' }
    )
    this.setState(
      { dotCount: 0 }
    )
  }
  pressEqualHandle = () => {
    let input = this.state.inputData
    if (input.slice(-1) === '+') { input = input.slice(0, -1) }  //kiểm tra chuỗi nhập vào trước khi nhán phím =,nếu có phép tính ở cuối chuỗi thì loại bỏ
    console.log({ input })
    let result = eval(input)
    this.setState(
      (e) => ({ count: e.count + 1 })
    )
    this.setState(
      { type: 'e' }
    )
    this.setState(
      { previType: this.state.type }
    )

    this.setState(
      { result: result }
    )
    this.setState(
      { dotCount: 0 }
    )
  }
  componentDidMount() {
    console.log("App Didmount")
  }
  render() {
    console.log("App render")
    let { displayNumber } = this.state
    let { inputNumber } = this.state
    let { count } = this.state
    let { previCount } = this.state
    let { type } = this.state
    let { previType } = this.state
    let { operator } = this.state
    let { result } = this.state
    let { dotCount } = this.state
    if (count !== previCount & type === 'n' & (previType === 'n' || previType === 's' || previType === 'd')) {  // trường hợp ấn phím số khi phím trước là phím (số hoặc C hoặc .)
      this.setState({ previCount: count })
      this.setState(
        (e) => ({ displayNumber: e.displayNumber + inputNumber })
      )
      this.setState(
        (e) => ({ inputData: e.inputData + inputNumber })
      )
    }
    if (count !== previCount & type === 'n' & previType === 'c') {    // trường hợp ấn phím số khi phím trước là phím tính 
      this.setState({ previCount: count })
      this.setState(
        () => ({ displayNumber: inputNumber })
      )
      this.setState(
        (e) => ({ inputData: e.inputData + inputNumber })
      )
    }
    if (count !== previCount & type === 'n' & previType === 'e') {  // trường hợp ấn phím số khi phím trước là phím =
      this.setState({ previCount: count })
      this.setState(
        () => ({ displayNumber: inputNumber })
      )
      this.setState(
        () => ({ inputData: inputNumber })
      )

    }
    if (count !== previCount & type === 'd' & previType === 'n' & dotCount !== 1) {   // trường hợp ấn phím . lần đầu và khi phím trước là phím số 
      this.setState({ previCount: count })
      this.setState(
        (e) => ({ displayNumber: e.displayNumber + inputNumber })
      )
      this.setState(
        (e) => ({ inputData: e.inputData + inputNumber })
      )
      this.setState(
        { dotCount: 1 }
      )
    }
    if (count !== previCount & type === 'd' & (previType === 'e' || previType === 's') & dotCount !== 1) {        // trường hợp ấn phím . khi phím trước là phím (= hoặc C)
      this.setState({ previCount: count })
      this.setState(
        { displayNumber: '0.' }
      )
      this.setState(
        { inputData: '0.' }
      )
      this.setState(
        { dotCount: 1 }
      )
    }
    if (count !== previCount & type === 'd' & previType === 'c' & dotCount !== 1) {        // trường hợp ấn phím . khi phím trước là phím tính
      this.setState({ previCount: count })
      this.setState(
        { displayNumber: '0.' }
      )
      this.setState(
        (e) => ({ inputData: e.inputData + '0.' })
      )
      this.setState(
        { dotCount: 1 }
      )
    }
    if (count !== previCount & type === 'c' & previType === 'n') { // trường hợp ấn phím tính khi phía trước là phím số
      this.setState({ previCount: count })
      this.setState(
        (e) => ({ inputData: e.inputData + operator })
      )
    }
    if (count !== previCount & type === 'c' & previType === 'c') {  // trường hợp ấn phím tính khi phím trước là phím tính 
      this.setState({ previCount: count })
      let { inputData } = this.state
      inputData = inputData.slice(0, -1)
      inputData = inputData + operator
      this.setState(
        () => ({ inputData: inputData })
      )
    }
    if (count !== previCount & type === 'c' & (previType === 'e' || previType === 's')) {  // trường hợp ấn phím tính khi phím trước là phím =
      this.setState({ previCount: count })
      this.setState(
        (e) => ({ inputData: e.inputData + operator })
      )
    }
    if (count !== previCount & type === 'c' & previType === 'd') { //trường hợp ấn phím tính khi trước là phím . đầu tiên của 1 số
      this.setState({ previCount: count })
      this.setState(
        (e) => ({ inputData: e.inputData + operator })
      )
    }
    if (count !== previCount & type === 'e' & (previType === 'n' || previType === 'c' || previType === 'd')) {  // trường hợp ấn phím = khi phím trước là phím số 
      this.setState({ previCount: count })
      this.setState(
        { displayNumber: result.toString() }, () => { console.log(this.state.inputData) }
      )
      this.setState(
        { inputData: result.toString() }, () => { console.log(this.state.inputData) }
      )
    }
    if (count !== previCount & type === 's') {       // trường hợp ấn phím C khi phím trước là bất kì phím gì 
      this.setState({ previCount: count })
      this.setState(
        { inputData: '' }
      )
      this.setState(
        { displayNumber: '0' }
      )
      this.setState(
        { result: 0 }
      )
    }
    return (
      <View style={styles.container}>
        <Screen
          displayNumber={displayNumber}
          type={type}
          previType={previType}
        />
        <MyButton
          onChangePress0={this.press0Handle}
          onChangePress1={this.press1Handle}
          onChangePress2={this.press2Handle}
          onChangePress3={this.press3Handle}
          onChangePress4={this.press4Handle}
          onChangePress5={this.press5Handle}
          onChangePress6={this.press6Handle}
          onChangePress7={this.press7Handle}
          onChangePress8={this.press8Handle}
          onChangePress9={this.press9Handle}
          onChangePressDot={this.pressDotHandle}
          onChangePressAdd={this.pressAddHandle}
          onChangePressMin={this.pressMinHandle}
          onChangePressMul={this.pressMulHandle}
          onChangePressDiv={this.pressDivHandle}
          onChangePress_C={this.pressC_Handle}
          onChangePressEqual={this.pressEqualHandle}
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
