import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/productService";
import { Product } from "../types/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  // Main image state
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const data = await getProducts();
      const found = data.find((p) => p._id === id);
      setProduct(found || null);

      // Type-safe: convert undefined to null
      if (found) {
        setMainImage(found.image1Url ?? null);
      }
    }
    load();
  }, [id]);

  if (!product) {
    return <div style={{ padding: 40 }}>Loading...</div>;
  }

  return (
    <div>
      <Header />
      {/* ------------------- BACK BUTTON -------------------- */}
      <button
        onClick={() => window.history.back()}
        style={{
          marginTop: "40px",
          padding: "12px 25px",
          background: "#ff6600",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          marginLeft: "30px",
          marginBottom: "20px",
        }}
      >
        Back
      </button>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {/* ------------------- IMAGES SECTION -------------------- */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* FIXED FRAME MAIN IMAGE */}
          <div
            className="main-image-frame"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "350px", // desktop fixed height
              backgroundColor: "#ffffffff",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {mainImage && (
              <img
                src={mainImage}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transition: "0.3s ease",
                  userSelect: "none",
                }}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            )}
          </div>

          {/* Mobile frame height */}
          <style>
            {`
            @media (max-width: 768px) {
              .main-image-frame {
                height: 250px !important;
              }
            }
          `}
          </style>

          {/* Small Images */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              marginTop: "10px",
              justifyContent: "center",
            }}
          >
            {/* Thumb 1 */}
            {product.image1Url && (
              <img
                src={product.image1Url}
                onClick={() => setMainImage(product.image1Url ?? null)}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border:
                    mainImage === product.image1Url
                      ? "3px solid blue"
                      : "2px solid #ffffffff",
                  userSelect: "none",
                }}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            )}

            {/* Thumb 2 */}
            {product.image2Url && (
              <img
                src={product.image2Url}
                onClick={() => setMainImage(product.image2Url ?? null)}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border:
                    mainImage === product.image2Url
                      ? "3px solid blue"
                      : "2px solid #ffffffff",
                  userSelect: "none",
                }}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            )}

            {/* Thumb 3 */}
            {product.image3Url && (
              <img
                src={product.image3Url}
                onClick={() => setMainImage(product.image3Url ?? null)}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border:
                    mainImage === product.image3Url
                      ? "3px solid blue"
                      : "2px solid #ffffffff",
                  userSelect: "none",
                }}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            )}
          </div>
        </div>

        {/* ------------------- DETAILS SECTION -------------------- */}
        <div style={{ marginTop: "25px" }}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "30px",
              marginRight: "10px",
              marginLeft: "10px",
            }}
          >
            {product.title || product.name}
          </h1>

          <p style={{ marginRight: "10px", marginLeft: "10px", fontSize: "16px", marginBottom: "5px" }}>
            <strong>Item Code:</strong> {product.itemCode || "N/A"}
          </p>

          <p style={{ marginRight: "10px", marginLeft: "10px", fontSize: "16px", marginBottom: "5px" }}>
            <strong>Country of Origin:</strong>{" "}
            {product.countryOfOrigin || "N/A"}
          </p>

          <p style={{ marginRight: "10px", marginLeft: "10px", fontSize: "16px", marginBottom: "5px" }}>
            <strong>Condition:</strong> {product.condition || "N/A"}
          </p>

          <div style={{ marginRight: "10px", marginLeft: "10px", marginTop: "70px", fontSize: "17px" }}>
            <strong>Description:</strong>
            <p style={{ marginTop: "5px", lineHeight: "1.6" }}>
              {product.description || "No description available."}
            </p>
          </div>
        </div>

        {/* ------------------- VIDEO SECTION -------------------- */}
        {product.videoLink && (
          <div style={{ marginRight: "10px", marginLeft: "10px", marginTop: "40px" }}>
            <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
              Product Video
            </h3>

            {product.videoLink.includes("youtube") ||
              product.videoLink.includes("youtu.be") ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <iframe
                  width="75%"
                  height="320"
                  src={product.videoLink
                    .replace("watch?v=", "embed/")
                    .replace("youtu.be/", "www.youtube.com/embed/")}
                  style={{
                    borderRadius: "10px",
                    border: "none",
                  }}
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <a
                href={product.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "18px",
                  color: "blue",
                  display: "block",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                Watch Video
              </a>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}