// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
    docus: {
        title: "Docs",
        description: "Just a documnentation.",
        socials: {
            twitter: "nuxt_js",
            github: "adx69",
            nuxt: {
                label: "Nuxt",
                icon: "simple-icons:nuxtdotjs",
                href: "https://adityax.in",
            },
        },
        github: {
            dir: ".starters/default/content",
            branch: "main",
            repo: "docus",
            owner: "nuxt-themes",
            edit: false,
        },
        aside: {
            level: 0,
            collapsed: false,
            exclude: [],
        },
        main: {
            padded: true,
            fluid: true,
        },
        header: {
            logo: false,
            showLinkIcon: true,
            exclude: [],
            fluid: true,
        },
        footer: {
            credits: {
                icon: "IconDocus",
                text: "Poweefred by Docus",
                href: "https://adityax.in",
            },
        },
    },
});
