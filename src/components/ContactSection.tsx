import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cảm ơn bạn đã liên hệ!",
      description: "Chúng tôi sẽ phản hồi trong vòng 24 giờ.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Liên Hệ Tư Vấn
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Để lại thông tin, chúng tôi sẽ liên hệ tư vấn chi tiết về chương trình phù hợp
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-in">
              <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">
                      Email
                    </h4>
                    <p className="text-primary-foreground/80">
                      info@executiveedu.vn
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">
                      Hotline
                    </h4>
                    <p className="text-primary-foreground/80">
                      1900 xxxx
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl">
                <p className="text-primary-foreground/90 leading-relaxed">
                  Hãy để lại thông tin của bạn, đội ngũ tư vấn chuyên nghiệp 
                  của chúng tôi sẽ liên hệ và hỗ trợ bạn tìm được chương trình 
                  phù hợp nhất cho mục tiêu phát triển nghề nghiệp.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
              <div>
                <Input
                  name="name"
                  placeholder="Họ và tên *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent"
                />
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Số điện thoại *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Nội dung / Ghi chú"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-accent-foreground"
              >
                <Send className="mr-2 h-4 w-4" />
                Gửi thông tin
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
