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

  const data = serviceSlug
    ? galleryData[serviceSlug as keyof typeof galleryData]
    : null;

  if (!data) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* PAGE HEADER */}
      <section className="pt-24 pb-10 text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {data.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {data.description}
        </p>
      </section>

      {/* GALLERY */}
      <GalleryCarousel images={data.images} watermarkOpacity={0.85} />

      {/* DESCRIPTION */}
      <section className="py-20 bg-white mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Project Overview
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Each project shown represents our commitment to engineering
            excellence, safety compliance, and long-term reliability in
            industrial environments.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}