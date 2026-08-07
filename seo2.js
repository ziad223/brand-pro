const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Hero Image & Nav Logo
content = content.replace(
    '<img id="nav-logo" src="logo.png" alt="Brand Clinic" class="h-9 w-auto">',
    '<img id="nav-logo" src="logo.png" alt="Brand Clinic" class="h-9 w-auto" width="150" height="36" fetchpriority="high">'
);
content = content.replace(
    '<img src="hero-bg.png" alt="Brand Clinic Hero Background" class="hero-bg">',
    '<img src="hero-bg.png" alt="Brand Clinic Hero Background" class="hero-bg" width="1920" height="1080" fetchpriority="high" decoding="sync">'
);

// 2. Service Images (unsplash 600x400)
content = content.replace(
    /class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"\s*loading="lazy"/g,
    'class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="600" height="400" loading="lazy" decoding="async"'
);

// 3. Splashes
content = content.replace(
    /<img src="splash.png" alt="" class="absolute([^"]*)"([^>]*)>/g,
    '<img src="splash.png" alt="" class="absolute$1" width="500" height="500" loading="lazy" decoding="async"$2>'
);

// 4. Large backgrounds (Results / CTA)
content = content.replace(
    /class="absolute inset-0 w-full h-full object-cover opacity-20"\s*loading="lazy"/g,
    'class="absolute inset-0 w-full h-full object-cover opacity-20" width="1600" height="900" loading="lazy" decoding="async"'
);
content = content.replace(
    /class="absolute inset-0 w-full h-full object-cover opacity-25"\s*loading="lazy"/g,
    'class="absolute inset-0 w-full h-full object-cover opacity-25" width="1600" height="900" loading="lazy" decoding="async"'
);

// 5. Team Image
content = content.replace(
    /class="w-full h-56 object-cover"\s*loading="lazy"/g,
    'class="w-full h-56 object-cover" width="700" height="400" loading="lazy" decoding="async"'
);

// 6. Industries Marquee Images
content = content.replace(
    /<img src="\${item\.img}" alt="\${label}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">/g,
    '<img src="${item.img}" alt="${label}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" width="400" height="300" loading="lazy" decoding="async">'
);

// 7. Footer Logo
content = content.replace(
    '<img id="footer-logo" src="logo.png" alt="Brand Clinic" class="h-9 w-auto">',
    '<img id="footer-logo" src="logo.png" alt="Brand Clinic" class="h-9 w-auto" width="150" height="36" loading="lazy" decoding="async">'
);

// 8. ARIA Labels for icon buttons
content = content.replace(
    '<button onclick="switchLanguage(\'ar\')" id="lang-ar"',
    '<button onclick="switchLanguage(\'ar\')" id="lang-ar" aria-label="Switch to Arabic"'
);
content = content.replace(
    '<button onclick="switchLanguage(\'en\')" id="lang-en"',
    '<button onclick="switchLanguage(\'en\')" id="lang-en" aria-label="Switch to English"'
);
content = content.replace(
    '<button onclick="toggleTheme()"',
    '<button onclick="toggleTheme()" aria-label="Toggle Dark Mode"'
);
content = content.replace(
    /<button onclick="toggleMobileMenu\(\)"\s+class="md:hidden/g,
    '<button onclick="toggleMobileMenu()" aria-label="Open Mobile Menu" class="md:hidden'
);
content = content.replace(
    /<button onclick="toggleMobileMenu\(\)"\s+class="w-10 h-10/g,
    '<button onclick="toggleMobileMenu()" aria-label="Close Mobile Menu" class="w-10 h-10'
);

// Social links ARIA
content = content.replace(
    /<a href="#"\s*class="w-10 h-10 flex items-center justify-center rounded-2xl bg-neutral-900 hover:bg-neutral-800 transition-colors"><i\s*class="fa-brands fa-linkedin-in"><\/i><\/a>/g,
    '<a href="#" aria-label="LinkedIn" class="w-10 h-10 flex items-center justify-center rounded-2xl bg-neutral-900 hover:bg-neutral-800 transition-colors"><i class="fa-brands fa-linkedin-in"></i></a>'
);
content = content.replace(
    /<a href="#"\s*class="w-10 h-10 flex items-center justify-center rounded-2xl bg-neutral-900 hover:bg-neutral-800 transition-colors"><i\s*class="fa-brands fa-instagram"><\/i><\/a>/g,
    '<a href="#" aria-label="Instagram" class="w-10 h-10 flex items-center justify-center rounded-2xl bg-neutral-900 hover:bg-neutral-800 transition-colors"><i class="fa-brands fa-instagram"></i></a>'
);
content = content.replace(
    /<a href="#"\s*class="w-10 h-10 flex items-center justify-center rounded-2xl bg-neutral-900 hover:bg-neutral-800 transition-colors"><i\s*class="fa-brands fa-facebook-f"><\/i><\/a>/g,
    '<a href="#" aria-label="Facebook" class="w-10 h-10 flex items-center justify-center rounded-2xl bg-neutral-900 hover:bg-neutral-800 transition-colors"><i class="fa-brands fa-facebook-f"></i></a>'
);

fs.writeFileSync('index.html', content);
console.log('Image and A11y optimization done!');
