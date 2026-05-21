// منجم معلومات الدول والروابط الرسمية - مشروع رحلة (شركة ESO)
const countriesData = {
    russia: {
        name: "روسيا 🇷🇺",
        slogan: "الوجهة الأسهل والأوفر للدراسة وبناء المستقبل التعلّمي.",
        embassy: "الدقي - 9 شارع الجيزة، الجيزة. هاتف: 0237489353",
        maps: "https://maps.google.com/?q=Russian+Embassy+Cairo",
        links: [
            { title: "🏛️ البوابة الرسمية للتقديم في الجامعات الروسية", url: "https://educationinrussia.com/" },
            { title: "💰 حساب تكاليف المعيشة والسوبرماركت في روسيا (Numbeo)", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Russia" },
            { title: "✈️ حجز طيران رخيص لروسيا (Skyscanner)", url: "https://www.skyscanner.net/" },
            { title: "🏠 موقع البحث عن سكن للطلاب والشباب", url: "https://www.booking.com/" }
        ]
    },
    germany: {
        name: "ألمانيا 🇩🇪",
        slogan: "أقوى اقتصاد أوروبي يبحث عن المهندسين، الأطباء، وأصحاب الحرف اليدوية.",
        embassy: "الزمالك - 2 شارع حسن صبري، القاهرة. هاتف: 0227282000",
        maps: "https://maps.google.com/?q=German+Embassy+Cairo",
        links: [
            { title: "🎫 بوابة 'كارت الفرصة' ونظام النقاط الألماني الجديد", url: "https://www.make-it-in-germany.com/" },
            { title: "🎓 بوابة التقديم للجامعات الألمانية (Uni-Assist)", url: "https://www.uni-assist.de/" },
            { title: "💰 حساب أسعار المطاعم والعيش في ألمانيا (Numbeo)", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Germany" },
            { title: "✈️ مقارنة أسعار الطيران لألمانيا", url: "https://www.skyscanner.net/" }
        ]
    },
    canada: {
        name: "كندا 🇨🇦",
        slogan: "بلد الهجرة النظامية الأول عالمياً لأصحاب المؤهلات واللغات القوية.",
        embassy: "جاردن سيتي - 6 شارع محمد فهمي السيد، القاهرة. هاتف: 0227918700",
        maps: "https://maps.google.com/?q=Canadian+Embassy+Cairo",
        links: [
            { title: "🌍 الموقع الرسمي للهجرة الكندية (Express Entry)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html" },
            { title: "💰 أسعار السوبرماركت والإيجارات في كندا", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Canada" },
            { title: "✈️ أرخص تذاكر طيران لكندا", url: "https://www.skyscanner.net/" }
        ]
    },
    uae: {
        name: "الإمارات 🇦🇪",
        slogan: "الوجهة الأسرع للعمل وبدء حياة مهنية بدون تعقيدات فيزا أوروبا.",
        embassy: "التجمع الخامس - شارع التسعين الجنوبي، القاهرة الجديدة. هاتف: 0226134644",
        maps: "https://maps.google.com/?q=UAE+Embassy+Cairo",
        links: [
            { title: "💼 البوابة الرسمية لاستكشاف وظائف وتأشيرات الإمارات", url: "https://u.ae/en/information-and-services/jobs" },
            { title: "💰 تكلفة السكن والمعيشة داخل وخارج مدن الإمارات", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=United+Arab+Emirates" },
            { title: "✈️ رحلات الطيران المباشرة للإمارات", url: "https://www.egyptair.com/" }
        ]
    },
    portugal: {
        name: "البرتغال 🇵🇹",
        slogan: "بوابتك السلسة لأوروبا عبر تأشيرات العمل الحر والرحالة الرقميين.",
        embassy: "الزمالك - 25 شارع أحمد حشمت، القاهرة. هاتف: 0227354929",
        maps: "https://maps.google.com/?q=Portuguese+Embassy+Cairo",
        links: [
            { title: "🌍 شروط تأشيرة العمل الحر والـ Digital Nomad (بوابة الهجرة الرسمية)", url: "https://vistos.mne.gov.pt/en/" },
            { title: "💰 مصاريف الأكل والإيجار في البرتغال مقارنة بمصر", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Portugal" },
            { title: "🏠 منصة البحث عن سكن شبابي في البرتغال", url: "https://erasmusu.com/" }
        ]
    }
};
