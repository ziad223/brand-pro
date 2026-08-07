const fs = require('fs');

try {
    let html = fs.readFileSync('index.html', 'utf-8');

    // 1. Change the button classes to use pure red #ff0000
    // Specifically target the button with "اطلب فحص علامتك التجارية" which has "btn_request_check"
    html = html.replace(
        /class="w-full sm:w-auto px-8 py-3\.5 bg-red-500 hover:bg-red-500 text-white rounded-2xl font-semibold flex items-center justify-center gap-x-2 shadow-lg shadow-red-500\/30 transition-all"/g,
        'class="w-full sm:w-auto px-8 py-3.5 bg-[#ff0000] hover:bg-[#cc0000] text-white rounded-2xl font-semibold flex items-center justify-center gap-x-2 shadow-lg shadow-[#ff0000]/30 transition-all"'
    );
    
    // Target the button in health modal "احجز فحص علامتك الآن"
    html = html.replace(
        /class="mt-8 w-full py-4 bg-red-500 hover:bg-red-500 text-white rounded-2xl font-bold flex items-center justify-center gap-x-2"/g,
        'class="mt-8 w-full py-4 bg-[#ff0000] hover:bg-[#cc0000] text-white rounded-2xl font-bold flex items-center justify-center gap-x-2"'
    );

    // Target the hero button
    html = html.replace(
        /class="group flex items-center justify-center gap-x-3 px-8 py-4 bg-\[\#ff0000\] hover:bg-\[\#cc0000\] text-white rounded-2xl font-semibold text-lg shadow-xl shadow-\[\#ff0000\]\/40 transition-all active:scale-\[0\.985\]"/g,
        'class="group flex items-center justify-center gap-x-3 px-8 py-4 bg-[#ff0000] hover:bg-[#cc0000] text-white rounded-2xl font-semibold text-lg shadow-xl shadow-[#ff0000]/40 transition-all active:scale-[0.985]"'
    );

    // 2. Forms instead of WhatsApp
    // Replace `startHealthCheck()` implementation
    html = html.replace(/function startHealthCheck\(\) \{[\s\S]*?openWhatsApp\(\);[\s\S]*?\}/, `function startHealthCheck() {
            hideHealthModal();
            document.getElementById('form-modal').classList.remove('hidden');
            document.getElementById('form-modal').classList.add('flex');
        }`);

    // Insert a form modal into the HTML before </body>
    const formModalHTML = `
    <!-- Contact Form Modal -->
    <div id="form-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 sm:p-6">
        <div class="absolute inset-0 bg-neutral-900/90 backdrop-blur-sm" onclick="hideFormModal()"></div>
        <div class="relative w-full max-w-lg bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button onclick="hideFormModal()" class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 transition-colors">
                <i class="fa-solid fa-times"></i>
            </button>
            <div class="text-center mb-8">
                <div class="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i class="fa-solid fa-envelope-open-text text-3xl text-[#ff0000]"></i>
                </div>
                <h3 class="text-2xl font-bold text-black mb-2">طلب استشارة وفحص</h3>
                <p class="text-neutral-500">يرجى تعبئة النموذج وسيقوم فريقنا بالتواصل معك في أقرب وقت.</p>
            </div>
            <form onsubmit="submitForm(event)" class="space-y-4">
                <div>
                    <label class="block text-black mb-1 font-semibold text-sm">الاسم الكامل</label>
                    <input type="text" required class="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-black placeholder-neutral-400 focus:outline-none focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] transition-all" placeholder="الاسم الكريم">
                </div>
                <div>
                    <label class="block text-black mb-1 font-semibold text-sm">رقم الهاتف / واتساب</label>
                    <input type="tel" required class="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-black placeholder-neutral-400 focus:outline-none focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] transition-all" placeholder="رقم للتواصل">
                </div>
                <div>
                    <label class="block text-black mb-1 font-semibold text-sm">اسم الشركة / العلامة التجارية</label>
                    <input type="text" class="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-black placeholder-neutral-400 focus:outline-none focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] transition-all" placeholder="اختياري">
                </div>
                <div>
                    <label class="block text-black mb-1 font-semibold text-sm">تفاصيل الطلب</label>
                    <textarea rows="3" class="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-black placeholder-neutral-400 focus:outline-none focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] transition-all" placeholder="بم يمكننا مساعدتك؟"></textarea>
                </div>
                <button type="submit" class="w-full py-4 bg-[#ff0000] text-white hover:bg-[#cc0000] rounded-2xl font-bold flex items-center justify-center gap-x-2 transition-all mt-4 shadow-lg shadow-[#ff0000]/30">
                    <span>إرسال الطلب</span>
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </form>
        </div>
    </div>
    <script>
        function hideFormModal() {
            const modal = document.getElementById('form-modal');
            modal.classList.remove('flex');
            modal.classList.add('hidden');
        }
        function submitForm(e) {
            e.preventDefault();
            // Show a simple success state inside the modal
            const formContainer = e.target.parentElement;
            formContainer.innerHTML = \`
                <div class="text-center py-8">
                    <div class="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fa-solid fa-check text-4xl text-green-500"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-black mb-3">تم الإرسال بنجاح!</h3>
                    <p class="text-neutral-500 mb-8">شكراً لك، فريقنا سيقوم بالتواصل معك في أقرب وقت ممكن.</p>
                    <button onclick="hideFormModal()" class="px-8 py-3 bg-neutral-100 hover:bg-neutral-200 text-black rounded-xl font-semibold transition-colors">إغلاق</button>
                </div>
            \`;
        }
    </script>
    `;

    if (!html.includes('id="form-modal"')) {
        html = html.replace('</body>', formModalHTML + '\n</body>');
    }

    fs.writeFileSync('index.html', html);
    console.log("Successfully transformed button to pure red and added professional form modal.");
} catch (e) {
    console.error(e);
}
