import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const galleryImages = [{
  id: 1,
  src: work1,
  alt: "Работа 1 - Архитектура бровей"
}, {
  id: 2,
  src: work2,
  alt: "Работа 2 - Коррекция бровей"
}, {
  id: 3,
  src: work3,
  alt: "Работа 3 - Окрашивание бровей"
}, {
  id: 4,
  src: work4,
  alt: "Работа 4 - Комплекс услуг"
}, {
  id: 5,
  src: work5,
  alt: "Работа 5 - Оформление бровей"
}, {
  id: 6,
  src: work6,
  alt: "Работа 6 - Ламинирование бровей"
}];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  return <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">РАБОТЫ</h2>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">ПРИМЕРЫ РАБОТ</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 animate-on-scroll scroll-animate-delay-1">
          {galleryImages.map((image, index) => <div key={image.id} className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer group animate-on-scroll-scale" style={{
          animationDelay: `${index * 100}ms`
        }} onClick={() => setSelectedImage(index)}>
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>)}
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage !== null && <img src={galleryImages[selectedImage].src} alt={galleryImages[selectedImage].alt} className="w-full h-auto rounded-2xl" />}
        </DialogContent>
      </Dialog>
    </section>;
};
