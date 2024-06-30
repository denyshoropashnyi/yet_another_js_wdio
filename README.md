# yet_another_js_wdio
yet_another_js_wdio

# WebdriverIO Test Suite for https://www.saucedemo.com
This repository contains 2 automated test cases for www.saucedemo.com using WebdriverIO.

## Table of Contents

- [Setup](#setup)
- [Running Tests](#running-tests)
- [Test Cases](#test-cases)
  - [Test 1: Perform Login](#test-1-perform-login)
  - [Test 2: Add Product to the Cart](#test-2-add-product-to-the-cart)

## Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/denyshoropashnyi/yet_another_js_wdio
    cd yet_another_js_wdio
    ```

2. **Install dependencies:**

    Ensure you have Node.js installed. Then, run:

    ```sh
    npm install
    ```

3. **WebdriverIO configuration:**

    WebdriverIO configuration should be set up in a `wdio.conf.js` file. If you don't have one, you can generate it using:

    ```sh
    npx wdio config
    ```

## Running Tests

To execute the tests, run:

```sh
npx wdio run wdio.conf.js
