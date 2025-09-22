// 将对象中的所有 number 值转为 string 类型，可设置忽略名单
export default function (obj, excludeKeys = []) {
  // 如果是数字，直接转为字符串（如果不在排除列表中）
  if (typeof obj === 'number') {
    return obj.toString()
  }
  
  // 如果是数组，递归处理每个元素
  if (Array.isArray(obj)) {
    return obj.map(item => numbersToStrings(item, excludeKeys))
  }
  
  // 如果是对象（且非数组），递归处理每个属性值
  if (typeof obj === 'object' && obj !== null) {
    const result = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 检查当前键是否在排除列表中
        if (excludeKeys.includes(key)) {
          // 排除的键保持原值
          result[ key ] = obj[ key ]
        }
        else {
          // 非排除键递归处理
          result[ key ] = numbersToStrings(obj[ key ], excludeKeys)
        }
      }
    }
    return result
  }
  
  // 其他类型（如 string、boolean、null 等）直接返回
  return obj
}