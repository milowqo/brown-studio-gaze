import { Button } from "@/components/ui/button";
import heroNew from "@/assets/hero-new.jpg";
import { Send, MessageCircle, HandHeart, MapPin, Sparkles, HelpCircle } from "lucide-react";
import { useEffect } from "react";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          if (element.classList.contains("animate-on-scroll")) {
            element.classList.add("scroll-animate");
          }
          if (element.classList.contains("animate-on-scroll-left")) {
            element.classList.add("scroll-animate-left");
          }
          if (element.classList.contains("animate-on-scroll-right")) {
            element.classList.add("scroll-animate-right");
          }
          if (element.classList.contains("animate-on-scroll-scale")) {
            element.classList.add("scroll-animate-scale");
          }
        }
      });
    }, observerOptions);
    const elements = document.querySelectorAll(".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale");
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50 transition-all duration-300">
        <nav className="container mx-auto px-4 sm:px-8 py-4">
          <div className="text-xs tracking-widest text-muted-foreground">BROW STUDIO</div>
        </nav>
      </header>

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src={heroNew} alt="GAZE Brow Studio - Professional Brow Artist" className="w-full h-full object-cover object-[65%_20%] sm:object-[60%_25%] md:object-[center_30%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 rounded-none py-0 px-0 my-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-8 text-center animate-on-scroll">
          <div className="space-y-6 sm:space-y-8 backdrop-blur-sm bg-black/10 py-8 sm:py-12 px-4 sm:px-8 rounded-3xl">
            <div className="space-y-2 sm:space-y-4">
              <p className="text-xs sm:text-sm tracking-widest uppercase text-hero-text drop-shadow-lg">
                BROW STUDIO
              </p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-hero-text drop-shadow-2xl">
                GAZE
              </h1>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto text-hero-text drop-shadow-lg">
              Брови, которые говорят за себя.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8 justify-center items-center">
              <a href="https://dikidi.net/#widget=198091" className="inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 bg-button-book hover:bg-button-book-hover text-nude-dark px-6 sm:px-8 py-3 sm:py-4 tracking-wider hover:scale-110 hover:shadow-2xl pulse-glow">
                ЗАПИСАТЬСЯ
              </a>
              <Button onClick={() => scrollToSection("services")} size="lg" className="bg-cappuccino hover:bg-cappuccino/80 text-hero-text border-2 border-cappuccino rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm tracking-wider transition-all duration-500 hover:scale-110 hover:shadow-2xl font-semibold">
                УСЛУГИ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Features Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 bg-background">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-6 animate-on-scroll scroll-animate-delay-1 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105">
              <div className="w-20 h-20 rounded-full bg-button-book flex items-center justify-center transition-all duration-500 hover:scale-110">
                <Sparkles className="w-10 h-10 text-nude-dark" />
              </div>
              <h3 className="text-2xl font-semibold text-nude-dark">Долгая носка</h3>
              <p className="text-muted-foreground leading-relaxed">
                Равномерный цвет и четкая форма до 4х недель.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-6 animate-on-scroll scroll-animate-delay-2 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105">
              <div className="w-20 h-20 rounded-full bg-button-book flex items-center justify-center transition-all duration-500 hover:scale-110">
                <HandHeart className="w-10 h-10 text-nude-dark" />
              </div>
              <h3 className="text-2xl font-semibold text-nude-dark">Сервис и качество</h3>
              <p className="text-muted-foreground leading-relaxed">
                Чай, конфетки, расслабляющая музыка на фоне и качественно
                предоставленные услуги.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-6 animate-on-scroll scroll-animate-delay-3 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 sm:col-span-2 md:col-span-1">
              <div className="w-20 h-20 rounded-full bg-button-book flex items-center justify-center transition-all duration-500 hover:scale-110">
                <MapPin className="w-10 h-10 text-nude-dark" />
              </div>
              <h3 className="text-2xl font-semibold text-nude-dark">Удобное расположение</h3>
              <p className="text-muted-foreground leading-relaxed">
                Студия находится в центре города, рядом парковка.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 md:py-32 px-4 sm:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">УСЛУГИ</h2>
            <p className="text-muted-foreground text-sm tracking-widest uppercase">
              price list
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-1 animate-on-scroll scroll-animate-delay-1">
            {/* Service Items */}
            <div className="flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs text-muted-foreground">(01)</span>
                  <span className="text-base sm:text-lg">Коррекция бровей <span className="text-xs sm:text-sm text-muted-foreground">(без окрашивания)</span></span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">1000₽</span>
            </div>

            <div className="flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs text-muted-foreground">(02)</span>
                  <span className="text-base sm:text-lg">Коррекция + Окрашивание <span className="text-xs sm:text-sm text-muted-foreground">(краска / хна)</span></span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">1800₽</span>
            </div>

            <div className="flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs text-muted-foreground">(03)</span>
                  <span className="text-base sm:text-lg">Коррекция + Окрашивание + Ламинирование</span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">2300₽</span>
            </div>

            <div className="flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs text-muted-foreground">(04)</span>
                  <span className="text-base sm:text-lg">Коррекция + Ламинирование</span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">1800₽</span>
            </div>

            <div className="flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs text-muted-foreground">(05)</span>
                  <span className="text-base sm:text-lg">Коррекция + Осветление <span className="text-xs sm:text-sm text-muted-foreground">(небольшое прореживание входит в стоимость)</span></span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">1800₽</span>
            </div>

            <div className="flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs text-muted-foreground">(06)</span>
                  <span className="text-base sm:text-lg">Окрашивание бровей <span className="text-xs sm:text-sm text-muted-foreground">(краска / хна)</span></span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">1000₽</span>
            </div>

            <div className="flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs text-muted-foreground">(07)</span>
                  <span className="text-base sm:text-lg">Ламинирование бровей <span className="text-xs sm:text-sm text-muted-foreground">(уход входит в стоимость)</span></span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">1000₽</span>
            </div>

            <div className="flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs text-muted-foreground">(08)</span>
                  <span className="text-base sm:text-lg">Осветление бровей <span className="text-xs sm:text-sm text-muted-foreground">(уход входит в стоимость)</span></span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">1000₽</span>
            </div>

            <div className="flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs text-muted-foreground">(09)</span>
                  <span className="text-base sm:text-lg">Депиляция зон на лице</span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">от 100₽</span>
            </div>
          </div>

          <div className="flex justify-center mt-8 sm:mt-12 animate-on-scroll scroll-animate-delay-2">
            <a href="https://dikidi.net/#widget=198091" className="inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 text-primary-foreground px-12 sm:px-16 py-5 sm:py-6 tracking-wider hover:scale-105 pulse-glow w-full sm:w-auto">
              ЗАПИСАТЬСЯ
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold">КОНТАКТЫ</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 animate-on-scroll scroll-animate-delay-1">
            <Button variant="outline" size="lg" className="justify-center gap-3 sm:gap-4 py-6 sm:py-8 text-base sm:text-lg border-2 rounded-2xl hover:bg-background hover:scale-110 transition-all duration-500 hover:shadow-xl" onClick={() => window.open("https://t.me/milowqo", "_blank")}>
              <Send className="w-5 h-5 sm:w-6 sm:h-6" />
              Telegram
            </Button>

            <Button variant="outline" size="lg" className="justify-center gap-3 sm:gap-4 py-6 sm:py-8 text-base sm:text-lg border-2 rounded-2xl hover:bg-background hover:scale-110 transition-all duration-500 hover:shadow-xl" onClick={() => window.open("https://wa.me/79113802700", "_blank")}>
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              WhatsApp
            </Button>

            <Button variant="outline" size="lg" className="justify-center gap-3 sm:gap-4 py-6 sm:py-8 text-base sm:text-lg border-2 rounded-2xl hover:bg-background hover:scale-110 transition-all duration-500 hover:shadow-xl sm:col-span-2 lg:col-span-1" onClick={() => window.open("https://vk.com/mari.guseinova", "_blank")}>
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.11 14.77h-1.38c-.55 0-.72-.44-1.72-1.46-.86-.88-1.25-1-1.47-1-.3 0-.39.09-.39.51v1.34c0 .36-.11.58-1.07.58-1.58 0-3.33-.95-4.56-2.73-1.85-2.61-2.35-4.58-2.35-4.99 0-.22.09-.43.51-.43h1.38c.38 0 .52.17.67.58.76 2.2 2.04 4.13 2.56 4.13.2 0 .29-.09.29-.59v-2.3c-.07-.96-.56-1.04-.56-1.38 0-.17.14-.34.37-.34h2.16c.32 0 .44.17.44.54v3.09c0 .32.14.44.23.44.2 0 .37-.12.74-.49 1.14-1.28 1.95-3.26 1.95-3.26.11-.22.28-.43.7-.43h1.38c.46 0 .56.24.46.58-.17.82-1.75 3.5-1.75 3.5-.17.27-.23.39 0 .7.17.23.72.71 1.09 1.14.67.77 1.18 1.41 1.32 1.86.14.44-.08.67-.52.67z" />
              </svg>
              VK
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <footer className="py-8 sm:py-12 text-center border-t border-border bg-background">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-6 sm:mb-8 animate-on-scroll">
            <p className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-2">GAZE</p>
            <p className="text-xs tracking-widest text-muted-foreground">
              BROW STUDIO
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            © BROW STUDIO GAZE {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      {/* Floating Help Button */}
      
    </div>;
};
export default Index;