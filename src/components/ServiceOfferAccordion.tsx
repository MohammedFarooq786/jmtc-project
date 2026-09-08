import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";
import { DualRule } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import type { ServiceOfferItem } from "@/data/site";

export type { ServiceOfferItem };

export function ServiceOfferAccordion({
  heading = "What We Offer",
  items,
  defaultOpenId,
  className,
}: {
  heading?: string;
  items: ServiceOfferItem[];
  defaultOpenId?: string;
  className?: string;
}) {
  const headingId = useId();
  const initial = defaultOpenId ?? items[0]?.id ?? "";
  const [openId, setOpenId] = useState(initial);
  const [loadedIds, setLoadedIds] = useState<Set<string>>(
    () => new Set(initial ? [initial] : []),
  );

  if (items.length === 0) return null;

  return (
    <section className={cn("mt-20 md:mt-24", className)} aria-labelledby={headingId}>
      <h2
        id={headingId}
        className="font-display text-2xl font-semibold uppercase tracking-[0.18em] text-brand md:text-3xl"
      >
        {heading}
      </h2>
      <DualRule size="lg" className="mt-4" />

      <AccordionPrimitive.Root
        type="single"
        collapsible
        value={openId}
        onValueChange={(value) => {
          setOpenId(value);
          if (value) {
            setLoadedIds((prev) => {
              if (prev.has(value)) return prev;
              const next = new Set(prev);
              next.add(value);
              return next;
            });
          }
        }}
        className="mt-10 border-t border-border"
      >
        {items.map((item, index) => {
          const isOpen = openId === item.id;
          const showImage = loadedIds.has(item.id);
          const photos = item.images?.length
            ? item.images
            : item.image
              ? [item.image]
              : [];

          return (
            <AccordionPrimitive.Item
              key={item.id}
              value={item.id}
              className="border-b border-border data-[state=open]:border-white/20"
            >
              <AccordionPrimitive.Header asChild>
                <h3 className="m-0">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "group flex w-full min-h-14 cursor-pointer items-center justify-between gap-4 px-4 py-5 text-left transition-colors duration-300 md:min-h-16 md:px-6 md:py-6",
                      "font-display text-xl font-semibold tracking-tight text-brand md:text-2xl lg:text-3xl",
                      "[@media(hover:hover)]:hover:bg-muted",
                      "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
                      "data-[state=open]:[@media(hover:hover)]:hover:bg-accent",
                    )}
                  >
                    <span>{item.title}</span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center border border-current/25"
                      aria-hidden
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={1.75} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={1.75} />
                      )}
                    </span>
                  </AccordionPrimitive.Trigger>
                </h3>
              </AccordionPrimitive.Header>

              <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none">
                <div className="bg-accent px-4 pb-8 pt-1 text-accent-foreground md:px-6 md:pb-10">
                  <div
                    className={
                      photos.length > 0
                        ? "grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]"
                        : "grid items-start"
                    }
                  >
                    <div>
                      {(item.paragraphs?.length ? item.paragraphs : [item.description]).map(
                        (paragraph, paragraphIndex) => (
                          <p
                            key={paragraph.slice(0, 48)}
                            className={`max-w-3xl text-base leading-relaxed text-white/90 md:text-lg ${
                              paragraphIndex > 0 ? "mt-5" : ""
                            }`}
                          >
                            {paragraph}
                          </p>
                        ),
                      )}
                    </div>
                    {photos.length > 0 && (
                      <div
                        className={
                          photos.length > 1
                            ? "grid max-w-md grid-cols-2 gap-3 lg:max-w-none"
                            : item.imageContain
                              ? "mx-auto w-full max-w-[18rem] overflow-hidden lg:mx-0 lg:max-w-none"
                              : "mx-auto w-full max-w-[18rem] overflow-hidden bg-brand/25 lg:mx-0 lg:max-w-none"
                        }
                      >
                        {showImage &&
                          photos.map((src, imageIndex) => (
                            <div
                              key={src}
                              className={`aspect-[4/3] w-full overflow-hidden ${
                                item.imageContain ? "bg-transparent" : "bg-brand/25"
                              }`}
                            >
                              <img
                                src={src}
                                alt={
                                  item.imageAlt
                                    ? `${item.imageAlt}${imageIndex > 0 ? ` ${imageIndex + 1}` : ""}`
                                    : item.title
                                }
                                width={1200}
                                height={960}
                                loading={
                                  index === 0 && initial === item.id && imageIndex === 0
                                    ? "eager"
                                    : "lazy"
                                }
                                decoding="async"
                                className={`h-full w-full offer-image-in motion-reduce:animate-none ${
                                item.imageContain ? "object-contain p-2" : "object-cover"
                              }`}
                              />
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          );
        })}
      </AccordionPrimitive.Root>
    </section>
  );
}
