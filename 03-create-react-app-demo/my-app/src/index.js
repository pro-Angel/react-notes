
// 1. 导入 react 
import React from 'react';
import ReactDOM from 'react-dom';

// 引入 css
import './css/index.css'

/* 抽离组件到 js 文件中 */
// 引入创建的 js 组件
import Hello from './Hello'

// 2. 创建 react 元素
// const title = React.createElement('h1', null, 'Hello React 脚手架')

// 迁入 js 表达式， 语法：{JavaScript 表达式}
const name = 'Jack'

/* 条件渲染 */
const isLoading = true  // false
/* const loadData = () => {
  if (isLoading) {
    return <div>loading...</div>
  }
  return <div>数据加载完成，此处显示加载后的数据！</div>
} */

/* 列表渲染 */
// 歌曲列表
const songs = [
  {id: 1, name: '痴心绝对'},
  {id: 2, name: '像我这样的人'},
  {id: 3, name: '南山南'},
]
const list = (
  <ul>
    {songs.map(item => <li key={item.id}>{item.name}</li>) }
  </ul>
)

/* JSX 样式处理 */
const styleList = (
  <h1 className='title' style={{color:'red', backgroundColor: 'skyblue'}}>
    JSX 的样式处理
  </h1>
)

const loadData = () => {
  return isLoading ? (<div>loading...</div>) : (<div>数据加载完成，此处显示加载后的数据！</div>)
}

/* 使用函数创建组件 */
// function Hel() {
//   return (
//     <div>这是我的第一个函数组件</div>
//   )
// }
// 箭头函数实现
const Hel = () => (<div>这是我的第一个函数组件</div>)

/* 使用类创建组件 */
class HelloReact extends React.Component {
  render () {
    return (
      <div>这是我的第一个类组件</div>
    )
  }
}

/** 
 *  React 事件处理
 */ 
class App extends React.Component {
  handleClick() {
    // console.log('单击事件触发了！')
    alert('类组件单击事件触发了！')
  }
  render() {
    return (
      <button onClick={this.handleClick}>类组件</button>
    )
  }
}

// 通过函数组件绑定事件
function AppBtn() {
  function handleClick() {
    alert('函数组件单击事件触发了！')
  }
  return (
    <button onClick={handleClick}>函数组件</button>
  )
}

/** 
 * React 事件对象
 */ 
class AppObj extends React.Component {
  handleClick(e) {
    // 阻止浏览器的默认行为（页面不会跳转）
    e.preventDefault()
    alert('React事件对象！')
  }
  render() {
    return (
      <a href='https://www.baidu.com' onClick={this.handleClick}>事件对象</a>
    )
  }
}


/** 
 * state 的基本使用 
 */
class AppState extends React.Component {
  // constructor() {
  //   super()
  //   // 初始化state
  //   this.state = {
  //     count: 0
  //   }
  // }
  // 简化语法 初始化state （推荐）
  state = {
    count: 0
  }

  // 通过 bind 改变 this 指向
  constructor() {
    super()
    this.onIncrement = this.onIncrement.bind(this)
  }

  // 事件处理程序
  onIncrement() {
    console.log('事件处理程序中的this', this)
    this.setState({
      count: this.state.count + 1
    })
  }
  onIncrementClass = () => {
    console.log('事件处理程序中的this', this)
    this.setState({
      count: this.state.count + 1
    })
  }
  // 为了解决 onIncrement() 方法中 this 指向问题，可以采用以下方法：
  // 1. 箭头函数
  // 2. Function.prototype.bind()  在 constructor 中通过 bind 绑定
  // 3. class 的实例方法
  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
          // 错误写法
          // this.state.count += 1
        }}>加一</button>
        <button onClick={() => this.onIncrement()}>箭头函数+1</button>
        <button onClick={this.onIncrement}>bind方法+1</button>
        <button onClick={this.onIncrementClass}>class实例+1</button>
      </div>
    )
  }
}

/** 
 * 受控组件：其值受到 React 控制的表单元素
 * 操作文本框的值
 */
class AppInput extends React.Component {
  state= {
    txt: '5',
    content: '6'
  }
  handleChange = e => {
    this.setState({
      txt: e.target.value,
    })
  }

  // 处理富文本框变化
  handleContent = e => {
    this.setState({
      content: e.target.value
    })
  }
  render() {
    return (
      <div>
        {/* 文本框 */}
        受控组件：<input type="text" value={ this.state.txt } onChange={ this.handleChange } />
        <br/>
        {/* 富文本框 */}
        <textarea value={ this.state.content } onChange={ this.handleContent } ></textarea>
      </div>
    )
  }
}


// 使用 JSX 创建 react 元素
const title = (
  <>
    <h2 className='title'>Hello JSX, {name}
      <br />
      <span>这是 span</span>
      <span />
    </h2>
    <div>条件渲染：{loadData()}</div>
    <div>列表渲染（歌曲列表）：{list}</div>
    {styleList}
    <Hel />
    <HelloReact />
    <Hello />
    <App></App>
    <AppBtn></AppBtn>
    <AppObj></AppObj>
    <AppState />
    <AppInput />
  </>
)

// 3. 渲染 react 元素
ReactDOM.render(title, document.getElementById('root'))

// 使用函数渲染组件
// ReactDOM.render(<Hello/>, document.getElementById('root'))
