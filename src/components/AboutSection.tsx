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
            <GraduationCap className="h-10 w-10" style={{ color: "#E7793F" }} aria-hidden="true" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#00596C" }}>
            GIỚI THIỆU
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full" style={{ backgroundColor: "#E7793F" }} />

          <p className="mt-6 mx-auto max-w-[900px] text-base md:text-lg leading-relaxed text-foreground/70">
            Với tinh thần học thuật nghiêm túc và định hướng ứng dụng, chúng tôi xây dựng môi trường nghiên cứu và đào tạo
            hiện đại, kết nối giảng viên, nhà nghiên cứu và doanh nghiệp. Trọng tâm của chúng tôi là quản trị hiện đại,
            đổi mới sáng tạo và phát triển bền vững – tạo ra tri thức có giá trị thực tiễn, thúc đẩy năng lực cạnh tranh
            và đóng góp tích cực cho cộng đồng.
          </p>
        </div>

        <div className="mt-10 md:mt-12 max-w-5xl mx-auto">
          <Card className="rounded-2xl shadow-lg border-none overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title="Video giới thiệu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </AspectRatio>
          </Card>
        </div>
      </div>
    </section>
  );
}
