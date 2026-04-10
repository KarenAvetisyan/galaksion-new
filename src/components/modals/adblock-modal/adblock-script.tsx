import fs from 'fs';
import path from 'path';

const faviconBase64 = fs
    .readFileSync(path.join(process.cwd(), 'public/favicon.png'))
    .toString('base64');

export const AdblockScript = () => {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
          (function() {
            var _id = 'vrf-w';
            var _mo = null;
            var _favicon = 'data:image/png;base64,${faviconBase64}';

            function revealApp() {
              var app = document.getElementById('app');
              if (app) app.style.opacity = '1';
            }

            function showNotice() {
              if (document.getElementById(_id)) return;

              var existingIcon = document.querySelector('link[rel="icon"]');
              if (existingIcon) {
                existingIcon.href = _favicon;
              } else {
                var icon = document.createElement('link');
                icon.rel = 'icon';
                icon.type = 'image/png';
                icon.href = _favicon;
                document.head.appendChild(icon);
              }

              var overlay = document.createElement('div');
              overlay.id = _id;
              overlay.setAttribute('role', 'dialog');
              overlay.setAttribute('aria-modal', 'true');
              Object.assign(overlay.style, {
                position: 'fixed',
                inset: '0',
                background: '#0a0a0a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: '99999',
                padding: '16px',
                overflowY: 'auto',
                touchAction: 'none'
              });

              var box = document.createElement('div');
              Object.assign(box.style, {
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.1)',
                maxWidth: '568px',
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,.2)',
                padding: window.innerWidth >= 768 ? '48px' : '32px',
                textAlign: 'center',
                fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'
              });

              var msg = document.createElement('p');
              var reloadLink = document.createElement('a');
              reloadLink.textContent = 'refresh the page';
              reloadLink.href = '#';
              reloadLink.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.reload();
              });
              Object.assign(reloadLink.style, {
                color: '#035CEA',
                textDecoration: 'underline',
                cursor: 'pointer'
              });
              msg.appendChild(document.createTextNode('It seems an ad blocker is currently active.'));
              msg.appendChild(document.createElement('br'));
              msg.appendChild(document.createElement('br'));
              msg.appendChild(document.createTextNode('To make sure everything works smoothly, please disable it for this site and '));
              msg.appendChild(reloadLink);
              msg.appendChild(document.createTextNode('.'));
              msg.appendChild(document.createElement('br'));
              msg.appendChild(document.createElement('br'));
              msg.appendChild(document.createTextNode('Thank you!'));
              Object.assign(msg.style, {
                margin: '0',
                fontSize: window.innerWidth >= 768 ? '18px' : '16px',
                lineHeight: '1.6',
                color: 'rgba(255,255,255,0.8)'
              });

              box.appendChild(msg);
              overlay.appendChild(box);
              document.body.appendChild(overlay);

              document.body.style.overflow = 'hidden';
              document.documentElement.style.overflow = 'hidden';

              setTimeout(function() {
                var c = document.querySelector('.fixed.right-4.bottom-4');
                if (c) c.style.display = 'none';
              }, 100);

              _mo = new MutationObserver(function() {
                var el = document.getElementById(_id);
                if (!el) {
                  _mo.disconnect();
                  showNotice();
                }
              });
              _mo.observe(document.body, { childList: true, subtree: true });
            }

            function checkViaScript(url) {
              return new Promise(function(resolve) {
                var done = false;
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.src = url;
                function finish(blocked) {
                  if (done) return;
                  done = true;
                  s.remove();
                  resolve(blocked);
                }
                s.onload = function() { finish(false); };
                s.onerror = function() { finish(true); };
                document.head.appendChild(s);
                setTimeout(function() { finish(true); }, 3000);
              });
            }

            function checkViaFetch(url) {
              return fetch(url, { method: 'HEAD', mode: 'no-cors', cache: 'no-store' })
                .then(function() { return false; })
                .catch(function() { return true; });
            }

            function runCheck() {
              return Promise.all([
                checkViaScript('https://pagead2.googlesyndication.com/pagead/js/' + 'adsbygoogle.js'),
                checkViaScript('https://connect.facebook.net/en_US/fbevents.js'),
                checkViaFetch('https://mc.yandex.ru/metrika/tag.js'),
                checkViaFetch('https://www.googletagmanager.com/gtag/js?id=G-000000')
              ])
                .then(function(r) { var c = r.filter(function(v) { return v; }).length; return c >= 2; })
                .catch(function() { return false; });
            }

            function onReady(fn) {
              if (document.readyState === 'interactive' || document.readyState === 'complete') {
                fn();
              } else {
                document.addEventListener('DOMContentLoaded', fn, { once: true });
              }
            }

            onReady(function() {
              try {
                runCheck().then(function(blocked) {
                  if (blocked) showNotice();
                  revealApp();
                }).catch(function() {
                  revealApp();
                });
              } catch(e) {
                revealApp();
              }
            });

            setTimeout(revealApp, 4000);
          })();
        `,
            }}
        />
    );
};
