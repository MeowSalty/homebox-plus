# Quick Start

Great for testing out the application, but not recommended for stable use. Check out Docker Compose for the recommended deployment.

For each image there are two tags, respectively the regular tag and `$TAG-rootless`, which uses a non-root image.

## Docker Run

```sh
# If using the rootless image, ensure data
# folder has correct permissions
mkdir -p /path/to/data/folder
chown 65532:65532 -R /path/to/data/folder

# Run the image
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

::: info Rootless image and host mount
If you use the `rootless` image and prefer a host mount directly (for example `volumes: [ /path/to/data/folder:/data ]`), you need to `chown` the chosen directory in advance to user `65532`.
:::

## Env Variables & Configuration

| Variable                             | Default                | Description                                                                        |
| ------------------------------------ | ---------------------- | ---------------------------------------------------------------------------------- |
| HBOX_MODE                            | production             | Application mode, one of: `development`, `production`                             |
| HBOX_WEB_PORT                        | 7745                   | Web server port (do not change when using Docker)                                 |
| HBOX_WEB_HOST                        |                        | Web server host (do not change when using Docker)                                 |
| HBOX_OPTIONS_ALLOW_REGISTRATION      | true                   | Allow users to register themselves                                                 |
| HBOX_OPTIONS_AUTO_INCREMENT_ASSET_ID | true                   | Auto increment `asset_id` for new items                                           |
| HBOX_OPTIONS_CURRENCY_CONFIG         |                        | JSON file path for additional currencies                                           |
| HBOX_WEB_MAX_UPLOAD_SIZE             | 10                     | Maximum upload size in MB                                                          |
| HBOX_WEB_READ_TIMEOUT                | 10                     | HTTP read timeout                                                                  |
| HBOX_WEB_WRITE_TIMEOUT               | 10                     | HTTP write timeout                                                                 |
| HBOX_WEB_IDLE_TIMEOUT                | 30                     | HTTP idle timeout                                                                  |
| HBOX_STORAGE_DATA                    | /data/                 | Data directory path (do not change when using Docker)                             |
| HBOX_STORAGE_SQLITE_URL              | /data/homebox.db?_fk=1 | SQLite connection string (do not change when using Docker)                        |
| HBOX_LOG_LEVEL                       | info                   | Log level: `trace`, `debug`, `info`, `warn`, `error`, `critical`                 |
| HBOX_LOG_FORMAT                      | text                   | Log format: `text`, `json`                                                         |
| HBOX_MAILER_HOST                     |                        | Mail host                                                                           |
| HBOX_MAILER_PORT                     | 587                    | Mail port                                                                           |
| HBOX_MAILER_USERNAME                 |                        | Mail username                                                                       |
| HBOX_MAILER_PASSWORD                 |                        | Mail password                                                                       |
| HBOX_MAILER_FROM                     |                        | Sender address                                                                      |
| HBOX_SWAGGER_HOST                    | 7745                   | Swagger host (if empty, swagger may be disabled in deployment)                    |
| HBOX_SWAGGER_SCHEMA                  | http                   | Swagger schema, one of: `http`, `https`                                           |

::: tip CLI Arguments
If you're deploying without Docker, you can use command line arguments to configure the application. Run `homebox --help` for more information.
:::

