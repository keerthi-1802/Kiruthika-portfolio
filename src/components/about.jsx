const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap');`;

const facts = [
  { label: "Role", value: "Full Stack Developer" },
  { label: "Focus", value: "Frontend development and user experience" },
  { label: "Goal", value: "Consistent experiences across every device" },
];

const principles = [
  {
    title: "Thoughtful design",
    text: "Layouts and hierarchy that guide people to what matters first.",
  },
  {
    title: "Meaningful experiences",
    text: "Interactions that feel natural and consistent on every device.",
  },
  {
    title: "Purposeful development",
    text: "Clean, maintainable code that turns ideas into working products.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white px-6 py-24 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-[#111111] md:px-12 lg:px-20 lg:py-36"
    >
      <style>{FONT_IMPORT}</style>

      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <h2
          id="about-heading"
          className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-[-0.05em] md:text-7xl lg:text-8xl"
        >
          <span className="text-[#00000]/40">
            The interface is what people see.
          </span>{" "}
          <span className="text-[#800020]">I build what&rsquo;s behind it.</span>
        </h2>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-2 lg:items-end lg:gap-24">
          <p className="text-xl font-medium leading-9 md:text-2xl md:leading-10">
            I&rsquo;m a Full Stack Developer passionate about frontend
            development and user experience. I turn ideas into digital products
            that pair thoughtful design with reliable, functional code.
          </p>
          <p className="max-w-md text-base leading-8 text-[#5c5c5c] md:text-lg md:leading-9">
            My focus is on intuitive interfaces, seamless interactions, and
            consistent experiences across devices.
          </p>
        </div>

        {/* Facts */}
        <dl className="mt-16 grid divide-y divide-[#111111]/15 border-y border-[#111111]/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="py-7 sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              <dt className="text-sm font-semibold text-[#d4401f]">
                {fact.label}
              </dt>
              <dd className="mt-3 text-xl font-medium leading-snug tracking-tight md:text-2xl">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Approach */}
        <div className="mt-24 rounded-3xl bg-[#f7f5f2] p-8 text-[#f7f5f2] md:p-14 lg:mt-32 lg:p-20">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col items-start justify-between gap-12">
              <h3 className="max-w-md text-4xl text-[#000000] font-semibold leading-[1.08] tracking-[-0.04em] md:text-6xl">
                Design with care.
                <span className="text-[#800020]"> Build with purpose.</span>
              </h3>

              <a
                href="#projects"
                className="inline-flex rounded-full bg-[#800020] px-8 py-4 text-base font-bold text-[#ffffff] transition-colors duration-200 hover:bg-[#000000] hover:text-[#ffffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#800020] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] motion-reduce:transition-none"
              >
                View my projects
              </a>
            </div>

            <ul className="divide-y divide-white/15 border-y border-white/15">
              {principles.map((item) => (
                <li key={item.title} className="flex gap-4 py-7">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#800020]"
                  />
                  <div>
                    <h4 className="text-xl text-[#000000] font-semibold tracking-tight md:text-2xl">
                      {item.title}
                    </h4>
                    <p className="mt-2 max-w-sm text-base text-[#000000] leading-7 ">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;