<h1 align="center">
  <a href="https://github.com/axerjs/react-native-waterfall-flow">
    react-native-waterfall-flow
  </a>
</h1>

<p align="center">
  一个基于FlatList实现的高性能瀑布流组件
</p>

<p align="center">
  <a href="https://github.com/axerjs/react-native-waterfall-flow/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/github/license/axerjs/react-native-waterfall-flow" alt="react-native-waterfall-flow is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/react-native-waterfall-flow">
    <img src="https://img.shields.io/badge/npm%20package-v0.1.4-brightgreen" alt="Current npm package version." />
  </a>
  <a target="_blank" href="https://standardjs.com/">
    <img src="https://img.shields.io/badge/code%20style-standard-green" alt="code style" />
  </a>
  <a target="_blank" href="#">
    <img src="https://img.shields.io/badge/chat-email-blue" alt="chat by email" />
  </a>
</p>

<p align="center">
  查看
  <a href="https://github.com/axerjs/react-native-waterfall-flow/blob/main/README-en.md">
    English readme
  </a>
  英文文档
</p>

## 目录

- [展示案例](#展示案例)
- [安装](#安装)
- [基本使用](#基本使用)
- [属性](#属性)
- [方法](#方法)
- [示例](#示例)
- [License](#license)


## 展示案例
> 下面展示的是一个包括下拉刷新，上拉加载更多的高性能瀑布流列表

截屏
![](https://images.weserv.nl/?url=//www.helloimg.com/images/2022/08/10/ZNE3Pc.png&w=250)

截图gif

![](https://images.weserv.nl/?url=https://www.helloimg.com/images/2022/08/10/ZNEdaM.gif&w=250&output=gif&n=-1)


## 安装

> v0.1.4

```bash
npm install react-native-waterfall-flow --save
```

## 基本使用
> `react-native-waterfall-flow`是基于`FlatList`实现的, 支持`FlatList`的所有属性和方法。请确保您已熟悉如何使用 [FlatList](https://reactnative.cn/docs/flatlist)

```jsx
import WaterfallFlow from 'react-native-waterfall-flow'
```

```jsx
<WaterfallFlow
  data={data}
  numColumns={2}
  itemHeight={({ item, index }) => {
    return ITEM_HEIGHT
  }}
  renderItem={({ item, index, columnIndex }) => {
    return (
      <View>
        <Text>title: {item.title}</Text>
        <Text>index: {index}</Text>
        <Text>columnIndex: {columnIndex}</Text>
      <View/>
    )
  }}
/>
```

## 属性

几乎所有FlatList的属性都是支持的，这里只列出新增的属性

| Prop           |     Default     |   Type   | Description                                                                                                 |
| :------------- | :-------------: | :------: | :---------------------------------------------------------------------------------------------------------- |
| itemHeight | - |  `func`  |   用于获取每个item的真实高度，你必须设置这个属性

我们相信你能够准确的计算出每个item的高度并将其设置到`itemHeight`中，以便我们快速准确的分配item到对应的位置。如果item的高度交给组件内部去实现获取，会非常影响性能和体验，这不是一个好的选择
```jsx
itemHeight={({ item, index }) => {
  return ITEM_HEIGHT  // 用你的聪明的大脑计算出当前项的高度
}}
```   

## 方法
所有和方法和FlatList保持一致，这里不一一列出，可查看[FlatList文档](https://reactnative.cn/docs/flatlist)

## 示例
[示例代码](https://github.com/axerjs/react-native-waterfall-flow/tree/main/examples) 是一个expo app, 像这样启动项目
```bash
cd examples
npm i
npm start
```

## License

`react-native-waterfall-flow` is MIT licensed, as found in the [LICENSE][l] file.

[l]: https://github.com/axerjs/react-native-waterfall-flow/blob/HEAD/LICENSE