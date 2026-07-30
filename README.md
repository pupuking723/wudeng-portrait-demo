# 雾灯写真样板站

在线演示：https://pupuking723.github.io/wudeng-portrait-demo/

## 设计方向

- 视觉命题：暗色电影感主视觉与暖色杂志式作品排版，让摄影作品先于界面装饰说话。
- 内容结构：全屏主视觉 → 代表作品 → 三步服务 → 档期预约。
- 交互命题：首屏轻量引导、滚动渐入、末屏微弱景深移动；预约按钮打开可实际填写的表单。

## 本地预览

```bash
python3 -m http.server 4173 --directory studio-landing-demo
```

打开 `http://localhost:4173`。页面无构建依赖，可直接部署到静态托管服务。

演示图片由 OpenAI 内置 imagegen 生成，仅用于本样板展示。
