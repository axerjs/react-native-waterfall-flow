<h1 align="center">
  <a href="https://github.com/axerjs/react-native-waterfall-flow">
    react-native-waterfall-flow
  </a>
</h1>

<p align="center">
  High performance waterfall flow component for React Native
</p>

<p align="center">
  <a href="https://github.com/axerjs/react-native-waterfall-flow/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/github/license/axerjs/react-native-waterfall-flow" alt="react-native-waterfall-flow is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/react-native-waterfall-flow">
    <img src="https://img.shields.io/badge/npm%20package-v1.0.0-brightgreen" alt="Current npm package version." />
  </a>
  <a target="_blank" href="https://standardjs.com/">
    <img src="https://img.shields.io/badge/code%20style-standard-green" alt="code style" />
  </a>
  <a target="_blank" href="#">
    <img src="https://img.shields.io/badge/chat-email-blue" alt="chat by email" />
  </a>
</p>

## Contents

- [Show Case](#show-case)
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Properties](#properties)
- [Methods](#methods)
- [Examples](#examples)
- [License](#license)


## Show Case
> view example demo [here](https://github.com/axerjs/react-native-waterfall-flow/tree/main/examples)

screenshot

![](https://camo.githubusercontent.com/ddf4c8b6ec2dcd0c02e52b08db3af3686fa2118106940ef8688b8773213ef5bf/68747470733a2f2f696d616765732e7765736572762e6e6c2f3f75726c3d2f2f7777772e68656c6c6f696d672e636f6d2f696d616765732f323032322f30382f31302f5a4e453350632e706e6726773d323530)

screenshot gif

![](https://camo.githubusercontent.com/e9d58db06d26b7098bcb8285c586c541a97c31ad50e33640e3ee1d08603d37d4/68747470733a2f2f696d616765732e7765736572762e6e6c2f3f75726c3d68747470733a2f2f7777772e68656c6c6f696d672e636f6d2f696d616765732f323032322f30382f31302f5a4e4564614d2e67696626773d323530266f75747075743d676966266e3d2d31)


## Installation

> v1.0.0

```bash
npm install react-native-waterfall-flow --save
```

## Basic Usage
> `react-native-waterfall-flow` is implemented based on `FlatList` and supports all properties and methods of `FlatList`. Make sure you are familiar with how to use [FlatList](https://reactnative.cn/docs/flatlist)


how to use WaterfallFlow, like this:
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

## Properties

all `FlatList`‘s properties are supported, just lists new properties here

| Prop           |     Default     |   Type   | Description                                                                                                 |
| :------------- | :-------------: | :------: | :---------------------------------------------------------------------------------------------------------- |
| itemHeight | - |  `func`  |   Used to get the height for a given item at the specified index, you must set this property

We believe that you can accurately calculate the height of each item and set it to `itemHeight`, so that we can quickly and accurately assign the item to the corresponding position. If the height of the item is handed over to the component to realize the acquisition, it will greatly affect the performance and experience. This is not a good choice.
```jsx
itemHeight={({ item, index }) => {
  return ITEM_HEIGHT  // Use your smart brain to calculate the height of the current item
}}
```   

## Methods
all `FlatList`‘s methods are supported, not listed here

## Examples
the example demo is an expo demo app, run it like this:
```bash
cd examples
npm i
npm start
```

## License

`react-native-waterfall-flow` is MIT licensed, as found in the [LICENSE][l] file.

[l]: https://github.com/axerjs/react-native-waterfall-flow/blob/HEAD/LICENSE
