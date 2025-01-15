
## 视频识别
#### 基于Vue3+Vite+Element-Plus+TypeScript（兼容移动端）

#### 简单说明
目前只是精简后保留了核心代码,没有过多的修改框架的机制
登录 / token / 信息存储 / 路由格式 等都是框架原生的,后面编写边改

#### 项目运行
  配置建议: node: 22.12.0; pnpm: 9.15.4
  1. 根目录 pnpm -i
  2. 根目录 pnpm dev

#### 接口
目前使用mock模拟
登录信息: /mock/login.ts
动态菜单参考: /mock/asyncRoutes.ts 下的 mattingRouter
修改后不生效需重新 pnpm dev

#### 目录结构
  /mock - 模拟接口数据
  /locales - 多语言配置
  /src/ - vue那一套
完整的目录结构见文档: https://pure-admin.cn/pages/directory/