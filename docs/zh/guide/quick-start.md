# 快速开始

适合快速试用，但不建议用于长期稳定部署。推荐使用 Docker Compose 方式部署。

镜像有两种标签：常规版本与 `$TAG-rootless`（非 root 运行）。

## Docker Run

```sh
# 若使用 rootless 镜像，请确保数据目录权限正确
mkdir -p /path/to/data/folder
chown 65532:65532 -R /path/to/data/folder

# 运行镜像
docker run -d \
  --name homebox \
  --restart unless-stopped \
  --publish 3100:7745 \
  --env TZ=Europe/Bucharest \
  --volume /path/to/data/folder/:/data \
  ghcr.io/hay-kot/homebox:latest
# ghcr.io/hay-kot/homebox:latest-rootless
```

## Docker Compose

```yaml
services:
  homebox:
    image: ghcr.io/hay-kot/homebox:latest
    #   image: ghcr.io/hay-kot/homebox:latest-rootless
    container_name: homebox
    restart: always
    environment:
      - HBOX_LOG_LEVEL=info
      - HBOX_LOG_FORMAT=text
      - HBOX_WEB_MAX_UPLOAD_SIZE=10
    volumes:
      - homebox-data:/data/
    ports:
      - 3100:7745

volumes:
  homebox-data:
    driver: local
```

::: info Rootless 镜像与宿主机挂载
如果你使用 `rootless` 镜像并直接使用宿主机目录挂载（例如 `volumes: [ /path/to/data/folder:/data ]`），请先将目录 `chown` 到用户 `65532`。
:::

## 环境变量与配置

| Variable                             | Default                 | Description                                                     |
| ------------------------------------ | ----------------------- | --------------------------------------------------------------- |
| HBOX_MODE                            | production              | 运行模式，可选：`development`、`production`                     |
| HBOX_WEB_PORT                        | 7745                    | Web 服务端口（Docker 下通常不要修改）                           |
| HBOX_WEB_HOST                        |                         | Web 服务绑定地址（Docker 下通常不要修改）                       |
| HBOX_OPTIONS_ALLOW_REGISTRATION      | true                    | 是否允许用户自行注册                                            |
| HBOX_OPTIONS_AUTO_INCREMENT_ASSET_ID | true                    | 新建物品是否自动递增 `asset_id`                                 |
| HBOX_OPTIONS_CURRENCY_CONFIG         |                         | 额外货币配置 JSON 文件路径                                      |
| HBOX_WEB_MAX_UPLOAD_SIZE             | 10                      | 最大上传大小（MB）                                              |
| HBOX_WEB_READ_TIMEOUT                | 10                      | HTTP 读取超时                                                   |
| HBOX_WEB_WRITE_TIMEOUT               | 10                      | HTTP 写入超时                                                   |
| HBOX_WEB_IDLE_TIMEOUT                | 30                      | HTTP 空闲超时                                                   |
| HBOX_STORAGE_DATA                    | /data/                  | 数据目录路径（Docker 下通常不要修改）                           |
| HBOX_STORAGE_SQLITE_URL              | /data/homebox.db?\_fk=1 | SQLite 连接串（Docker 下通常不要修改）                          |
| HBOX_LOG_LEVEL                       | info                    | 日志级别：`trace`、`debug`、`info`、`warn`、`error`、`critical` |
| HBOX_LOG_FORMAT                      | text                    | 日志格式：`text`、`json`                                        |
| HBOX_MAILER_HOST                     |                         | 邮件服务器地址                                                  |
| HBOX_MAILER_PORT                     | 587                     | 邮件端口                                                        |
| HBOX_MAILER_USERNAME                 |                         | 邮件用户名                                                      |
| HBOX_MAILER_PASSWORD                 |                         | 邮件密码                                                        |
| HBOX_MAILER_FROM                     |                         | 发件人地址                                                      |
| HBOX_SWAGGER_HOST                    | 7745                    | Swagger 主机（部署为空时可能禁用）                              |
| HBOX_SWAGGER_SCHEMA                  | http                    | Swagger 协议：`http`、`https`                                   |

::: tip CLI 参数
如果你不使用 Docker 部署，也可以通过命令行参数配置服务，执行 `homebox --help` 查看详情。
:::
