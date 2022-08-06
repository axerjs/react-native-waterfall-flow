<h1 align="center">
  <a href="https://www.npmjs.com/package/react-native-waterfall-flow">
    Waterfall Flow
  </a>
</h1>

<p align="center">
  High performance waterfall flow component for React Native
</p>
<!-- 
<p align="center">
  <a href="https://github.com/facebook/react-native/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="React Native is released under the MIT license." />
  </a>
  <a href="https://circleci.com/gh/facebook/react-native">
    <img src="https://circleci.com/gh/facebook/react-native.svg?style=shield" alt="Current CircleCI build status." />
  </a>
  <a href="https://www.npmjs.org/package/react-native">
    <img src="https://img.shields.io/npm/v/react-native?color=brightgreen&label=npm%20package" alt="Current npm package version." />
  </a>
  <a href="https://reactnative.dev/docs/contributing">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=reactnative">
    <img src="https://img.shields.io/twitter/follow/reactnative.svg?label=Follow%20@reactnative" alt="Follow @reactnative" />
  </a>
</p> -->

<!-- <h3 align="center">
  <a href="https://reactnative.dev/docs/getting-started">Getting Started</a>
  <span> · </span>
  <a href="https://reactnative.dev/docs/tutorial">Learn the Basics</a>
  <span> · </span>
  <a href="https://reactnative.dev/showcase">Showcase</a>
  <span> · </span>
  <a href="https://reactnative.dev/docs/contributing">Contribute</a>
  <span> · </span>
  <a href="https://reactnative.dev/help">Community</a>
  <span> · </span>
  <a href="https://github.com/facebook/react-native/blob/HEAD/.github/SUPPORT.md">Support</a>
</h3> -->

<!-- React Native brings [**React**'s][r] declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native platform.

- **Declarative.** React makes it painless to create interactive UIs. Declarative views make your code more predictable and easier to debug.
- **Component-Based.** Build encapsulated components that manage their state, then compose them to make complex UIs.
- **Developer Velocity.** See local changes in seconds. Changes to JavaScript code can be live reloaded without rebuilding the native app.
- **Portability.** Reuse code across iOS, Android, and [other platforms][p].

React Native is developed and supported by many companies and individual core contributors. Find out more in our [ecosystem overview][e].

[r]: https://reactjs.org/
[p]: https://reactnative.dev/docs/out-of-tree-platforms
[e]: https://github.com/facebook/react-native/blob/HEAD/ECOSYSTEM.md -->

## Contents

- [Contents](#contents)
- [Show Case](#show-case)
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Properties](#properties)
- [Methods](#methods)
- [Examples](#examples)
- [📄 License](#-license)


## Show Case

<img src="file:///Users/yubowei/Downloads/soogif.gif" width="335" height="725">

## Installation

> v0.1.0

```bash
npm install react-native-waterfall-flow --save
```

## Basic Usage
> `react-native-waterfall-flow` extends from `FlatList`, so config it just like `FlatList`

- import `react-native-waterfall-flow` first
```jsx
import WaterfallFlow from 'react-native-waterfall-flow'
```

- render WaterfallFlow, like this:
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

## 📄 License

`react-native-waterfall-flow` is MIT licensed, as found in the [LICENSE][l] file.

[l]: https://github.com/axerjs/react-native-waterfall-flow/blob/HEAD/LICENSE