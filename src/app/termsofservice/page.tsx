import React from "react";

type Props = {};

const TermsOfService = (props: Props) => {
  return (
    <div className="max-w-[1240px] w-full mx-auto mb-10">
      <h1 className="text-3xl font-semibold mt-10 text-[#0056B3]">
        Terms of Service
      </h1>
      <p className="text-xl mt-8">
        Welcome to Cleancrafters! These Terms of Service govern your use of our
        website and services. By accessing or using our website, you agree to
        comply with these terms and conditions.
      </p>
      <div className="text-xl mt-10">
        1. Use of Our Services You must be at least 18 years old to use our
        services.
        <ul className="mt-4 pl-8 space-y-4 text-lg">
          <ol>You must be at least 18 years old to use our services.</ol>
          <ol>
            You agree to provide accurate and up-to-date information when using
            our website or booking our services.
          </ol>
          <ol>
            You are responsible for maintaining the confidentiaolty of your
            account credentials and for any activities that occur under your
            account.
          </ol>
        </ul>
      </div>
      <div className="text-xl mt-10">
        2. Booking and Payment
        <ul className="mt-4 pl-8 space-y-4 text-lg">
          <ol>
            By booking our services, you agree to pay the agreed-upon fees for
            the service provided.
          </ol>
          <ol>
            Payment is due at the time of booking, unless otherwise arranged.
          </ol>
          <ol>
            We reserve the right to refuse or cancel any booking at our
            discretion.
          </ol>
        </ul>
      </div>
      <div className="text-xl mt-10">
        3. Cancellation and Refunds
        <ul className="mt-4 pl-8 space-y-4 text-lg">
          <ol>
            Cancellations made within an hour of the scheduled service may be
            subject to a cancellation fee.
          </ol>
          <ol>Refunds will be issued in accordance with our refund policy.</ol>
        </ul>
      </div>
      <div className="text-xl mt-10">
        4. Changes to Terms
        <ul className="mt-4 pl-8 space-y-4 text-lg">
          <ol>
            We reserve the right to modify or revise these Terms of Service at
            any time. Any changes will be effective immediately upon posting on
            our website.
          </ol>
        </ul>
      </div>
      <p className="text-lg mt-10">
        Contact Us If you have any questions or concerns about our Terms of Service, please contact us at <span className="font-semibold">info@haelsoft.com</span>.
      </p>
    </div>
  );
};

export default TermsOfService;
