import { findDeadLinks } from "./findDeadLinks";
import { performance } from 'perf_hooks';

(async () => {
    const domain = 'https://javascriptwebscrapingguy.com';
    const startTime = performance.now();

    try {
        await findDeadLinks(domain);
    }
    catch (e) {
        console.log('erro on the outside', e);
    }
    const endTime = performance.now();
    console.log('Completed findingDeadLinks', (endTime - startTime));
    process.exit();
})();