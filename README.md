<h1 align="center">
  <a href="https://github.com/axerjs/react-native-waterfall-flow">
    react-native-waterfall-flow
  </a>
</h1>

<h4 align="center">
  React Native 高性能瀑布流组件
</h4>

<p align="center">
  <a href="https://www.npmjs.org/package/react-native-waterfall-flow">
    <img src="https://img.shields.io/badge/npm%20package-v1.1.2-brightgreen" alt="Current npm package version." />
  </a>
  <a href="https://github.com/axerjs/react-native-waterfall-flow/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/badge/LICENSE-MIT-blue" alt="react-native-waterfall-flow is released under the MIT license." />
  </a>
  <a target="_blank" href="https://standardjs.com/">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen" alt="code style" />
  </a>
  <!-- <a target="_blank" href="#">
    <img src="https://img.shields.io/badge/chat-email-blue" alt="chat by email" />
  </a> -->
</p>

## 特性

- 性能方面表现突出，渲染速度快，滚动体验良好
- 无需手动设置item高度，一切计算工作由组件内部完成
- 属性和方法与[FlatList](https://reactnative.cn/docs/flatlist)完全一致，易于上手

## Changelogs

* [1.1.2]

  - 支持随时变化高度的item，无副作用

* [1.1.1]

  - 移除手动设置item高度，一切计算工作由组件内部完成
  - 进一步提升体验，性能表现极佳

<!-- ## 目录

- [展示案例](#展示案例)
- [安装](#安装)
- [基本使用](#基本使用)
- [属性](#属性)
- [方法](#方法)
- [示例](#示例)
- [License](#license) -->


## 展示案例
> 下面展示的是一个包括下拉刷新，上拉加载更多的高性能瀑布流列表

截屏

![](https://camo.githubusercontent.com/ddf4c8b6ec2dcd0c02e52b08db3af3686fa2118106940ef8688b8773213ef5bf/68747470733a2f2f696d616765732e7765736572762e6e6c2f3f75726c3d2f2f7777772e68656c6c6f696d672e636f6d2f696d616765732f323032322f30382f31302f5a4e453350632e706e6726773d323530)

截图gif

![](https://camo.githubusercontent.com/e9d58db06d26b7098bcb8285c586c541a97c31ad50e33640e3ee1d08603d37d4/68747470733a2f2f696d616765732e7765736572762e6e6c2f3f75726c3d68747470733a2f2f7777772e68656c6c6f696d672e636f6d2f696d616765732f323032322f30382f31302f5a4e4564614d2e67696626773d323530266f75747075743d676966266e3d2d31)


## 安装

> v1.1.2

```bash
npm install react-native-waterfall-flow --save
```

## 基本使用

```jsx
import WaterfallFlow from 'react-native-waterfall-flow'
```

```jsx
<WaterfallFlow
  data={data}
  numColumns={2}
  renderItem={({ item, index, columnIndex }) => {
    return (
      <View>
        <Text>index: {index}</Text>
        <Text>columnIndex: {columnIndex}</Text>
      <View/>
    )
  }}
  ...
/>
```

## 属性

> 几乎所有FlatList的属性都是支持的，这里只列出一些常用的属性，其余属性可查看[FlatList文档](https://reactnative.cn/docs/flatlist)


### **`renderItem`** 

|   Type   |  Required |                Description                |
| :------ | :--------| :--------------------------------------  |
|  `function`  |    true    |  用于将当前`item`渲染到列表中 |

- `item` (Object): 当前项的数据
- `index` (number): 当前项的索引
- `columnIndex` (number): 当前项在列表中的第几列

示例用法：

```jsx
<WaterfallFlow
  renderItem={({ item, index, columnIndex }) => {
    return (
      <View>
        <Text>index: {index}</Text>
        <Text>columnIndex: {columnIndex}</Text>
      <View/>
    )
  }}
  ...
/>
```

**如何设置间距** 

`renderItem`方法暴露出了`columnIndex`，该属性表示当前`item`在列表中第几列，这样你就能够自由的控制每个item的上下左右间距了。item的宽度等于 `瀑布流容器的宽度` / `numColumns`

示例用法：
```jsx
<WaterfallFlow
  renderItem = {({ item, index, columnIndex }) => {
    return (
      <View
        style={{
          paddingLeft: columnIndex === 0 ? 12 : 6,
          paddingRight: columnIndex === 0 ? 6 : 12,
          paddingTop: 3,
          paddingBottom: 3
        }}
      >
      <View/>
    )
  }}
  ...
/>
```

### **`data`** 

|   Type   |  Required |                Description                |
| :------ | :--------| :--------------------------------------  |
|  `array`  |    true    |  瀑布流数据源，可以是任意内容的数组 |

### **`numColumns`** 

|   Type   |  Required |                Description                |
| :------ | :--------| :--------------------------------------  |
|  `number`  |    false    |  瀑布流的列数，默认为2，即两列 |

### **`ListHeaderComponent`** 

|   Type   |  Required |                Description                |
| :------ | :--------| :--------------------------------------  |
|  `component`, `function`  |    false    |  头部组件。可以是 React Component 或 render 函数。 |

示例用法：
```jsx
<WaterfallFlow
  ListHeaderComponent = {
    <View>
      <Text>this is header<Text>
    <View/>
  }
  ...
/>
```

### **`ListFooterComponent`** 

|   Type   |  Required |                Description                |
| :------ | :--------| :--------------------------------------  |
|  `component`, `function`  |    false    |  尾部组件。可以是 React Component 或 render 函数。 |

示例用法：
```jsx
<WaterfallFlow
  ListFooterComponent = {
    <View>
      <Text>this is footer<Text>
    <View/>
  }
  ...
/>
```

### **`ListEmptyComponent`** 

|   Type   |  Required |                Description                |
| :------ | :--------| :--------------------------------------  |
|  `component`, `function`  |    false    |  列表为空时渲染该组件。可以是 React Component 或 render 函数 |

示例用法：
```jsx
<WaterfallFlow
  ListEmptyComponent = {
    <View>
      <Text>no data here<Text>
    <View/>
  }
  ...
/>
```

### **`onEndReached`** 


```jsx
(info: {distanceFromEnd: number}) => void
```

|   Type   |  Required |                Description                |
| :------ | :--------| :--------------------------------------  |
|  `function`  |    false    |  当列表滚动到底部是调用 |



### **`onRefresh`** 


```jsx
() => void
```

|   Type   |  Required |                Description                |
| :------ | :--------| :--------------------------------------  |
|  `function`  |    false    |  如果设置了此选项，则会在列表头部添加一个标准的[`RefreshControl`](https://www.react-native.cn/docs/refreshcontrol) 控件，以便实现“下拉刷新”的功能。同时你需要正确设置`refreshing`属性。 |


### **`refreshing`** 

|   Type   |  Required |                Description                |
| :------ | :--------| :--------------------------------------  |
|  `boolean`  |    false    |  在等待加载新数据时将此属性设为 true，列表就会显示出一个正在加载的符号。|

### **`style`** 

|   Type   |  Required |                Description                |
| :------ | :--------| :--------------------------------------  |
|  [`view styles`](https://www.react-native.cn/docs/view-style-props)  |    false    |  用于设置瀑布流外层样式，默认会有`{ flex: 1 }`的样式，即高度充满父容器 |


### **`contentContainerStyle`** 

|   Type   |  Required |                Description                |
| :------ | :--------| :--------------------------------------  |
| [`view styles`](https://www.react-native.cn/docs/view-style-props)   |    false    |  瀑布流内容容器样式 |

建议将其用于设置容器背景色。 示例：

```jsx
<WaterfallFlow
  contentContainerStyle={{ backgroundColor: '#f9f9f9' }}
  ...
/>
```


## 方法

> 所有和方法和FlatList保持一致，这里只列出几个常用的，其余方法可查看[FlatList文档](https://reactnative.cn/docs/flatlist)

### **`scrollToEnd()`** 

```jsx
scrollToEnd([params])
```
滚动到瀑布流列表的底部

##### 参数：
|   Prop   |   Type   |  Required |
| :------| :------ | :--------|
|   params   |  `object`  |    false    |

params的参数如下:

- 'animated' (boolean) - 是否有滚动动画. 默认 `true`.

**方法调用示例**

绑定ref:
```jsx
<WaterfallFlow
  ref={ref => this.listRef = ref}
  ...
/>
```

调用方法:
```jsx
this.listRef.scrollToEnd()
```


### **`scrollToIndex()`** 

```jsx
scrollToIndex([params])
```

将位于指定位置的元素滚动到可视区的指定位置，当viewPosition 为 0 时将它滚动到屏幕顶部，为 1 时将它滚动到屏幕底部，为 0.5 时将它滚动到屏幕中央。

##### 参数：
|   Prop   |   Type   |  Required |
| :------| :------ | :--------|
|   params   |  `object`  |    true    |

params的参数如下:

- 'animated' (boolean) - 是否有滚动动画. 默认 `true`
- 'index' (number) - 滚动到指定元素的下标。 必须设置该属性
- 'viewOffset' (number) - 偏移最终目标位置的固定像素数
- 'viewPosition' (number) - 为 0 时将它滚动到屏幕顶部，为 1 时将它滚动到屏幕底部，为 0.5 时将它滚动到屏幕中央


### **`scrollToOffset()`** 

```jsx
scrollToOffset([params])
```

滚动列表到指定的偏移（以像素为单位），等同于ScrollView的scrollTo方法。

##### 参数：
|   Prop   |   Type   |  Required |
| :------| :------ | :--------|
|   params   |  `object`  |    true    |

params的参数如下:

- 'animated' (boolean) - 是否有滚动动画. 默认 `true`
- 'offset' (number) - 要滚动到的偏移量。必须设置该属性



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