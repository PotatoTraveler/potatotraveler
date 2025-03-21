// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-playfair text-xl tracking-wide">
              POTATO TRAVELER
            </Link>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary hover:text-secondary transition-colors duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary hover:text-secondary transition-colors duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-primary hover:text-secondary transition-colors duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0a12 12 0 0 0-4.373 23.178c-.035-.87-.065-2.204.014-3.154.071-.854.456-2.437.456-2.437s-.116-.297-.116-.736c0-.691.4-1.205.897-1.205.424 0 .628.318.628.7 0 .424-.271 1.058-.41 1.646-.117.49.247.888.731.888.878 0 1.552-.926 1.552-2.261 0-1.181-.845-2.01-2.056-2.01-1.398 0-2.22 1.052-2.22 2.144 0 .424.159.879.358 1.128.039.049.045.091.033.141-.036.15-.117.472-.133.537-.021.088-.07.106-.162.064-.602-.282-.976-1.165-.976-1.875 0-1.555 1.128-2.984 3.255-2.984 1.711 0 3.043 1.218 3.043 2.845 0 1.699-1.071 3.066-2.566 3.066-.502 0-.973-.262-1.133-.571l-.308 1.175c-.111.424-.41 1.136-.611 1.522.459.141.943.217 1.446.217 2.761 0 5-2.239 5-5 0-2.762-2.239-5-5-5z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-montserrat text-sm text-secondary">
                &copy; {currentYear} Potato Traveler. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <Link href="/privacy" className="font-montserrat text-xs text-secondary hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-montserrat text-xs text-secondary hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/contact" className="font-montserrat text-xs text-secondary hover:text-primary transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="font-montserrat text-xxs text-secondary">
            Made with love for photography enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}