# CSV Imports

## Quick Start

Using CSV import is the recommended way to add items to the database at scale.

**Current Limitations**

- Imports support items, locations, and labels.
- Imports/exports do not support attachments.
- CSV exports do not support nested path exports (for example `Home / Office / Desk`) and export only the direct parent location.
- Cannot specify item-to-item relationships (for example `Item A` as child of `Item B`).

::: tip File Formats
CSV import supports both CSV and TSV. The difference is delimiter: CSV uses `,` and TSV uses `\t`.
:::

## CSV Reference

Supported columns are case-sensitive. They can appear in any order and may be omitted unless otherwise specified.

### Special Syntax Columns

#### `HB.import_ref`

Import refs are unique strings used to deduplicate imports. If ref already exists, item creation is skipped.

- String type
- Max 100 characters

Using import refs is strongly recommended for repeatable CSV workflows.

::: tip
If an existing import ref is provided, CSV import updates the existing item instead of creating a new one.
:::

#### `HB.location`

Location of the item to create. Locations are deduplicated.

- Supports nested paths, for example `Home / Office / Desk`

#### `HB.labels`

Semicolon-separated labels to apply to item, e.g. `label-a;label-b`.

#### `HB.field.{field_name}`

Example: `HB.field.Serial Number`.

Adds a custom field to item. Column value becomes field value.

- Empty value is ignored.

### Standard Columns

| Column               | Type          | Description                                   |
| -------------------- | ------------- | --------------------------------------------- |
| HB.quantity          | Integer       | Quantity of items to create                   |
| HB.name              | String        | Item name                                     |
| HB.asset_id          | AssetID       | Asset ID                                      |
| HB.description       | String        | Item description                              |
| HB.insured           | Boolean       | Whether item is insured                       |
| HB.serial_number     | String        | Serial number                                 |
| HB.model_number      | String        | Model number                                  |
| HB.manufacturer      | String        | Manufacturer                                  |
| HB.notes             | String (1000) | General notes                                 |
| HB.purchase_from     | String        | Purchase source                               |
| HB.purchase_price    | Float64       | Purchase price                                |
| HB.purchase_time     | Date          | Purchase date                                 |
| HB.lifetime_warranty | Boolean       | Lifetime warranty flag                        |
| HB.warranty_expires  | Date          | Warranty expiry date                          |
| HB.warranty_details  | String        | Warranty details                              |
| HB.sold_to           | String        | Buyer name                                    |
| HB.sold_time         | Date          | Sale date                                     |
| HB.sold_price        | Float64       | Sale price                                    |
| HB.sold_notes        | String (1000) | Sale notes                                    |

### Type Key

| Type    | Format                                              |
| ------- | --------------------------------------------------- |
| String  | Max 255 chars unless otherwise specified            |
| Date    | `YYYY-MM-DD`                                        |
| Boolean | `true/false`, `yes/no`, `1/0` (case-insensitive)   |
| AssetID | `000-000`                                           |

