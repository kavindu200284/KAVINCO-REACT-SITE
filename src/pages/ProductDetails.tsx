import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/productService";
import { Product } from "../types/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {

    async function load() {

      try {

        const data = await getProducts();

        const found = data.find((p) => p._id === id);

        setProduct(found || null);

        if (found) {
          setMainImage(found.image1Url ?? null);
        }

      } catch (err) {

        console.log("Backend sleeping... retrying");

        setTimeout(() => {
          load();
        }, 5000);

      }

    }

    load();

    window.scrollTo(0, 0);

  }, [id]);

  // LOADING SCREEN
  if (!product) {

    return (

      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#ffffff",
        }}
      >

        <div
          style={{
            width: "65px",
            height: "65px",
            border: "5px solid #eee",
            borderTop: "5px solid #ff6600",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            marginBottom: "25px",
          }}
        />

        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#111",
            marginBottom: "10px",
          }}
        >
          Loading Product
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "15px",
          }}
        >
          Preparing product details...
        </p>

        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>

      </div>

    );

  }

  return (

    <div
      style={{
        background: "#ffffff",
        minHeight: "100vh",
      }}
    >

      <Header />

      {/* TOP SPACE */}
      <div style={{ height: "95px" }} />

      {/* BACK BUTTON */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >

        <button
          onClick={() => window.history.back()}
          style={{
            padding: "10px 18px",
            border: "1px solid #eee",
            borderRadius: "12px",
            background: "#fff",
            color: "#111",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          ← Back
        </button>

      </div>

      {/* MAIN SECTION */}
      <div
        className="product-layout"
        style={{
          maxWidth: "1350px",
          margin: "35px auto 80px",
          padding: "0 20px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "60px",
          alignItems: "start",
        }}
      >

        {/* IMAGE SECTION */}
        <div>

          {/* MAIN IMAGE */}
          <div
            className="main-image-box"
            style={{
              width: "100%",
              height: "650px",
              borderRadius: "28px",
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              border: "1px solid #f1f1f1",
            }}
          >

            {mainImage && (

              <img
                src={mainImage}
                alt={product.name}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />

            )}

          </div>

          {/* THUMBNAILS */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              marginTop: "22px",
              flexWrap: "wrap",
            }}
          >

            {[product.image1Url, product.image2Url, product.image3Url]
              .filter(Boolean)
              .map((img, index) => (

                <div
                  key={index}
                  onClick={() => setMainImage(img ?? null)}
                  style={{
                    width: "95px",
                    height: "95px",
                    borderRadius: "18px",
                    background: "#fff",
                    border:
                      mainImage === img
                        ? "2px solid #ff6600"
                        : "1px solid #eee",
                    cursor: "pointer",
                    overflow: "hidden",
                    transition: "0.3s",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px",
                  }}
                >

                  <img
                    src={img}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />

                </div>

              ))}

          </div>

        </div>

        {/* DETAILS SECTION */}
        <div
          style={{
            position: "sticky",
            top: "110px",
          }}
        >

          {/* PRODUCT TITLE */}
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: "700",
              color: "#111",
              lineHeight: "1.2",
              marginBottom: "22px",
            }}
          >
            {product.title || product.name}
          </h1>

          {/* META INFO */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginBottom: "35px",
            }}
          >

            <div
              style={{
                paddingBottom: "14px",
                borderBottom: "1px solid #f2f2f2",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#999",
                  marginBottom: "4px",
                  letterSpacing: "0.5px",
                }}
              >
                ITEM CODE
              </div>

              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "#111",
                }}
              >
                {product.itemCode || "N/A"}
              </div>
            </div>

            <div
              style={{
                paddingBottom: "14px",
                borderBottom: "1px solid #f2f2f2",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#999",
                  marginBottom: "4px",
                  letterSpacing: "0.5px",
                }}
              >
                COUNTRY OF ORIGIN
              </div>

              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "#111",
                }}
              >
                {product.countryOfOrigin || "N/A"}
              </div>
            </div>

            <div
              style={{
                paddingBottom: "14px",
                borderBottom: "1px solid #f2f2f2",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#999",
                  marginBottom: "4px",
                  letterSpacing: "0.5px",
                }}
              >
                CONDITION
              </div>

              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "#111",
                }}
              >
                {product.condition || "N/A"}
              </div>
            </div>

          </div>

          {/* DESCRIPTION */}
          <div
            style={{
              marginTop: "10px",
            }}
          >

            <h2
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginBottom: "14px",
                color: "#111",
              }}
            >
              Description
            </h2>

            <p
              style={{
                color: "#666",
                lineHeight: "1.9",
                fontSize: "16px",
              }}
            >
              {product.description || "No description available."}
            </p>

          </div>

          {/* CONTACT BUTTON */}
          <div
            style={{
              marginTop: "40px",
            }}
          >

            <a
              href="https://wa.me/94770414713"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 26px",
                borderRadius: "16px",
                background: "#ff6600",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "16px",
                boxShadow: "0 10px 24px rgba(255,102,0,0.18)",
              }}
            >
              Contact About This Machine
            </a>

          </div>

        </div>

      </div>

      {/* VIDEO SECTION */}
      {product.videoLink && (

        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            padding: "0 20px 80px",
          }}
        >

          <div
            style={{
              borderTop: "1px solid #f2f2f2",
              paddingTop: "50px",
            }}
          >

            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#111",
                marginBottom: "30px",
              }}
            >
              Product Video
            </h2>

            {product.videoLink.includes("youtube") ||
            product.videoLink.includes("youtu.be") ? (

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                  borderRadius: "26px",
                  overflow: "hidden",
                }}
              >

                <iframe
                  src={product.videoLink
                    .replace("watch?v=", "embed/")
                    .replace("youtu.be/", "www.youtube.com/embed/")}
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />

              </div>

            ) : (

              <a
                href={product.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ff6600",
                  fontWeight: "700",
                }}
              >
                Watch Video
              </a>

            )}

          </div>

        </div>

      )}

      {/* RESPONSIVE */}
      <style>
        {`
          @media (max-width: 992px) {

            .product-layout {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }

            .main-image-box {
              height: 420px !important;
            }

          }

          @media (max-width: 768px) {

            .main-image-box {
              height: 300px !important;
            }

          }
        `}
      </style>

      <Footer />

    </div>

  );

}