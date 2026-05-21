// عقل التقييم والـ Logic لمشروع رحلة - شركة ESO
// مخزن لإجابات المستخدم الحالي
let userAnswers = {};

// دالة بدء الأسئلة
function startSurvey() {
    userAnswers = {}; // تصفير الإجابات السابقة
    askAge();
}

// 1. سؤال السن (تأكيد الجدية وبناء الثقة)
function askAge() {
    addMessage("bot", "تمام يا مسافر وحدك، نبدأ ببناء ملفك الشخصي.. كم عمرك الآن؟");
    showOptions([
        { text: "👶 أقل من 18 سنة", action: () => saveAnswer('age', 'أقل من 18', askStatus) },
        { text: "⚡ من 18 إلى 30 سنة", action: () => saveAnswer('age', '18-30', askStatus) },
        { text: "📊 من 31 إلى 45 سنة", action: () => saveAnswer('age', '31-45', askStatus) },
        { text: "👴 أكبر من 45 سنة", action: () => saveAnswer('age', 'أكبر من 45', askStatus) }
    ]);
}

// 2. سؤال الحالة الاجتماعية
function askStatus() {
    addMessage("bot", "👤 ما هي حالتك الاجتماعية الحالية؟");
    showOptions([
        { text: "💍 متزوج (أو يعول)", action: () => saveAnswer('status', 'متزوج', askLanguage) },
        { text: "🕊️ غير متزوج (أعزب)", action: () => saveAnswer('status', 'غير متزوج', askLanguage) }
    ]);
}

// 3. سؤال اللغة
function askLanguage() {
    addMessage("bot", "🗣️ ما هي اللغة الأجنبية التي تتقنها بشكل أفضل؟");
    showOptions([
        { text: "🇬🇧 الإنجليزية", action: () => saveAnswer('lang', 'إنجليزي', askLangLevel) },
        { text: "🇩🇪 الألمانية", action: () => saveAnswer('lang', 'ألماني', askLangLevel) },
        { text: "🇫🇷 الفرنسية", action: () => saveAnswer('lang', 'فرنسي', askLangLevel) },
        { text: "❌ لا أتقن لغة أجنبية حالياً", action: () => saveAnswer('lang', 'لا يوجد', askLangLevel) }
    ]);
}

// 4. مستوى اللغة
function askLangLevel() {
    if (userAnswers.lang === 'لا يوجد') {
        userAnswers.langLevel = 'مبتدئ';
        askLiving();
    } else {
        addMessage("bot", `📈 ما هو مستواك التقريبي في اللغة (${userAnswers.lang})؟`);
        showOptions([
            { text: "🥚 مبتدئ (أساسيات)", action: () => saveAnswer('langLevel', 'مبتدئ', askLiving) },
            { text: "🐥 متوسط (محادثة بسيطة)", action: () => saveAnswer('langLevel', 'متوسط', askLiving) },
            { text: "🦅 متقن (شهادة معتمدة / آيلتس)", action: () => saveAnswer('langLevel', 'متقن', askLiving) }
        ]);
    }
}

// 5. مكان السكن المتوقع
function askLiving() {
    addMessage("bot", "🏡 عند سفرك، أين تفضل السكن والمعيشة؟");
    showOptions([
        { text: "🏙️ داخل المدينة (تكلفة أعلى، خدمات أكثر)", action: () => saveAnswer('living', 'داخل المدينة', askSavings) },
        { text: "🌳 خارج المدينة / الريف (تكلفة أقل، هدوء)", action: () => saveAnswer('living', 'خارج المدينة', askSavings) }
    ]);
}

// 6. المدخرات المالية في البنك
function askSavings() {
    addMessage("bot", "💰 ما هي مدخراتك الحالية الجاهزة للسفر (لإثبات الحساب البنكي للسفارة)؟");
    showOptions([
        { text: "📉 ميزانية محدودة (أقل من 2000$)", action: () => saveAnswer('savings', 'ضعيفة', askPurpose) },
        { text: "📊 ميزانية متوسطة (من 2000$ لـ 5000$)", action: () => saveAnswer('savings', 'متوسطة', askPurpose) },
        { text: "📈 ميزانية ممتازة (أكثر من 5000$)", action: () => saveAnswer('savings', 'قوية', askPurpose) }
    ]);
}

// 7. الغرض الأساسي من السفر (هنا يبدأ المنطق والـ Logic الفعلي المتغير!)
function askPurpose() {
    addMessage("bot", "🎯 وأخيراً.. ما هو الغرض الأساسي والمسار الحالي الذي تبحث عنه؟");
    showOptions([
        { text: "🎓 الدراسة في الخارج", action: () => saveAnswer('purpose', 'دراسة', calculateResult) },
        { text: "💼 العمل (بشهادة جامعية)", action: () => saveAnswer('purpose', 'عمل بشهادة', calculateResult) },
        { text: "🛠️ عمل حر أو حرفي (بدون شهادة)", action: () => saveAnswer('purpose', 'عمل حر وحرفي', calculateResult) },
        { text: "🌍 الهجرة الدائمة والإقامة", action: () => saveAnswer('purpose', 'هجرة', calculateResult) }
    ]);
}

// 8. حساب النتيجة بناءً على توليفة الإجابات لمنع التكرار (Matrix Scoring)
function calculateResult() {
    addMessage("bot", "⏳ جاري تحليل ملفك الشخصي ومقارنته بالمتطلبات الرسمية للدول... انتظر ثانية واحدة 📊");
    
    setTimeout(() => {
        let score = 50; // السكور المبدئي
        let targetCountryKey = "uae"; // الدولة الافتراضية
        
        // تطبيق المنطق الذكي المتغير بناءً على توليفة المعطيات لمنع تشابه الإجابات:
        
        // حالة 1: دراسة وميزانية ضعيفة -> أوتوماتيك روسيا
        if (userAnswers.purpose === 'دراسة') {
            if (userAnswers.savings === 'ضعيفة') {
                targetCountryKey = "russia";
                score = userAnswers.age === '18-30' ? 85 : 65; // السن الصغير يرفع السكور في الدراسة
            } else {
                targetCountryKey = "germany"; // دراسة بميزانية متوسطة/قوية تذهب لألمانيا
                score = userAnswers.lang === 'ألماني' || userAnswers.lang === 'إنجليزي' ? 80 : 55;
            }
        }
        // حالة 2: عمل بشهادة ولغة قوية وميزانية متوسطة/قوية -> ألمانيا أو الإمارات
        else if (userAnswers.purpose === 'عمل بشهادة') {
            if (userAnswers.lang === 'ألماني' || userAnswers.langLevel === 'متقن') {
                targetCountryKey = "germany";
                score = 88;
            } else if (userAnswers.savings === 'ضعيفة') {
                targetCountryKey = "uae"; // الميزانية الضعيفة للعمل تذهب للإمارات لسهولة السفر برخصة سياحة وبحث
                score = 70;
            } else {
                targetCountryKey = "uae";
                score = 75;
            }
        }
        // حالة 3: عمل حر وحرفي -> البرتغال أو ألمانيا حسب اللغة
        else if (userAnswers.purpose === 'عمل حر وحرفي') {
            if (userAnswers.lang === 'ألماني') {
                targetCountryKey = "germany"; // الحرفيين مطلوبين في ألمانيا جداً
                score = 80;
            } else {
                targetCountryKey = "portugal"; // العمل الحر والديجيتال نوماد يذهب للبرتغال
                score = userAnswers.savings !== 'ضعيفة' ? 78 : 50;
            }
        }
        // حالة 4: الهجرة -> كندا (بشرط المؤهل القوي واللغة) أو البرتغال
        else if (userAnswers.purpose === 'هجرة') {
            if (userAnswers.lang === 'إنجليزي' && userAnswers.langLevel === 'متقن' && userAnswers.savings === 'قوية') {
                targetCountryKey = "canada";
                score = userAnswers.status === 'متزوج' ? 92 : 85; // المتزوج يحصل على نقاط أعلى في كندا لو الشروط كاملة
            } else {
                targetCountryKey = "portugal"; // الهجرة البديلة المرنة
                score = 65;
            }
        }

        // جلب داتا الدولة من ملف database.js
        const country = countriesData[targetCountryKey];
        
        // صياغة التقرير الدسم والمفصل النهائي للمستخدم
        let reportHTML = `
            <div class="report-card">
                <h3 style="color: var(--primary); margin-bottom: 10px;">📊 التقرير النهائي لملفك الاستشاري</h3>
                <p>🚀 <strong>فرصة نجاحك الكلية المقدرة:</strong> <span style="color: var(--accent); font-size: 1.3rem; font-weight:bold;">${score}%</span></p>
                <p>🌍 <strong>الدولة الأكثر توافقاً مع ظروفك حالياً:</strong> <span style="font-size: 1.1rem; font-weight:bold;">${country.name}</span></p>
                <p style="margin: 10px 0; font-style: italic; color: #555;">"${country.slogan}"</p>
                
                <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 15px 0; font-size: 0.9rem;">
                    📍 <strong>عنوان السفارة في مصر للتقديم:</strong><br>
                    ${country.embassy}<br>
                    🗺️ <a href="${country.maps}" target="_blank" style="color: var(--secondary); font-weight:bold; text-decoration:none;">عرض موقع السفارة على خرائط جوجل 🔗</a>
                </div>

                <h4 style="margin-top: 15px; color: var(--secondary);">🔗 الروابط والمنصات الرسمية للبدء فوراً:</h4>
                <ul style="margin-right: 20px; margin-top: 5px; font-size: 0.95rem;">
        `;

        // دمج الروابط الحقيقية ديناميكياً داخل التقرير
        country.links.forEach(link => {
            reportHTML += `<li style="margin-bottom: 8px;"><a href="${link.url}" target="_blank" style="color: #2980b9; text-decoration: underline;">${link.title}</a></li>`;
        });

        reportHTML += `
                </ul>
                <div style="margin-top: 20px; text-align: center; display: flex; gap: 10px; justify-content: center;">
                    <button class="share-btn fb" onclick="shareOnFacebook('${country.name}', ${score})">شارك النتيجة على فيسبوك 🟦</button>
                    <button class="share-btn wa" onclick="shareOnWhatsApp('${country.name}', ${score})">شارك على واتساب 🟩</button>
                </div>
            </div>
        `;

        addMessage("bot", reportHTML);
        
        // زر إعادة التقييم الذكي لإعادة المحاولة في أي وقت
        showOptions([
            { text: "🔄 إعادة إجراء التقييم بمعطيات جديدة", action: () => { chatBox.innerHTML = ''; startSurvey(); } }
        ]);
    }, 1000);
}

// دالة مساعدة لحفظ الإجابة والانتقال للخطوة التالية بسلاسة
function saveAnswer(key, value, nextStepFunc) {
    userAnswers[key] = value;
    addMessage("user", value);
    optionsArea.innerHTML = ''; // مسح الأزرار مؤقتاً لتجنب ضغط المستخدم مرتين
    setTimeout(nextStepFunc, 400);
}

// دالة مساعدة لطباعة الرسائل في الشات
function addMessage(sender, text) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${sender}`;
    msgDiv.innerHTML = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// دالة مساعدة لإنشاء الأزرار التفاعلية أسفل الشات
function showOptions(options) {
    optionsArea.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = opt.text;
        btn.onclick = opt.action;
        optionsArea.appendChild(btn);
    });
}

// دوال مشاركة النتيجة الفيروسية لزيادة زوار الموقع (Viral Marketing)
function shareOnFacebook(countryName, score) {
    const text = encodeURIComponent(`عملت تقييم هجرة وسفر مجاني على تطبيق رحلة (Rihla) وطلعت الدولة المناسبة لظروفي وإمكانياتي هي ${countryName} بنسبة نجاح ${score}%! جرب تقييمك مجاناً من هنا:`);
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
}

function shareOnWhatsApp(countryName, score) {
    const text = encodeURIComponent(`👋 جربت تطبيق رحلة (Rihla) المجاني لتقييم السفر والهجرة، وطلعت النتيجة المتوافقة مع ظروفي هي ${countryName} بنسبة نجاح ${score}%! جرب تقييمك وشوف روابط السكن والطيران الرسمية من هنا: ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
}
