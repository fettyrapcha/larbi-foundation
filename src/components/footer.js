import React from "react";

const Footer = () => {
  return (
    <footer className="py-8  bg-zinc-900 text-center">
      <section className="w-11/12  md:max-w-7xl mx-auto my-0 flex justify-between py-12 flex-col md:flex-row">
        <div className="">
          <img src="/images/tlf.png" alt="jj" width="130px" />
          <p className="text-gray-300 font-poppins">Making life better for everyone</p>
        </div>

        <div className="text-left py-2">
          <h3 className="font-bold text-gray-300 font-poppins text-lg md:text-xl">
            Quick Links
          </h3>
          <ul className="text-sm text-gray-500">
            <li className="pt-2"><a href="/">Donate</a></li>
            <li className="pt-2"><a
              href="/apply">Apply</a></li>
          </ul>
        </div>

        <div className="text-left py-2">
          <h3 className="font-bold font-poppins text-gray-300 text-lg md:text-xl">Organization</h3>
          <ul className="text-sm text-gray-500">
            <li className="pt-2"><a
              href="/about">ABout</a></li>
            <li className="pt-2">Blog</li>
          </ul>
        </div>

        <div className="text-left py-2">
          <h3 className="font-bold font-poppins text-gray-300 text-lg md:text-xl">Legal</h3>
          <ul className="text-sm text-gray-500">
            <li className="pt-2">Privacy</li>
            <li className="pt-2">Terms & Conditions</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="h-4 border-b-2"></div>
        <span className="block py-2 text-gray-400">
          © {new Date().getFullYear()} The Larbi Foundation, All Rights
          Reserved.
        </span>
      </section>
    </footer>
  );
};

export default Footer;
