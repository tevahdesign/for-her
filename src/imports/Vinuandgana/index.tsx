import svgPaths from "./svg-v42sehx9os";
import imgImageWeddingCouple from "./ba70dc5c72521dd8d5f0a5ee1f286401c0ee7d1c.png";
import imgImage1 from "./05c5907a17c394b902bb1a760eeba94051da4290.png";

function PlaceholderForHeroSection() {
  return <div className="h-[1064px] min-h-[1064px] relative shrink-0 w-full" data-name="Placeholder for HeroSection" />;
}

function Icon() {
  return (
    <div className="h-[135.864px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" height="124.542" preserveAspectRatio="none" viewBox="0 0 124.542 124.542" width="124.542">
            <path d={svgPaths.p75c72c0} id="Vector" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="11.322" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" height="56.6114" preserveAspectRatio="none" viewBox="0 0 33.9673 56.6114" width="33.9673">
            <path d={svgPaths.p1ecf3500} id="Vector" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="11.322" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute flex items-center justify-center left-[1385.52px] size-[174.969px] top-[16.52px]">
      <div className="flex-none rotate-[110.59deg]">
        <div className="content-stretch flex flex-col items-start opacity-5 relative size-[135.864px]" data-name="Container">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[96px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-4px]">
          <svg className="block size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 8 24" width="8">
            <path d="M4 4V20" id="Vector" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-4px]">
          <svg className="block size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 8 24" width="8">
            <path d="M4 4V20" id="Vector" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" height="80" preserveAspectRatio="none" viewBox="0 0 80 80" width="80">
            <path d={svgPaths.p1ab14d00} id="Vector" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-4px_-5.56%]">
          <svg className="block size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 80 8" width="80">
            <path d="M4 4H76" id="Vector" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] opacity-5 size-[96px] top-[503.91px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function CountdownTimer() {
  return (
    <div className="h-[640px] overflow-clip relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(180deg, rgb(250, 248, 245) 0%, rgb(251, 250, 247) 25%, rgb(252, 251, 250) 50%, rgb(254, 253, 252) 75%, rgb(255, 255, 255) 100%)" }} data-name="CountdownTimer">
      <Container />
      <Container1 />
    </div>
  );
}

function EventsSection1() {
  return <div className="h-[293px] max-w-[896px] relative shrink-0 w-[896px]" data-name="EventsSection" />;
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container:margin">
      <EventsSection1 />
    </div>
  );
}

function EventsSection() {
  return (
    <div className="bg-[#faf8f5] content-stretch flex flex-col items-start px-[48px] py-[96px] relative shrink-0 w-full" data-name="EventsSection">
      <ContainerMargin />
    </div>
  );
}

function Container2() {
  return <div className="content-stretch flex flex-col h-[32px] items-start max-w-[1280px] pb-[32px] relative shrink-0 w-[1280px]" data-name="Container" />;
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[64px] relative shrink-0 w-full" data-name="Container:margin">
      <Container2 />
    </div>
  );
}

function GallerySection() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1900px] items-start overflow-clip px-[48px] py-[96px] relative shrink-0 w-full" data-name="GallerySection">
      <ContainerMargin1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute flex items-center justify-center left-[1418.14px] size-[147.073px] top-[42.45px]">
      <div className="flex-none rotate-[9.34deg]">
        <div className="blur-[8px] border border-[rgba(196,165,123,0.1)] border-solid relative rounded-[33554400px] size-[128px]" data-name="Container" />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute flex items-center justify-center left-[11.43px] size-[111.701px] top-[751.78px]">
      <div className="flex-none rotate-[-10.36deg]">
        <div className="blur-[8px] border border-[rgba(196,165,123,0.1)] border-solid relative rounded-br-[57.6px] rounded-tl-[38.4px] size-[96px]" data-name="Container" />
      </div>
    </div>
  );
}

function FamilySection() {
  return (
    <div className="bg-white h-[908px] overflow-clip relative shrink-0 w-full" data-name="FamilySection">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Footer1() {
  return <div className="h-[64px] relative shrink-0 w-[896px]" data-name="Footer" />;
}

function ContainerMargin3() {
  return <div className="content-stretch flex flex-col h-[97px] items-start pb-[49px] pt-[48px] relative shrink-0 w-full" data-name="Container:margin" />;
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[896px] relative shrink-0 w-[896px]" data-name="Container">
      <Footer1 />
      <ContainerMargin3 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container:margin">
      <Container5 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start px-[48px] py-[64px] relative shrink-0 w-full" data-name="Footer">
      <ContainerMargin2 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#faf8f5] content-stretch flex flex-col h-[5888px] items-start min-h-[1064px] overflow-clip relative shrink-0 w-full" data-name="App">
      <PlaceholderForHeroSection />
      <CountdownTimer />
      <EventsSection />
      <GallerySection />
      <FamilySection />
      <Footer />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col h-[1064px] items-start relative shrink-0 w-[1577px]" data-name="Body">
      <App />
    </div>
  );
}

function ImageWeddingCouple() {
  return (
    <div className="blur-[8px] h-[1064px] opacity-20 relative shrink-0 w-[1577px]" data-name="Image (Wedding couple)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWeddingCouple} />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-gradient-to-b from-[rgba(250,248,245,0.6)] h-[1064px] left-0 to-[#faf8f5] top-0 via-1/2 via-[rgba(250,248,245,0.8)] w-[1577px]" data-name="Container">
      <div className="absolute h-[1041px] left-0 top-[-10px] w-[1577px]" data-name="image 1">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
          <div className="absolute bg-[rgba(0,0,0,0.79)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="Container">
      <ImageWeddingCouple />
      <Container7 />
    </div>
  );
}

function MandalaPattern() {
  return <div className="h-[215.286px] relative shrink-0 w-full" data-name="MandalaPattern" />;
}

function Container8() {
  return (
    <div className="absolute flex items-center justify-center left-[-5.49px] size-[266.984px] top-[-5.49px]">
      <div className="flex-none rotate-[73.73deg]">
        <div className="content-stretch flex flex-col items-start opacity-3 relative size-[215.286px]" data-name="Container">
          <MandalaPattern />
        </div>
      </div>
    </div>
  );
}

function MandalaPattern1() {
  return <div className="h-[240.511px] relative shrink-0 w-full" data-name="MandalaPattern" />;
}

function Container9() {
  return (
    <div className="absolute flex items-center justify-center left-[1271.44px] size-[323.127px] top-[758.44px]">
      <div className="flex-none rotate-[-63.2deg]">
        <div className="content-stretch flex flex-col items-start opacity-3 relative size-[240.511px]" data-name="Container">
          <MandalaPattern1 />
        </div>
      </div>
    </div>
  );
}

function FloatingPetal() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FloatingPetal">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="FloatingPetal">
          <path d={svgPaths.pf6545c0} fill="#C4A57B" id="Vector" opacity="0.5" />
          <path d={svgPaths.p1db01200} fill="#C4A57B" id="Vector_2" opacity="0.5" />
          <path d={svgPaths.p3d21f700} fill="#C4A57B" id="Vector_3" opacity="0.5" />
          <path d={svgPaths.pd9380} fill="#C4A57B" id="Vector_4" opacity="0.5" />
          <path d={svgPaths.p1610fbc0} fill="#D4B58C" id="Vector_5" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute flex items-center justify-center left-[781.38px] size-[23.143px] top-[1414.33px]">
      <div className="flex-none rotate-[-170.09deg]">
        <div className="content-stretch flex flex-col items-start opacity-43 relative" data-name="Container">
          <FloatingPetal />
        </div>
      </div>
    </div>
  );
}

function FloatingPetal1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FloatingPetal">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="FloatingPetal">
          <path d={svgPaths.pf6545c0} fill="#C4A57B" id="Vector" opacity="0.5" />
          <path d={svgPaths.p1db01200} fill="#C4A57B" id="Vector_2" opacity="0.5" />
          <path d={svgPaths.p3d21f700} fill="#C4A57B" id="Vector_3" opacity="0.5" />
          <path d={svgPaths.pd9380} fill="#C4A57B" id="Vector_4" opacity="0.5" />
          <path d={svgPaths.p1610fbc0} fill="#D4B58C" id="Vector_5" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute flex items-center justify-center left-[1327.2px] size-[26.141px] top-[1140.79px]">
      <div className="flex-none rotate-[22.55deg]">
        <div className="content-stretch flex flex-col items-start opacity-60 relative" data-name="Container">
          <FloatingPetal1 />
        </div>
      </div>
    </div>
  );
}

function FloatingPetal2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FloatingPetal">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="FloatingPetal">
          <path d={svgPaths.pf6545c0} fill="#C4A57B" id="Vector" opacity="0.5" />
          <path d={svgPaths.p1db01200} fill="#C4A57B" id="Vector_2" opacity="0.5" />
          <path d={svgPaths.p3d21f700} fill="#C4A57B" id="Vector_3" opacity="0.5" />
          <path d={svgPaths.pd9380} fill="#C4A57B" id="Vector_4" opacity="0.5" />
          <path d={svgPaths.p1610fbc0} fill="#D4B58C" id="Vector_5" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute flex items-center justify-center left-[248.49px] size-[24.11px] top-[1127.05px]">
      <div className="flex-none rotate-[13.48deg]">
        <div className="content-stretch flex flex-col items-start opacity-60 relative" data-name="Container">
          <FloatingPetal2 />
        </div>
      </div>
    </div>
  );
}

function FloatingPetal3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FloatingPetal">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="FloatingPetal">
          <path d={svgPaths.pf6545c0} fill="#C4A57B" id="Vector" opacity="0.5" />
          <path d={svgPaths.p1db01200} fill="#C4A57B" id="Vector_2" opacity="0.5" />
          <path d={svgPaths.p3d21f700} fill="#C4A57B" id="Vector_3" opacity="0.5" />
          <path d={svgPaths.pd9380} fill="#C4A57B" id="Vector_4" opacity="0.5" />
          <path d={svgPaths.p1610fbc0} fill="#D4B58C" id="Vector_5" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute flex items-center justify-center left-[763.27px] size-[26.522px] top-[917.54px]">
      <div className="flex-none rotate-[-114.67deg]">
        <div className="content-stretch flex flex-col items-start opacity-60 relative" data-name="Container">
          <FloatingPetal3 />
        </div>
      </div>
    </div>
  );
}

function FloatingPetal4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FloatingPetal">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="FloatingPetal">
          <path d={svgPaths.pf6545c0} fill="#C4A57B" id="Vector" opacity="0.5" />
          <path d={svgPaths.p1db01200} fill="#C4A57B" id="Vector_2" opacity="0.5" />
          <path d={svgPaths.p3d21f700} fill="#C4A57B" id="Vector_3" opacity="0.5" />
          <path d={svgPaths.pd9380} fill="#C4A57B" id="Vector_4" opacity="0.5" />
          <path d={svgPaths.p1610fbc0} fill="#D4B58C" id="Vector_5" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute flex items-center justify-center left-[915.65px] size-[27.96px] top-[869.65px]">
      <div className="flex-none rotate-[-143.69deg]">
        <div className="content-stretch flex flex-col items-start opacity-54 relative" data-name="Container">
          <FloatingPetal4 />
        </div>
      </div>
    </div>
  );
}

function FloatingPetal5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FloatingPetal">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="FloatingPetal">
          <path d={svgPaths.pf6545c0} fill="#C4A57B" id="Vector" opacity="0.5" />
          <path d={svgPaths.p1db01200} fill="#C4A57B" id="Vector_2" opacity="0.5" />
          <path d={svgPaths.p3d21f700} fill="#C4A57B" id="Vector_3" opacity="0.5" />
          <path d={svgPaths.pd9380} fill="#C4A57B" id="Vector_4" opacity="0.5" />
          <path d={svgPaths.p1610fbc0} fill="#D4B58C" id="Vector_5" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute flex items-center justify-center left-[-10.39px] size-[27.611px] top-[758.01px]">
      <div className="flex-none rotate-[147.53deg]">
        <div className="content-stretch flex flex-col items-start opacity-37 relative" data-name="Container">
          <FloatingPetal5 />
        </div>
      </div>
    </div>
  );
}

function FloatingPetal6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FloatingPetal">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="FloatingPetal">
          <path d={svgPaths.pf6545c0} fill="#C4A57B" id="Vector" opacity="0.5" />
          <path d={svgPaths.p1db01200} fill="#C4A57B" id="Vector_2" opacity="0.5" />
          <path d={svgPaths.p3d21f700} fill="#C4A57B" id="Vector_3" opacity="0.5" />
          <path d={svgPaths.pd9380} fill="#C4A57B" id="Vector_4" opacity="0.5" />
          <path d={svgPaths.p1610fbc0} fill="#D4B58C" id="Vector_5" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute flex items-center justify-center left-[1591.47px] size-[24.903px] top-[692.99px]">
      <div className="flex-none rotate-[106.7deg]">
        <div className="content-stretch flex flex-col items-start opacity-26 relative" data-name="Container">
          <FloatingPetal6 />
        </div>
      </div>
    </div>
  );
}

function FloatingPetal7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FloatingPetal">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="FloatingPetal">
          <path d={svgPaths.pf6545c0} fill="#C4A57B" id="Vector" opacity="0.5" />
          <path d={svgPaths.p1db01200} fill="#C4A57B" id="Vector_2" opacity="0.5" />
          <path d={svgPaths.p3d21f700} fill="#C4A57B" id="Vector_3" opacity="0.5" />
          <path d={svgPaths.pd9380} fill="#C4A57B" id="Vector_4" opacity="0.5" />
          <path d={svgPaths.p1610fbc0} fill="#D4B58C" id="Vector_5" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute flex items-center justify-center left-[1413.99px] size-[28.155px] top-[582.16px]">
      <div className="flex-none rotate-[39.52deg]">
        <div className="content-stretch flex flex-col items-start opacity-9 relative" data-name="Container">
          <FloatingPetal7 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[96px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[10%_23.33%_20%_28.75%]" data-name="Vector">
        <div className="absolute inset-[-0.87%_-1.04%_-0.71%_-1.04%]">
          <svg className="block size-full" fill="none" height="68.264" preserveAspectRatio="none" viewBox="0 0 46.9599 68.264" width="46.9599">
            <path d={svgPaths.p235c1e80} id="Vector" opacity="0.3" stroke="#C4A57B" strokeWidth="0.96" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[30%_35%_40%_35%]" data-name="Vector">
        <div className="absolute inset-[-0.83%]">
          <svg className="block size-full" fill="none" height="29.28" preserveAspectRatio="none" viewBox="0 0 29.28 29.28" width="29.28">
            <path d={svgPaths.p3e1aaa80} id="Vector" opacity="0.2" stroke="#C4A57B" strokeWidth="0.48" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[39.98px] size-[96px] top-[79.89px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[64px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[10%_28.75%_20%_23.33%]" data-name="Vector">
        <div className="absolute inset-[-0.87%_-1.04%_-0.71%_-1.04%]">
          <svg className="block size-full" fill="none" height="45.5094" preserveAspectRatio="none" viewBox="0 0 31.3066 45.5094" width="31.3066">
            <path d={svgPaths.p3e001980} id="Vector" opacity="0.3" stroke="#C4A57B" strokeWidth="0.64" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute flex items-center justify-center left-[1431.8px] size-[66.4px] top-[171.95px]">
      <div className="flex-none rotate-[-2.19deg]">
        <div className="content-stretch flex flex-col items-start relative size-[64px]" data-name="Container">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[143.729px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[42%_0_42%_70%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="22.9966" preserveAspectRatio="none" viewBox="0 0 43.1187 22.9966" width="43.1187">
          <path d={svgPaths.p3ece19f0} fill="#C4A57B" id="Vector" opacity="0.15" />
        </svg>
      </div>
      <div className="absolute flex inset-[58.49%_8.99%_8.99%_58.49%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-33.3438cqw,41.9539cqh)] rotate-45 w-[hypot(62.5196cqw,78.6636cqh)]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="22.9966" preserveAspectRatio="none" viewBox="0 0 43.1187 22.9966" width="43.1187">
              <path d={svgPaths.p156a5b00} fill="#C4A57B" id="Vector" opacity="0.15" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[70%_42%_0_42%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[47.4628cqw] rotate-90 w-[117.513cqh]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="22.9966" preserveAspectRatio="none" viewBox="0 0 43.1187 22.9966" width="43.1187">
              <path d={svgPaths.p3ece19f0} fill="#C4A57B" id="Vector" opacity="0.15" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[58.49%_58.49%_8.99%_8.99%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-41.9539cqw,-33.3438cqh)] rotate-135 w-[hypot(-78.6636cqw,62.5196cqh)]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="22.9966" preserveAspectRatio="none" viewBox="0 0 43.1187 22.9966" width="43.1187">
              <path d={svgPaths.p3ece19f0} fill="#C4A57B" id="Vector" opacity="0.15" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42%_70%_42%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[47.4628cqh] rotate-180 w-[117.513cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="22.9966" preserveAspectRatio="none" viewBox="0 0 43.1187 22.9966" width="43.1187">
              <path d={svgPaths.p3ece19f0} fill="#C4A57B" id="Vector" opacity="0.15" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[8.99%_58.49%_58.49%_8.99%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-135 flex-none h-[hypot(33.3438cqw,-41.9539cqh)] w-[hypot(-62.5196cqw,-78.6636cqh)]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="22.9966" preserveAspectRatio="none" viewBox="0 0 43.1187 22.9966" width="43.1187">
              <path d={svgPaths.p3ece19f0} fill="#C4A57B" id="Vector" opacity="0.15" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[0_42%_70%_42%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[47.4628cqw] w-[117.513cqh]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="22.9966" preserveAspectRatio="none" viewBox="0 0 43.1187 22.9966" width="43.1187">
              <path d={svgPaths.p3ece19f0} fill="#C4A57B" id="Vector" opacity="0.15" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[8.99%_8.99%_58.49%_58.49%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(41.9539cqw,33.3438cqh)] w-[hypot(78.6636cqw,-62.5196cqh)]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="22.9966" preserveAspectRatio="none" viewBox="0 0 43.1187 22.9966" width="43.1187">
              <path d={svgPaths.p156a5b00} fill="#C4A57B" id="Vector" opacity="0.15" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[40%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="28.7458" preserveAspectRatio="none" viewBox="0 0 28.7458 28.7458" width="28.7458">
          <path d={svgPaths.p55f5400} fill="#D4B58C" id="Vector" opacity="0.2" />
        </svg>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute flex items-center justify-center left-[51.45px] size-[185.097px] top-[747.45px]">
      <div className="flex-none rotate-[110.59deg]">
        <div className="content-stretch flex flex-col items-start opacity-16 relative size-[143.729px]" data-name="Container">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[0.29px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="0.289644" preserveAspectRatio="none" viewBox="0 0 0.289644 0.289644" width="0.289644">
        <g clipPath="url(#clip0_0_23)" id="Icon">
          <path d={svgPaths.p21b00a00} id="Vector" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.024137" />
          <path d={svgPaths.p95c1500} id="Vector_2" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.024137" />
          <path d={svgPaths.p2d6e2f80} id="Vector_3" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.024137" />
          <path d={svgPaths.p20e8c300} id="Vector_4" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.024137" />
          <path d={svgPaths.p173f2480} id="Vector_5" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.024137" />
        </g>
        <defs>
          <clipPath id="clip0_0_23">
            <rect fill="white" height="0.289644" width="0.289644" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute flex items-center justify-center left-[323.24px] size-[0.306px] top-[327.03px]">
      <div className="flex-none rotate-[3.26deg]">
        <div className="content-stretch flex flex-col items-start opacity-1 relative" data-name="Container">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[1.855px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.85494" preserveAspectRatio="none" viewBox="0 0 1.85494 1.85494" width="1.85494">
        <g clipPath="url(#clip0_0_17)" id="Icon">
          <path d={svgPaths.p351d8680} id="Vector" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.154579" />
          <path d={svgPaths.p8fa6600} id="Vector_2" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.154579" />
          <path d={svgPaths.p16d42580} id="Vector_3" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.154579" />
          <path d={svgPaths.p19281c80} id="Vector_4" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.154579" />
          <path d={svgPaths.p136885e0} id="Vector_5" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.154579" />
        </g>
        <defs>
          <clipPath id="clip0_0_17">
            <rect fill="white" height="1.85494" width="1.85494" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute flex items-center justify-center left-[558.74px] size-[2.394px] top-[538.8px]">
      <div className="flex-none rotate-[-20.87deg]">
        <div className="content-stretch flex flex-col items-start opacity-6 relative" data-name="Container">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[9.923px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.92256" preserveAspectRatio="none" viewBox="0 0 9.92256 9.92256" width="9.92256">
        <g clipPath="url(#clip0_0_36)" id="Icon">
          <path d={svgPaths.p2fe8f000} id="Vector" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.82688" />
          <path d={svgPaths.p2f5b0e00} id="Vector_2" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.82688" />
          <path d={svgPaths.p596f900} id="Vector_3" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.82688" />
          <path d={svgPaths.pfe46680} id="Vector_4" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.82688" />
          <path d={svgPaths.pd3de280} id="Vector_5" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.82688" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="9.92256" width="9.92256" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute flex items-center justify-center left-[790.06px] size-[12.881px] top-[746.36px]">
      <div className="flex-none rotate-[-111.63deg]">
        <div className="content-stretch flex flex-col items-start opacity-36 relative" data-name="Container">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.71px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.7104" preserveAspectRatio="none" viewBox="0 0 15.7104 15.7104" width="15.7104">
        <g clipPath="url(#clip0_0_29)" id="Icon">
          <path d={svgPaths.p333aa200} id="Vector" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3092" />
          <path d={svgPaths.p1d43d200} id="Vector_2" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3092" />
          <path d="M14.4012 3.273L11.7828 3.273" id="Vector_3" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3092" />
          <path d={svgPaths.p11765100} id="Vector_4" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3092" />
          <path d={svgPaths.p35807d00} id="Vector_5" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3092" />
        </g>
        <defs>
          <clipPath id="clip0_0_29">
            <rect fill="white" height="15.7104" width="15.7104" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute flex items-center justify-center left-[1024.76px] size-[16.578px] top-[318.9px]">
      <div className="flex-none rotate-[-176.74deg]">
        <div className="content-stretch flex flex-col items-start opacity-86 relative" data-name="Container">
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[14.145px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.145" preserveAspectRatio="none" viewBox="0 0 14.145 14.145" width="14.145">
        <g id="Icon">
          <path d={svgPaths.p1b19af00} id="Vector" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17875" />
          <path d={svgPaths.p21f85a18} id="Vector_2" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17875" />
          <path d={svgPaths.p34d85400} id="Vector_3" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17875" />
          <path d={svgPaths.p119ee880} id="Vector_4" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17875" />
          <path d={svgPaths.p338f840} id="Vector_5" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17875" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute flex items-center justify-center left-[1260.47px] size-[18.256px] top-[530.87px]">
      <div className="flex-none rotate-[159.13deg]">
        <div className="content-stretch flex flex-col items-start opacity-58 relative" data-name="Container">
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[6.077px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="6.07743" preserveAspectRatio="none" viewBox="0 0 6.07743 6.07743" width="6.07743">
        <g id="Icon">
          <path d={svgPaths.p212e9900} id="Vector" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.506452" />
          <path d={svgPaths.pe2c1900} id="Vector_2" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.506452" />
          <path d={svgPaths.p32e83600} id="Vector_3" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.506452" />
          <path d={svgPaths.p2a8f7500} id="Vector_4" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.506452" />
          <path d={svgPaths.pb61d700} id="Vector_5" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.506452" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute flex items-center justify-center left-[1502.2px] size-[7.89px] top-[748.85px]">
      <div className="flex-none rotate-[68.37deg]">
        <div className="content-stretch flex flex-col items-start opacity-17 relative" data-name="Container">
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center tracking-[4.2px] uppercase whitespace-nowrap">Wedding Invitation</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute blur-[0px] h-[128px] left-0 top-0 w-[129.25px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Sacramento:Regular',sans-serif] leading-[128px] left-[65.5px] not-italic text-[#c4a57b] text-[128px] text-center top-[-1px] tracking-[-3.2px] whitespace-nowrap">V</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute blur-[0px] h-[128px] left-[129.25px] top-0 w-[23.688px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Sacramento:Regular',sans-serif] leading-[128px] left-[12.5px] not-italic text-[#c4a57b] text-[128px] text-center top-[-1px] tracking-[-3.2px] whitespace-nowrap">i</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute blur-[0px] h-[128px] left-[152.94px] top-0 w-[53.75px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Sacramento:Regular',sans-serif] leading-[128px] left-[27.5px] not-italic text-[#c4a57b] text-[128px] text-center top-[-1px] tracking-[-3.2px] whitespace-nowrap">n</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute blur-[0px] h-[128px] left-[206.69px] top-0 w-[41.625px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Sacramento:Regular',sans-serif] leading-[128px] left-[21.5px] not-italic text-[#c4a57b] text-[128px] text-center top-[-1px] tracking-[-3.2px] whitespace-nowrap">u</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute blur-[0px] h-[128px] left-[338.63px] top-0 w-[107.75px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Sacramento:Regular',sans-serif] leading-[128px] left-[54.5px] not-italic text-[#c4a57b] text-[128px] text-center top-[-1px] tracking-[-3.2px] whitespace-nowrap">G</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute blur-[0px] h-[128px] left-[446.38px] top-0 w-[40.813px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Sacramento:Regular',sans-serif] leading-[128px] left-[20px] not-italic text-[#c4a57b] text-[128px] text-center top-[-1px] tracking-[-3.2px] whitespace-nowrap">a</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute blur-[0px] h-[128px] left-[487.19px] top-0 w-[53.75px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Sacramento:Regular',sans-serif] leading-[128px] left-[27.5px] not-italic text-[#c4a57b] text-[128px] text-center top-[-1px] tracking-[-3.2px] whitespace-nowrap">n</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute blur-[0px] h-[128px] left-[540.94px] top-0 w-[40.813px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Sacramento:Regular',sans-serif] leading-[128px] left-[20px] not-italic text-[#c4a57b] text-[128px] text-center top-[-1px] tracking-[-3.2px] whitespace-nowrap">a</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Heading 1">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Sacramento:Regular',sans-serif] leading-[128px] left-[293.31px] not-italic text-[128px] text-center text-white top-[-1px] tracking-[-3.2px] whitespace-nowrap">{`&`}</p>
      <Text4 />
      <Text5 />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Heading 1:margin">
      <Heading />
    </div>
  );
}

function Container29() {
  return <div className="bg-[#c4a57b] h-px relative shrink-0 w-[96px]" data-name="Container" />;
}

function Container30() {
  return <div className="bg-[#c4a57b] relative rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container31() {
  return <div className="bg-[#c4a57b] h-px relative shrink-0 w-[96px]" data-name="Container" />;
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-center justify-center pb-[16px] pt-[48px] relative shrink-0 w-[581.75px]" data-name="Container">
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[3px] uppercase whitespace-nowrap">Reception</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center pt-[4px] relative shrink-0 w-[581.75px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#ffdede] text-[30px] text-center tracking-[0.75px] whitespace-nowrap">26 October 2026</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center pt-[4px] relative shrink-0 w-[581.75px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center tracking-[0.7px] whitespace-nowrap">Reem Convention Centre, Perumbavoor</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col h-[112px] items-start pt-[32px] relative shrink-0 w-[581.75px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Text8() {
  return <div className="absolute bg-gradient-to-r from-[rgba(255,255,255,0)] h-[44px] left-[-167.11px] to-[rgba(255,255,255,0)] top-0 via-1/2 via-[rgba(255,255,255,0.2)] w-[167px]" data-name="Text" />;
}

function Button() {
  return (
    <div className="bg-black border border-black border-solid content-stretch flex flex-col h-[46px] items-center justify-center overflow-clip px-[32px] py-[12px] relative shrink-0 w-[169.219px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] uppercase whitespace-nowrap">View Events</p>
      <Text8 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[110px] items-center justify-center pt-[64px] relative shrink-0 w-[581.75px]" data-name="Container">
      <Button />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col h-[730px] items-start left-[449.63px] max-w-[1280px] px-[48px] py-[128px] top-[167px] w-[677.75px]" data-name="Container">
      <Paragraph />
      <Heading1Margin />
      <Container28 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container36() {
  return <div className="bg-gradient-to-b from-[rgba(0,0,0,0.4)] h-[48px] relative shrink-0 to-[rgba(0,0,0,0)] w-px" data-name="Container" />;
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[72px] items-center left-0 top-[0.42px] w-[54px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] tracking-[1.2px] uppercase whitespace-nowrap">Scroll</p>
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col h-[72px] items-start left-[761.5px] top-[960px] w-[54px]" data-name="Container">
      <Container35 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute bg-[#faf8f5] h-[1064px] left-0 min-h-[1064px] overflow-clip top-0 w-[1577px]" data-name="HeroSection">
      <Container6 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container34 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[31.36px] relative shrink-0 text-[22.4px] text-black text-center tracking-[0.5px] whitespace-nowrap">{`V & G`}</p>
    </div>
  );
}

function Text9() {
  return <div className="absolute bg-gradient-to-r from-[rgba(196,165,123,0)] h-[20px] left-[-45.09px] to-[rgba(196,165,123,0)] top-0 via-1/2 via-[rgba(196,165,123,0.2)] w-[45px]" data-name="Text" />;
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] text-center tracking-[0.7px] uppercase whitespace-nowrap">Home</p>
      <Text9 />
    </div>
  );
}

function Text10() {
  return <div className="absolute bg-gradient-to-r from-[rgba(196,165,123,0)] h-[20px] left-[-59.88px] to-[rgba(196,165,123,0)] top-0 via-1/2 via-[rgba(196,165,123,0.2)] w-[60px]" data-name="Text" />;
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] text-center tracking-[0.7px] uppercase whitespace-nowrap">Events</p>
      <Text10 />
    </div>
  );
}

function Text11() {
  return <div className="absolute bg-gradient-to-r from-[rgba(196,165,123,0)] h-[20px] left-[-67.84px] to-[rgba(196,165,123,0)] top-0 via-1/2 via-[rgba(196,165,123,0.2)] w-[68px]" data-name="Text" />;
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] text-center tracking-[0.7px] uppercase whitespace-nowrap">Gallery</p>
      <Text11 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between max-w-[1280px] px-[48px] relative shrink-0 w-[1280px]" data-name="Container">
      <Button1 />
      <Container38 />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0 w-[1577px]" data-name="App">
      <Container37 />
    </div>
  );
}

export default function Vinuandgana() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="vinuandgana">
      <Body />
      <HeroSection />
      <App1 />
    </div>
  );
}