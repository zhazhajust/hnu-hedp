import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES || process.env.GITHUB_ACTIONS || false;
const repoName = "hnu-hedp";

const nextConfig: NextConfig = {
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  output: "export",
};

export default nextConfig;
