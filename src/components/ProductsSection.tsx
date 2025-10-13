import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Executive MBA",
    description:
      "Chương trình MBA cao cấp với đội ngũ giảng viên quốc tế, kết hợp lý thuyết và thực hành doanh nghiệp",
    highlights: ["18 tháng", "Online & Offline", "Bằng quốc tế"],
  },
  {
    title: "Leadership Certificate",
    description:
      "Chứng chỉ lãnh đạo được công nhận toàn cầu, phát triển kỹ năng quản lý và ra quyết định chiến lược",
    highlights: ["6 tháng", "100% Online", "Học phí linh hoạt"],
  },
  {
    title: "Digital Transformation",
    description:
      "Khóa học chuyên sâu về chuyển đổi số, giúp lãnh đạo điều hướng doanh nghiệp trong kỷ nguyên số",
    highlights: ["3 tháng", "Workshop thực hành", "Tư vấn 1-1"],
  },
];

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Sản Phẩm & Thành Tựu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá các chương trình đào tạo được thiết kế riêng 
            cho sự phát triển nghề nghiệp của bạn
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-card p-10 rounded-2xl border border-border shadow-lg">
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {product.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <Button className="bg-accent hover:bg-accent-hover text-accent-foreground">
                      Xem chi tiết
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProduct}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary hover:bg-primary-hover text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextProduct}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary hover:bg-primary-hover text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
