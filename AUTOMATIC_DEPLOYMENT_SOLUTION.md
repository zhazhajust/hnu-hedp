# 自动化部署解决方案

## 智能basePath配置

我们已经实现了智能的basePath和assetPrefix配置，无需手动修改仓库名。

### 工作原理

```typescript
const getBasePath = () => {
  // 方式1: 从环境变量获取
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  
  // 方式2: 从package.json自动获取
  try {
    const packageJson = require('./package.json');
    const homepage = packageJson.homepage;
    if (homepage) {
      // 从homepage URL中自动提取路径
      const url = new URL(homepage);
      const pathParts = url.pathname.split('/').filter(Boolean);
      if (pathParts.length > 0) {
        return `/${pathParts[0]}`;
      }
    }
  } catch (error) {
    console.log('Could not read package.json for basePath');
  }
  
  // 默认值作为后备
  return '/hnu-hedp';
};
```

### 配置优先级

1. **环境变量优先**：`NEXT_PUBLIC_BASE_PATH` 环境变量
2. **自动检测**：从 `package.json` 的 `homepage` 字段自动提取
3. **默认值**：预设的默认路径

## 使用方法

### 方法1: 通过环境变量（推荐）
```bash
# 设置环境变量
export NEXT_PUBLIC_BASE_PATH="/your-repo-name"
npm run deploy
```

### 方法2: 通过package.json自动检测
只需确保 `package.json` 中的 `homepage` 字段正确：
```json
{
  "homepage": "https://username.github.io/repo-name"
}
```

### 方法3: 默认值
如果前两种方法都不可用，将使用预设的默认值。

## 更进一步的自动化方案

### 1. 创建部署脚本
创建 `scripts/deploy.js`：

```javascript
const { execSync } = require('child_process');
const packageJson = require('../package.json');

// 自动从homepage提取仓库信息
const homepage = packageJson.homepage;
if (homepage) {
  const url = new URL(homepage);
  const pathParts = url.pathname.split('/').filter(Boolean);
  if (pathParts.length > 0) {
    const repoName = pathParts[0];
    console.log(`Deploying to: ${repoName}`);
    
    // 设置环境变量并部署
    execSync(`NEXT_PUBLIC_BASE_PATH=/${repoName} npm run build && gh-pages -d out`, {
      stdio: 'inherit'
    });
  }
}
```

### 2. 更新package.json
```json
{
  "scripts": {
    "deploy": "node scripts/deploy.js"
  }
}
```

## GitHub Actions 自动化

GitHub Actions工作流会自动处理部署，无需额外配置：

```yaml
# .github/workflows/deploy.yml
- name: Build with Next.js
  run: |
    # 自动从GITHUB_REPOSITORY环境变量获取仓库名
    REPO_NAME=$(echo $GITHUB_REPOSITORY | cut -d'/' -f2)
    echo "NEXT_PUBLIC_BASE_PATH=/$REPO_NAME" >> $GITHUB_ENV
    npm run build
```

## 环境变量配置示例

### 开发环境 (.env.local)
```
NEXT_PUBLIC_BASE_PATH=/hnu-hedp
```

### 生产环境 (GitHub Actions)
```yaml
env:
  NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}
```

## 优势

1. **零配置**：无需手动修改basePath
2. **自动适配**：根据仓库名自动调整
3. **灵活部署**：同一套代码可以部署到不同仓库
4. **向后兼容**：保留手动配置作为后备选项

## 测试部署

```bash
# 测试构建
npm run build

# 测试导出
npm run export

# 部署
npm run deploy
```

这样配置后，您只需要确保 `package.json` 中的 `homepage` 字段正确，basePath和assetPrefix会自动配置，无需手动修改任何代码。
