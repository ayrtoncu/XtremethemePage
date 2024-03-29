import Script from "@frontity/components/script";
import { connect } from "frontity";

const Tawkto = () => {
  return (
    <Script
        code={`
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/5c8844a4101df77a8be24a10/default';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        `}
      />
  );
}

export default connect(Tawkto) ;
