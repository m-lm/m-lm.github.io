---
title: "Taproot"
description: "Key-value store in C++"
date: "Jan 2025"
repoURL: "https://github.com/m-lm/taproot"
---

Taproot is a key-value store written in C++20 with minimal dependencies, supporting data persistence through append-only logs and LZ4-compressed binary snapshots with compaction for storage efficiency. It also supports client-server interfacing via TCP sockets by leveraging Asio, and emphasizes simplicity in setup, configuration, and workflow – all while being self-contained and easy to use.