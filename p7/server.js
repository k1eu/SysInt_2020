const { Resolver } = require('dns');

const dns = require('dns');
const resolver = new Resolver();

resolver.setServers(['1.1.1.1']);

resolver.resolve4('bard.sh', (err, addresses) => {
  console.log(addresses);
});

resolver.resolveMx('bard.sh', (err, addresses) => {
  console.log(addresses);
});


dns.lookup('bard.sh', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});