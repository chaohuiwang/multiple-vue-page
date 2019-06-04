# Vue multiple pages Vue多页应用
# 项目目录

```
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── package.json
├── src
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── SignInDialog
│   │   │   └── SignInDialog.vue
│   │   └── headNav.vue
│   │   │   └── headNav.vue
│   └── pages
│       └── signInActivity
│           ├── signInActivity.html
│           ├── signInActivity.js
│           ├── signInActivity.vue
│           └── js
│               └── page.js
└── static
```

# 文件结构 

```
├── src
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── SignInDialog
│   │   │   └── SignInDialog.vue
│   │   └── headNav.vue
│   │   │   └── headNav.vue
│   └── pages
│       └── signInActivity
│           ├── signInActivity.html
│           ├── signInActivity.js
│           ├── signInActivity.vue
│           └── js
│               └── page.js
```
## 打包后的资源路径

执行`npm run build`之后

```
├── dist
│   ├── js
│   ├── css
│   └── signInActivity.html
```
