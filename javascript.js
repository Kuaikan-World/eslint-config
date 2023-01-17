module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-debugger': 'warn',
    // allow async-await
    'generator-star-spacing': 'off',
    // 控制行尾部分
    semi: ['error', 'always'],
    // 缩进样式
    indent: ['error', 2, { SwitchCase: 1 }],
    // 逗号后的空格
    'comma-spacing': [
      'error',
      {
        after: true
      }
    ],
    // 单行执行块内的空格
    'block-spacing': ['error', 'never'],
    // 花括号相对于其控制语句和正文的位置
    'brace-style': ['error', '1tbs'],
    // 围绕关键词使用的空格
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // 对象字面量属性冒号前后空格
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    // 关键字与参数的空格
    'space-before-function-paren': ['error', 'always'],
    // 括号内进行间隔的一致性
    'space-in-parens': ['error', 'never'],
    // 强化块之前的间距一致性
    'space-before-blocks': ['error', 'always'],
    // 不允许可达代码后return，throw，continue，和break语句
    'no-unreachable': 'off',
    // 遇到对尚未声明的标识符的引用时发出警告
    'no-use-before-define': ['error', { functions: false, classes: true }],
    // 不允许正则表达式中的控制字符
    'no-control-regex': 'off',
    'no-fallthrough': ['error', { commentPattern: 'break[\\s\\w]*omitted' }],
    // 不允许使用双引号 0 off,1 warning, 2 error
    quotes: [1, 'single']
  }
};
