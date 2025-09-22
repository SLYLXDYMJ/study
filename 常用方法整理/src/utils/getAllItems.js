import _ from 'lodash'

// 获取所有的子项，并拼接成一维形式
export default function (arr, childrenFieldPath = 'children') {
  var results = []
  var deepHandler = function (children) {
    _.each(children, function (item) {
      results.push(item)
      
      if (!_.isEmpty(_.get(item, childrenFieldPath))) {
        deepHandler(_.get(item, childrenFieldPath))
      }
    })
  }
  
  deepHandler(arr)
  
  return results
}