# CSS样式丢失问题解决方案

## 问题原因

CSS样式丢失的根本原因是`NEXT_PUBLIC_BASE_PATH`环境变量没有在构建过程中正确设置。虽然我们在`next.config.ts`中配置了智能basePath检测，但在实际的构建和部署过程中，环境变量没有被正确传递。

## 解决方案

### 1. GitHub Actions工作流修复
在`.github/workflows/deploy.yml`中添加了自动设置环境变量的步骤：

```yaml
- name: Build with Next.js
  run: |
    REPO_NAME=$(echo $GITHUB_REPOSITORY | cut -d'/' -f2)
    echo "NEXT_PUBLIC_BASE_PATH=/$REPO_NAME" >> $GITHUB_ENV
    npm run build
```

### 2. 手动部署脚本修复
更新了`package.json`中的部署脚本，显式设置环境变量：

```json
{
  "scripts": {
    "deploy": "NEXT_PUBLIC_BASE_PATH=/hnu-hedp next build && gh-pages -d out"
  }
}
```

## 工作原理

### 环境变量传递机制
1. **构建时**：Next.js读取`NEXT_PUBLIC_BASE_PATH`环境变量来确定资源路径前缀
2. **运行时**：生成的HTML和CSS文件使用正确的相对路径引用静态资源
3. **部署时**：GitHub Pages能够正确解析这些路径

### 路径解析流程
```
原始配置 → 环境变量设置 → Next.js构建 → 静态资源生成 → GitHub Pages部署
   ↓           ↓              ↓              ↓              ↓
/hnu-hedp  NEXT_PUBLIC_    basePath和    /hnu-hedp/     https://zhazhajust.github.io/hnu-hedp/
           BASE_PATH设置    assetPrefix   _next/static/  正确显示CSS样式
```

## 验证方法

### 1. 检查生成的HTML文件
```bash
# 构建项目
npm run build

# 查看CSS链接路径
cat out/index.html | grep css
```

正确的输出应该包含：
```html
<link rel="stylesheet" href="/hnu-hedp/_next/static/chunks/xxxxxx.css" data-precedence="next"/>
```

### 2. 检查静态资源目录结构
```bash
# 查看生成的静态资源
ls -la out/_next/static/chunks/
```

## 最佳实践

### 1. 自动化部署
对于GitHub Actions，使用自动检测：
```bash
REPO_NAME=$(echo $GITHUB_REPOSITORY | cut -d'/' -f2)
echo "NEXT_PUBLIC_BASE_PATH=/$REPO_NAME" >> $GITHUB_ENV
```

### 2. 本地开发
在`.env.local`文件中设置：
```
NEXT_PUBLIC_BASE_PATH=/hnu-hedp
```

### 3. 不同环境配置
```bash
# 生产环境
NEXT_PUBLIC_BASE_PATH=/hnu-hedp npm run build

# 开发环境
NEXT_PUBLIC_BASE_PATH= npm run dev
```

## 故障排除

### 1. 如果CSS仍然不显示
- 检查浏览器开发者工具中的网络面板，确认CSS文件请求路径是否正确
- 确认GitHub Pages的自定义域名设置（如果使用的话）
- 检查仓库设置中的Pages配置是否正确指向`gh-pages`分支

### 2. 常见错误路径
❌ 错误的相对路径：`./_next/static/chunks/style.css`
✅ 正确的绝对路径：`/hnu-hedp/_next/static/chunks/style.css`

### 3. 清除缓存
```bash
# 重新安装依赖
rm -rf node_modules .next out
npm install
npm run deploy
```

## 验证结果

部署完成后，请访问以下URL验证CSS样式是否正常显示：
https://zhazhajust.github.io/hnu-hedp

页面应该显示完整的样式，包括：
- 导航栏的渐变背景
- 主页的动画blob效果
- 卡片组件的阴影和悬停效果
- 所有文本的正确字体和颜色

## 后续维护

### 1. 更改仓库名时
只需更新`package.json`中的`homepage`字段和部署脚本中的环境变量值

### 2. 添加新功能时
确保所有静态资源引用都使用相对路径或通过basePath正确解析

### 3. 监控部署状态
定期检查GitHub Actions的部署日志，确保构建过程顺利完成

