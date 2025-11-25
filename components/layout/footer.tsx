import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const data = {
  facebookLink: "https://www.facebook.com/chickennearme",
  instaLink: "https://www.instagram.com/chickennearmeph",
  linkedInLink: "https://www.linkedin.com/company/chicken-near-me",
  services: {
    menu: "/menu?category=rice",
    // webdesign: "/web-design",
    // marketing: "/marketing",
    // googleads: "/google-ads",
  },
  about: {
    history: "/about",
    // team: "/meet-the-team",
    // handbook: "/employee-handbook",
    // careers: "/careers",
  },
  help: {
    faqs: "/faqs",
    // support: "/support",
    // livechat: "/live-chat",
  },
  contact: {
    email: "hello@chicken-nearme.com",
    // phone: "+63 8637373116",
    address:
      "Chicken Near Me Alabang, 111, Civic Prime Building, Civic Dr., Muntinlupa, 1771 Metro Manila",
  },
  company: {
    name: "Chicken Near Me",
    description: "No bones. All Flavor.",
    logo: "/cover.png",
  },
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: data.facebookLink },
  { icon: Instagram, label: "Instagram", href: data.instaLink },
  { icon: Linkedin, label: "LinkedIn", href: data.linkedInLink },
];

const aboutLinks = [
  { text: "Our Story", href: data.about.history },
  // { text: "Meet the Team", href: data.about.team },
  // { text: "Employee Handbook", href: data.about.handbook },
  // { text: "Careers", href: data.about.careers },
];

const serviceLinks = [{ text: "Menu", href: data.services.menu }];

const helpfulLinks = [{ text: "FAQs", href: data.help.faqs }];

const contactInfo = [
  {
    icon: Mail,
    text: data.contact.email,
    href: `mailto:${data.contact.email}`,
  },
  // { icon: Phone, text: data.contact.phone },
  {
    icon: MapPin,
    text: data.contact.address,
    isAddress: true,
    href: `https://maps.app.goo.gl/KTHzbW9gNNg2xzNF8`,
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 mt-16 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-primary flex justify-center gap-2 sm:justify-start">
              <Image
                priority
                src={data.company.logo || "/placeholder.svg"}
                alt="Chicken Near Me Logo"
                height={48}
                width={160}
                className="h-8 sm:h-10 w-auto object-contain"
              />
              {/* <span className="text-2xl font-semibold">
                {data.company.name}
              </span> */}
            </div>

            <p className="text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    prefetch={false}
                    href={href}
                    className="text-primary hover:text-primary/80 transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-secondary-foreground/70 transition hover:text-secondary-foreground"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Our Products</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-secondary-foreground/70 transition hover:text-secondary-foreground"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`${
                        hasIndicator
                          ? "group flex justify-center gap-1.5 sm:justify-start"
                          : "text-secondary-foreground/70 transition"
                      }`}
                    >
                      <span className="text-secondary-foreground/70 transition">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-primary relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            <div className="text-center sm:text-left md:col-span-2">
              <p className="text-lg font-medium">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress, href }) => (
                  <li key={text}>
                    <Link
                      className="flex items-center justify-center gap-1.5 sm:justify-start hover:text-secondary-foreground"
                      href={href}
                    >
                      <Icon className="text-primary size-5 shrink-0" />
                      {isAddress ? (
                        <address className="text-secondary-foreground/70 -mt-0.5 flex-1 not-italic transition hover:text-secondary-foreground">
                          {text}
                        </address>
                      ) : (
                        <span className="text-secondary-foreground/70 flex-1 transition hover:text-secondary-foreground">
                          {text}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; 2025 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
