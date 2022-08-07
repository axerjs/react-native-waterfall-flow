<h1 align="center">
  <a href="https://github.com/axerjs/react-native-waterfall-flow#readme">
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
    <img src="https://img.shields.io/badge/npm%20package-v0.1.1-brightgreen" alt="Current npm package version." />
  </a>
  <a target="_blank" href="https://standardjs.com/">
    <img src="https://img.shields.io/badge/code%20style-standard-green" alt="code style" />
  </a>
  <a target="_blank" href="#">
    <img src="https://img.shields.io/badge/chat-email-blue" alt="chat by email" />
  </a>
</p>

## Contents

- [Contents](#contents)
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
<p>
  <img src="https://www.helloimg.com/images/2022/08/07/Z08BFK.jpg" width="250">
<p>

screenshot gif
<p>
<img src="https://www.helloimg.com/images/2022/08/07/Z066Kz.gif" style="border: 1px solid #f0f0f0" width="250">
</p>

## Installation

> v0.1.1

```bash
npm install react-native-waterfall-flow --save
```

## Basic Usage
> `react-native-waterfall-flow` extends from `FlatList`, so use it just like `FlatList`

import `react-native-waterfall-flow` first
```jsx
import WaterfallFlow from 'react-native-waterfall-flow'
```

render WaterfallFlow, like this:
```jsx
<WaterfallFlow
  data={data}
  numColumns={2}
  itemHeight={({ item, index }) => {
    return item.height
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
| itemHeight | - |  `func`  |   Used to get the height for a given item at the specified index. It determines whether the waterfallflow can render properly, so it's a required property

how to set itemHeight, like this:
```jsx
itemHeight={({ item, index }) => {
  return item.height  // set the height of each item
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