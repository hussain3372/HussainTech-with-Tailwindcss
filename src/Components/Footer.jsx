import { Link } from "react-router-dom";

export default () => {
  const footerNavs = [
    {
      label: "Resources",
      items: [
        {
          href: "/about",
          name: "contact",
        },
        {
          href: "/about",
          name: "Support",
        },
        {
          href: "/about",
          name: "Documentation",
        },
        {
          href: "/about",
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "/about",
          name: "Terms",
        },
        {
          href: "/about",
          name: "License",
        },
        {
          href: "/about",
          name: "Privacy",
        },
        {
          href: "/about",
          name: "About US",
        },
      ],
    },
    {
      label: "Explore",
      items: [
        {
          href: "/about",
          name: "Showcase",
        },
        {
          href: "/about",
          name: "Roadmap",
        },
        {
          href: "/about",
          name: "Languages",
        },
        {
          href: "/about",
          name: "Blog",
        },
      ],
    },
    {
      label: "Company",
      items: [
        {
          href: "/about",
          name: "Partners",
        },
        {
          href: "/about",
          name: "Team",
        },
        {
          href: "/about",
          name: "Careers",
        },
      ],
    },
  ];

  return (
    <footer className="pt-20 mt-60 bg-slate-800 text-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex">
          <h1 className="text-4xl">Hussain</h1>
          <span className="text-5xl text-red-500">TECH</span>
        </div>
        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4 text-white" key={idx}>
              <h4 className="text-white font-semibold sm:pb-2">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <Link to={el} className="hover:text-gray-400 duration-150">
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p className="text-gray-600">
            © 2022 Hussain Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-x-6 text-gray-400 mt-6"></div>
        </div>
      </div>
    </footer>
  );
};
