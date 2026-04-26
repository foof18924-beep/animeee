import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Download, Shield, Zap, Globe, BarChart3, Tv } from "lucide-react";

// Static download link
const DOWNLOAD_LINK = "https://example.com/download";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    window.location.href = DOWNLOAD_LINK;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-sm">
              Y
            </div>
            <span className="font-bold text-lg">YACINETVS</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-400 transition">
              الرئيسية
            </a>
            <a href="#faq" className="hover:text-green-400 transition">
              الأسئلة الشائعة
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="text-green-400">ياسين</span> | Yacine TV
                </h1>
                <p className="text-xl text-slate-300">
                  شاهد المباريات مباشرة بجودة عالية مجاناً
                </p>
              </div>

              <p className="text-slate-400 leading-relaxed">
                تطبيق ياسين تي في هو تطبيق أندرويد يوفر بثًا مباشرًا مجانيًا لمستخدمي الهواتف
                المحمولة. يقدم التطبيق بثًا مباشرًا للأحداث الرياضية والأفلام والعديد من القنوات
                التلفزيونية دون أي رسوم اشتراك.
              </p>

              <Button
                onClick={handleDownload}
                disabled={isLoading}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-lg font-bold shadow-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                {isLoading ? "جاري التحميل..." : "تنزيل سريع لملف APK"}
              </Button>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-green-400">تم التحقق من الأمان</p>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1 bg-slate-800 px-3 py-2 rounded">
                    <Shield className="h-4 w-4 text-red-500" />
                    <span className="text-xs">CM Security</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-800 px-3 py-2 rounded">
                    <Shield className="h-4 w-4 text-orange-500" />
                    <span className="text-xs">Avast</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-800 px-3 py-2 rounded">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span className="text-xs">McAfee</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-64 h-96 bg-black rounded-3xl border-8 border-slate-700 shadow-2xl flex items-center justify-center">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl"></div>
                <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex flex-col items-center justify-center p-4">
                  <div className="text-white text-center space-y-4">
                    <div className="text-5xl font-bold">YACINE</div>
                    <div className="text-3xl font-bold">TV</div>
                    <Tv className="h-16 w-16 mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">ياسين تي في</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-slate-300">
            <p>
              تطبيق ياسين تي في هو تطبيق أندرويد يوفر بثًا مباشرًا مجانيًا لمستخدمي الهواتف
              المحمولة. يقدم التطبيق بثًا مباشرًا للأحداث الرياضية والأفلام والعديد من القنوات
              التلفزيونية دون أي رسوم اشتراك. ويحظى التطبيق بشهرة واسعة بين عشاق كرة القدم لجودة
              البث المباشر للمباريات دون انقطاع.
            </p>
            <p>
              وإلى جانب الرياضة، يوفر التطبيق أيضًا محتوى ترفيهيًا متنوعًا، مثل الأخبار والقنوات
              العالمية.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">ميزات جديدة</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700 p-6 hover:border-green-500 transition">
              <Zap className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="font-bold mb-2">بث بجودة عالية الوضوح</h3>
              <p className="text-sm text-slate-400">
                استمتع ببث عالي الجودة بدقة تصل إلى 1080p
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6 hover:border-green-500 transition">
              <Globe className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="font-bold mb-2">لا حاجة للاشتراك</h3>
              <p className="text-sm text-slate-400">
                جميع المحتوى متاح مجاناً بدون أي رسوم اشتراك
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6 hover:border-green-500 transition">
              <Tv className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="font-bold mb-2">دعم Chromecast</h3>
              <p className="text-sm text-slate-400">
                شاهد المحتوى على شاشتك الكبيرة بسهولة
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6 hover:border-green-500 transition">
              <BarChart3 className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="font-bold mb-2">تحديثات مباشرة للنتائج</h3>
              <p className="text-sm text-slate-400">
                احصل على أحدث النتائج والإحصائيات فوراً
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6 hover:border-green-500 transition">
              <Shield className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="font-bold mb-2">آمن وموثوق</h3>
              <p className="text-sm text-slate-400">
                تم التحقق من الأمان من قبل أفضل برامج الحماية
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6 hover:border-green-500 transition">
              <Download className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="font-bold mb-2">تحميل سريع</h3>
              <p className="text-sm text-slate-400">
                حمل التطبيق بسرعة من خادم موثوق
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusted Option Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">الخيار الموثوق للبث المباشر</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-slate-300">
            <p>
              يحظى تطبيق ياسين تي في بثقة المستخدمين الكبيرة. فمتاحيته المجانية، ومحتواه الواسع،
              وأداؤه المستقر، كلها عوامل تجعله تطبيقًا متميزًا للبث المباشر. لذا، يبقى ياسين تي في
              الخيار الأمثل لكل من يبحث عن تجربة بث تلفزيوني مباشر موثوقة وعالية الجودة على نظام
              أندرويد.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="bg-slate-800 border-slate-700 p-6">
                <h3 className="font-bold mb-3 text-green-400">تنزيل ملف APK آمن ومضمون</h3>
                <p className="text-sm">
                  تحميل تطبيق ياسين تي في من موقعنا آمن تمامًا. نوفر ملف APK مباشرًا وخالياً من
                  الفيروسات والبرامج الضارة. نولي أهمية قصوى للأمان، خاصةً عند تثبيت التطبيقات من
                  خارج متجر جوجل بلاي.
                </p>
              </Card>
              <Card className="bg-slate-800 border-slate-700 p-6">
                <h3 className="font-bold mb-3 text-green-400">قنوات إخبارية تعمل على مدار الساعة</h3>
                <p className="text-sm">
                  قناة ياسين ليست مجرد قناة رياضية، بل هي فرصة لمتابعة آخر الأخبار العالمية على
                  مدار الساعة، وتتيح لك مشاهدة قنوات الجزيرة، وبي بي سي العربية، وفرانس 24.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">الأسئلة الشائعة</h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="q1" className="bg-slate-800 border-slate-700 px-4 rounded">
                <AccordionTrigger className="hover:text-green-400">
                  هل هناك رسوم للوصول إلى قناة ياسين التلفزيونية؟
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  لا توجد رسوم اشتراك أو تسجيل للوصول إلى المباريات المباشرة أو القنوات التلفزيونية
                  على تطبيق ياسين تي في. كل شيء متاح مجاناً.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="bg-slate-800 border-slate-700 px-4 rounded">
                <AccordionTrigger className="hover:text-green-400">
                  هل من الآمن تثبيت تطبيق ياسين تي في على نظام أندرويد؟
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  نعم. إذا قمت بالتنزيل من مصدر موثوق، فسيكون ملف APK خالياً من الفيروسات وآمناً،
                  وسيعمل بسلاسة تامة على جهاز Android الخاص بك.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="bg-slate-800 border-slate-700 px-4 rounded">
                <AccordionTrigger className="hover:text-green-400">
                  ما نوع الفيديوهات التي يقدمها تلفزيون ياسين؟
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  بث مباشر للأحداث الرياضية، والبطولات الدولية، والقنوات الإخبارية، والقنوات
                  الترفيهية، ومحتوى الأطفال. هذا المحتوى مُصمم للعائلات.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="bg-slate-800 border-slate-700 px-4 rounded">
                <AccordionTrigger className="hover:text-green-400">
                  هل يبث تلفزيون ياسين بجودة عالية الوضوح؟
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  نعم، يمكنك الاختيار من بين مجموعة متنوعة من جودة الفيديو، تصل إلى 1080 بكسل،
                  بناءً على سرعة شبكتك.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="bg-slate-800 border-slate-700 px-4 rounded">
                <AccordionTrigger className="hover:text-green-400">
                  كيف يمكنني تثبيت التطبيق؟
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  قم بتنزيل ملف APK من موقعنا، ثم افتح المدير وانقر على الملف لتثبيت التطبيق على جهازك.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6" className="bg-slate-800 border-slate-700 px-4 rounded">
                <AccordionTrigger className="hover:text-green-400">
                  هل يمكنني استخدام التطبيق على أجهزة متعددة؟
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  نعم، يمكنك تثبيت التطبيق على عدة أجهزة Android واستخدامه في نفس الوقت.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">عن التطبيق</h3>
              <p className="text-sm text-slate-400">
                تطبيق ياسين تي في يوفر بثًا مباشرًا مجانيًا للأحداث الرياضية والقنوات التلفزيونية.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">الروابط</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-slate-400 hover:text-green-400">
                    سياسة الخصوصية
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-green-400">
                    الشروط والأحكام
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">التواصل</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-slate-400 hover:text-green-400">
                    اتصل بنا
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-green-400">
                    تنصل
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">المتابعة</h3>
              <p className="text-sm text-slate-400">
                تابعنا على وسائل التواصل الاجتماعي للحصول على آخر التحديثات.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2026 Yacine TV. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
