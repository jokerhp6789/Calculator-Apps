## ISSUES
### Quá nhiều logic trong một file
Thay vì gộp tất cả logic, component trong một file App.js, source code nhìn sẽ đơn giản dễ hiều hơn khi các logic, component riêng lẻ được tách ra thành từng file riêng. 
### Cần khai báo const khi có giá trị nào đó bất biến 
Ví dụ như giá trị của biến this.state.type: 'n', 'c', 's', .... thì cần khai báo giá trị này ở một nơi, sau đó gọi ra để sử dụng 
### Nhiều chỗ cú pháp còn dài 
Ví du: thay vì 
    let { displayNumber } = this.state
    let { inputNumber } = this.state
    let { count } = this.state
    let { previCount } = this.state
    let { type } = this.state
    let { previType } = this.state
    let { operator } = this.state
    let { result } = this.state
    let { dotCount } = this.state
    =======> let {inputNumber, displayNumber, count, previCount, type, operator, result, dotCount} = this.state
### Không nên make quá nhiều props cho component MyButton
Thay vì thế chỉ cần một props: onChangePress(valuePress) => sau đó check valuePress trong component MyButton
### Đặt tên biến rõ nghĩa 
Tránh đặt tên biến là e, i, ..... => Rất khó để sau này đọc hiểu lại code

