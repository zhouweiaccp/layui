layui.define([], function(exports) {
    // 我们需要将此方法使用顶层 layui  https://fly.layui.com/jie/66075/
    // 这样可以确保每个子层都可以使用
//     // 我们需要获取顶层 layui 对象


    
// 偶然机会，在社区看到了一个帖子：探索 layui 的 onevent 和 event ，这里面介绍了 layui.event 和 layui.onevent 。

// 从帖子里面我发现了 layui.event 和 layui.onevent 有点像 vue 中的 $emit 和 $on 的简易版。

    var MODULE_NAME = 'common'
    var isTop = top === self
    var _layui = isTop ? layui : top.layui
  
    var common= {
         // 事件监听
      $on: function(eventType, callback) {
        return _layui.onevent.call(this, MODULE_NAME, eventType, callback)
      },
  
      // 事件响应
      $emit: function(eventType, params) {
        _layui.event.call(this, MODULE_NAME, eventType, params)
      }
    }
    
    exports(MODULE_NAME, common)
  })