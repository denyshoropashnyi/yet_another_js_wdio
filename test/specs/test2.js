import { expect, browser, $ } from '@wdio/globals';

describe('Test 2 -Add product to the cart', () => {
  it('Should log in to the "Swag Labs" page', async () => {
    await browser.url(`https://www.saucedemo.com/`);
    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('#login-button').click();

    const actualUrl = await browser.getUrl();
    const expectedUrl = 'https://www.saucedemo.com/inventory.html';

    expect(actualUrl).toBe(expectedUrl);
  });

  it('Should add the first product to the cart', async () => {
    const allAddToCartButtons = await $$(
      'button.btn_primary.btn_small.btn_inventory'
    );

    if (allAddToCartButtons.length > 0) {
      const firstAddToCartButton = allAddToCartButtons[0];

      await firstAddToCartButton.click();
    }
  });

  it('Should display Shopping Cart icon = 1', async () => {
    const shoppingCartBadge = await $('span[data-test="shopping-cart-badge"]');

    await expect(shoppingCartBadge).toHaveText('1');
  });

  it('Should open the Shopping Cart and check the added product is displayed', async () => {
    const productItems = await $$('.inventory_item_description a');
    const firstProductItemName = await productItems[0].getText();
    const shoppingCartIcon = await $('a[data-test="shopping-cart-link"]');

    await shoppingCartIcon.click();

    const cartProductItems = await $$('.cart_item a');
    const cartProductName = await cartProductItems[0].getText();

    await expect(cartProductName).toBe(firstProductItemName);
  });

  it('Should remove the product by clicking Remove', async () => {
    const allRemoveButtons = await $$('.cart_item button');
    const singleRemoveButton = allRemoveButtons[0];

    await singleRemoveButton.click();
  });

  it('Should no products be available in the Shopping Cart', async () => {
    const allProductsInCart = await $$('div.cart_item');

    expect(allProductsInCart.length).toBe(0);
  });
});
