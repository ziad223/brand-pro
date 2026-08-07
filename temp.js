
        // Tailwind Script
        function initializeTailwind() {
            document.documentElement.style.setProperty('--accent', '#ef4444');

            tailwind.config = {
                darkMode: 'class',
                theme: {
                    extend: {
                        colors: {
                            red: {
                                50: '#ff0000',
                                100: '#ff0000',
                                200: '#ff0000',
                                300: '#ff0000',
                                400: '#ff0000',
                                500: '#ff0000',
                                600: '#ff0000',
                                700: '#ff0000',
                                800: '#ff0000',
                                900: '#ff0000',
                                950: '#ff0000',
                            }
                        },
                        fontFamily: {
                            'arabic': ['Noto Sans Arabic', 'Inter', 'system-ui', 'sans-serif']
                        }
                    }
                }
            };
        }

        // Theme Toggle
        function toggleTheme() {}

        // Update logos based on theme
        function updateLogos(theme) {
            const navLogo = document.getElementById('nav-logo');
            const footerLogo = document.getElementById('footer-logo');
            const logoPath = theme === 'dark' ? 'logo-white.png' : 'logo.png';

            if (navLogo) navLogo.src = logoPath;
            if (footerLogo) footerLogo.src = logoPath;
        }

        // Initialize theme from localStorage
        function initTheme() {
            const theme = 'light';
            updateLogos(theme);
        }
            updateLogos(theme);
        }

        // Language Switcher
        let currentLang = 'ar';

        const translations = {
            'ticker_msg1': { ar: 'كل المعلومات التي تقدم لنا من الشركات هي محط اهتمام ونتعامل معها بسرية تامة وأمان مطلق.', en: 'All information provided to us by companies is highly valued and treated with strict confidentiality.' },
            'ticker_msg2': { ar: 'نشخص ونعالج ونحوّل العلامات التجارية لمساعدتها على الشفاء والنمو والازدهار.', en: 'We diagnose, treat, and transform brands to help them heal, grow, and thrive.' },
            'ticker_msg3': { ar: 'سرية كاملة، حماية للمعلومات، واستشارات استراتيجية على أيدي نخبة من الخبراء.', en: 'Complete confidentiality, data protection, and strategic consulting by leading experts.' },
            // Hero
            'hero_badge': { ar: 'خبراء تشخيص العلامات التجارية!', en: 'Brand Transformation Experts!' },
            'hero_title': { ar: '<span class="block">نشخص ونعالج ونحوّل</span><span class="block mt-4">العلامات التجارية</span>', en: '<span class="block">We Diagnose, Treat &</span><span class="block mt-4">Transform Brands</span>' },
            'hero_subtitle': { ar: 'براند كلينك هي شركة استشارات استراتيجية متخصصة في تحويل العلامات التجارية. نساعد الشركات على بناء علامات قوية لا تُنسى تدفع النمو وتخلق تأثيراً دائماً.', en: 'Brand Clinic is a strategic brand consultancy that helps companies build powerful, memorable brands that drive growth and create lasting impact.' },
            'btn_view_work': { ar: 'شاهد أعمالنا', en: 'View Our Work' },
            'btn_start_journey': { ar: 'ابدأ رحلة التحول', en: 'Start Your Transformation' },
            'hero_trust': { ar: 'موثوق به من قبل أكثر من 150 علامة تجارية في 12 دولة', en: 'Trusted by 150+ brands across 12 countries' },

            // Services
            'services_eyebrow': { ar: 'خدمات استراتيجية', en: 'STRATEGIC SERVICES' },
            'services_title': { ar: 'خدمات استراتيجية لكل مرحلة', en: 'Strategic Services for Every Stage' },
            'services_subtitle': { ar: 'حلول متكاملة مصممة خصيصاً لتطوير علامتك التجارية في كل مرحلة من دورة حياتها', en: 'Integrated solutions tailored to grow your brand at every stage of its lifecycle' },
            'service1_title': { ar: 'إدارة الأزمات', en: 'Crisis Management' },
            'service1_desc': { ar: 'نحمي ونستعيد سمعة علامتك التجارية عند ظهور التحديات، مع التعامل السريع والفعال مع الأزمات وبناء خطط الطوارئ.', en: 'We protect and restore your brand reputation during challenges with rapid, effective crisis handling and contingency planning.' },
            'service2_title': { ar: 'هوية العلامة التجارية', en: 'Brand Identity' },
            'service2_desc': { ar: 'ننشئ أنظمة هوية بصرية ولغوية مميزة تجسد استراتيجية علامتك التجارية وتضمن التماسك عبر جميع نقاط الاتصال.', en: 'We create distinctive visual and verbal identity systems that embody your brand strategy across every touchpoint.' },
            'service3_title': { ar: 'استراتيجية العلامة التجارية', en: 'Brand Strategy' },
            'service3_desc': { ar: 'نحدد الغرض الأساسي لعلامتك التجارية وموقعها التنافسي وميزتها الفريدة من خلال تخطيط استراتيجي دقيق وعميق.', en: 'We define your brand’s core purpose, competitive positioning, and unique advantage through precise strategic planning.' },

            // Results
            'results_eyebrow': { ar: 'نتائج مثبتة', en: 'PROVEN RESULTS' },
            'results_title': { ar: 'أرقام تتحدث عن نفسها', en: 'Numbers That Speak for Themselves' },
            'stat1_value': { ar: '+40م', en: '40M+' },
            'stat1_label': { ar: 'جمهور تم الوصول إليه', en: 'Audience Reached' },
            'stat2_value': { ar: '98%', en: '98%' },
            'stat2_label': { ar: 'رضا العملاء', en: 'Client Satisfaction' },
            'stat3_value': { ar: '15', en: '15' },
            'stat3_label': { ar: 'سنوات من التميز', en: 'Years of Excellence' },
            'stat4_value': { ar: '+150', en: '+150' },
            'stat4_label': { ar: 'علامة تجارية تم تحويلها', en: 'Brands Transformed' },

            // Process
            'process_eyebrow': { ar: 'منهجيتنا', en: 'OUR METHODOLOGY' },
            'process_title': { ar: 'عملية عيادة العلامة التجارية', en: 'The Brand Clinic Process' },
            'process_subtitle': { ar: 'نهج منظم ومثبت علمياً لتحويل العلامة التجارية يحقق نتائج قابلة للقياس والاستدامة', en: 'A structured, proven approach to brand transformation that delivers measurable and sustainable results' },

            'step1_title': { ar: 'الاكتشاف', en: 'Discovery' },
            'step1_duration': { ar: '2-3 أسابيع', en: '2-3 weeks' },
            'step1_desc': { ar: 'الغوص العميق في الوضع الحالي لعلامتك التجارية وموقعها في السوق والمشهد التنافسي من خلال البحث الشامل ومقابلات أصحاب المصلحة.', en: 'Deep dive into your current brand position, market landscape, and competitive environment through comprehensive research and stakeholder interviews.' },

            'step2_title': { ar: 'التشخيص', en: 'Diagnosis' },
            'step2_duration': { ar: '1-2 أسابيع', en: '1-2 weeks' },
            'step2_desc': { ar: 'تحليل النتائج لتحديد تحديات العلامة التجارية الأساسية والفرص والضرورات الاستراتيجية التي توجه عملية التحول.', en: 'Analyze findings to identify core brand challenges, opportunities, and strategic imperatives that guide the transformation.' },

            'step3_title': { ar: 'الاستراتيجية', en: 'Strategy' },
            'step3_duration': { ar: '3-4 أسابيع', en: '3-4 weeks' },
            'step3_desc': { ar: 'تطوير استراتيجية شاملة للعلامة التجارية تشمل التموضع وهيكل الرسائل ومبادئ التجربة والتوجه الاستراتيجي.', en: 'Develop a comprehensive brand strategy including positioning, messaging architecture, experience principles, and strategic direction.' },

            'step4_title': { ar: 'الإنشاء', en: 'Creation' },
            'step4_duration': { ar: '4-6 أسابيع', en: '4-6 weeks' },
            'step4_desc': { ar: 'تصميم وتطوير جميع عناصر هوية العلامة التجارية من الأنظمة البصرية إلى الأطر اللفظية والإرشادات والأصول الرقمية.', en: 'Design and develop all brand identity elements — from visual systems to verbal frameworks, guidelines, and digital assets.' },

            'step5_title': { ar: 'التفعيل', en: 'Activation' },
            'step5_duration': { ar: '2-4 أسابيع', en: '2-4 weeks' },
            'step5_desc': { ar: 'إطلاق علامتك التجارية الجديدة عبر جميع نقاط الاتصال مع خطة طرح مرحلية وتدريب أصحاب المصلحة وإدارة التغيير.', en: 'Launch your new brand across all touchpoints with a phased rollout plan, stakeholder training, and change management.' },

            'step6_title': { ar: 'التطور', en: 'Evolution' },
            'step6_duration': { ar: 'مستمر', en: 'Ongoing' },
            'step6_desc': { ar: 'إدارة مستمرة للعلامة التجارية للتحسين والتكيف مع التغييرات الاستراتيجية وضمان النجاح والنمو المستدام على المدى الطويل.', en: 'Ongoing brand management to continuously improve, adapt to strategic shifts, and ensure long-term success and growth.' },

            // Industries
            'industries_eyebrow': { ar: 'خبرة عميقة', en: 'DEEP EXPERTISE' },
            'industries_title': { ar: 'الصناعات التي نخدمها', en: 'Industries We Serve' },
            'industries_subtitle': { ar: 'خبرة متخصصة عبر قطاعات متنوعة مع أطر عمل مخصصة لكل صناعة', en: 'Specialized expertise across diverse sectors with tailored frameworks for each industry' },
            'industry1': { ar: 'الخدمات المالية', en: 'Financial Services' },
            'industry2': { ar: 'البيع بالتجزئة والتجارة الإلكترونية', en: 'Retail & E-commerce' },
            'industry3': { ar: 'الرعاية الصحية والعافية', en: 'Healthcare & Wellness' },
            'industry4': { ar: 'العقارات والتطوير', en: 'Real Estate & Development' },
            'industry5': { ar: 'السفر والضيافة', en: 'Travel & Hospitality' },
            'industry6': { ar: 'التعليم وتكنولوجيا التعليم', en: 'Education & EdTech' },
            'industry7': { ar: 'التكنولوجيا والبرمجيات', en: 'Technology & SaaS' },
            'industry8': { ar: 'الأغذية والمطاعم', en: 'Food & Restaurants' },
            'industry9': { ar: 'الإعلام والترفيه', en: 'Media & Entertainment' },
            'industry10': { ar: 'السيارات والتنقل', en: 'Automotive & Mobility' },
            'industry11': { ar: 'الأزياء والجمال', en: 'Fashion & Beauty' },
            'industry12': { ar: 'الطاقة والاستدامة', en: 'Energy & Sustainability' },

            // Health Check
            'health_eyebrow': { ar: 'تقييم شامل', en: 'COMPREHENSIVE ASSESSMENT' },
            'health_title': { ar: 'فحص صحة العلامة التجارية', en: 'Brand Health Check' },
            'health_subtitle': { ar: 'هل تعمل علامتك التجارية بكامل إمكاناتها؟ فحص صحة العلامة التجارية يمنحك رؤية شاملة ودقيقة عن حالتها الحالية ويحدد نقاط القوة والضعف والفرص.', en: 'Is your brand operating at full potential? Our Brand Health Check gives you a clear, accurate picture of its current state and pinpoints strengths, weaknesses, and opportunities.' },
            'health_includes_title': { ar: 'ما يتضمنه الفحص', en: 'What’s Included' },
            'health_item1': { ar: 'اكتشاف شامل للعلامة التجارية', en: 'Comprehensive Brand Discovery' },
            'health_item2': { ar: 'تحليل تنافسي معمق', en: 'In-depth Competitive Analysis' },
            'health_item3': { ar: 'رؤى أصحاب المصلحة', en: 'Stakeholder Insights' },
            'health_item4': { ar: 'تقرير تشخيصي مفصل', en: 'Detailed Diagnostic Report' },
            'health_item5': { ar: 'خارطة طريق أولويات التحول', en: 'Transformation Priority Roadmap' },
            'health_item6': { ar: 'جلسة عرض النتائج', en: 'Results Presentation Session' },
            'health_timeline_label': { ar: 'المدة الزمنية', en: 'TIMELINE' },
            'health_timeline_unit': { ar: 'أيام عمل', en: 'Business Days' },
            'health_speed': { ar: 'سرعة التنفيذ', en: 'Execution Speed' },
            'health_impact': { ar: 'التأثير المتوقع', en: 'Expected Impact' },
            'health_speed_value': { ar: 'عالية جداً', en: 'Very High' },
            'health_impact_value': { ar: 'فوري وقابل للقياس', en: 'Immediate & Measurable' },
            'health_badge': { ar: 'تشخيص احترافي', en: 'Professional Diagnosis' },
            'btn_learn_more': { ar: 'اعرف المزيد', en: 'Learn More' },
            'btn_request_check': { ar: 'اطلب فحص علامتك وحدد موعد استشارتك (مكالمة، فيديو، أو حضور شخصي)', en: 'Request Brand Check & Schedule (Call, Video, or In-person)' },
            'modal_health_title': { ar: 'فحص صحة العلامة التجارية', en: 'Brand Health Check' },
            'btn_book_check': { ar: 'احجز فحص علامتك الآن', en: 'Book Your Brand Check Now' },
            'modal_health_note': { ar: 'الاستشارة مأجورة: هاتفية، أو مقابلة ويب، أو حضور شخصي (بمكان عملك أو لدينا بالوكالة)', en: 'Consultation is paid: Phone, Web Meeting, or In-person (at your workplace or our agency)' },
            'health_consultation_options': { ar: 'الاستشارة مأجورة. يتم تحديد موعد الاستشارة حسب رغبتكم (هاتفياً، مكالمة فيديو، أو حضور شخصي في مقر عملكم أو لدينا بالوكالة).', en: 'Consultation is paid. The consultation appointment is determined according to your preference (by phone, video call, or in-person at your workplace or our agency).' },

            // Disorders - Complete Arabic translations
            'disorders_eyebrow': { ar: 'التشخيص الدقيق', en: 'PRECISE DIAGNOSIS' },
            'disorders_title': { ar: 'اضطرابات العلامة التجارية الشائعة التي نشخصها ونعالجها', en: 'Common Brand Disorders We Diagnose & Treat' },
            'disorders_subtitle': { ar: 'كل علامة تجارية لها أعراضها. نحن نحدد المشكلة بدقة ونصف العلاج المناسب.', en: 'Every brand has its symptoms. We identify the issue precisely and prescribe the right treatment.' },
            'disorder_cat1': { ar: 'اضطرابات التسعير والقيمة', en: 'Pricing & Value Disorders' },
            'dis1_1': { ar: 'ضعف إدراك القيمة', en: 'Price Perception Erectile Dysfunction' },
            'dis1_2': { ar: 'الاعتماد المزمن على التخفيضات', en: 'Chronic Sale Dependency' },
            'dis1_3': { ar: 'متلازمة انتحال الفخامة', en: 'Luxury Impostor Syndrome' },
            'dis1_4': { ar: 'نزيف القيمة', en: 'Value Hemophilia' },
            'dis1_5': { ar: 'فقر العلامة التجارية الفاخرة', en: 'Premium Brand Anemia' },
            'disorder_cat2': { ar: 'اضطرابات السمعة والإدراك', en: 'Reputation & Perception Disorders' },
            'dis2_1': { ar: 'نزيف السمعة', en: 'Reputation Hemorrhage' },
            'dis2_2': { ar: 'عجز الثقة المزمن', en: 'Chronic Trust Deficit' },
            'dis2_3': { ar: 'إدمان الاعتذار العلني', en: 'Public Apology Addiction' },
            'dis2_4': { ar: 'ورم الفضيحة المنتشر', en: 'Scandaloma Metastasis' },
            'dis2_5': { ar: 'قصر نظر الإدراك', en: 'Perception Myopia' },
            'disorder_cat3': { ar: 'اضطرابات الهوية والشخصية', en: 'Identity & Personality Disorders' },
            'dis3_1': { ar: 'انقسام الهوية', en: 'Brand Identity Split' },
            'dis3_2': { ar: 'تعدد شخصيات العلامة', en: 'Multiple Personality Branding' },
            'dis3_3': { ar: 'متلازمة العلامة الدخيلة', en: 'Impostor Brand Syndrome' },
            'dis3_4': { ar: 'مرض باركنسون نبرة الصوت', en: 'Tone-of-Voice Parkinson' },
            'dis3_5': { ar: 'عسر القراءة البصري اللفظي', en: 'Visual Verbal Dyslexia' },
            'disorders_note': { ar: '* هذه المصطلحات تعبيرات مجازية إبداعية لوصف التحديات الشائعة. نحن نتعامل مع كل حالة بجدية واحترافية عالية وسرية تامة.', en: '* These are creative metaphorical terms describing common brand challenges. We handle every case with the highest professionalism and complete confidentiality.' },

            // CTA
            'cta_title': { ar: 'هل أنت مستعد لتحويل علامتك التجارية؟', en: 'Ready to Transform Your Brand?' },
            'cta_subtitle': { ar: 'دعنا نبدأ رحلة التحول معاً. احجز استشارة مأجورة مع أحد خبرائنا اليوم (هاتفية، مقابلة ويب، أو حضور شخصي بمكان عملك أو بالوكالة).', en: 'Let’s begin the transformation journey together. Book a paid consultation with one of our experts today (Phone, Video call, or In-person).' },
            'btn_start_chat': { ar: 'ابدأ محادثة', en: 'Start a Conversation' },
            'btn_health_check': { ar: 'اطلب فحص علامتك', en: 'Request Brand Check' },

            // Navbar
            'nav_services': { ar: 'الخدمات', en: 'Services' },
            'nav_process': { ar: 'العملية', en: 'Process' },
            'nav_industries': { ar: 'الصناعات', en: 'Industries' },
            'nav_health': { ar: 'فحص الصحة', en: 'Health Check' },
            'nav_disorders': { ar: 'الاضطرابات', en: 'Disorders' },

            // Footer
            'footer_about': { ar: 'نساعد العلامات التجارية على الشفاء، النمو، والازدهار. استشارات استراتيجية احترافية تحول العلامات إلى قوى لا تُنسى.', en: 'We help brands heal, grow, and thrive. Professional strategic consulting that transforms brands into unforgettable forces.' },
            'footer_whatsapp': { ar: 'واتساب', en: 'WhatsApp' },
            'footer_company': { ar: 'الشركة', en: 'Company' },
            'footer_about_us': { ar: 'من نحن', en: 'About Us' },
            'footer_team': { ar: 'فريق العمل', en: 'Team' },
            'footer_blog': { ar: 'المدونة', en: 'Blog' },
            'footer_case_studies': { ar: 'دراسات الحالة', en: 'Case Studies' },
            'footer_services': { ar: 'الخدمات', en: 'Services' },
            'footer_brand_strategy': { ar: 'استراتيجية العلامة', en: 'Brand Strategy' },
            'footer_brand_identity': { ar: 'هوية العلامة التجارية', en: 'Brand Identity' },
            'footer_transformation': { ar: 'عملية التحويل', en: 'Transformation Process' },
            'footer_health_check': { ar: 'فحص الصحة', en: 'Health Check' },
            'footer_contact': { ar: 'تواصل معنا', en: 'Contact Us' },
            'footer_location': { ar: 'دمشق، سوريا', en: 'Damascus, Syria' },
            'footer_copyright': { ar: '© 2026 Brand Clinic. جميع الحقوق محفوظة. تصميم وتطوير بـ ❤️', en: '© 2026 Brand Clinic. All Rights Reserved. Designed & Developed with ❤️' },
            'footer_privacy': { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
            'footer_terms': { ar: 'الشروط والأحكام', en: 'Terms & Conditions' },
            'footer_disclosures': { ar: 'الإفصاحات', en: 'Disclosures' },
        };

        function switchLanguage(lang) {
            currentLang = lang;

            // Update active button styles
            const arBtn = document.getElementById('lang-ar');
            const enBtn = document.getElementById('lang-en');

            if (lang === 'ar') {
                arBtn.classList.add('bg-white', '', 'shadow-sm');
                arBtn.classList.remove('text-neutral-500', '');
                enBtn.classList.remove('bg-white', '', 'shadow-sm');
                enBtn.classList.add('text-neutral-500', '');

                document.documentElement.dir = 'rtl';
                document.documentElement.lang = 'ar';
            } else {
                enBtn.classList.add('bg-white', '', 'shadow-sm');
                enBtn.classList.remove('text-neutral-500', '');
                arBtn.classList.remove('bg-white', '', 'shadow-sm');
                arBtn.classList.add('text-neutral-500', '');

                document.documentElement.dir = 'ltr';
                document.documentElement.lang = 'en';
            }

            // Apply translations
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[key] && translations[key][lang]) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = translations[key][lang];
                    } else {
                        el.innerHTML = translations[key][lang];
                    }
                }
            });

            // Update marquee industry labels for the new language
            refreshIndustriesLabels();
        }

        function initLanguage() {
            // Set initial active button
            const arBtn = document.getElementById('lang-ar');
            arBtn.classList.add('bg-white', '', 'shadow-sm');

            // Apply initial Arabic translations (already in HTML)
            // This ensures consistency if needed
        }

        // Mobile Menu
        function toggleMobileMenu() {
            const existingMenu = document.getElementById('mobile-menu');

            if (existingMenu) {
                existingMenu.remove();
                return;
            }

            const menu = document.createElement('div');
            menu.id = 'mobile-menu';
            menu.className = 'md:hidden fixed inset-0 bg-black text-white/70 z-[99] flex';
            menu.innerHTML = `
                <div class="bg-white w-[82%] max-w-[300px] h-full p-7 shadow-2xl flex flex-col" dir="rtl">
                    <!-- Header -->
                    <div class="flex items-center justify-between mb-8">
                        <div class="flex items-center gap-x-3">
                            <div class="w-9 h-9 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" stroke-width="2.5" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <span class="font-bold text-xl">Brand Clinic</span>
                        </div>
                        <button onclick="toggleMobileMenu()" aria-label="Close Mobile Menu" class="w-10 h-10 flex items-center justify-center text-3xl text-neutral-400 hover:text-black">×</button>
                    </div>
                    
                    <!-- Nav Links -->
                    <div class="flex flex-col gap-y-1 text-[15px] font-medium">
                        <a href="#services" onclick="toggleMobileMenu()" class="py-3.5 px-4 hover:bg-red-50 rounded-2xl flex items-center gap-x-3" data-i18n="nav_services">
                            <i class="fa-solid fa-briefcase w-5 text-red-500"></i> 
                            <span>الخدمات</span>
                        </a>
                        <a href="#process" onclick="toggleMobileMenu()" class="py-3.5 px-4 hover:bg-red-50 rounded-2xl flex items-center gap-x-3" data-i18n="nav_process">
                            <i class="fa-solid fa-sync w-5 text-red-500"></i> 
                            <span>العملية</span>
                        </a>
                        <a href="#industries" onclick="toggleMobileMenu()" class="py-3.5 px-4 hover:bg-red-50 rounded-2xl flex items-center gap-x-3" data-i18n="nav_industries">
                            <i class="fa-solid fa-industry w-5 text-red-500"></i> 
                            <span>الصناعات</span>
                        </a>
                        <a href="#health-check" onclick="toggleMobileMenu()" class="py-3.5 px-4 hover:bg-red-50 rounded-2xl flex items-center gap-x-3" data-i18n="nav_health">
                            <i class="fa-solid fa-heart-pulse w-5 text-red-500"></i> 
                            <span>فحص الصحة</span>
                        </a>
                        <a href="#disorders" onclick="toggleMobileMenu()" class="py-3.5 px-4 hover:bg-red-50 rounded-2xl flex items-center gap-x-3" data-i18n="nav_disorders">
                            <i class="fa-solid fa-brain w-5 text-red-500"></i> 
                            <span>الاضطرابات الشائعة</span>
                        </a>
                    </div>
                    
                    <div class="flex-1"></div>
                    
                    <!-- Bottom Actions -->
                    <div class="pt-6 border-t border-neutral-200">
                        <a href="tel:+963965304841" 
                           class="flex items-center justify-center gap-x-2 w-full py-3.5 bg-red-50 hover:bg-neutral-200 rounded-2xl text-sm font-semibold mb-3">
                            <i class="fa-solid fa-phone text-red-500"></i>
                            <span dir="ltr">+963 965 304 841</span>
                        </a>
                        
                        <button onclick="openWhatsApp(); toggleMobileMenu();" 
                                class="flex items-center justify-center gap-x-2 w-full py-3.5 bg-red-500 hover:bg-red-500 text-white rounded-2xl text-sm font-semibold">
                            <i class="fa-brands fa-whatsapp"></i>
                            <span data-i18n="footer_whatsapp">تواصل واتساب</span>
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(menu);
            // apply translations for mobile nav items after creation
            document.querySelectorAll('#mobile-menu [data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[key] && translations[key][currentLang]) {
                    // avoid replacing the icon inside by checking if the direct child is a span or text node
                    const children = el.childNodes;
                    children.forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
                            node.textContent = translations[key][currentLang];
                        }
                        if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SPAN') {
                            node.textContent = translations[key][currentLang];
                        }
                    });
                }
            });
        }

        // Health Modal
        function showHealthModal() {
            document.getElementById('health-modal').classList.remove('hidden');
            document.getElementById('health-modal').classList.add('flex');
        }

        function hideHealthModal() {
            const modal = document.getElementById('health-modal');
            modal.classList.remove('flex');
            modal.classList.add('hidden');
        }

        function startHealthCheck() {
            try {
                hideHealthModal();
            } catch(e) {
                console.error(e);
            }
            const modal = document.getElementById('form-modal');
            if (modal) {
                modal.classList.remove('hidden');
                modal.style.display = 'flex';
                modal.style.zIndex = '999999';
            } else {
                alert('Form modal is missing!');
            }
        }

        function startConversation() {
            openWhatsApp();
        }

        // WhatsApp Integration - New number
        function openWhatsApp() {
            const phone = "963932222841";
            const message = currentLang === 'ar'
                ? "مرحباً، أريد الاستفسار عن خدمات براند كلينك لتحويل علامتي التجارية"
                : "Hello, I would like to inquire about Brand Clinic services for transforming my brand";
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

        // Floating WhatsApp Button
        function addFloatingWhatsApp() {
            const btn = document.createElement('button');
            btn.className = `fixed bottom-6 right-6 z-[90] w-14 h-14 flex items-center justify-center bg-red-500 hover:bg-red-500 text-white rounded-full shadow-2xl shadow-red-500/40 transition-all active:scale-95`;
            btn.innerHTML = `<i class="fa-brands fa-whatsapp text-3xl"></i>`;
            btn.onclick = openWhatsApp;
            btn.title = "تواصل معنا عبر واتساب";
            document.body.appendChild(btn);
        }

        // Smooth scroll for anchor links
        function initSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
        }

        // Keyboard support for language
        function initKeyboardShortcuts() {
            document.addEventListener('keydown', function (e) {
                if (e.metaKey && e.key === "/") {
                    e.preventDefault();
                    const newLang = currentLang === 'ar' ? 'en' : 'ar';
                    switchLanguage(newLang);
                }
            });
        }

        // Industries data for the marquee slider
        const industriesData = [
            { key: 'industry1', icon: 'fa-landmark', color: 'bg-neutral-800', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80&auto=format&fit=crop' },
            { key: 'industry2', icon: 'fa-shopping-cart', color: 'bg-neutral-800', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80&auto=format&fit=crop' },
            { key: 'industry3', icon: 'fa-heart-pulse', color: 'bg-neutral-800', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&q=80&auto=format&fit=crop' },
            { key: 'industry4', icon: 'fa-building', color: 'bg-neutral-800', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80&auto=format&fit=crop' },
            { key: 'industry5', icon: 'fa-plane', color: 'bg-neutral-800', img: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=400&q=80&auto=format&fit=crop' },
            { key: 'industry6', icon: 'fa-graduation-cap', color: 'bg-neutral-800', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80&auto=format&fit=crop' },
            { key: 'industry7', icon: 'fa-microchip', color: 'bg-neutral-800', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80&auto=format&fit=crop' },
            { key: 'industry8', icon: 'fa-utensils', color: 'bg-neutral-800', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80&auto=format&fit=crop' },
            { key: 'industry9', icon: 'fa-clapperboard', color: 'bg-neutral-800', img: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&q=80&auto=format&fit=crop' },
            { key: 'industry10', icon: 'fa-car', color: 'bg-neutral-800', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80&auto=format&fit=crop' },
            { key: 'industry11', icon: 'fa-shirt', color: 'bg-neutral-800', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80&auto=format&fit=crop' },
            { key: 'industry12', icon: 'fa-bolt', color: 'bg-neutral-800', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80&auto=format&fit=crop' },
        ];

        // Build a single industry card
        function industryCardHTML(item, label, isDuplicate) {
            return `
                <div class="modern-card bg-black text-white border border-red-500 text-white overflow-hidden group w-56 shrink-0" data-industry-key="${item.key}">
                    <div class="relative h-36 overflow-hidden">
                        <img src="${item.img}" alt="${label}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" width="400" height="300" loading="lazy" decoding="async">
                        <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/85 to-transparent"></div>
                        <div class="absolute top-3 right-3 w-10 h-10 ${item.color} rounded-xl flex items-center justify-center shadow-lg">
                            <i class="fa-solid ${item.icon} text-lg text-white"></i>
                        </div>
                    </div>
                    <div class="p-5 text-center">
                        <div class="font-semibold text-sm industry-label">${label}</div>
                    </div>
                </div>`;
        }

        // Inject industry cards twice for a seamless infinite loop, then apply current language
        function buildIndustriesMarquee() {
            const container = document.getElementById('industries-marquee');
            if (!container) return;
            const lang = currentLang || 'ar';
            const oneSet = industriesData.map(item => {
                const label = translations[item.key] ? translations[item.key][lang] : '';
                return industryCardHTML(item, label, false);
            }).join('');
            // Duplicate the full set so the marquee loops seamlessly (-50% / +50% translate)
            container.innerHTML = `<div class="flex gap-5 px-2">${oneSet}</div><div class="flex gap-5 px-2" aria-hidden="true">${oneSet}</div>`;
        }

        // Update industry labels when language changes
        function refreshIndustriesLabels() {
            const lang = currentLang || 'ar';
            document.querySelectorAll('#industries-marquee [data-industry-key]').forEach(card => {
                const key = card.getAttribute('data-industry-key');
                if (translations[key] && translations[key][lang]) {
                    const labelEl = card.querySelector('.industry-label');
                    if (labelEl) labelEl.textContent = translations[key][lang];
                }
            });
        }

        // Initialize everything
        function initializeSite() {
            initializeTailwind();
            initTheme();
            initLanguage();
            initSmoothScroll();
            initKeyboardShortcuts();
            buildIndustriesMarquee();

            // Set initial language to Arabic
            currentLang = 'ar';

            // Optional: Add subtle scroll animation to process steps
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.process-step').forEach((step, i) => {
                step.style.opacity = '0.6';
                step.style.transform = 'translateY(20px)';
                step.style.transition = `all 0.5s ease ${i * 80}ms`;
                observer.observe(step);
            });

            // Easter egg: Logo click shows fun message
            const logo = document.querySelector('nav .flex.items-center');
            if (logo) {
                logo.addEventListener('click', () => {
                    logo.style.transitionDuration = '150ms';
                    logo.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        logo.style.transform = 'scale(1)';
                    }, 150);
                });
            }

            console.log('%c[Brand Clinic] Professional redesign initialized successfully. Light/Dark + AR/EN ready.', 'color:#64748b');

            // Add floating WhatsApp button
            addFloatingWhatsApp();
        }

        // Boot the site
        window.onload = initializeSite;
    