import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { X } from "lucide-react";

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
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Moments <span className="gradient-text">Captured</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A glimpse into our events, workshops, and community moments
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container-tight">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <p className="text-primary-foreground font-medium">{image.alt}</p>
                    <p className="text-primary-foreground/70 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/20 text-background hover:bg-background/30 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
