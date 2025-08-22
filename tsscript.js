/**
 * [HtmlScript]{@link https://github.com/anarxyfr/TS-Script}
 *
 * @version 1.0.0
 * @author anarxyfr
 * @copyright anarxyfr 2025
 * @license MIT
 */

(function() {
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    loadScript('https://cdn.jsdelivr.net/npm/typescript@latest/lib/typescript.js')
        .then(() => {
            document.addEventListener('DOMContentLoaded', function() {
                const tsScripts = document.getElementsByTagName('ts-script');
                for (let i = 0; i < tsScripts.length; i++) {
                    const tsCode = tsScripts[i].textContent || tsScripts[i].innerText;
                    if (tsCode) {
                        const jsCode = ts.transpile(tsCode);
                        const scriptElem = document.createElement('script');
                        scriptElem.textContent = jsCode;
                        document.body.appendChild(scriptElem);
                    }
                }
            });
        })
        .catch(err => {
            console.error('Failed to load TypeScript compiler:', err);
        });
})();
