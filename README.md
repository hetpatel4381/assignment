# 🛒 Checkout Queue Distribution System

A smart and efficient checkout queue management system for hypermarkets that automatically distributes customers to checkout machines based on queue load balancing.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technical Architecture](#technical-architecture)
- [Algorithm Implementation](#algorithm-implementation)
- [Usage Guide](#usage-guide)
- [Technical Details](#technical-details)
- [Future Roadmap](#future-roadmap)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

The Checkout Queue Distribution System is designed to optimize customer flow in hypermarkets by intelligently assigning customers to checkout machines. The system ensures efficient queue management by considering the total number of items in each queue, leading to reduced waiting times and improved customer satisfaction.

## ✨ Features

- **Smart Queue Distribution**: Automatically assigns customers to the least loaded checkout
- **Real-time Updates**: Instant UI updates as customers are added
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Error Handling**: Robust input validation and error management
- **Clean Interface**: Modern and intuitive user experience

## 🏗️ Technical Architecture

The solution is built using a clean, modular architecture with three main components:

### 1. Frontend Structure
- **HTML**: Semantic markup with three checkout machines and customer input section
- **CSS**: Modern, responsive design with clear visual queue representation
- **JavaScript**: Efficient queue management algorithm and dynamic UI updates

### 2. Core Components
- Queue Management System
- Customer Distribution Algorithm
- Real-time UI Update Engine
- Input Validation System

## 🔍 Algorithm Implementation

The core distribution algorithm follows these steps:

1. **Queue Analysis**: When a new customer arrives, the system calculates the total number of items in each checkout queue
2. **Load Balancing**: The customer is assigned to the checkout with the least total number of items
3. **Tie Resolution**: If multiple checkouts have the same total, the customer is assigned to the leftmost checkout (smallest index)

### Performance Analysis

| Operation | Time Complexity | Description |
|-----------|----------------|-------------|
| Finding least loaded checkout | O(n) | Linear scan through n checkout machines |
| Adding customer to queue | O(1) | Constant time operation |
| UI Updates | O(m) | Updates for m customers in selected queue |

Overall time complexity for processing a new customer: O(n + m)

## 🚀 Usage Guide

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Getting Started
1. Open `index.html` in your web browser
2. Enter the number of items for a new customer in the input field
3. Click the "Add Customer" button to assign the customer
4. Watch as the system automatically updates the queues and totals

### Input Requirements
- Number of items must be a positive integer
- Each customer must have at least one item
- System starts with empty queues

## 💻 Technical Details

- **Technology Stack**: Vanilla JavaScript, HTML5, CSS3
- **Browser Support**: All modern browsers
- **Responsive Design**: Mobile-first approach
- **Code Quality**: Follows best practices and maintainability standards
- **Error Handling**: Comprehensive input validation and error management

## 📈 Future Roadmap

1. **Queue Management**
   - Add customer removal functionality
   - Implement maximum queue length limits
   - Add queue priority system

2. **UI Enhancements**
   - Add smooth animations for queue updates
   - Implement dark/light mode
   - Add queue statistics and analytics

3. **System Features**
   - Add reset functionality
   - Customizable number of checkout machines
   - Save/load queue states
   - Multi-language support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Your Name/Organization]
 
 