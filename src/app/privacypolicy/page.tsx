import React from "react";

type Props = {};

const PrivacyPolicies = (props: Props) => {
  return (
    <div className="max-w-[1240px] w-full mx-auto mb-10">
      <h1 className="text-3xl font-semibold mt-10 text-[#0056B3]">
        Privacy Policy
      </h1>
      <p className="text-xl mt-8">
        This Privacy Policy describes how Cleancrafters{" "}
        {"('we', 'us', or 'our')"} collects, uses, and discloses personal
        information when you use our website and services.
      </p>
      <div className="text-xl mt-10">
        1. Information We Collect
        <ul className="mt-4 pl-8 space-y-4 text-lg">
          <ol>
            Personal Information: When you use our website or book our services,
            we may collect personal information such as your name, email
            address, phone number, and billing information.
          </ol>
          <ol>
            Usage Data: We may also collect information about how you interact
            with our website, such as your IP address, browser type, pages
            visited, and timestamps.
          </ol>
        </ul>
      </div>
      <div className="text-xl mt-10">
        2. How We Use Your Information
        <ul className="mt-4 pl-8 space-y-4 text-lg">
          <ol>
            We use the information we collect to provide and improve our
            services, communicate with you, process payments, and customize your
            experience on our website.
          </ol>
          <ol>
            We may also use your information to send you promotional emails or
            newsletters, but you can opt out of receiving these communications
            at any time.
          </ol>
        </ul>
      </div>
      <div className="text-xl mt-10">
        3. Data Sharing and Disclosure
        <ul className="mt-4 pl-8 space-y-4 text-lg">
          <ol>
            We may share your personal information with third-party service
            providers who assist us in operating our website and providing our
            services.
          </ol>
          <ol>
            We may also share your information in response to legal requests or
            to protect our rights or the rights of others.
          </ol>
        </ul>
      </div>
      <div className="text-xl mt-10">
        4. Changes to This Privacy Policy
        <ul className="mt-4 pl-8 space-y-4 text-lg">
          <ol>
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page, and the effective date will be updated
            accordingly.
          </ol>
        </ul>
      </div>
      <p className="text-lg mt-10">
        Contact Us If you have any questions or concerns about our Privacy
        Policy, please contact us at <span className="font-semibold">info@haelsoft.com</span>.
      </p>
    </div>
  );
};

export default PrivacyPolicies;
