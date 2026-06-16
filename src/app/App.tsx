import { useState } from "react";
import { motion } from "motion/react";
import uploadedLookbook from "../imports/image.png";

const IMAGES = {
  // Hero: neck/collarbone + necklace in white linen robe — face naturally out of frame
  hero: "https://images.unsplash.com/photo-1590455209730-25a477555e17?w=1400&h=2100&fit=crop&auto=format",
  // Collections: clean product shots, all on warm/ivory grounds
  pearlEarrings: "https://images.unsplash.com/photo-1723726871280-ab921c7e60c0?w=800&h=1000&fit=crop&auto=format",
  necklace: "https://images.unsplash.com/photo-1595345705177-ffe090eb0784?w=800&h=1000&fit=crop&auto=format",
  rings: "https://images.unsplash.com/photo-1573575154350-35e29dfd6cdc?w=800&h=1000&fit=crop&auto=format",
  hairJewelry: "https://images.unsplash.com/photo-1682823544433-aae34df4e3da?w=800&h=1000&fit=crop&auto=format",
  // Story: pearls on book — handmade, warm, editorial
  storyImg: "https://images.unsplash.com/photo-1638950318136-220b241cd99b?w=1200&h=900&fit=crop&auto=format",
  // Products: all light backgrounds, entirely jewelry-focused
  product1: "https://images.unsplash.com/photo-1632525231035-c054cd5019db?w=700&h=880&fit=crop&auto=format",
  product2: "https://images.unsplash.com/photo-1596728037039-c82c8e6a3004?w=700&h=880&fit=crop&auto=format",
  product3: "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=700&h=880&fit=crop&auto=format",
  product4: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&h=880&fit=crop&auto=format",
  // Lookbook: neck with necklace / pearl macro / hands holding pearls / bracelet detail
  lookbook1: "https://images.unsplash.com/photo-1771621088449-32c336aa0ce3?w=900&h=1100&fit=crop&auto=format",
  lookbook2: "https://images.unsplash.com/photo-1649502066352-9cd7ade30316?w=900&h=600&fit=crop&auto=format",
  lookbook3: "https://images.unsplash.com/photo-1718072633087-47b595e99612?w=900&h=1100&fit=crop&auto=format",
  lookbook4: "https://images.unsplash.com/photo-1655255114527-d0a834d9a774?w=900&h=600&fit=crop&auto=format",
  // Packaging: editorial wrap on ivory — warm and handmade-feeling
  packaging: "https://images.unsplash.com/photo-1592903297149-37fb25202dfa?w=800&h=800&fit=crop&auto=format",
};

const collections = [
  { name: "Pearl Earrings", tagline: "Luminous & Timeless", image: IMAGES.pearlEarrings, count: "14 pieces" },
  { name: "Minimal Necklaces", tagline: "Worn every day", image: IMAGES.necklace, count: "22 pieces" },
  { name: "Statement Rings", tagline: "Bold, not loud", image: IMAGES.rings, count: "18 pieces" },
  { name: "Hair Jewelry", tagline: "The finishing touch", image: IMAGES.hairJewelry, count: "11 pieces" },
];

const products = [
  {
    name: "Akoya Drop Earrings",
    collection: "Pearl Earrings",
    price: "€185",
    description: "Single Akoya pearl on a brushed 18k gold post. The earring you reach for without thinking.",
    image: IMAGES.product1,
    tag: "Best Seller",
  },
  {
    name: "Radiance Signet Ring",
    collection: "Statement Rings",
    price: "€220",
    description: "Oval face, hand-engraved floral motif. Cast in recycled 14k gold, made to order.",
    image: IMAGES.product2,
    tag: "New",
  },
  {
    name: "Column Stacking Ring",
    collection: "Statement Rings",
    price: "€95",
    description: "Slim ridged band in warm gold vermeil. Stack two or wear one. Adjustable sizing.",
    image: IMAGES.product3,
    tag: null,
  },
  {
    name: "Velvet Pearl Choker",
    collection: "Pearl Necklaces",
    price: "€265",
    description: "Freshwater pearl on a satin-backed 14k chain. Clasp hidden in the pearl setting.",
    image: IMAGES.product4,
    tag: "Limited",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Design",
    body: "Each piece begins as a sketch — refined over weeks until the proportion feels inevitable.",
  },
  {
    step: "02",
    title: "Handcraft",
    body: "Made by a small team of artisans in our Lisbon studio. Every weld, every set, every finish by hand.",
  },
  {
    step: "03",
    title: "Packaging",
    body: "Wrapped in ivory tissue, nestled in a linen-covered box. Sealed with our signature wax stamp.",
  },
  {
    step: "04",
    title: "Delivery",
    body: "Shipped in 3–5 days via tracked courier. Complimentary gift note on request.",
  },
];

function Nav() {
  return (
    <nav
      style={{ fontFamily: "'Jost', sans-serif", borderBottom: "1px solid rgba(44,40,37,0.08)" }}
      className="fixed top-0 left-0 right-0 z-50 grid grid-cols-3 items-center px-6 md:px-14 py-4 md:py-5 bg-[#F8F4EF]/90 backdrop-blur-sm"
    >
      {/* Left column */}
      <div className="flex items-center gap-0">
        <span className="hidden md:inline text-[11px] tracking-[0.18em] uppercase text-[#7A6F64] whitespace-nowrap">
          Collections &nbsp;·&nbsp; About &nbsp;·&nbsp; Contact
        </span>
      </div>

      {/* Centre column — brand name, always perfectly centred */}
      <div className="flex justify-center">
        <span
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-lg md:text-[1.25rem] tracking-[0.08em] text-[#2C2825] whitespace-nowrap select-none"
        >
          Aurelia Atelier
        </span>
      </div>

      {/* Right column */}
      <div className="flex justify-end items-center">
        <span className="hidden md:inline text-[11px] tracking-[0.18em] uppercase text-[#7A6F64] whitespace-nowrap">
          ✦ &nbsp;Pre-order Open
        </span>
        <span className="md:hidden text-[10px] tracking-[0.15em] uppercase text-[#C9A96E]">
          ✦ Open
        </span>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ backgroundColor: "#EDE5D8" }}>
      {/* Mobile: stacked layout — image on top, text below */}
      <div className="md:hidden pt-16">
        <div className="w-full overflow-hidden" style={{ height: "60vw", maxHeight: 380 }}>
          <img
            src={IMAGES.hero}
            alt="Pearl necklace — Aurelia Atelier"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 18%" }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="px-6 py-12"
        >
          <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.3em", color: "#C9A96E" }} className="text-[10px] uppercase mb-5">
            Handmade in Lisbon · Since 2021
          </p>
          <h1
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", lineHeight: 1.1, fontWeight: 400, color: "#2C2825" }}
            className="mb-6"
          >
            Jewelry<br />made to be<br /><em>lived in.</em>
          </h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#7A6F64" }} className="text-base leading-relaxed mb-8 max-w-xs">
            Small-batch, handcrafted pieces for the woman who dresses with intention.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="#collections"
              style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em", backgroundColor: "#2C2825", color: "#F8F4EF" }}
              className="inline-block px-8 py-4 text-xs uppercase text-center hover:bg-[#C9A96E] transition-colors duration-500"
            >
              Explore Collection
            </a>
            <a
              href="#contact"
              style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em", border: "1px solid #2C2825", color: "#2C2825" }}
              className="inline-block px-8 py-4 text-xs uppercase text-center hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-500"
            >
              Book a Styling Call
            </a>
          </div>
        </motion.div>
      </div>

      {/* Desktop: side-by-side split layout */}
      <div className="hidden md:flex relative min-h-screen overflow-hidden">
        <div className="relative z-10 flex flex-col justify-end pb-20 pl-20 pr-8 w-1/2 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.3em", color: "#C9A96E" }} className="text-xs uppercase mb-6">
              Handmade in Lisbon · Since 2021
            </p>
            <h1
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3.2rem, 5.5vw, 5.5rem)", lineHeight: 1.08, fontWeight: 400, color: "#2C2825" }}
              className="mb-8"
            >
              Jewelry<br />made to be<br /><em>lived in.</em>
            </h1>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#7A6F64" }} className="text-lg max-w-sm mb-12 leading-relaxed">
              Small-batch, handcrafted pieces for the woman who dresses with intention. Quiet gold. Cultured pearls. Everyday elegance.
            </p>
            <div className="flex flex-row gap-4">
              <a
                href="#collections"
                style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em", backgroundColor: "#2C2825", color: "#F8F4EF" }}
                className="inline-block px-10 py-4 text-xs uppercase hover:bg-[#C9A96E] transition-colors duration-500"
              >
                Explore Collection
              </a>
              <a
                href="#contact"
                style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em", border: "1px solid #2C2825", color: "#2C2825" }}
                className="inline-block px-10 py-4 text-xs uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-500"
              >
                Book a Styling Call
              </a>
            </div>
          </motion.div>
          <div className="mt-20">
            <div className="w-px h-16 bg-[#C9A96E]/50 mb-4" />
            <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.3em", color: "#7A6F64" }} className="text-[10px] uppercase">
              Scroll
            </p>
          </div>
        </div>

        <div className="absolute right-0 top-0 w-[52%] h-full">
          <img
            src={IMAGES.hero}
            alt="Pearl necklace — Aurelia Atelier"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 18%" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #EDE5D8 0%, #EDE5D8 8%, rgba(237,229,216,0.55) 32%, rgba(237,229,216,0.08) 58%, transparent 72%), linear-gradient(to top, rgba(237,229,216,0.35) 0%, transparent 25%)" }} />
        </div>
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section id="collections" className="py-28 px-8 md:px-16" style={{ backgroundColor: "#F8F4EF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.3em", color: "#C9A96E" }} className="text-xs uppercase mb-3">
              The Edit
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "#2C2825",
              }}
            >
              Featured Collections
            </h2>
          </div>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#7A6F64" }} className="hidden md:block text-sm max-w-xs text-right leading-relaxed">
            Each collection is released in a limited run. Once a piece sells out, it's gone.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {collections.map((col, i) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-5" style={{ backgroundColor: "#EDE5D8" }}>
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 transition-colors duration-500" style={{ background: "rgba(44,40,37,0)" }} />
                <div className="absolute bottom-4 left-4">
                  <span style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em", background: "rgba(44,40,37,0.4)", backdropFilter: "blur(4px)", color: "rgba(248,244,239,0.8)" }} className="text-[10px] uppercase px-2 py-1">
                    {col.count}
                  </span>
                </div>
              </div>
              <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.25em", color: "#C9A96E" }} className="text-[10px] uppercase mb-1">
                {col.tagline}
              </p>
              <h3
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "1.1rem", color: "#2C2825" }}
              >
                {col.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="py-28 overflow-hidden" style={{ backgroundColor: "#2C2825" }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.3em", color: "#C9A96E" }} className="text-xs uppercase mb-6">
              Our Story
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "#F8F4EF",
              }}
              className="mb-8"
            >
              Made slowly.<br />
              <em>Worn forever.</em>
            </h2>
            <div style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#B5A89A", lineHeight: "1.8" }} className="space-y-5 text-[0.95rem]">
              <p>
                Aurelia Atelier began at a kitchen table in Lisbon — with a sketchbook, a set of tools, and a frustration with jewelry that looked beautiful once and broke in a month.
              </p>
              <p>
                Every piece is handmade in small batches by our studio team. We work with ethically sourced freshwater pearls, recycled 14k gold, and sustainable vermeil. Nothing is rushed. Nothing is mass-produced.
              </p>
              <p>
                We believe in soft luxury: pieces that don't announce themselves, that become part of you — worn to work, to dinner, to quiet Sunday mornings.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 pt-10" style={{ borderTop: "1px solid rgba(248,244,239,0.1)" }}>
              {[["100%", "Handmade"], ["Small", "Batch Runs"], ["Recycled", "Gold & Silver"]].map(([val, label]) => (
                <div key={label}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 400, color: "#C9A96E" }} className="mb-1">
                    {val}
                  </p>
                  <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em", color: "#7A6F64" }} className="text-[10px] uppercase">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={IMAGES.storyImg}
                alt="Handcrafted jewelry process at Aurelia Atelier studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 hidden md:block" style={{ border: "1px solid rgba(201,169,110,0.3)" }} />
            <div className="absolute -top-6 -right-6 w-32 h-32 hidden md:block" style={{ backgroundColor: "rgba(201,169,110,0.1)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BestSellers() {
  return (
    <section className="py-28 px-8 md:px-16" style={{ backgroundColor: "#F8F4EF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.3em", color: "#C9A96E" }} className="text-xs uppercase mb-3">
            Selected Pieces
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#2C2825" }}
          >
            Best Sellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-5" style={{ backgroundColor: "#EDE5D8" }}>
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {p.tag && (
                  <span
                    style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em", backgroundColor: "#F8F4EF", color: "#2C2825" }}
                    className="absolute top-3 left-3 text-[9px] uppercase px-2 py-1"
                  >
                    {p.tag}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4" style={{ background: "linear-gradient(to top, rgba(44,40,37,0.5), transparent)" }}>
                  <button
                    style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em", backgroundColor: "#F8F4EF", color: "#2C2825" }}
                    className="text-[9px] uppercase px-6 py-2"
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
              <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em", color: "#C9A96E" }} className="text-[10px] uppercase mb-1">
                {p.collection}
              </p>
              <h3
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "1rem", color: "#2C2825" }}
                className="mb-1"
              >
                {p.name}
              </h3>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#7A6F64" }} className="text-xs leading-relaxed mb-3 hidden md:block">
                {p.description}
              </p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#2C2825" }} className="text-base">
                {p.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lookbook() {
  return (
    <section className="py-28 px-8 md:px-16" style={{ backgroundColor: "#EDE5D8" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end gap-8 mb-14">
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.3em", color: "#C9A96E" }} className="text-xs uppercase mb-3">
              SS 2025
            </p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#2C2825" }}
            >
              Lookbook
            </h2>
          </div>
        </div>

        {/* Mobile: 2-column equal grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {[
            { src: IMAGES.lookbook1, alt: "Pearl necklace worn on neck", tall: true },
            { src: IMAGES.lookbook2, alt: "Pearl close-up macro detail", tall: false },
            { src: IMAGES.lookbook3, alt: "Hands holding pearl necklace", tall: false },
            { src: IMAGES.lookbook4, alt: "Gold bracelet close-up", tall: true },
          ].map((img, i) => (
            <div key={i} className="overflow-hidden" style={{ backgroundColor: "#D8CFC4", aspectRatio: img.tall ? "3/4" : "1/1" }}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>

        {/* Desktop: editorial asymmetric grid */}
        <div className="hidden md:grid gap-4" style={{ gridTemplateColumns: "1fr 1fr 1.5fr", gridTemplateRows: "320px 320px" }}>
          {/* Left tall — neck with necklace */}
          <div className="row-span-2 overflow-hidden" style={{ backgroundColor: "#D8CFC4" }}>
            <img src={uploadedLookbook} alt="Pearl necklace worn on neck" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          {/* Top middle — pearl macro */}
          <div className="overflow-hidden" style={{ backgroundColor: "#D8CFC4" }}>
            <img src={IMAGES.lookbook2} alt="Pearl close-up macro detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          {/* Top right — packaging */}
          <div className="overflow-hidden" style={{ backgroundColor: "#D8CFC4" }}>
            <img src={IMAGES.packaging} alt="Aurelia Atelier packaging detail" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
          </div>
          {/* Bottom middle — bracelet */}
          <div className="overflow-hidden" style={{ backgroundColor: "#D8CFC4" }}>
            <img src={IMAGES.lookbook4} alt="Gold bracelet close-up" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          {/* Bottom right — hands with pearls */}
          <div className="overflow-hidden" style={{ backgroundColor: "#D8CFC4" }}>
            <img src={IMAGES.lookbook3} alt="Hands holding pearl necklace" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-28 px-8 md:px-16" style={{ backgroundColor: "#F8F4EF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.3em", color: "#C9A96E" }} className="text-xs uppercase mb-3">
            Our Process
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#2C2825" }}
          >
            From sketch to your door
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-0">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="pl-8 pr-6 py-8"
              style={{ borderLeft: "1px solid rgba(44,40,37,0.1)" }}
            >
              <p
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 400, lineHeight: 1, color: "rgba(201,169,110,0.25)" }}
                className="mb-4 select-none"
              >
                {s.step}
              </p>
              <h3
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 500, color: "#2C2825" }}
                className="mb-3"
              >
                {s.title}
              </h3>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#7A6F64" }} className="text-sm leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 relative overflow-hidden">
          <img
            src={IMAGES.packaging}
            alt="Aurelia Atelier luxury packaging"
            className="w-full object-cover"
            style={{ height: "22rem" }}
          />
          <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(44,40,37,0.45)" }}>
            <div className="text-center px-6">
              <p
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 400, color: "#F8F4EF" }}
                className="mb-2"
              >
                <em>Every box tells the story</em>
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "rgba(248,244,239,0.65)", letterSpacing: "0.1em" }} className="text-sm">
                Ivory linen · Wax seal · Hand-written note
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-28 px-6 md:px-16" style={{ backgroundColor: "#2C2825" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.3em", color: "#C9A96E" }} className="text-xs uppercase mb-6">
              Get in Touch
            </p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.2, color: "#F8F4EF" }}
              className="mb-8"
            >
              Pre-order &<br />
              <em>Styling calls</em>
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#B5A89A", lineHeight: "1.8" }} className="mb-10">
              We open pre-orders twice a year. Book a 20-minute styling call to find the right pieces for you — no pressure, entirely personal.
            </p>
            <div style={{ fontFamily: "'Jost', sans-serif", color: "#7A6F64" }} className="space-y-4 text-sm">
              {[
                ["✉", "hello@aureliaatelier.com"],
                ["📍", "Lisbon, Portugal · Worldwide shipping"],
                ["◷", "Mon–Fri, 10am–6pm WET"],
              ].map(([icon, text]) => (
                <p key={text} style={{ color: "#7A6F64" }}>
                  <span style={{ color: "#C9A96E" }} className="mr-3">{icon}</span>
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-16 text-center"
              >
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 400, color: "#C9A96E" }} className="mb-3">
                  <em>Thank you.</em>
                </p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#B5A89A" }}>
                  We'll be in touch within 2 business days.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: "Full Name", key: "name", type: "text", placeholder: "Sofia Andrade" },
                  { label: "Email", key: "email", type: "email", placeholder: "sofia@example.com" },
                ].map((f) => (
                  <div key={f.key}>
                    <label
                      style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.25em", color: "#7A6F64" }}
                      className="block text-[10px] uppercase mb-2"
                    >
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      required
                      style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#F8F4EF", borderBottom: "1px solid rgba(248,244,239,0.2)", outline: "none" }}
                      className="w-full bg-transparent py-3 placeholder-[#4A4440] transition-colors"
                      onFocus={e => (e.currentTarget.style.borderBottomColor = "#C9A96E")}
                      onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(248,244,239,0.2)")}
                    />
                  </div>
                ))}
                <div>
                  <label
                    style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.25em", color: "#7A6F64" }}
                    className="block text-[10px] uppercase mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us what you're looking for — a gift, a special piece, or just an introduction."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#F8F4EF", borderBottom: "1px solid rgba(248,244,239,0.2)", outline: "none" }}
                    className="w-full bg-transparent py-3 placeholder-[#4A4440] resize-none transition-colors"
                    onFocus={e => (e.currentTarget.style.borderBottomColor = "#C9A96E")}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(248,244,239,0.2)")}
                  />
                </div>
                <button
                  type="submit"
                  style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.25em", backgroundColor: "#C9A96E", color: "#2C2825" }}
                  className="mt-2 w-full py-4 text-xs uppercase hover:bg-[#F8F4EF] transition-colors duration-400"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-8 md:px-16 py-14" style={{ backgroundColor: "#1E1B18", borderTop: "1px solid rgba(248,244,239,0.06)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <h2
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 400, color: "#F8F4EF" }}
              className="mb-3"
            >
              Aurelia Atelier
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#7A6F64" }} className="text-sm leading-relaxed max-w-xs">
              Handcrafted jewelry for the quietly confident woman. Made in Lisbon, worn worldwide.
            </p>
          </div>
          {[
            { heading: "Shop", links: ["Pearl Earrings", "Necklaces", "Rings", "Hair Jewelry"] },
            { heading: "Atelier", links: ["Our Story", "Process", "Sustainability", "Press"] },
          ].map((col) => (
            <div key={col.heading}>
              <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.25em", color: "#C9A96E" }} className="text-[10px] uppercase mb-4">
                {col.heading}
              </p>
              <ul style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }} className="space-y-2 text-sm" >
                {col.links.map((l) => (
                  <li key={l} style={{ color: "#7A6F64" }} className="cursor-pointer hover:text-[#B5A89A] transition-colors">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(248,244,239,0.06)" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em", color: "#3A3530" }} className="text-[10px] uppercase">
            © 2025 Aurelia Atelier · All Rights Reserved
          </p>
          <div style={{ fontFamily: "'Jost', sans-serif", color: "#3A3530" }} className="flex gap-6 text-[10px] uppercase tracking-widest">
            {["Instagram", "Pinterest", "Newsletter"].map((s) => (
              <span key={s} className="hover:text-[#7A6F64] cursor-pointer transition-colors">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
      <Nav />
      <Hero />
      <Collections />
      <BrandStory />
      <BestSellers />
      <Lookbook />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
