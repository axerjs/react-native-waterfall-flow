import React from 'react'
import { View, FlatList, Platform } from 'react-native'
import WaterfallItem from './WaterfallItem'
const invariant = require('invariant')

export default class WaterfallFlow extends React.PureComponent {

  constructor(props) {
    super(props)
    this._checkProps(props)
  }

  _listRef = null
  _width = 0
  _height = 0
  _headerHeight = 0
  _innerHeight = 0
  _dataSource = []

  componentDidUpdate() {
    this._checkProps(this.props)
  }

  _checkProps(props) {
    const { itemHeight } = props
    invariant(itemHeight, 'itemHeight is required')
    invariant(typeof itemHeight === 'function', 'itemHeight must be a function')
  }

  _renderHeader() {
    const { ListHeaderComponent } = this.props
    if (!ListHeaderComponent) {
      return null
    }
    const header = typeof ListHeaderComponent === 'function' ? ListHeaderComponent() : ListHeaderComponent
    return (
      <View
        onLayout={({ nativeEvent }) => {
          const { height } = nativeEvent.layout
          if (this._headerHeight != height) {
            this._headerHeight = height
            this.forceUpdate()
          }
        }}
      >
        {header}
      </View>
    )
  }

  _computePositions = () => {
    const {
      data = [],
      numColumns = 2,
      itemHeight,
    } = this.props

    const columnHeights = []
    const originItems = []
    data.forEach((item, index) => {
      let columnIndex = 0
      for (let idx = 1; idx < numColumns; idx++) {
        if ((columnHeights[idx] || 0) < (columnHeights[columnIndex] || 0)) {
          columnIndex = idx
          break
        }
      }
      const offsetTop = columnHeights[columnIndex] || 0
      const height = itemHeight({ item, index })
      columnHeights[columnIndex] = offsetTop + height
      const obj = {
        height,
        columnIndex,
        offsetTop,
        item,
        index,
      }
      originItems.push(obj)
    })
    const containerHeight = columnHeights.sort((a, b) => b - a)[0] || 0

    const dataSource = []
    let rowIndex = 0
    let rowData = []
    let rowOffsetTop = 0
    originItems.forEach((data, dataIndex) => {
      if (rowData.length == numColumns) {
        rowOffsetTop += dataSource[rowIndex].height
        rowData = []
        rowIndex++
      }
      rowData.push(data)
      const bottomItem = rowData.sort((a, b) => (b.height + b.offsetTop) - (a.height + a.offsetTop))[0]
      const height = bottomItem.offsetTop - rowOffsetTop + bottomItem.height
      dataSource[rowIndex] = {
        rowIndex,
        rowData,
        height,
        rowOffsetTop
      }
      if (dataIndex == data.length - 1) {
        dataSource[rowIndex].height = containerHeight - rowOffsetTop
      }
    })
    this._dataSource = dataSource
  }

  scrollToEnd = ({ animated = true } = {}) => {
    this.scrollToOffset({
      animated,
      offset: this._innerHeight,
    })
  }

  scrollToIndex = ({
    animated = true,
    index = 0,
    viewOffset = 0,
    viewPosition = 0
  }) => {
    const { numColumns = 2 } = this.props
    const rowIndex = Math.floor(index / numColumns)
    const item = this._dataSource[rowIndex].rowData[index % numColumns]
    let offset = item.offsetTop + this._headerHeight
    if (viewOffset) {
      offset += viewOffset
    } else if (viewPosition) {
      offset += viewPosition * item.height
    }
    this.scrollToOffset({
      animated,
      offset,
    })
  }

  scrollToOffset = ({ animated, offset }) => this._listRef.scrollToOffset({ animated, offset })

  recordInteraction = () => this._listRef.recordInteraction()

  flashScrollIndicators = () => this._listRef.flashScrollIndicators()

  getScrollResponder = () => this._listRef.getScrollResponder()

  getNativeScrollRef = () => this._listRef.getNativeScrollRef()

  getScrollableNode = () => this._listRef.getScrollableNode()

  setNativeProps = () => this._listRef.setNativeProps()

  render() {
    const {
      renderItem,
      numColumns = 2,
      style,
      onLayout,
      onContentSizeChange,
    } = this.props

    const columnWidth = this._width / numColumns
    this._computePositions()

    return (
      <FlatList
        {...this.props}
        ref={ref => this._listRef = ref}
        style={[{ flex: 1 }, style]}
        removeClippedSubviews={Platform.OS === 'android'}
        onEndReachedThreshold={0.2}
        numColumns={1}
        data={this._dataSource}
        keyExtractor={(item, index) => `row_${index}`}
        ListHeaderComponent={this._renderHeader()}
        getItemLayout={(data, index) => ({ 
          length: this._dataSource[index].height, 
          offset: this._dataSource[index].rowOffsetTop, 
          index 
        })}
        onLayout={(e) => {
          const { nativeEvent } = e
          const { height } = nativeEvent.layout
          if (this._height != height) {
            this._height = height
            this.forceUpdate()
          }
          onLayout && onLayout(e)
        }}
        onContentSizeChange={(w, h) => {
          this._innerHeight = h
          if (this._width != w) {
            this._width = w
            this.forceUpdate()
          }
          onContentSizeChange && onContentSizeChange(w, h)
        }}
        renderItem={({ item, index }) => {
          return (
            <WaterfallItem
              rowItem={item}
              renderItem={renderItem}
              columnWidth={columnWidth}
            />
          )
        }}
      />
    )
  }
}