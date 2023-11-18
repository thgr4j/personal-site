import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-instagram.tsx"
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/mail.tsx"
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-linkedin.tsx"
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx"

export default function Home() {
  return (
    <main>
      <div class="py-4 mx-auto lg:my-4 text-slate-100 lg:bg-white/30 lg:w-1/2 lg:rounded-lg">
        <div class="max-w-screen-md mx-auto flex items-center justify-evenly">
          <img src="me.jpg" alt="My picture" class="my-4 h-64 rounded-full" />
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-4xl font-bold">Theo Grigor</h1>
            <p class="text-base mt-4 mb-2">Fullstack Software Developer</p>
            <div class="flex gap-1">
              <a
              href="mailto:contact@thgr4j.slmail.me"
              class="inline-block hover:text-slate-200"
              aria-label="Email"
              >
              <IconMail aria-hidden="true" />
              </a>
              <a
              href="https://de.linkedin.com/in/theo-grigor-313167198"
              target="_blank"
              class="inline-block hover:text-slate-200"
              aria-label="LinkedIn"
              >
                  <IconBrandLinkedin aria-hidden="true" />
              </a>
              <a
              href="https://github.com/thgr4j"
              target="_blank"
              >
                <BrandGithub aria-hidden="true" />
              </a>
              <a
              href="https://instagram.com/theogr6"
              target="_blank"
              class="inline-block hover:text-slate-200"
              aria-label="Instagram"
              >
              <IconBrandInstagram aria-hidden="true" />
              </a>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}
