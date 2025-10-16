import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const VIDEO_ID = "iG9CE55wbtY"; // Sir Ken Robinson TED talk – education theme

export default function AboutSection() {
  return (
    <section id="gioi-thieu" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap
              className="h-10 w-10"
              style={{ color: "#E7793F" }}
              aria-hidden="true"
            />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "#00596C" }}
          >
            GIỚI THIỆU
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-24 rounded-full"
            style={{ backgroundColor: "#E7793F" }}
          />

          <p className="mt-6 mx-auto max-w-[900px] text-base md:text-lg leading-relaxed text-foreground/70">
            Dự án{" "}
            <span className="font-bold">
              “Khảo sát nhận thức về phát triển sản phẩm nông nghiệp gắn với du
              lịch cộng đồng”
            </span>
            do{" "}
            <span className="font-bold">
              Chi cục Phát triển Nông thôn – Sở Nông nghiệp và Môi trường TP. Hồ
              Chí Minh
            </span>{" "}
            thực hiện.Mục tiêu nhằm đánh giá thực trạng, nhu cầu và tiềm năng
            phát triển mô hình “Nông nghiệp,Du lịch”.Dự án góp phần nâng cao
            nhận thức, kết nối cộng đồng và thúc đẩy phát triển bền vững nông
            thôn. Kết quả khảo sát sẽ là cơ sở cho việc hoạch định chính sách và
            hỗ trợ người dân hiệu quả hơn.
          </p>
        </div>

        <div className="mt-10 md:mt-12 max-w-5xl mx-auto">
          <Card className="rounded-2xl shadow-lg border-none overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/uJfrx4neSuI?si=J7fy0yNvODsD60wd"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </AspectRatio>
          </Card>
        </div>
      </div>
    </section>
  );
}
