# i18n 国际化重构进度报告

## 完成状态
✅ 主分支: `feature/zh-CN-localization`

## 已完成的工作

### 1. 组件国际化重构

已完成的组件 (12个):

| 组件 | 状态 | 备注 |
|------|------|------|
| `Settings.tsx` | ✅ 完成 | 主题、颜色、权限、环境变量、钩子等 |
| `LanguageSwitcher.tsx` | ✅ 完成 | 修复了 Popover API 问题 |
| `CCAgents.tsx` | ✅ 完成 | 头部，空状态、卡片操作、分页、删除对话框 |
| `MCPManager.tsx` | ✅ 完成 | 头部标题/副标题、标签页名称、toast 消息 |
| `MCPServerList.tsx` | ✅ 完成 | 作用域显示、状态徽章，空状态 |
| `MCPAddServer.tsx` | ✅ 完成 | 表单标签、按钮文本、错误消息、作用域选项 |
| `MCPImportExport.tsx` | ✅ 完成 | 所有 UI 文本翻译键 |
| `CreateAgent.tsx` | ✅ 完成 | 头部、表单标签、模型描述 |
| `AgentExecution.tsx` | ✅ 完成 | 执行状态、模型选择、全屏模式、复制输出、钩子配置 |
| `HooksEditor.tsx` | ✅ 完成 | 加载状态、配置标题、验证错误、模板对话框 |
| `SlashCommandsManager.tsx` | ✅ 完成 | 命令列表、编辑对话框、删除确认 |
| `UsageDashboard.tsx` | ✅ 完成 | 头部、标签页、概览部分 |

### 2. 语言包更新

#### `src/locales/en.json` - 已添加的键:

**execution 模块:**
- `execution.modelSelection` - Model Selection
- `execution.taskDescription` - Task Description
- `execution.workingIn` - Working in:
- `execution.output` - Output

**hooks 模块:**
- `hooks.configurationHint` - Configure shell commands to execute at various points in Claude Code's lifecycle.
- `hooks.localSettingsNotCommitted` - These settings are not committed to version control.
- `hooks.unsavedChangesHint` - You have unsaved changes. Click Save to persist them.
- `hooks.matcher` - Matcher
- `hooks.command` - Command
- `hooks.custom` - Custom
- `hooks.commonPatterns` - Common patterns

**usage 模块:**
- `usage.title` - Usage Dashboard
- `usage.subtitle` - Track your Claude Code usage and costs
- `usage.allTime` - All Time
- `usage.last7Days` - Last 7 Days
- `usage.last30Days` - Last 30 Days
- `usage.overview` - Overview
- `usage.byModel` - By Model
- `usage.byProject` - By Project
- `usage.bySession` - By Session
- `usage.timeline` - Timeline
- `usage.tokenBreakdown` - Token Breakdown
- `usage.inputTokens` - Input Tokens
- `usage.outputTokens` - Output Tokens
- `usage.cacheWrite` - Cache Write
- `usage.cacheRead` - Cache Read
- `usage.mostUsedModels` - Most Used Models
- `usage.topProjects` - Top Projects

#### `src/locales/zh-CN.json` - 对应中文翻译:
- 所有上述键均有对应的简体中文翻译

### 3. 关键 Bug 修复

#### i18next v23+ 插值格式修复

**问题描述:**
i18next v23+ 更改了默认插值格式从 `{name}` 到 `{{name}}`，导致所有翻译中的变量插值不生效，显示为字面量 `{input}`、`{output}`、`{count}` 等。

**修复方案:**
更新 `src/locales/en.json` 和 `src/locales/zh-CN.json` 中所有插值变量为双括号格式 `{{varName}}`。

**修改的键 (部分列表):**
- `tokensUsage`: `{input}` → `{{input}}`, `{output}` → `{{output}}`
- `agentsTab`: `{count}` → `{{count}}`
- `agentsTabLabel`: `{count}` → `{{count}}`
- `historyTab`: `{count}` → `{{count}}`
- `historyTabLabel`: `{count}` → `{{count}}`
- 等等...

#### StreamMessage.tsx Usage 检查修复

**问题描述:**
Token 用量检查只检查了 `message.message.usage`（嵌套位置），但后端有时会将 usage 放在 `message.usage`（顶层位置）。

**修复方案:**
同时检查两个位置的 usage 数据，并正确处理空值情况。

```tsx
{((msg.usage?.input_tokens != null || msg.usage?.output_tokens != null) || (message.usage?.input_tokens != null || message.usage?.output_tokens != null)) && (
  <div>
    {t('streamMessage.tokensUsage', {
      input: msg.usage?.input_tokens ?? message.usage?.input_tokens,
      output: msg.usage?.output_tokens ?? message.usage?.output_tokens
    })}
  </div>
)}
```

### 4. 构建状态
- ✅ TypeScript 编译通过
- ✅ Vite 生产构建通过 (`npm run build`)
- ✅ Tauri 构建通过 (`bun run tauri build`)
- ✅ Windows 安装包生成成功

### 5. 提交记录

| Commit | 描述 |
|--------|------|
| `b66592e` | fix(i18n): update interpolation syntax to {{}} format for i18next v23+ |
| `3de7d09` | docs: move language switcher to top of README for better visibility |

## 技术说明

### i18n 规范
- 使用 `react-i18next` 的 `useTranslation` hook
- 翻译键格式: `模块.子模块.键名` (如 `agents.createNewAgent`)
- **重要**: i18next v23+ 使用 `{{variable}}` 格式进行变量插值
- 支持变量插值: `t('key', { variable: value })`

### 项目结构
- 语言包位置: `src/locales/en.json`, `src/locales/zh-CN.json`
- 组件位置: `src/components/*.tsx`
- i18n 配置: `src/lib/i18n.ts`

## 构建命令

```bash
# Web 前端构建
npm run build

# Tauri 开发模式
bun run tauri dev

# Tauri 生产构建
bun run tauri build
```

---
最后更新: 2026-03-22
