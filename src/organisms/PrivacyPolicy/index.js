import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "700", subsets: ["latin"] });

const PrivacyPolicy = () => {
  return (
    <div className="px-6 md:px-12">
      <div className="py-6" >
        <h1 className={`${roboto.className} text-[24px] py-2`}>Privacy Policy</h1>
        <p>
          At [Your Beauty Contest Name], we value your privacy and are committed
          to protecting your personal information. This Privacy Policy outlines
          our practices regarding the collection, use, and disclosure of your
          data when you use our website or participate in our contests. By
          accessing or using [Your Beauty Contest Name], you consent to the
          terms and practices described in this policy.
        </p>
      </div>
      <div className="py-6" >
        <h1 className={`${roboto.className} text-[24px] py-2`}>Information We Collect</h1>
        <p>
          We may collect the following types of information: Personal
          Information: This includes your name, email address, contact
          information, and any other information you provide when creating an
          account, participating in the contest, or contacting us. Contest Data:
          Information related to your participation in the beauty contest,
          including votes received and contest-related activity. Device and
          Usage Information: We may collect information about the device you use
          to access our website and how you interact with our site, such as your
          IP address, browser type, and operating system. How We Use Your
          Information We use the collected information for the following
          purposes: Contest Participation: To manage your contestant profile and
          enable your participation in the beauty contest. Communication: To
          communicate with you regarding contest updates, results, and important
          announcements. Improvement: To analyze user behavior and preferences,
          allowing us to enhance our website, features, and user experience.
          Security: To protect against unauthorized access and maintain the
          security and integrity of our website and contest.
        </p>
      </div>

      <div className="py-6" >
        <h1 className={`${roboto.className} text-[24px] py-2`}>Sharing Your Information</h1>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share your information with: Service
          Providers: Trusted third-party service providers who help us operate
          our website and deliver contest services. Legal Requirements: To
          comply with applicable laws, regulations, or legal processes.
        </p>
      </div>

      <div className="py-6" >
        <h1 className={`${roboto.className} text-[24px] py-2`}>Your Choices and Rights</h1>
        <p>
          You have the right to: Access: Request access to the personal
          information we hold about you. Rectification: Request that we correct
          any inaccuracies in your personal information. Deletion: Request the
          deletion of your personal information, subject to applicable legal
          requirements. Opt-Out: Opt-out of marketing communications at any
          time.
        </p>
      </div>

      <div className="py-6" >
        <h1 className={`${roboto.className} text-[24px] py-2`}>Cookies and Tracking Technologies</h1>
        <p>
          We use cookies and similar tracking technologies to collect and store
          certain information about your use of our website. You can manage your
          cookie preferences through your browser settings. Changes to this
          Privacy Policy We may update this Privacy Policy from time to time to
          reflect changes in our practices or for legal reasons. We will notify
          you of any material changes through our website. Contact Us If you
          have questions or concerns regarding this Privacy Policy or our data
          practices, please contact us at [Contact Email].
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
