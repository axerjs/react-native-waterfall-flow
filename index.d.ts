import * as React from 'react'
import { FlatListProps, FlatList, View, ScrollViewComponent } from 'react-native'

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

export default class WaterfallFlow<ItemT = any> extends React.Component<WaterfallFlowProps<ItemT>> {
  /**
   * Scrolls to the end of the content. May be janky without `getItemLayout` prop.
   */
  scrollToEnd: (params?: { animated?: boolean | null | undefined }) => void;

  /**
   * Scrolls to the item at the specified index such that it is positioned in the viewable area
   * such that viewPosition 0 places it at the top, 1 at the bottom, and 0.5 centered in the middle.
   * Cannot scroll to locations outside the render window without specifying the getItemLayout prop.
   */
  scrollToIndex: (params: {
    animated?: boolean | null | undefined;
    index: number;
    viewOffset?: number | undefined;
    viewPosition?: number | undefined;
  }) => void;

  /**
   * Requires linear scan through data - use `scrollToIndex` instead if possible.
   * May be janky without `getItemLayout` prop.
   */
  scrollToItem: (params: { animated?: boolean | null | undefined; item: ItemT; viewPosition?: number | undefined }) => void;

  /**
   * Scroll to a specific content pixel offset, like a normal `ScrollView`.
   */
  scrollToOffset: (params: { animated?: boolean | null | undefined; offset: number }) => void;

  /**
   * Tells the list an interaction has occurred, which should trigger viewability calculations,
   * e.g. if waitForInteractions is true and the user has not scrolled. This is typically called
   * by taps on items or by navigation actions.
   */
  recordInteraction: () => void;

  /**
   * Displays the scroll indicators momentarily.
   */
  flashScrollIndicators: () => void;

  /**
   * Provides a handle to the underlying scroll responder.
   */
  getScrollResponder: () => JSX.Element | null | undefined;

  /**
   * Provides a reference to the underlying host component
   */
  getNativeScrollRef: () => React.ElementRef<typeof View> | React.ElementRef<typeof ScrollViewComponent> | null | undefined;

  getScrollableNode: () => any;

  // TODO: use `unknown` instead of `any` for Typescript >= 3.0
  setNativeProps: (props: { [key: string]: any }) => void;
}
