import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectItem {
  title: string;
  description: string;
  year: string;
  organization: string;
  imageUrl: string;
  href: string;
}

const projects: ProjectItem[] = [
  {
    title: "Khảo sát phát triển sản phẩm nông nghiệp gắn với du lịch cộng đồng",
    description:
      "Thu thập dữ liệu và đánh giá nhận thức của người dân về mô hình “Nông nghiệp, du lịch”, hướng đến nâng cao thu nhập và phát triển kinh tế bền vững nông thôn.",
    year: "2024",
    organization: "Viện Giáo dục Lãnh đạo Điều hành",
    imageUrl:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1600&auto=format&fit=crop",
    href: "/du-an/he-sinh-thai-du-lieu-hoc-thuat",
  },
  {
    title: "Chuyển đổi số trong quản trị nhân sự doanh nghiệp nhỏ và vừa",
    description:
      "Tư vấn và triển khai giải pháp số hóa trong quản lý nhân sự, tối ưu vận hành và nâng cao năng suất cho doanh nghiệp địa phương.",
    year: "2023",
    organization: "Đối tác doanh nghiệp chiến lược",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
    href: "/du-an/chuyen-doi-so-quan-tri",
  },
  {
    title: "Đào tạo kỹ năng lãnh đạo cộng đồng nông thôn",
    description:
      "Thiết kế chương trình đào tạo kỹ năng lãnh đạo, quản trị và khởi nghiệp nhằm thúc đẩy phát triển bền vững khu vực nông nghiệp – nông thôn.",
    year: "2022",
    organization: "Học viện Chính sách & Phát triển",
    imageUrl:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1600&auto=format&fit=crop",
    href: "/du-an/lanh-dao-ben-vung",
  },
  {
    title: "Phòng thí nghiệm đổi mới sáng tạo",
    description:
      "Thiết lập không gian nghiên cứu và thử nghiệm mô hình kinh doanh mới dựa trên dữ liệu và AI.",
    year: "2024",
    organization: "Liên minh khởi nghiệp đại học",
    imageUrl:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1600&auto=format&fit=crop",
    href: "/du-an/innovation-lab",
  },
  {
    title: "Tăng cường năng lực nghiên cứu",
    description:
      "Chương trình mentoring & công bố quốc tế cho giảng viên trẻ trong lĩnh vực quản trị và kinh tế.",
    year: "2021",
    organization: "Mạng lưới học thuật ASEAN",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
    href: "/du-an/nang-luc-nghien-cuu",
  },
  {
    title: "Kết nối doanh nghiệp – đại học",
    description:
      "Xây dựng cơ chế đồng phát triển chương trình, thực tập và nghiên cứu ứng dụng giữa hai khối.",
    year: "2023",
    organization: "Liên minh Doanh nghiệp & Đại học",
    imageUrl:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1600&auto=format&fit=crop",
    href: "/du-an/ket-noi-doanh-nghiep-dai-hoc",
  },
];

export default function ProjectsSection() {
  return (
    <section id="du-an" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "#00596C" }}
          >
            DỰ ÁN TIÊU BIỂU
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-24 rounded-full"
            style={{ backgroundColor: "#E7793F" }}
          />
          <p className="mt-4 text-foreground/70 text-base md:text-lg">
            Các dự án tiêu biểu thể hiện định hướng học thuật, ứng dụng và tác
            động xã hội.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="group block"
              aria-label={p.title}
            >
              <Card className="overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 group-hover:scale-[1.01]">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-sm text-foreground/70">
                    <span className="font-medium" style={{ color: "#00596C" }}>
                      {p.organization}
                    </span>
                    <span className="tabular-nums" style={{ color: "#00596C" }}>
                      {p.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {p.description}
                  </p>
                  <div className="pt-2">
                    <Button
                      className="rounded-md text-white hover:opacity-90"
                      style={{ backgroundColor: "#E7793F" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          "https://drive.google.com/drive/folders/1SbgB4datFvc53PacxIzPPJu-FT66HoAF",
                          "_blank"
                        );
                      }}
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
