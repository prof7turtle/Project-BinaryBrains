import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { X } from "lucide-react";
import LightRays from "@/components/LightRays";

const galleryImages = [
  {
    src: "/5.jpg",
    alt: "BinaryBrains Event",
    category: "Events",
  },
  {
    src: "/IMG_6477.JPG",
    alt: "Team Collaboration",
    category: "Team",
  },
  {
    src: "/4.jpg",
    alt: "Workshop Session",
    category: "Workshops",
  },
  {
    src: "/IMG_5098.JPG",
    alt: "Hackathon",
    category: "Hackathons",
  },
  {
    src: "/IMG_5148.JPG",
    alt: "Coding Session",
    category: "Events",
  },
  {
    src: "/1.jpg",
    alt: "Team Meeting",
    category: "Team",
  },
  {
    src: "/IMG_6486.JPG",
    alt: "Presentation",
    category: "Events",
  },
  {
    src: "/img1.jpeg",
    alt: "Winners Celebration",
    category: "Hackathons",
  },
  {
    src: "/IMG_5083.PNG",
    alt: "Coding Workshop",
    category: "Workshops",
  },
];

const categories = ["All", "Events", "Workshops", "Team", "Hackathons"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      <div className="relative bg-black text-white overflow-hidden">
        {/* Global Light Rays Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <LightRays
            raysOrigin="top-center"
            raysColor="#F87014"
            raysSpeed={1}
            lightSpread={1.2}
            rayLength={8}
            followMouse={true}
            mouseInfluence={0.15}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={2}
            saturation={1}
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 z-[1] bg-black/55" />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(248,112,20,0.18),transparent_30%)]" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/40 via-black/55 to-black" />

        {/* Hero */}
        <section className="relative z-10 section-padding">
          <div className="container-tight">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#F87014]/25 bg-white/5 text-[#F87014] text-sm font-medium mb-4 backdrop-blur-md shadow-[0_0_20px_rgba(248,112,20,0.10)]">
                Gallery
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                Moments{" "}
                <span className="text-[#F87014] drop-shadow-[0_0_16px_rgba(248,112,20,0.28)]">
                  Captured
                </span>
              </h1>

              <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
                A glimpse into our events, workshops, hackathons, and the people
                building this community.
              </p>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="relative z-10 py-8 border-b border-white/10">
          <div className="container-tight">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === category
                      ? "bg-[#F87014] text-white border-[#F87014] shadow-[0_0_20px_rgba(248,112,20,0.22)]"
                      : "bg-white/[0.04] text-white/70 border-white/10 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="relative z-10 section-padding">
          <div className="container-tight">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-[#F87014]/15 text-[#F87014] border border-[#F87014]/20 backdrop-blur-sm">
                      {image.category}
                    </div>
                    <p className="text-white font-medium text-base">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-white/55">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full border border-white/10 bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;