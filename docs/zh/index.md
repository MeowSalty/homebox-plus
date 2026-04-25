---
layout: home

hero:
  name: "Homebox"
  text: "专为家庭用户打造的库存与整理系统"
  tagline: 简单优先的家庭物品管理
  image:
    src: /img/lilbox.svg
    alt: Homebox Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/guide/quick-start
    - theme: alt
      text: CSV 导入
      link: /zh/reference/import-csv

features:
  - title: 简单
    details: Homebox 以易用性为核心，部署和维护成本低。
  - title: 高性能
    details: 基于 Go 构建，运行高效、资源占用低，适合家庭服务器。
  - title: 易迁移
    details: 通过 SQLite 与内嵌 Web UI，部署、备份和恢复都更直接。
---

## 项目状态

Homebox 目前处于活跃开发阶段，版本状态仍为 **beta**。

## 功能

- 使用名称和描述即可快速创建和管理物品。
- 支持补充保修、购买信息、序列号/型号、备注与附件等可选信息。
- 支持 CSV 导入与导出。
- 提供报表能力，包括物料清单与标签相关流程。
- 支持通过标签与位置组织数据。
- 支持多租户，通过分组实现数据隔离。

## 为什么不直接用其他系统？

Homebox 聚焦家庭库存场景，强调轻量流程与更低认知负担，而不是企业级复杂功能。
