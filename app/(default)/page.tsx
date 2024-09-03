export const metadata = {
  title: "TRAX | New music starts here",
  description: "A new way for artists to release music, capture fan data and earn more from their art.",
};

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";

export default function Home() {
  return (
    <section>
      <div className="pt-48 pb-12 md:pt-28 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="New music starts here"
            description="A new way for artists to release music, capture fan data and earn more from their art."
          >
            New Version <span className="text-gray-300 mx-1">·</span> Coming
            Soon
          </PageHeader>

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
