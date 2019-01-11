module.exports = babel => {
  let t = babel.types
  return {
    // Change all NumericaLiteral 1 into 2
    visitor: {
      NumericLiteral(path) {
        console.log('path.node is:', path.node)
        if (path.node.value === 1) {
          path.replaceWith(t.NumericLiteral(2))
        }
      }
      // ArrayExpression(path) {
      //   return
      // }
    }
  }
}
