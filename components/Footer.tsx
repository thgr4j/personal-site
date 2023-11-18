export default function Footer() {
    
    return (
        <footer class="flex justify-between flex-row absolute w-full bottom-0 gap-2 lg:gap-8 md:gap-16 py-2 px-8 text-sm text-slate-200 bg-white/20">
            <div class="flex flex-col md:flex-row gap-1 md:gap-2 md:items-center text-md">
                <div><a href="#" class="hover:text-slate-400">Imprint</a></div>
                <div><a href="#" class="hover:text-slate-400">Privacy policy</a></div>
            </div>
            <div class="gap-1 items-center">

                <div class="text-md flex-wrap">
                    Copyright © 2023 Theo Grigor<br />
                    All right reserved.
                </div>

            </div>
        </footer>
    )
}