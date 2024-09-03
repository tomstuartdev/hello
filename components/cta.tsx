import SubscribeForm from "@/components/subscribe-form";

export default function Cta() {
  return (
    <section>
      <div className="pb-12 md:pb-20">
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="pt-12 md:pt-20 text-center border-t [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.72),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] shadow-[inset_0_1px_0_0_theme(colors.white/.2)] dark:shadow-none mb-12">
              <h2 className="h2 uppercase text-6xl md:text-9xl font-bold text-neutral-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-[#A8FF00] dark:to-neutral-100 pb-4">
                Join the community
              </h2>
            </div>
          </div>

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
