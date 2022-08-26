import React from 'react'
import { View } from 'react-native'

export default class WaterfallItem extends React.Component {

  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(this.props) != JSON.stringify(nextProps)) {
      return true
    }
    return false
  }

  render() {
    const {
      rowItem,
      renderItem,
      columnWidth,
      onItemHeightChange
    } = this.props

    const { rowData, rowOffsetTop, height } = rowItem

    const extraStyle = {}
    if (height > 0) {
      extraStyle.height = height
      extraStyle.opacity = 1
    }

    return (
      <View style={{ flexDirection: 'row', opacity: 0,  ...extraStyle }}>
        {
          rowData.map((data, dataIndex) => {
            const { item, index, columnIndex, offsetTop } = data
            return (
              <View
                key={`item_${dataIndex}`}
                style={{
                  position: 'absolute',
                  top: offsetTop - rowOffsetTop,
                  left: columnIndex * columnWidth,
                  width: columnWidth,
                }}
                onLayout={e => {
                  onItemHeightChange(e.nativeEvent.layout.height, index)
                }}
              >
                {renderItem && renderItem({ item, index, columnIndex })}
              </View>
            )
          })
        }
      </View>
    )
  }
}