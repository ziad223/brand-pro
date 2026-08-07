const fs = require('fs');
const path = require('path');

const dir = 'd:/companies/purple/brand-pro';
const indexHtml = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

// Extract parts from index.html
const headMatch = indexHtml.match(/(<!DOCTYPE html>[\s\S]*?<\/head>)/i);
const head = headMatch ? headMatch[1] : '';

const navMatch = indexHtml.match(/(<!-- NAVBAR -->[\s\S]*?<\/nav>)/i);
let nav = navMatch ? navMatch[1] : '';
// Fix nav links to point to index.html
nav = nav.replace(/href="#/g, 'href="index.html#');

const footerMatch = indexHtml.match(/(<!-- FOOTER - Premium Redesigned -->[\s\S]*?<\/footer>)/i);
let footer = footerMatch ? footerMatch[1] : '';

const healthModalMatch = indexHtml.match(/(<!-- Health Check Modal -->[\s\S]*?<\/div>\s*<\/div>)/i);
const healthModal = healthModalMatch ? healthModalMatch[1] : '';

const scriptsMatch = indexHtml.match(/(<script>[\s\S]*?<\/script>\s*<\/body>\s*<\/html>)/i);
let scripts = scriptsMatch ? scriptsMatch[1] : '';

// Function to update a page
function updatePage(filename, title) {
    const filePath = path.join(dir, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract main content from the page
    let pageContent = '';
    const flexGrowMatch = content.match(/<div class="flex-grow">([\s\S]*?)<\/div>\s*<!-- FOOTER/i);
    if (flexGrowMatch) {
        pageContent = flexGrowMatch[1];
    } else {
        const headerSectionMatch = content.match(/(<!-- Header Section -->[\s\S]*?<!-- Main Content -->)/i);
        const mainMatch = content.match(/(<main[\s\S]*?<\/main>)/i);
        if (headerSectionMatch && mainMatch) {
            pageContent = headerSectionMatch[1].replace('<!-- Main Content -->', '') + mainMatch[1];
        } else {
            console.error(`Could not parse ${filename}`);
            return;
        }
    }
    
    // Replace <title> in head
    const pageHead = head.replace(/<title>.*?<\/title>/, `<title>${title} | Brand Clinic</title>`);
    
    const newHtml = `${pageHead}
<body class="bg-white text-black min-h-screen flex flex-col">
    ${nav}
    <div class="flex-grow">
        ${pageContent}
    </div>
    ${footer}
    ${healthModal}
    ${scripts}
`;
    fs.writeFileSync(filePath, newHtml);
    console.log(`Updated ${filename}`);
}

updatePage('privacy.html', 'سياسة الخصوصية');
updatePage('terms.html', 'الشروط والأحكام');
updatePage('disclosures.html', 'الإفصاحات');
