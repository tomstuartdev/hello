export const metadata = {
  title: "Faq - Creative",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta-distro";

export default function Faq() {
  const faqs = [
    {
      title: "What is TRAX?",
      text: "TRAX users support their favourite artists by paying to hear new music first. By changing the rules of how music is shared online, our platform empowers creators to make real connections and begin earning more from their art earlier in their career.",
      active: false,
    },
    {
      title:
        "What happens when I follow/subscribe to an artist?",
      text: "Following an artist keeps you in the loop on career updates and new releases coming to TRAX. Artists are able to see the email addresses of anyone who follows them on the platform. You may receive newsletter updates from artists you follow from your user account.",
      active: false,
    },
    {
      title: "Who can sign up as an artist?",
      text: "TRAX invites anyone who makes music to sign up to the platform and begin earning more from their art. We perform ID checks on all new sign-ups to make sure artists are who they say they are and for KYC purposes.",
      active: false,
    },
    {
      title: "What payment methods can I use?",
      text: "TRAX supports credit card and PayPal payments. As a blockchain project, we also enable fans to pay with crypto by creating a wallet on the ICP network and integrating it with their account. We recommend first-time users interested in crypto check out Plug.",
      active: true,
    },
    {
      title: "How does the referral system work?",
      text: "Our Referral Scheme allows for current artist users to introduce new artist users to the site, and the chance to benefit from doing so. As an artist you may earn 5% from all transactions on a referred artist's account for 12 months if they sign up using your unique referral link and code. Please see our referral policy for more information.",
      active: false,
    },
    {
      title: "How can I work with TRAX?",
      text: "TRAX aims to put creators at the centre of everything we do. If you have a new project you'd like to bring to TRAX and require input or support from us, please reach out at support@trax.so and provide as much detail as you can.",
      active: false,
    },
  ];

  return (
    <>
      <section>
        <div className="pt-12 pb-12 md:pt-12 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              className="mb-12 md:mb-20"
              title="Learn more about TRAX"
              description="Here we provide answers for the most common questions. From creating an account to payments and paid subscriptions."
            >
              Quick Answers
            </PageHeader>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-1">
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    id={`faqs-${index}`}
                    active={faq.active}
                  >
                    {faq.text}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
