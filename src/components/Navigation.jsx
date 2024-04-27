import { useEffect, useState } from 'preact/hooks';


export default function Navigation() {
  const[mobileMenuIsOpen, toggleMobileMenu] = useState(false);
  
  return (
      <nav className="bg-white border-gray-200 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto">
              <a href="/" className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap tracking-tighter">hollis</span>
              </a>

              <div className="lg:hidden flex items-center lg:order-2">
                  <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-2" aria-expanded={mobileMenuIsOpen} onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}>
                      <span className="sr-only">{mobileMenuIsOpen ? 'Close' : 'Open'} main menu</span>
                      <svg className={`${mobileMenuIsOpen ? 'hidden' : ''} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                      <svg className={`${!mobileMenuIsOpen ? 'hidden' : ''} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </div>

              <div className={`${!mobileMenuIsOpen ? 'hidden' : ''} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                  <ul className="flex flex-col mt-4 font-sans font-semibold text-xs tracking-wide uppercase lg:flex-row lg:space-x-8 lg:mt-0">
                      <li>
                          <a href="/projects" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Projects</a>
                      </li>
                      <li>
                          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">About</a>
                      </li>
                      <li>
                          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Connect</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}
