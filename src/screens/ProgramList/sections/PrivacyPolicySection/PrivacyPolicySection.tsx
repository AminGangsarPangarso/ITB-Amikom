import { ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";

const decorativeShapes = [
  {
    className:
      "top-[91px] left-[243px] w-[440px] h-[440px] rounded-[120.12px] bg-[linear-gradient(208deg,rgba(56,128,184,1)_0%,rgba(255,255,255,1)_100%)] opacity-20 absolute -rotate-45",
  },
  {
    className:
      "top-[241px] left-[419px] w-[212px] h-[212px] bg-[#3880b8] rounded-[58px] opacity-[0.13] absolute -rotate-45",
  },
  {
    className:
      "top-[235px] left-[334px] w-[182px] h-[182px] bg-[#3880b8] rounded-[49.58px] opacity-[0.13] absolute -rotate-45",
  },
  {
    className:
      "top-[366px] left-[639px] w-[275px] h-[275px] rounded-[74.93px] bg-[linear-gradient(226deg,rgba(56,128,184,1)_0%,rgba(255,255,255,1)_100%)] opacity-20 absolute -rotate-45",
  },
  {
    className:
      "top-[433px] left-[33px] w-[159px] h-[159px] rounded-[43.53px] bg-[linear-gradient(226deg,rgba(56,128,184,1)_0%,rgba(255,255,255,1)_100%)] opacity-20 absolute -rotate-45",
  },
  {
    className:
      "top-[437px] left-[453px] w-[75px] h-[75px] rounded-[28.26px] border-[1.22px] border-solid border-[#b4cfe4] absolute -rotate-45",
  },
  {
    className:
      "top-[322px] left-[175px] w-[62px] h-[62px] rounded-[23.22px] border border-solid border-[#b4cfe4] absolute -rotate-45",
  },
];

const breadcrumbItems = [
  { label: "Beranda", href: "#", isActive: false },
  { label: "Sarjana", href: "#", isActive: false },
  { label: "Spesialisasi", href: "#", isActive: true },
];

export const PrivacyPolicySection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[309px] bg-white overflow-hidden backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
      <div className="absolute top-[-228px] left-[604px] w-[970px] h-[697px] opacity-75">
        {decorativeShapes.map((shape, index) => (
          <div key={index} className={shape.className} />
        ))}
      </div>

      <div className="absolute top-[156px] left-[71px]">
        <Breadcrumb>
          <BreadcrumbList className="gap-0.5">
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {item.isActive ? (
                    <BreadcrumbPage className="flex items-end justify-center [font-family:'Inter',Helvetica] font-normal text-[#808080] text-sm text-center tracking-[0] leading-[normal]">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      href={item.href}
                      className="flex items-end justify-center [font-family:'Inter',Helvetica] font-normal text-[#069dd8] text-sm text-center tracking-[0] leading-[normal]"
                    >
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbItems.length - 1 && (
                  <BreadcrumbSeparator>
                    <ChevronRightIcon className="w-6 h-6" />
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="absolute top-[212px] left-[71px] font-h4-bold font-[number:var(--h4-bold-font-weight)] text-[#333333] text-[length:var(--h4-bold-font-size)] tracking-[var(--h4-bold-letter-spacing)] leading-[var(--h4-bold-line-height)] whitespace-nowrap [font-style:var(--h4-bold-font-style)]">
        Kuasai Bidang dengan Profesional melalui Spesialisasi
      </h1>
    </section>
  );
};
