# Tips and Tricks

## Custom Fields

Custom fields are a great way to add extra information to your item. Current and planned field support:

- [x] Text
- [ ] Integer (Future)
- [ ] Boolean (Future)
- [ ] Timestamp (Future)

Custom fields are appended to the main details section of an item.

::: tip
Homebox custom fields support URLs directly. Provide a URL like `https://google.com` and it becomes clickable in the UI. You can also use Markdown links like `[Google](https://google.com)`.
:::

## Managing Asset IDs

Homebox can auto-set asset IDs by default. You can disable this via command-line flag or environment variable. See [configuration](/guide/quick-start#env-variables-configuration) for details.

Example ID: `000-001`

Asset IDs are flexible and non-unique at database level, so users can manually set duplicates if needed. Recommended approaches:

### 1. Auto Incrementing IDs

Default and most consistent behavior. New or imported items get the next available ID.

### 2. Auto Incrementing IDs with Reset

If you want to skip selected items, keep auto-increment enabled and manually reset unwanted item IDs to `0`. The next item then receives the next available ID.

::: tip
If migrating from an older version, there is an action on the profile page to assign IDs to all items. Run this **only once** during migration.
:::

## QR Codes

**Version:** `0.7.0`

Homebox includes built-in QR code generation for items (and also labels/locations). It supports one-off QR generation in the UI.

An API endpoint is also available for QR generation with an API key, for example:

`/api/v1/qrcode?data=https://homebox.fly.dev/item/{uuid}`

**Version:** `0.8.0`

Custom label generation was added. On the tools page, use the label generator workflow to produce labels based on Asset ID.

[Demo](https://homebox.fly.dev/reports/label-generator)

## Scheduled Maintenance Notifications

**Version:** `0.9.0`

Homebox uses [shoutrrr](https://containrrr.dev/shoutrrr/0.7/) for notifications. You can add notification URLs in your profile and receive maintenance reminders.

Notifications are sent on the scheduled day around 8:00 AM.

## Custom Currencies

**Version:** `0.11.0`

You can load additional currencies via JSON file.

**Environment Variable:** `HBOX_OPTIONS_CURRENCY_CONFIG`

### Example

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

