# vue-stripe-payment

[![npm](https://img.shields.io/npm/v/vue-stripe-payment.svg)](https://www.npmjs.com/package/vue-stripe-payment)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Vue wrapper for validating payment form fields. **This Plugin is dependent on jQuery**

A directive is provided for input masking form fields, and the whole payment library is available under the `this.$payment` object.

[Demo](https://samturrell.github.io/vue-stripe-payment/example)

## Installation

Via npm:
```sh
yarn add vue-stripe-payment
- OR -
npm install vue-stripe-payment
```

## Using this plugin

Adding vue-stripe-payment to your application is as simple as any other plugin:

```js
import Vue from 'vue';

import VueStripePayment from 'vue-stripe-payment';

Vue.use(VueStripePayment);

new Vue({
  el: '#app',
});
```

The `v-stripe-payment` directive is now available to your app. Masks can be accessed as the arg of this directive, for example:

```html
<form>
  <div class="form-group">
    <label>Card number</label>
    <input class="form-control" v-payment:formatCardNumber>
  </div>
  <div class="form-group">
    <label>Card Expiry</label>
    <input class="form-control" v-payment:formatCardExpiry>
  </div>
  <div class="form-group">
    <label>Card CVC</label>
    <input class="form-control" v-payment:formatCardCVC>
  </div>
  <div class="form-group">
    <label>Numeric input</label>
    <input class="form-control" v-payment:restrictNumeric>
  </div>
  <button class="btn btn-primary">Submit</button>
</form>
```

For further details, see the [stripe/jquery.payment](https://github.com/stripe/jquery.payment) readme.

## :scroll: Changelog
Details changes for each release are documented in the [CHANGELOG.md](https://github.com/samturrell/vue-stripe-payment/blob/dev/CHANGELOG.md).

## :copyright: License

[MIT](http://opensource.org/licenses/MIT)
