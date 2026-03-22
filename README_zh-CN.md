# opcode

<div align="center">
  <img src="src-tauri/icons/icon.png" alt="opcode Logo" width="120" height="120">

  <h1>opcode</h1>

  <p>
    <strong>一款强大的 Claude Code GUI 应用和工具包</strong>
  </p>
  <p>
    <strong>创建自定义 Agent、管理交互式 Claude Code 会话、运行安全的后台 Agent 等。</strong>
  </p>

  <p>
    <a href="#功能"><img src="https://img.shields.io/badge/功能-✨-blue?style=for-the-badge" alt="功能"></a>
    <a href="#安装"><img src="https://img.shields.io/badge/安装-🚀-green?style=for-the-badge" alt="安装"></a>
    <a href="#使用"><img src="https://img.shields.io/badge/使用-📖-purple?style=for-the-badge" alt="使用"></a>
    <a href="#开发"><img src="https://img.shields.io/badge/开发-🛠️-orange?style=for-the-badge" alt="开发"></a>
    <a href="https://discord.com/invite/KYwhHVzUsY"><img src="https://img.shields.io/badge/Discord-加入-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  </p>
</div>

![截图](https://github.com/user-attachments/assets/a028de9e-d881-44d8-bae5-7326ab3558b9)

> [!TIP]
> **⭐ 给仓库加星并在 X 上关注 [@getAsterisk](https://x.com/getAsterisk)，获取 `asteria-swe-v0` 抢先体验资格。**

> [!NOTE]
> 本项目与 Anthropic 没有关联，也不受其认可或赞助。Claude 是 Anthropic, PBC 的商标。这是一个使用 Claude 的独立开发者项目。

> [!IMPORTANT]
> **🌐 国际化 (i18n) 已实现！** 本项目已支持多语言，包括简体中文（zh-CN）和 English。请参阅 [i18n 实现说明](./i18n-progress.md)。

## 🌟 概述

**opcode** 是一款强大的桌面应用程序，旨在改变您与 Claude Code 的交互方式。它基于 Tauri 2 构建，提供美观的 GUI 界面，用于管理 Claude Code 会话、创建自定义 Agent、跟踪使用情况等功能。

可以把 opcode 看作 Claude Code 的命令中心 —— 弥合命令行工具与可视化体验之间的鸿沟，让 AI 辅助开发更加直观和高效。

## 📋 目录

- [🌟 概述](#-概述)
- [✨ 功能](#-功能)
  - [🗂️ 项目和会话管理](#️-项目和会话管理)
  - [🤖 CC Agents](#-cc-agents)
  - [📊 使用分析仪表盘](#-使用分析仪表盘)
  - [🔌 MCP 服务器管理](#-mcp-服务器管理)
  - [⏰ 时间线和检查点](#-时间线和检查点)
  - [📝 CLAUDE.md 管理](#-claudemd-管理)
- [📖 使用](#-使用)
  - [开始使用](#开始使用)
  - [管理项目](#管理项目)
  - [创建 Agent](#创建-agent)
  - [跟踪使用情况](#跟踪使用情况)
  - [使用 MCP 服务器](#使用-mcp-服务器)
- [🚀 安装](#-安装)
- [🔨 从源码构建](#-从源码构建)
- [🛠️ 开发](#️-开发)
- [🔒 安全](#-安全)
- [🤝 贡献](#-贡献)
- [📄 许可证](#-许可证)
- [🙏 致谢](#-致谢)

## ✨ 功能

### 🗂️ **项目和会话管理**
- **可视化项目浏览器**：浏览 `~/.claude/projects/` 中的所有 Claude Code 项目
- **会话历史**：查看并恢复过去编码会话的完整上下文
- **智能搜索**：使用内置搜索快速查找项目和会话
- **会话洞察**：一目了然地查看首条消息、时间戳和会话元数据

### 🤖 **CC Agents**
- **自定义 AI Agent**：使用自定义系统提示词和行为创建专用 Agent
- **Agent 库**：为不同任务构建专用 Agent 集合
- **后台执行**：在独立进程中运行 Agent，实现非阻塞操作
- **执行历史**：跟踪所有 Agent 运行，包含详细日志和性能指标

### 📊 **使用分析仪表盘**
- **成本跟踪**：实时监控 Claude API 使用情况和成本
- **Token 分析**：按模型、项目和时间段详细分析
- **可视化图表**：美观的图表展示使用趋势和模式
- **导出数据**：导出使用数据用于核算和分析

### 🔌 **MCP 服务器管理**
- **服务器注册表**：从中央 UI 管理 Model Context Protocol 服务器
- **简易配置**：通过 UI 或从现有配置导入添加服务器
- **连接测试**：使用前验证服务器连接
- **Claude Desktop 导入**：从 Claude Desktop 导入服务器配置

### ⏰ **时间线和检查点**
- **会话版本控制**：在编码会话的任意时刻创建检查点
- **可视化时间线**：通过分支时间线浏览会话历史
- **即时恢复**：一键跳转到任意检查点
- **分叉会话**：从现有检查点创建新分支
- **差异查看器**：查看检查点之间的具体变化

### 📝 **CLAUDE.md 管理**
- **内置编辑器**：直接在应用内编辑 CLAUDE.md 文件
- **实时预览**：实时查看 markdown 渲染效果
- **项目扫描器**：在项目中查找所有 CLAUDE.md 文件
- **语法高亮**：完整的 markdown 语法高亮支持

## 📖 使用

### 开始使用

1. **启动 opcode**：安装后打开应用程序
2. **欢迎界面**：在 CC Agents 或项目之间选择
3. **首次设置**：opcode 会自动检测您的 `~/.claude` 目录

### 管理项目

```
项目 → 选择项目 → 查看会话 → 恢复或新建
```

- 点击任意项目查看其会话
- 每个会话显示首条消息和时间戳
- 直接恢复会话或新建会话

### 创建 Agent

```
CC Agents → 创建 Agent → 配置 → 执行
```

1. **设计您的 Agent**：设置名称、图标和系统提示词
2. **配置模型**：在可用 Claude 模型中选择
3. **设置权限**：配置文件读写和网络访问
4. **执行任务**：在任意项目上运行您的 Agent

### 跟踪使用情况

```
菜单 → 使用仪表盘 → 查看分析
```

- 按模型、项目和日期监控成本
- 导出数据用于报告
- 设置使用提醒（即将推出）

### 使用 MCP 服务器

```
菜单 → MCP 管理器 → 添加服务器 → 配置
```

- 手动或通过 JSON 添加服务器
- 从 Claude Desktop 配置导入
- 使用前测试连接

## 🚀 安装

### 前置要求

- **Claude Code CLI**：从 [Claude 官方网站](https://claude.ai/code) 安装

### 即将发布正式可执行文件

## 🔨 从源码构建

### 前置要求

从源码构建 opcode 前，请确保已安装以下工具：

#### 系统要求

- **操作系统**：Windows 10/11、macOS 11+ 或 Linux（Ubuntu 20.04+）
- **内存**：最低 4GB（推荐 8GB）
- **存储**：至少 1GB 可用空间

#### 必需工具

1. **Rust**（1.70.0 或更高版本）
   ```bash
   # 通过 rustup 安装
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

2. **Bun**（最新版本）
   ```bash
   # 安装 bun
   curl -fsSL https://bun.sh/install | bash
   ```

3. **Git**
   ```bash
   # 通常预装，如果没有：
   # Ubuntu/Debian: sudo apt install git
   # macOS: brew install git
   # Windows: 从 https://git-scm.com 下载
   ```

4. **Claude Code CLI**
   - 从 [Claude 官方网站](https://claude.ai/code) 下载并安装
   - 确保 `claude` 在您的 PATH 中可用

#### 平台特定依赖

**Linux (Ubuntu/Debian)**
```bash
# 安装系统依赖
sudo apt update
sudo apt install -y \
  libwebkit2gtk-4.1-dev \
  libgtk-3-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev \
  patchelf \
  build-essential \
  curl \
  wget \
  file \
  libssl-dev \
  libxdo-dev \
  libsoup-3.0-dev \
  libjavascriptcoregtk-4.1-dev
```

**macOS**
```bash
# 安装 Xcode Command Line Tools
xcode-select --install

# 通过 Homebrew 安装额外依赖（可选）
brew install pkg-config
```

**Windows**
- 安装 [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- 安装 [WebView2](https://developer.microsoft.com/microsoft-edge/webview2/)（Windows 11 通常预装）

### 构建步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/getAsterisk/opcode.git
   cd opcode
   ```

2. **安装前端依赖**
   ```bash
   bun install
   ```

3. **构建应用程序**

   **开发模式（带热重载）**
   ```bash
   bun run tauri dev
   ```

   **生产构建**
   ```bash
   # 构建应用程序
   bun run tauri build

   # 构建产物位于：
   # - Linux: src-tauri/target/release/
   # - macOS: src-tauri/target/release/
   # - Windows: src-tauri/target/release/
   ```

4. **平台特定构建选项**

   **调试构建（编译更快，二进制文件更大）**
   ```bash
   bun run tauri build --debug
   ```

   **macOS 通用二进制（Intel + Apple Silicon）**
   ```bash
   bun run tauri build --target universal-apple-darwin
   ```

### 故障排除

#### 常见问题

1. **"cargo not found" 错误**
   - 确保 Rust 已安装且 `~/.cargo/bin` 在您的 PATH 中
   - 运行 `source ~/.cargo/env` 或重启终端

2. **Linux: "webkit2gtk not found" 错误**
   - 安装上面列出的 webkit2gtk 开发包
   - 在较新 Ubuntu 版本上，可能需要 `libwebkit2gtk-4.0-dev`

3. **Windows: "MSVC not found" 错误**
   - 安装带 C++ 支持的 Visual Studio Build Tools
   - 安装后重启终端

4. **"claude command not found" 错误**
   - 确保 Claude Code CLI 已安装且在您的 PATH 中
   - 用 `claude --version` 测试

5. **构建因"内存不足"失败**
   - 尝试用更少并行任务构建：`cargo build -j 2`
   - 关闭其他应用程序以释放内存

#### 验证您的构建

构建后，您可以验证应用程序是否正常工作：

```bash
# 直接运行构建的可执行文件
# Linux/macOS
./src-tauri/target/release/opcode

# Windows
./src-tauri/target/release/opcode.exe
```

### 构建产物

构建过程会创建以下产物：

- **可执行文件**：主要的 opcode 应用程序
- **安装程序**（使用 `tauri build` 时）：
  - `.deb` 包（Linux）
  - `.AppImage`（Linux）
  - `.dmg` 安装程序（macOS）
  - `.msi` 安装程序（Windows）
  - `.exe` 安装程序（Windows）

所有产物位于 `src-tauri/target/release/`。

## 🛠️ 开发

### 技术栈

- **前端**：React 18 + TypeScript + Vite 6
- **后端**：Rust + Tauri 2
- **UI 框架**：Tailwind CSS v4 + shadcn/ui
- **数据库**：SQLite（通过 rusqlite）
- **包管理器**：Bun

### 项目结构

```
opcode/
├── src/                   # React 前端
│   ├── components/        # UI 组件
│   ├── lib/               # API 客户端和工具
│   └── assets/            # 静态资源
├── src-tauri/             # Rust 后端
│   ├── src/
│   │   ├── commands/      # Tauri 命令处理器
│   │   ├── checkpoint/    # 时间线管理
│   │   └── process/       # 进程管理
│   └── tests/             # Rust 测试套件
└── public/                # 公共资源
```

### 开发命令

```bash
# 启动开发服务器
bun run tauri dev

# 仅运行前端
bun run dev

# 类型检查
bunx tsc --noEmit

# 运行 Rust 测试
cd src-tauri && cargo test

# 格式化代码
cd src-tauri && cargo fmt
```

## 🔒 安全

opcode 优先保护您的隐私和安全：

1. **进程隔离**：Agent 在独立进程中运行
2. **权限控制**：为每个 Agent 配置文件和网络访问权限
3. **本地存储**：所有数据保留在您的机器上
4. **无遥测**：无数据收集或追踪
5. **开源**：通过开源代码实现完全透明

## 🤝 贡献

我们欢迎贡献！详情请参阅我们的 [贡献指南](CONTRIBUTING.md)。

### 贡献领域

- 🐛 错误修复和改进
- ✨ 新功能和改进
- 📚 文档改进
- 🎨 UI/UX 增强
- 🧪 测试覆盖
- 🌐 国际化（i18n）

## 📄 许可证

本项目采用 AGPL 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- 基于 [Tauri](https://tauri.app/) 构建 - 用于构建桌面应用的安全框架
- [Anthropic](https://claude.ai) 的 [Claude](https://claude.ai)

---

<div align="center">
  <p>
    <strong>由 ❤️ 制作，by <a href="https://asterisk.so/">Asterisk</a></strong>
  </p>
  <p>
    <a href="https://github.com/getAsterisk/opcode/issues">报告问题</a>
    ·
    <a href="https://github.com/getAsterisk/opcode/issues">请求功能</a>
  </p>
</div>

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=getAsterisk/opcode&type=Date)](https://www.star-history.com/#getAsterisk/opcode&Date)
