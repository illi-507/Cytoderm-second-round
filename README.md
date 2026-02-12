# Example 2: 带防抖输入的单词搜索

一道 React 编程练习，考察对 **JavaScript 异步编程**、**防抖机制** 和 **React 状态管理** 的理解。

## 题目要求

构建一个搜索组件，用户输入时实时过滤预定义的单词列表，需满足以下要求：

1. **模拟 API** — 创建 `mockFetchWords` 函数，模拟 200ms 网络延迟后返回结果。
2. **防抖** — 实现自定义 `debounce` 函数（500ms），使 API 仅在用户停止输入后才被调用。
3. **UI** — 渲染文本输入框并在下方显示匹配结果，无匹配时显示相应提示。

所有代码写在 `src/App.jsx` 中，单词列表在 `src/data.js` 里。

## 启动项目

```bash
npm install
npm run dev
```

## 考察技能

- Promise 与异步编程模式
- 手写防抖实现（不使用第三方库）
- React Hooks（`useState`、`useEffect`、`useRef`、`useCallback`）
- 受控组件与条件渲染
