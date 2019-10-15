import React from 'react';
import "./Footer.css"

class Footer extends React.Component {
    render() {
       return(
           <>
<footer>
    <div className="footerSet" class="container">
        <div className="footerBrand" class="row">
<p>brand test</p>

        </div>

        <div className="footerColumn">
            <div className="footerColumn-1">

            </div>

            <div class="footerColumn-2">

            </div>

            <div class="footerColumn-3">

            </div>
        </div>

        <div className="footerCOPY">
             <div className="col-sm-6">Copyright &copy; 2019 XXX</div>
        </div>
    </div>
</footer>  
</>  
       );
    }
 }

 export default Footer;
