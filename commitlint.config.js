/**
 * config-conventional是一种规范
 * 格式：<type>[optional scope]: <description>
 * type ：用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？ 
 * 常用的类型：
    build	编译相关的修改，例如发布版本、对项目构建或者依赖的改动，由打包工具造成的改变（如gulp、webpack编译文件）
    chore	其他修改, 比如改变构建流程、或者增加依赖库、工具等
    ci	持续集成修改
    docs	文档修改
    feat	新特性、新功能
    fix	 修改bug
    perf	优化相关，比如提升性能、体验
    refactor	代码重构，不是功能更新也不是 bug 修复的更改
    revert	回滚到上一个版本，撤销之前的提交
    style	代码格式修改, 注意不是 css 修改
    test	添加测试用例或者修改测试用例
 * optional scope：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。
 * description：一句话描述此次提交的主要内容，做到言简意赅。
 * 比如：
 * git commit -m 'fix(account): 修复xxx的bug'
   git commit -m 'refactor: 重构整个项目'

   rules：是一些规则，可以查阅commitlint官网
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "chore",
        "revert",
      ],
    ],
    "subject-max-length": [1, "always", 150], // subject建议150字以内
  },
};
