import type { NextConfig } from "next";

// 从环境变量或package.json自动获取仓库名
const getBasePath = () => {
  // 方式1: 从环境变量获取
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  
  // 方式2: 从package.json获取
  try {
    const packageJson = require('./package.json');
    const homepage = packageJson.homepage;
    if (homepage) {
      // 从homepage URL中提取路径
      const url = new URL(homepage);
      const pathParts = url.pathname.split('/').filter(Boolean);
      if (pathParts.length > 0) {
        return `/${pathParts[0]}`;
      }
    }
  } catch (error) {
    console.log('Could not read package.json for basePath');
  }
  
  // 默认值
  return '/hnu-hedp';
};

const basePath = getBasePath();

const nextConfig: NextConfig = {
  /* config options here */
  basePath: basePath,
  assetPrefix: `${basePath}/`,
  output: 'export',
};

export default nextConfig;
