import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Gallery } from "@/components/sections/gallery";
import { Reviews } from "@/components/sections/reviews";
import { Contact } from "@/components/sections/contact";
import { isValidLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(lang);

  return (
    <>
      <Hero dict={dict} />
      <About dict={dict} />
      <Services dict={dict} />
      <WhyChooseUs dict={dict} />
      <Gallery dict={dict} />
      <Reviews dict={dict} />
      <Contact dict={dict} locale={lang} />
    </>
  );
}
