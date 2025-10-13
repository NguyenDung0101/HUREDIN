import { Button } from "@/components/ui/button";

export default function AboutInstituteSection() {
  return (
    <section id="about-institute" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: "#00596C" }}>
              GIỚI THIỆU VỀ VIỆN
            </h2>
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-6 max-w-prose">
              Viện hướng đến xây dựng hệ sinh thái học thuật hiện đại, kết nối nghiên cứu, đào tạo và doanh nghiệp
              nhằm tạo ra tri thức có giá trị thực tiễn, đóng góp cho cộng đồng và phát triển bền vững.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>
                Tập trung vào quản trị hiện đại, đổi mới sáng tạo và năng lực lãnh đạo trong bối cảnh số.
              </li>
              <li>
                Hợp tác rộng rãi với các trường đại học, viện nghiên cứu và doanh nghiệp trong và ngoài nước.
              </li>
              <li>
                Chú tr��ng chuyển giao tri thức, ứng dụng thực tiễn và tác động xã hội dài hạn.
              </li>
            </ul>
            <div className="mt-6">
              <Button
                className="rounded-md text-white px-6 py-2 hover:opacity-90"
                style={{ backgroundColor: "#E7793F" }}
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1523246206026-7a3a9a74a3a2?q=80&w=1800&auto=format&fit=crop"
                alt="Teamwork and academic collaboration"
                className="w-full h-[320px] md:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
