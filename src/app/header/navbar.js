import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-around'>
      <ul className='flex flex-row '>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/service">Service</Link>
        </li>
        <li>
          <Link href="/feature">Feature</Link>
        </li>
        <li>
          <Link href="/product">Product</Link>
        </li>
        <li>
          <Link href="/testimonial">Testimonial</Link>
        </li>
         <li>
          <Link href="/faq">FAQ</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;