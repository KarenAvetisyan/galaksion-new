"use client";

import { useEffect } from "react";

const FacebookPixel = () => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "production"
    ) {
      try {
        const script = document.createElement("script");

        script.innerHTML = `
          try {
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2972157889529058');
            fbq('track', 'PageView');
          } catch (e) {
            console.log('Facebook Pixel blocked');
          }
        `;
        document.head.appendChild(script);

        const noscript = document.createElement("noscript");

        noscript.innerHTML = `
          <img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=2972157889529058&ev=PageView&noscript=1"
          />
        `;
        document.body.appendChild(noscript);
      } catch (error) {
        console.log('Facebook Pixel script error:', error);
      }
    }
  }, []);

  return null;
};

export default FacebookPixel;
