import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx"
import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-instagram.tsx"
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/mail.tsx"

export default function Footer() {
    
    return (
        <div class="bg-slate-400 dark:bg-slate-100 flex flex-col md:flex-row w-full gap-8 md:gap-16 px-8 py-8 text-sm fixed bottom-0">
            <div class="flex-1">
                <div class="flex-col items-center gap-1">
                    <div class="font-bold text-2xl">Theo Grigor</div>
                    <div class="flex gap-1">
                        <a
                        href="https://instagram.com/theogr6"
                        target="_blank"
                        class="inline-block hover:text-black"
                        aria-label="Instagram"
                        >
                        <IconBrandInstagram aria-hidden="true" />
                        </a>
                        {/* TODO: change to slmail.me */}
                        <a
                        href="mailto:placeholder@placeholder.placeholder"
                        class="inline-block hover:text-black"
                        aria-label="Email"
                        >
                        <IconMail aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="text-gray-500 space-y-2">
                <div class="text-xs">
                Copyright © 2023 Theo Grigor<br />
                All right reserved.
                </div>

                <a
                href="https://github.com/thgr4j/personal-site"
                target="_blank"
                class="inline-block hover:text-black"
                aria-label="GitHub"
                >
                <BrandGithub aria-hidden="true" />
                </a>
            </div>
        </div>
    )
}