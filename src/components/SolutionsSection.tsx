import { Award, Target, Users, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: Award,
    title: "Đào tạo Chuyên sâu",
    description:
      "Chương trình được thiết kế bởi các chuyên gia hàng đầu, kết hợp lý thuyết và thực hành",
  },
  {
    icon: Target,
    title: "Tùy chỉnh Linh hoạt",
    description:
      "Điều chỉnh nội dung phù hợp với mục tiêu và ngành nghề của tổ chức bạn",
  },
  {
    icon: Users,
    title: "Mạng lưới Kết nối",
    description:
      "Tham gia cộng đồng lãnh đạo với hơn 10,000+ thành viên toàn cầu",
  },
  {
    icon: TrendingUp,
    title: "Phát triển Bền vững",
    description:
      "Theo dõi tiến độ và hỗ trợ liên tục sau khi hoàn thành chương trình",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Giải Pháp Đào Tạo Toàn Diện
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cung cấp giải pháp đào tạo lãnh đạo toàn diện, 
            được thiết kế riêng cho nhu cầu của tổ chức bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <solution.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
