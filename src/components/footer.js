import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <section className="flex justify-between py-12">
        <div className="">
          <img
            src="https://tando.netlify.app/static/media/tenga-logo.dc47f5b8.png"
            alt="jj"
            width="130px"
          />
          <p>Making selling easier for everyone</p>
        </div>
        <div className="text-left">
          <h3 className="font-bold font-mono text-lg md:text-xl">
            Quick Links
          </h3>
          <ul className="text-sm">
            <li className="pt-2">Marketing</li>
            <li className="pt-2">Commerce</li>
            <li className="pt-2">Insight</li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="font-bold font-mono text-lg md:text-xl">Company</h3>
          <ul className="text-sm">
            <li className="pt-2">About</li>
            <li className="pt-2">Blog</li>
            <li className="pt-2">Jobs</li>
            <li className="pt-2">Partners</li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="font-bold font-mono text-lg md:text-xl">Legal</h3>
          <ul className="text-sm">
            <li className="pt-2">Privacy</li>
            <li className="pt-2">Terms & Conditions</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="h-4 border-b-2"></div>
        <span className="block py-2">
          © {new Date().getFullYear()} Tendo Marketing Team, All Rights
          Reserved.
        </span>
      </section>
    </footer>
  );
};

export default Footer;
