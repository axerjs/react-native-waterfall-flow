import { PureComponent, Component } from 'react'
import { View, Dimensions, Image, Animated, ImageProps, ActivityIndicator, Text, Platform, TouchableOpacity, Alert } from 'react-native'
import WaterfallFlow from 'react-native-waterfall-flow'
import imgList from './imgList'

const window = Dimensions.get('window')

export default class TestWaterfallFlowScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      refreshing: false,
      noMore: false,
      inited: false
    }
    this.page = 1
    this.pageSize = 10
    this.loading = false
    this.listRef = null
  }

  componentDidMount() {

    this.loadData(1)

    setTimeout(() => { // test WaterfallFlow's methods
      // this.listRef.scrollToIndex({ index: 6 })
      // this.listRef.scrollToEnd()
      // this.listRef.scrollToOffset({ offset: 200 })
    }, 3000)
  }

  loadData = (page = 1, refreshing) => {
    if (this.loading) {
      return
    }
    this.loading = true
    if (refreshing) {
      this.setState({
        refreshing: true
      })
    } 
    setTimeout(() => { // mock request data
      const newData = imgList.slice((page - 1) * this.pageSize, page * this.pageSize).map(img => {
        const { width, height } = img
        const cardWidth = Math.floor(window.width / 2 - 8)
        return {
          ...img, 
          width: cardWidth,
          height: Math.floor(height / width * cardWidth) + 8
        }
      })
      const noMore = newData.length < this.pageSize
      this.loading = false
      this.page = refreshing ? 1 : page
      this.setState({
        data: refreshing ? newData : this.state.data.concat(newData),
        refreshing: false,
        noMore,
        inited: true
      })
    }, refreshing ? 1000 : 500)
  }

  onEndReached = () => {
    if (!this.state.noMore) {
      this.loadData(this.page + 1)
    }
  }

  render() {
    const { data, refreshing, noMore, inited } = this.state
    return (
      <WaterfallFlow
        ref={ref => this.listRef = ref}
        style={{ flex: 1 }}
        contentContainerStyle={{ backgroundColor: '#f9f9f9' }}
        ListHeaderComponent={<Header />}
        ListFooterComponent={<Footer noMore={noMore} inited={inited} isEmpty={data.length === 0}/>}
        ListEmptyComponent={<Empty inited={inited} />}
        data={data}
        numColumns={2}
        initialNumToRender={10}
        onEndReached={this.onEndReached}
        refreshing={refreshing}
        onRefresh={() => this.loadData(1, true)}
        itemHeight={({ item, index }) => {
          return item.height
        }}
        renderItem={({ item, index, columnIndex }) => {
          return (
            <Card item={item} index={index} columnIndex={columnIndex}/>
          )
        }}
      />
    )
  }
}

class Card extends PureComponent {
  render() {
    const { item, index, columnIndex } = this.props
    return (
      <View style={{ flex: 1, padding: 4, overflow: 'hidden' }}>
        <TouchableOpacity 
          style={{ backgroundColor: '#fff', flex: 1 }} 
          onPress={() => Alert.alert(`${index}`)}
          activeOpacity={1}
        >
          <FadeImage 
            source={{ uri: item.thumbURL, width: item.width, height: item.height }} 
            resizeMode="cover" 
          />
        </TouchableOpacity>
      </View>
    )
  }
}

class Header extends PureComponent {
  render() {
    return (
      <FadeImage 
        resizeMode="cover"  
        source={{ 
          uri: 'https://img0.baidu.com/it/u=2931014973,245826024&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800', 
          width: window.width, 
          height: 800 / 1280 * window.width 
        }}
      />
    )
  }
}

class Footer extends PureComponent {
  render() {
    const { noMore, inited, isEmpty } = this.props
    if (!inited || isEmpty) {
      return null
    }
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60 }}>
        {!noMore && <ActivityIndicator color="red"/>}
        <Text style={{ color: '#999', marginLeft: 8 }}>{noMore ? '我是有底线的哦~' : '加载中...'}</Text>
      </View>
    )
  }
}


class Empty extends PureComponent {
  render() {
    const { inited } = this.props
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 300 }}>
        {!inited && <ActivityIndicator color="red"/>}
        <Text style={{ color: '#999', marginLeft: 8 }}>{inited ? '这里空空的哦~' : '获取数据中...'}</Text>
      </View>
    )
  }
}

class FadeImage extends Component<ImageProps> {

  constructor(props) {
    super(props)
    this._animatedValue = new Animated.Value(0)
  }

  render() {
    const { style, onLoadEnd } = this.props
    if (Platform.OS === 'android') {
      return <Image {...this.props}/>
    }
    return (
      <Animated.Image 
        {...this.props}
        onLoadEnd={() => {
          Animated.timing(this._animatedValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true
          }).start()
          onLoadEnd && onLoadEnd()
        }}
        style={[style, { opacity: this._animatedValue }]} 
      />
    )
  }
}