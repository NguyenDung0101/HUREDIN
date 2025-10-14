const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: "#00596C" }}
            >
              ĐỐI TÁC & ĐƠN VỊ THỰC HIỆN
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

          {/* Logo Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto mt-3">
            {/* Placeholder cho 6 logo đối tác */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-48 h-24 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
              >
                <span className="text-gray-500 text-sm font-medium">
                  Logo đối tác {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
