# 📚 Data Structures in TypeScript (with Jest Testing)

This repository is a personal learning project where I implement classic data structures using **TypeScript**, with thorough **unit tests using Jest**.

The goal is to build a strong foundation in **data structures and algorithms** while practicing **type-safe, test-driven development**.

---

## ✅ What’s Covered

| Data Structure            | Status       | Description                                                                 |
| ------------------------- | ------------ | --------------------------------------------------------------------------- |
| Linked List               | ✅ Completed | Singly linked list with basic insert, delete, and search operations         |
| Doubly Linked List        | 🔜 Upcoming  | Each node points to both the next and previous node for efficient traversal |
| Stack (Linked List-based) | 🔜 Upcoming  | LIFO stack implementation using a linked list internally                    |
| Stack (Array-based)       | 🔜 Upcoming  | LIFO structure implemented using a dynamic array                            |
| Queue (Array or LL)       | 🔜 Upcoming  | FIFO queue structure using either array or linked list                      |
| Binary Tree               | 🔜 Upcoming  | Hierarchical structure with nodes having at most two children               |
| Binary Search Tree        | 🔜 Upcoming  | A binary tree where left < root < right; supports efficient search/insert   |
| Min Heap                  | 🔜 Upcoming  | Complete binary tree with the smallest value at the root                    |
| Max Heap                  | 🔜 Upcoming  | Complete binary tree with the largest value at the root                     |
| Priority Queue            | 🔜 Upcoming  | A queue where elements are dequeued based on priority, not just order       |

---

## 🧪 Testing Setup

All code is written in **TypeScript** and tested with **Jest**.

### Running Tests

```bash
# install dependencies
pnpm install

# run all tests
pnpm test

# Or, to run test in watch mode:
pnpm test --watch
```

## 📁 Project Structure

```bash
ds-playground/
├── src/
│ ├── linked-list/
│ │ ├── linked-list.ts
│ │ └── linked-list.test.ts
│ └── ...
├── jest.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- TypeScript – for writing strongly typed implementations

- Jest – for writing clean and maintainable unit tests

- pnpm – for fast, efficient package management

## 🎯 Learning Goals

- Understand how common data structures work under the hood.

- Practice writing reusable, type-safe TypeScript code.

- Learn how to write clean, maintainable unit tests with Jest.

- Use Git and GitHub to track and share my learning progress.

## 📌 Notes

This is a personal learning project. Feedback and suggestions are welcome!
