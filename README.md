# redux源码学习 #

通过写mini版来熟悉redux和react-redux的核心源码。

### 待考虑问题:
* connect中shouldComponentUpdate中判断当前属性是否被更改，是否需要判断mapStateToDispatch。mapStateToDispatch和mapStateToProps里有引用类型的时候每次都返回新的引用地址，造成没有更改都要去更新。