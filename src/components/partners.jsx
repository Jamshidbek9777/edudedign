import LogoCarousel from "./partnerCompanies";

function LogoCarouselPage() {
  return (
    <>
      <main className="relative h-[120px] flex flex-col justify-center bg-[#1966a2] overflow-hidden my-10">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            <LogoCarousel />
          </div>
        </div>
      </main>
    </>
  );
}
export default LogoCarouselPage;
