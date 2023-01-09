# eslint-config

快看前端团队 ESLint 统一配置项

## 安装

### NPM

```bash
>$ npm install @kuaikan/eslint-config --save-dev
```

### Yarn

```bash
>$ yarn add @kuaikan/eslint-config -D
```

### Pnpm

```bash
>$ pnpm add @kuaikan/eslint-config -D
```

## 使用方式

### JavaScript 项目

在根目录中新增 `.eslintrc` 文件

```bash
>$ touch .eslintrc
```

在 `.eslintrc` 文件添加下列代码

```json
{
	"extends": ["@kuaikan/eslint-config"]
}
```

## 许可证

[GPL-3.0](./LICENSE)
