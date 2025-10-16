import { Users, MapPin, Leaf, TrendingUp } from "lucide-react";

const impressiveNumbers = [
  {
    icon: Users,
    title: "24+",
    subtitle: "Xã,Phường",
    description: "Triển khai dự án đến các hộ gia đình",
  },
  {
    icon: MapPin,
    title: "48+",
    subtitle: "Báo cáo về thực trạng, nhận thức",
    description: "Triển khai dự án trên khắp cả nước",
  },
  {
    icon: Leaf,
    title: "50+",
    subtitle: "Loại sản phẩm",
    description: "Nông sản được phát triển và quảng bá",
  },
  {
    icon: TrendingUp,
    title: "3840+",
    subtitle: "Bản khảo sát được thực hiện",
    description: "Trung bình của các hộ gia đình tham gia",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Những con số ấn tượng
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dự án nông nghiệp 2025 đã tạo ra những tác động tích cực mạnh mẽ đến
            cộng đồng nông thôn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impressiveNumbers.map((item, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {item.title}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.subtitle}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
