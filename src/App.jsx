/**
 * 题目：带防抖输入的单词搜索
 *
 * 构建一个 React 组件，让用户可以搜索一组单词列表，
 * 需满足以下要求：
 *
 * 1. 创建一个模拟 API 函数（mockFetchWords）：
 *    - 接收一个查询字符串
 *    - 模拟网络延迟 200ms 后返回结果
 *    - 使用不区分大小写的 string.includes() 过滤预定义的单词列表
 *    - 单词在data.js里
 *
 * 2. 实现防抖（500ms），使模拟 API 不会在每次按键时都被调用，
 *    而是在用户停止输入 500ms 后才触发。
 *
 * 3. 显示一个文本输入框，用户可以在其中输入搜索关键词。
 *
 * 4. 在输入框下方，以列表形式显示匹配的单词。
 *
 * 5. 当用户已输入内容但没有匹配的单词时，显示"未找到匹配项。"的提示信息。
 *
 */

/**
 * 模拟 API 函数
 * 根据查询字符串过滤单词列表，模拟 200ms 网络延迟
 */
function mockFetchWords(query) {
  // TODO: 实现
}

/**
 * 自定义防抖函数
 * 返回一个新函数，该函数在停止调用 delay 毫秒后才执行 fn
 */
function debounce(fn, delay) {
  // TODO: 实现
}

export default function App() {
  return <div></div>;
}
