import 'jquery.payment';

function plugin (Vue, options = {}) {
  // Provide the whole library to vue
  Vue.prototype.$payment = $.payment;
  // Provide a directive for formatting fields
  Vue.directive('payment', {
    bind(el, binding) {
      // If used on a component, find the input node
      if (el.tagName.toLowerCase() !== 'input') {
        el = $(el).find('input')[0];
      }
      // An element is required
      if (!el) return;
      // Arg is required
      if (!binding.arg) return;
      // DOM is case-insensitive, so values passed through will be lowercase, let\s find the correct equivalent
      let method = Object.keys($.payment.fn).find((key) => key.toLowerCase() === binding.arg.toLowerCase());
      $(el).payment(method);
    }
  })
}

plugin.version = '__VERSION__'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
