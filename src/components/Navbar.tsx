import { useState, useEffect } from "react";
import { GraduationCap } from "lucide-react";
import logo1 from "../assets/logo-1.png";
import logo2 from "../assets/logo-2.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-primary"
      }`}
    >
      <div className="flex items-center justify-center w-full bg-white px-12">
        <img src={logo1} alt="logo" className="h-20 w-auto object-contain" />
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold text-primary">
            THÔNG TIN DỰ ÁN NÔNG NGHIỆP 2025
          </h1>
          <p className="sm:block hidden text-lg text-orange-800 font-medium ">
            XÂY DỰNG BÁO CÁO VỀ THỰC TRẠNG VÀ GIẢI PHÁP NÂNG CAO NHẬN THỨC VỀ
            PHÁT TRIỂN SẢN PHẨM NÔNG NGHIỆP, SẢN PHẨM NGÀNH NGHỀ NÔNG THÔN GẮN
            VỚI PHÁT TRIỂN DU LỊCH CỘNG ĐỒNG
          </p>
        </div>
        <img src={logo2} alt="logo" className="h-20 w-auto object-contain" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center h-16">
          <div className=" flex items-center gap-8">
            {[
              { label: "Đề xuất", id: "hero" },
              { label: "Giải pháp", id: "solutions" },
              { label: "Sản phẩm", id: "products" },
              { label: "Liên hệ", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-primary-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
