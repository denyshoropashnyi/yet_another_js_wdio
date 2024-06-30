import { expect, browser, $ } from '@wdio/globals';

describe('Test 1 - Perform Login', () => {
  beforeEach(async () => {
    await browser.url(`/`);
    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('#login-button').click();

    const actualUrl = await browser.getUrl();
    const expectedUrl = 'https://www.saucedemo.com/inventory.html';
    expect(actualUrl).toBe(expectedUrl);
  });

  it("Should display 'Products' title", async () => {
    const productsTitleText = await $('span[data-test="title"]').getText();

    expect(productsTitleText).toBe('Products');
  });

  it('Should display Shopping Cart icon', async () => {
    const shoppingCartIcon = await $('a[data-test="shopping-cart-link"]');

    expect(shoppingCartIcon).toBeDisplayed();
  });

  it('Should display more than 1 product', async () => {
    const shoppingItems = await $$('div[data-test="inventory-item"]');

    expect(shoppingItems.length).toBeGreaterThan(1);
  });
});
