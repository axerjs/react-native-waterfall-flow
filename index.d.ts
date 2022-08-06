import * as React from 'react'
import { FlatListProps, FlatList } from 'react-native'

interface WaterfallFlowProps<ItemT> extends Omit<FlatListProps<ItemT>, 'renderItem'>, FlatList<ItemT> {

  /**
   * Used to get the height for a given item at the specified index.
   * You must set height for each item, otherwise the WaterfallFlow will not render properly.
   * for example:
   * ```
   * itemHeight={({ item, index }) => {
   *   return item.height
   * }}
   * ```
   */
  itemHeight: (info: { item: any; index: number }) => number;

  /**
   * Takes an item from data and renders it into the list. Typical usage:
   * ```
   * renderItem=({ item, index, columnIndex }) => (
   *   <TouchableOpacity onPress={() => this._onPress(item)}>
   *     <Text>title: {item.title}</Text>
   *     <Text>index: {index}</Text>
   *     <Text>columnIndex: {columnIndex}</Text>
   *   <TouchableOpacity/>
   * )
   * ```
   * Provides additional metadata like `index` and `columnIndex` if you need it.
   */
  renderItem: (info: { item: any; index: number; columnIndex: number }) => React.ReactElement | null;
}

export default class WaterfallFlow<ItemT = any> extends FlatList<WaterfallFlowProps<ItemT>> {
  /**
   * Supports all methods and properties of FlatList.
   * See https://reactnative.cn/docs/flatlist
   */
}
