module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: ['plugin:vue/essential', 'standard'],
  plugins: ['vue'],
  rules: {
    'no-multi-spaces': 2, // 禁止使用多个空格
    'array-bracket-spacing': [2, 'never'], // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    camelcase: 2, // 双峰驼命名格式
    'comma-spacing': [2, {
      before: false,
      after: true
    }], // 控制逗号前后的空格
    eqeqeq: [2, 'allow-null'],
    quotes: ['error', 'single'], // 强制使用单引号
    "space-before-function-paren": [2, {
      "anonymous": "never",
      "named": "never"
    }], // 函数名后面加空格
  }
}