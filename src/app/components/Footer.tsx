import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              <li>SMS API</li>
              <li>Voice API</li>
              <li>Verify API</li>
              <li>MMS API</li>
              <li className="text-green-500">WhatsApp Business API</li>
              <li>Zentrunk</li>
              <li>Number Lookup</li>
              <li>Phone Numbers</li>
              <li>Service</li>
              <li>Engage</li>
              <li>Support Plans</li>
            </ul>
          </div>
  
          {/* Developers */}
          <div>
            <h3 className="text-lg font-bold mb-4">DEVELOPERS</h3>
            <ul className="space-y-2">
              <li>Documentation</li>
              <li>Knowledge Base</li>
              <li>Server SDKs</li>
              <li>Client SDKs</li>
              <li>Full API Reference</li>
              <li>Product Updates</li>
            </ul>
          </div>
  
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li>Content Library</li>
              <li>Blog</li>
              <li>Guides</li>
              <li>Twilio Alternative</li>
              <li>Pricing</li>
              <li>Glossary</li>
            </ul>
          </div>
  
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Customers</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
  
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">Copyright © 2024 Plivo Inc.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm">SALES</a>
              <a href="#" className="text-sm">SUPPORT</a>
              <a href="#" className="text-sm">STATUS</a>
              <a href="#" className="text-sm">LEGAL</a>
              <a href="#" className="text-sm">SECURITY</a>
            </div>
            <div className="flex space-x-4">
            <a href="#" aria-label="Slack">
              <FontAwesomeIcon icon={faSlack} className="text-xl" />
            </a>
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
            </a>
            <a href="#" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="text-xl" />
            </a>
          </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  