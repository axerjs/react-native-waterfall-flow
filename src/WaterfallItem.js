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
    } = this.props

    const { rowData, height, rowOffsetTop } = rowItem

    return (
      <View style={{ flexDirection: 'row', height }}>
        {
          rowData.map((data, dataIndex) => {
            const { item, index, columnIndex, height, offsetTop } = data
            return (
              <View
                key={`item_${dataIndex}`}
                style={{
                  position: 'absolute',
                  top: offsetTop - rowOffsetTop,
                  left: columnIndex * columnWidth,
                  height: height,
                  width: columnWidth,
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