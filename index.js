var oxr = require('open-exchange-rates');
var fx = require('money');
oxr.set({ app_id: '' })

oxr.latest(function() {
	// You can now use `oxr.rates`, `oxr.base` and `oxr.timestamp`
  // Apply exchange rates and base rate to `fx` library object:
  fx.rates = oxr.rates;
  fx.base = oxr.base;

  console.log(fx(100).from('HKD').to('EUR'));
});
