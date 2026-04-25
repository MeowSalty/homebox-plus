# CSV 导入

## 快速开始

使用 CSV 导入是批量写入物品数据的推荐方式。

**当前限制**

- 导入支持 items、locations、labels。
- 导入/导出不支持附件。
- CSV 导出不支持嵌套路径导出（例如 `Home / Office / Desk`），仅导出直接父级位置。
- 不支持在导入时定义物品间父子关系（例如 `Item A` 是 `Item B` 的子项）。

::: tip 文件格式
CSV 导入同时支持 CSV 与 TSV，差异仅在分隔符：CSV 为 `,`，TSV 为 `\t`。
:::

## CSV 参考

支持的列名区分大小写。列顺序不限，除特殊要求外可按需省略。

### 特殊语法列

#### `HB.import_ref`

`import_ref` 是用于去重的唯一字符串。若数据库中已存在相同 ref，则跳过创建。

- String 类型
- 最大 100 字符

建议在可重复执行的 CSV 流程中始终使用该字段。

::: tip
如果提交的是已存在的 `import_ref`，CSV 导入会更新对应物品，而不是新建。
:::

#### `HB.location`

物品创建时归属的位置。位置会自动去重。

- 支持嵌套路径，例如 `Home / Office / Desk`

#### `HB.labels`

分号分隔的标签列表，例如 `label-a;label-b`。

#### `HB.field.{field_name}`

示例：`HB.field.Serial Number`。

用于为物品写入自定义字段，列值即字段值。

- 空值会被忽略。

### 标准列

| Column               | Type          | Description      |
| -------------------- | ------------- | ---------------- |
| HB.quantity          | Integer       | 要创建的物品数量 |
| HB.name              | String        | 物品名称         |
| HB.asset_id          | AssetID       | 资产编号         |
| HB.description       | String        | 物品描述         |
| HB.insured           | Boolean       | 是否投保         |
| HB.serial_number     | String        | 序列号           |
| HB.model_number      | String        | 型号             |
| HB.manufacturer      | String        | 制造商           |
| HB.notes             | String (1000) | 备注             |
| HB.purchase_from     | String        | 购买来源         |
| HB.purchase_price    | Float64       | 购买价格         |
| HB.purchase_time     | Date          | 购买日期         |
| HB.lifetime_warranty | Boolean       | 是否终身保修     |
| HB.warranty_expires  | Date          | 保修到期日期     |
| HB.warranty_details  | String        | 保修说明         |
| HB.sold_to           | String        | 售出对象         |
| HB.sold_time         | Date          | 售出日期         |
| HB.sold_price        | Float64       | 售出价格         |
| HB.sold_notes        | String (1000) | 售出备注         |

### 类型说明

| Type    | Format                                        |
| ------- | --------------------------------------------- |
| String  | 默认最大 255 字符（特殊说明除外）             |
| Date    | `YYYY-MM-DD`                                  |
| Boolean | `true/false`、`yes/no`、`1/0`（不区分大小写） |
| AssetID | `000-000`                                     |
