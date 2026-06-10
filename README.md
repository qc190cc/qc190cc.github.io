# qc190cc.github.io

个人静态站点，通过 GitHub Pages 部署，自定义域名 `qc90.cn`。

## 构建与部署

源码位于 `pure-admin-thin` 项目，构建产物输出到本仓库 `docs/` 目录，GitHub Pages 从 `/docs` 目录发布。

```bash
# 在 pure-admin-thin 目录下执行构建
pnpm build
# 然后进入本仓库 push 即可
```

## docs/ 目录下的特殊文件

### `.nojekyll`

GitHub Pages 默认启用 Jekyll 构建引擎，Jekyll 会**忽略所有以 `_` 开头的文件和目录**（如 `_layouts`、`_includes` 等是其保留路径）。

Vite 代码分割产生的 chunk 文件名可能以 `_` 开头（如 `_baseClone-CH3F1b9d.js`），没有 `.nojekyll` 这些文件不会被部署，导致页面 404。

**作用**：告诉 GitHub Pages 跳过 Jekyll，按原样部署所有文件。

### `CNAME`

自定义域名配置文件，内容为 `qc90.cn`。GitHub Pages 根据此文件识别自定义域名并配置 SSL 证书。

**注意**：此文件**不能删除**，否则自定义域名访问将失效。

### 为什么这两个文件放在源码项目的 `public/` 目录下？

构建配置中 `emptyOutDir: true` 每次打包都会清空 `docs/` 目录。如果 `.nojekyll` 和 `CNAME` 只存在于 `docs/` 中，每次构建后就会被删除。

将这两个文件放在 `pure-admin-thin/public/` 目录下，Vite 构建时会**自动将 `public/` 中的文件复制到输出目录**，从而保证每次构建后 `docs/.nojekyll` 和 `docs/CNAME` 始终存在。
