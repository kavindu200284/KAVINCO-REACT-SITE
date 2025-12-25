import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryCarousel from "../components/GalleryCarousel";
import { galleryData } from "../data/galleryData";

export default function Gallery() {
  const { serviceSlug } = useParams();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  // Disable right-click and drag on images
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  const data = serviceSlug
    ? galleryData[serviceSlug as keyof typeof galleryData]
    : null;

  if (!data) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-white-100">
      <Header />

      {/* PAGE HEADER */}
      <section className="pt-24 pb-1 text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {data.title}
        </h1>
      </section>

      {/* GALLERY */}
      <GalleryCarousel images={data.images} watermarkOpacity={0.25} />

      {/* DESCRIPTION */}
      <section className="bg-white py-16 sm:py-24">
        <div
          className="
            text-gray-700
            leading-relaxed
            text-base sm:text-lg
            max-w-3xl
            mx-auto
            px-12 sm:px-6
            text-left
          "
        >
          {data.description.split("\n").map((line, index) => {
            // SECTION HEADINGS (ALL CAPS)
            if (line === line.toUpperCase() && line.trim().length > 0) {
              return (
                <h3
                  key={index}
                  className="
                    text-lg sm:text-xl
                    font-semibold
                    text-gray-900
                    mt-10
                    mb-4
                  "
                >
                  {line}
                </h3>
              );
            }

            // EMPTY LINE SPACING
            if (line.trim() === "") {
              return <div key={index} className="h-4" />;
            }

            // NORMAL TEXT & BULLETS
            return (
              <p key={index} className="mb-3">
                {line}
              </p>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}