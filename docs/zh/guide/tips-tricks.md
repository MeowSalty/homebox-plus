# 技巧与实践

## 自定义字段

自定义字段可以为物品添加额外信息。当前与规划中的字段类型：

- [x] Text
- [ ] Integer（未来）
- [ ] Boolean（未来）
- [ ] Timestamp（未来）

自定义字段会追加在物品详情主区域。

::: tip
Homebox 的自定义字段支持 URL 自动识别。填入 `https://google.com` 会在 UI 中变为可点击链接。也支持 Markdown 链接，如 `[Google](https://google.com)`。
:::

## 资产编号管理

默认情况下，Homebox 会自动设置资产编号。你可以通过命令行参数或环境变量关闭该行为。详见[配置](/zh/guide/quick-start#环境变量与配置)。

示例编号：`000-001`

资产编号在数据库层面允许重复，因此可手动设置重复值。推荐两种方式：

### 1. 自动递增编号

默认、最稳定的方式。新建或导入物品时会分配下一个可用编号。

### 2. 自动递增 + 重置

如果你希望跳过某些物品，可保持自动递增开启，并将不需要编号的物品手动重置为 `0`。后续新物品仍会获得下一个可用编号。

::: tip
如果从旧版本迁移，可在个人资料页执行“为全部物品分配编号”。迁移期间该操作建议 **只执行一次**。
:::

## 二维码

**版本：** `0.7.0`

Homebox 内置二维码生成功能，可用于物品（也包括标签/位置）的单次生成场景。

也可通过 API 端点结合 API key 生成，例如：

`/api/v1/qrcode?data=https://homebox.fly.dev/item/{uuid}`

**版本：** `0.8.0`

新增自定义标签生成功能，可在工具页按 Asset ID 生成标签。

[Demo](https://homebox.fly.dev/reports/label-generator)

## 计划维护通知

**版本：** `0.9.0`

Homebox 使用 [shoutrrr](https://containrrr.dev/shoutrrr/0.7/) 发送通知。你可以在个人资料中配置通知 URL，用于接收维护提醒。

通知会在计划日期当天约早上 8:00 发送。

## 自定义货币

**版本：** `0.11.0`

你可以通过 JSON 文件加载额外货币。

**环境变量：** `HBOX_OPTIONS_CURRENCY_CONFIG`

### 示例

```json
[
  {
    "code": "AED",
    "local": "United Arab Emirates",
    "symbol": "د.إ",
    "name": "United Arab Emirates Dirham"
  }
]
```
