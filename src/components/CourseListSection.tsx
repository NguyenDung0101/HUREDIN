import { Calendar, Download, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    date: { day: "15", month: "NOV" },
    title: "Executive Leadership Program",
    location: "Hà Nội, Việt Nam",
  },
  {
    date: { day: "22", month: "NOV" },
    title: "Strategic Management for Leaders",
    location: "TP. Hồ Chí Minh, Việt Nam",
  },
  {
    date: { day: "05", month: "DEC" },
    title: "Digital Transformation Leadership",
    location: "Đà Nẵng, Việt Nam",
  },
  {
    date: { day: "12", month: "DEC" },
    title: "Innovation & Change Management",
    location: "Hà Nội, Việt Nam",
  },
];

const CourseListSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Khảo Sát Sắp Diễn Ra
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dự án khảo sát dành cho các hộ gia đình được diễn ra tại TP.HCM
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Date Circle */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">
                  {course.date.day}
                </span>
                <span className="text-xs text-primary-foreground/80 uppercase">
                  {course.date.month}
                </span>
              </div>

              {/* Course Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {course.title}
                </h3>
                <p className="text-muted-foreground flex items-center justify-center md:justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  {course.location}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 flex-shrink-0">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="h-4 w-4 mr-2" />
                  xem lịch trình
                </Button>
                <Button className="bg-accent hover:bg-accent-hover text-accent-foreground">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Liên hệ
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseListSection;
