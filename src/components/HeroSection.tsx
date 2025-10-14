import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logo1 from "@/assets/logo-1.png";
import logo2 from "@/assets/logo-2.png";

const slides = [
  {
    title: "HOẠT ĐỘNG NGHIÊN CỨU",
    titlePart1: "HOẠT ĐỘNG",
    titlePart2: "NGHIÊN CỨU",
    description:
      "Viện Giáo dục Lãnh đạo Điều hành cam kết thúc đẩy nghiên cứu ứng dụng trong lĩnh vực quản trị doanh nghiệp và phát triển lãnh đạo. Chúng tôi hợp tác với các tổ chức hàng đầu để tạo ra những giải pháp đào tạo phù hợp với bối cảnh kinh doanh Việt Nam và khu vực, góp phần nâng cao năng lực cạnh tranh của doanh nghiệp trong thời đại số.",
  },
  {
    title: "CHƯƠNG TRÌNH ĐÀO TẠO",
    titlePart1: "CHƯƠNG TRÌNH",
    titlePart2: "ĐÀO TẠO",
    description:
      "Các chương trình đào tạo lãnh đạo cao cấp của chúng tôi được thiết kế dựa trên nghiên cứu sâu về xu hướng quản trị hiện đại. Kết hợp lý thuyết tiên tiến với thực tiễn doanh nghiệp, chúng tôi mang đến trải nghiệm học tập chuyên sâu cho các nhà lãnh đạo muốn nâng tầm kỹ năng và tư duy chiến lược.",
  },
  {
    title: "HỢP TÁC QUỐC TẾ",
    titlePart1: "HỢP TÁC",
    titlePart2: "QUỐC TẾ",
    description:
      "Chúng tôi xây dựng mạng lưới đối tác chiến lược với các trường đại học và tổ chức giáo dục hàng đầu thế giới. Thông qua các chương trình trao đổi học thuật và nghiên cứu chung, chúng tôi liên tục cập nhật những tri thức mới nhất về lãnh đạo và quản trị doanh nghiệp toàn cầu.",
  },
  {
    title: "CỘNG ĐỒNG LÃNH ĐẠO",
    titlePart1: "CỘNG ĐỒNG",
    titlePart2: "LÃNH ĐẠO",
    description:
      "Với hơn 5,000 học viên tốt nghiệp, chúng tôi tự hào xây dựng một cộng đồng lãnh đạo năng động và có tầm ảnh hưởng. Các hoạt động networking và chia sẻ kinh nghiệm giúp các nhà lãnh đạo kết nối, học hỏi và cùng nhau phát triển trong hành trình nâng cao năng lực quản trị.",
  },
  {
    title: "TƯƠNG LAI BỀN VỮNG",
    titlePart1: "TƯƠNG LAI",
    titlePart2: "BỀN VỮNG",
    description:
      "Chúng tôi hướng đến phát triển thế hệ lãnh đạo có tầm nhìn chiến lược và trách nhiệm xã hội. Các nghiên cứu của chúng tôi tập trung vào quản trị bền vững, đạo đức kinh doanh và trách nhiệm doanh nghiệp, góp phần xây dựng một cộng đồng doanh nghiệp phát triển hài hòa với xã hội.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-primary pt-20 pb-12 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Logos Section */}
        <div className="flex items-center justify-center gap-8 mb-16 pt-8">
          {/* <div className="bg-background rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={logo1}
              alt="Partner Logo 1"
              className="h-20 w-20 object-contain"
            />
          </div>
          <div className="bg-background rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={logo2}
              alt="Partner Logo 2"
              className="h-20 w-20 object-contain"
            />
          </div> */}
        </div>

        {/* Carousel Section */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel Card */}
          <div className="relative bg-background rounded-3xl shadow-2xl overflow-hidden min-h-[480px]">
            <div className="relative h-full flex">
              {/* Left Orange Curved Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 0 L 60 0 Q 100 50 60 100 L 0 100 Z"
                    fill="url(#orangeGradient)"
                  />
                  <defs>
                    <linearGradient
                      id="orangeGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="hsl(var(--accent))" />
                      <stop
                        offset="100%"
                        stopColor="hsl(var(--accent-hover))"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex-1 p-8 md:p-12 lg:p-16 pl-24 md:pl-40">
                {/* Slide Content with Transition */}
                <div key={currentSlide} className="space-y-6 animate-fade-in">
                  {/* Split Title */}
                  <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
                      <span className="block text-primary">
                        {slides[currentSlide].titlePart1}
                      </span>
                      <span className="block text-accent">
                        {slides[currentSlide].titlePart2}
                      </span>
                    </h1>
                  </div>

                  {/* Description */}
                  <div className="max-w-2xl">
                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                      {slides[currentSlide].description}
                    </p>
                  </div>

                  {/* QR Code Section */}
                  <div className="absolute bottom-8 right-8 text-right">
                    <div className="inline-block">
                      <div className="w-24 h-24 bg-muted rounded-xl mb-2 flex items-center justify-center border-2 border-border">
                        <div className="text-center">
                          <div className="text-xs font-semibold text-muted-foreground">
                            QR
                          </div>
                          <div className="text-xs text-muted-foreground">
                            CODE
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">
                        Scan để xem thêm
                        <br />
                        thông tin chi tiết
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-40 bg-accent hover:bg-accent-hover text-accent-foreground p-4 rounded-full transition-all duration-300 shadow-xl hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-40 bg-accent hover:bg-accent-hover text-accent-foreground p-4 rounded-full transition-all duration-300 shadow-xl hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Pagination */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-10 bg-accent"
                    : "w-2.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
