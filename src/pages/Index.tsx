import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseListSection from "@/components/CourseListSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutInstituteSection from "@/components/AboutInstituteSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CourseListSection />
        {/* <SolutionsSection />
        <ProductsSection /> */}
        <ProjectsSection />
        <AboutInstituteSection />
        <ContactSection />
      </main>
      <footer className="bg-foreground text-background py-6 text-center">
        <p className="text-sm">
          © 2025 Executive Education Institute. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
