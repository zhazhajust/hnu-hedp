# GitHub Pages 部署设置指南

## 最后步骤

您的Next.js应用已经配置好了GitHub Pages部署所需的所有文件。现在您需要完成以下最后几步：

### 1. 在GitHub上创建仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角的 "+" 号，选择 "New repository"
3. 将仓库命名为 `hnu-hedp`
4. 不要初始化仓库（不要勾选任何选项）
5. 点击 "Create repository"

### 2. 设置远程仓库并推送代码

在终端中运行以下命令：

```bash
# 设置远程仓库URL（将 YOUR_USERNAME 替换为您的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/hnu-hedp.git

# 推送代码到GitHub
git push -u origin main
```

### 3. 启用GitHub Pages

1. 在GitHub上访问您的仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分，选择 "GitHub Actions"
5. 保存设置

### 4. 触发部署

推送新的更改到 `main` 分支会自动触发GitHub Actions工作流进行部署：

```bash
# 进行一个小的更改并推送以触发部署
git commit --allow-empty -m "Trigger deployment"
git push
```

### 5. 查看部署结果

部署完成后，您的网站将在以下URL可用：
```
https://YOUR_USERNAME.github.io/hnu-hedp
```

## 手动部署选项

如果您不想使用GitHub Actions，也可以使用手动部署：

```bash
npm run deploy
```

这将使用 `gh-pages` 包将构建输出推送到 `gh-pages` 分支。

## 故障排除

如果遇到问题，请检查：

1. 仓库名称必须是 `hnu-hedp`
2. `next.config.ts` 中的 `basePath` 和 `assetPrefix` 设置正确
3. `package.json` 中的 `homepage` 字段正确指向您的GitHub Pages URL
