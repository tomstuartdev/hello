export const metadata = {
  title: "Contact us - Creative",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import Cta from "@/components/cta-distro";
import Company from "@/components/comapny";
import BentoCompany from "@/components/bento-company";

export default function Contact() {
  return (
    <>
    <section>
      <div className="pt-0 pb-12 md:pt-0 md:pb-20">
        <div className="px-4 sm:px-6">
          {/* <PageHeader
            className="mb-12 md:mb-20"
            title="Get in touch"
            description="Reach out to set up a call, or get in touch with us for customer support, partnerships, or media enquiries."
          >
            Contact us
          </PageHeader> */}
          <BentoCompany/>
          

          
          
        </div>
      </div>
     
    </section>
     
     </>
  );
}
