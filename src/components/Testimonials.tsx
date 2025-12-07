import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Анна М.",
    rating: 5,
    text: "Потрясающая работа! Брови выглядят естественно и держатся очень долго. Мария настоящий профессионал своего дела.",
    date: "2 недели назад"
  },
  {
    id: 2,
    name: "Елена К.",
    rating: 5,
    text: "Очень довольна результатом! Студия уютная, атмосфера расслабляющая. Обязательно вернусь снова!",
    date: "1 месяц назад"
  },
  {
    id: 3,
    name: "Мария С.",
    rating: 5,
    text: "Идеальная форма бровей! Мария учла все мои пожелания и сделала именно то, что я хотела. Рекомендую!",
    date: "3 недели назад"
  },
  {
    id: 4,
    name: "Ольга В.",
    rating: 5,
    text: "Прекрасный сервис и качество работы. Цены адекватные, результат превосходный. Спасибо!",
    date: "2 месяца назад"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">ОТЗЫВЫ</h2>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            что говорят наши клиенты
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative animate-on-scroll scroll-animate-delay-1">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 sm:p-12 bg-card border-border hover:shadow-2xl transition-all duration-500">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${
                            i < testimonial.rating
                              ? "fill-button-book text-button-book"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-lg sm:text-xl text-center mb-8 leading-relaxed text-foreground">
                      "{testimonial.text}"
                    </p>
                    <div className="text-center">
                      <p className="font-semibold text-nude-dark text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{testimonial.date}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-button-book w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
