const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Remove fixed splashes
const regex = /    <!-- Watercolor Splashes \(Light Mode Only\) -->[\s\S]*?<\/div>\r?\n/;
content = content.replace(regex, '');

// 2. Services
content = content.replace(
    '<section id=\"services\" class=\"max-w-screen-2xl mx-auto px-8 py-20\">',
    '<section id=\"services\" class=\"relative overflow-hidden max-w-screen-2xl mx-auto px-8 py-20\">\n        <img src=\"splash.png\" alt=\"\" class=\"absolute -left-32 top-10 w-[500px] opacity-40 mix-blend-multiply rotate-12 pointer-events-none select-none dark:hidden z-0\">\n        <div class=\"relative z-10\">'
).replace(
    /<\/section>\s*<!-- RESULTS \/ STATS -->/,
    '</div>\n    </section>\n\n    <!-- RESULTS / STATS -->'
);

// 3. Process
content = content.replace(
    '<section id=\"process\" class=\"max-w-screen-2xl mx-auto px-8 py-20 bg-gradient-to-b from-white to-neutral-50 dark:bg-gradient-to-b dark:from-black dark:to-neutral-950\">',
    '<section id=\"process\" class=\"relative overflow-hidden max-w-screen-2xl mx-auto px-8 py-20 bg-gradient-to-b from-white to-neutral-50 dark:bg-gradient-to-b dark:from-black dark:to-neutral-950\">\n        <img src=\"splash.png\" alt=\"\" class=\"absolute -right-48 top-1/4 w-[600px] opacity-30 mix-blend-multiply -rotate-45 pointer-events-none select-none dark:hidden z-0\">\n        <img src=\"splash.png\" alt=\"\" class=\"absolute -left-20 bottom-10 w-[400px] opacity-40 mix-blend-multiply rotate-180 pointer-events-none select-none dark:hidden z-0\">\n        <div class=\"relative z-10\">'
).replace(
    /<\/section>\s*<!-- INDUSTRIES -->/,
    '</div>\n    </section>\n\n    <!-- INDUSTRIES -->'
);

// 4. Industries
content = content.replace(
    '<section id=\"industries\" class=\"bg-gradient-to-b from-neutral-50 to-neutral-100 dark:bg-gradient-to-b dark:from-neutral-950 dark:to-neutral-900 py-20\">',
    '<section id=\"industries\" class=\"relative overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-100 dark:bg-gradient-to-b dark:from-neutral-950 dark:to-neutral-900 py-20\">\n        <img src=\"splash.png\" alt=\"\" class=\"absolute -left-40 top-0 w-[550px] opacity-35 mix-blend-multiply rotate-90 pointer-events-none select-none dark:hidden z-0\">\n        <div class=\"relative z-10\">'
).replace(
    /<\/section>\s*<!-- HEALTH CHECK -->/,
    '</div>\n    </section>\n\n    <!-- HEALTH CHECK -->'
);

// 5. Health Check
content = content.replace(
    '<section id=\"health-check\" class=\"max-w-screen-2xl mx-auto px-8 py-20\">',
    '<section id=\"health-check\" class=\"relative overflow-hidden max-w-screen-2xl mx-auto px-8 py-20\">\n        <img src=\"splash.png\" alt=\"\" class=\"absolute -right-32 top-10 w-[500px] opacity-40 mix-blend-multiply -scale-x-100 pointer-events-none select-none dark:hidden z-0\">\n        <div class=\"relative z-10\">'
).replace(
    /<\/section>\s*<!-- COMMON BRAND DISORDERS -->/,
    '</div>\n    </section>\n\n    <!-- COMMON BRAND DISORDERS -->'
);

// 6. Disorders
content = content.replace(
    '<section id=\"disorders\"\n        class=\"max-w-screen-2xl mx-auto px-8 py-20 bg-gradient-to-b from-neutral-100 to-white dark:bg-gradient-to-b dark:from-neutral-900 dark:to-black border-t border-neutral-200 dark:border-neutral-800\">',
    '<section id=\"disorders\"\n        class=\"relative overflow-hidden max-w-screen-2xl mx-auto px-8 py-20 bg-gradient-to-b from-neutral-100 to-white dark:bg-gradient-to-b dark:from-neutral-900 dark:to-black border-t border-neutral-200 dark:border-neutral-800\">\n        <img src=\"splash.png\" alt=\"\" class=\"absolute -left-48 top-1/4 w-[600px] opacity-30 mix-blend-multiply rotate-45 pointer-events-none select-none dark:hidden z-0\">\n        <img src=\"splash.png\" alt=\"\" class=\"absolute -right-20 bottom-10 w-[450px] opacity-40 mix-blend-multiply rotate-180 pointer-events-none select-none dark:hidden z-0\">\n        <div class=\"relative z-10\">'
).replace(
    /<\/section>\s*<!-- FINAL CTA -->/,
    '</div>\n    </section>\n\n    <!-- FINAL CTA -->'
);

fs.writeFileSync('index.html', content);
console.log('Done script');
