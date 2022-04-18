/**
 * feat：新功能更新
 * style：改变代码格式，如删除空行、格式化代码、去除不必要的分号等等，不影响代码功能逻辑的操作
 * fix：修补某功能的bug
 * refactor：代码重构时使用，不是功能更新也不是 bug 修复的更改
 * perf: 性能优化等
 * test: 添加测试用例或者修改测试用例
 * build：由打包工具造成的改变（如gulp、webpack编译文件）
 * chore：更改构建过程、修改配置文件，添加/删除辅助工具或者库
 * revert：撤销之前的提交
 */
 module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'style', 'refactor', 'perf', 'test', 'build', 'chore', 'revert']],
    'subject-max-length': [1, 'always', 150], // subject建议150字以内
  },
};