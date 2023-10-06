import Page from '../app/header/page';
import FooterComponent from "./footer/footerComponent";
import GetDemo from "./footer/demoComponent";
import Register from "./header/register";
import OurClients from './main/clientPage';
import LocalBusiness from './main/localBusiness';
import Marketing from './main/marketing';
import AllCustomers from './main/meetAllCoustomers';

export default function Home() {
  return (
    <>
   {/* <div className="text-2xl">Hello world</div> */}
   <Page/>
   <Register/>
   <OurClients/>
   <LocalBusiness/>
   <AllCustomers/>
   <Marketing/>
   <GetDemo/>
   <FooterComponent/>
</>
   
  )
}
