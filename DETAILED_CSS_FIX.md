# 详细CSS样式丢失问题分析与解决方案

## 问题现象
网站部署到GitHub Pages后，CSS样式完全丢失，控制台出现大量404错误：
- `621a4b390dc7dcfd.css:1 Failed to load resource: the server responded with a status of 404 ()`
- JavaScript文件也出现404错误

## 根本原因分析

### 1. 路径配置冲突
原配置中同时设置了：
```typescript
basePath: basePath,        // 例如: /hnu-hedp
assetPrefix: `${basePath}/` // 例如: /hnu-hedp/
```

这导致静态资源路径被双重处理：
- Next.js已经知道basePath是`/hnu-hedp`
- assetPrefix又在路径前添加了`/hnu-hedp/`
- 最终生成的路径变成：`/hnu-hedp/hnu-hedp/_next/static/...` ❌

### 2. 正确的配置方式
```typescript
basePath: basePath,  // 告诉Next.js应用的基础路径
assetPrefix: '',     // 静态资源使用相对路径或由basePath自动处理 ✅
```

## 技术原理

### Next.js路径处理机制
1. **basePath**: 影响路由和所有内部链接
2. **assetPrefix**: 仅影响静态资源（CSS、JS、图片）的加载路径
3. **output: 'export'**: 生成静态HTML文件用于静态部署

### 路径生成流程
```
正确配置流程：
路由配置 → basePath(/hnu-hedp) → 内部链接正确
       ↓
静态资源 → assetPrefix(空) → 使用basePath生成正确路径
       ↓
最终路径 → /hnu-hedp/_next/static/chunks/xxx.css ✅

错误配置流程：
路由配置 → basePath(/hnu-hedp) → 内部链接正确
       ↓
静态资源 → assetPrefix(/hnu-hedp/) → 路径重复添加
       ↓
最终路径 → /hnu-hedp/hnu-hedp/_next/static/chunks/xxx.css ❌
```

## 验证方法

### 1. 本地构建验证
```bash
# 清理旧构建
rm -rf .next out

# 构建项目
npm run build

# 检查生成的HTML文件中的CSS路径
cat out/index.html | grep css
```

正确的输出应该是：
```html
<link rel="stylesheet" href="/hnu-hedp/_next/static/chunks/xxxxxx.css" />
```

而不是：
```html
<link rel="stylesheet" href="/hnu-hedp/hnu-hedp/_next/static/chunks/xxxxxx.css" />
```

### 2. 检查静态资源目录
```bash
# 查看生成的静态资源结构
ls -la out/_next/static/chunks/
```

## 部署配置最佳实践

### GitHub Actions配置
```yaml
- name: Build with Next.js
  run: |
    REPO_NAME=$(echo $GITHUB_REPOSITORY | cut -d'/' -f2)
    echo "NEXT_PUBLIC_BASE_PATH=/$REPO_NAME" >> $GITHUB_ENV
    npm run build
```

### 本地开发配置
在`.env.local`文件中：
```
NEXT_PUBLIC_BASE_PATH=/hnu-hedp
```

### 手动部署配置
在`package.json`中：
```json
{
  "scripts": {
    "deploy": "NEXT_PUBLIC_BASE_PATH=/hnu-hedp next build && gh-pages -d out"
  }
}
```

## 故障排除清单

### 1. 检查网络面板
打开浏览器开发者工具 → Network标签页：
- 查看CSS/JS文件的请求URL是否正确
- 确认状态码是否为200而不是404

### 2. 检查源代码
查看页面源代码中的资源链接：
- CSS链接应该指向：`/hnu-hedp/_next/static/chunks/xxx.css`
- JS链接应该指向：`/hnu-hedp/_next/static/chunks/xxx.js`

### 3. 清除缓存重新部署
```bash
# 清理所有构建文件
rm -rf node_modules .next out

# 重新安装依赖
npm install

# 重新部署
npm run deploy
```

## 预防措施

### 1. 配置一致性检查
确保以下配置保持一致：
- `next.config.ts`中的basePath
- `package.json`中的homepage
- GitHub Actions中的环境变量

### 2. 自动化验证
在CI/CD流程中添加验证步骤：
```bash
# 构建后检查关键文件是否存在
if [ ! -f "out/_next/static/chunks/*.css" ]; then
  echo "CSS files not generated correctly"
  exit 1
fi
```

### 3. 本地测试
部署前先在本地测试：
```bash
# 本地服务测试basePath
npm run dev
# 访问 http://localhost:3000/hnu-hedp 验证
```

## 总结

CSS样式丢失问题的核心是路径配置不当导致的资源加载失败。通过正确配置`basePath`和`assetPrefix`，可以确保Next.js应用在GitHub Pages上正确加载所有静态资源。

关键要点：
1. `basePath`用于路由和内部链接
2. `assetPrefix`通常应留空，让Next.js自动处理
3. 避免路径重复配置导致的双重前缀问题
4. 部署前后都要验证资源路径是否正确

这个修复确保了网站在GitHub Pages上的正常显示和功能完整性。
