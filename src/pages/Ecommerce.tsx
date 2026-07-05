import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { Product } from "../types/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ECommerce.css";
import { useNavigate } from "react-router-dom";

export default function ECommerce() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const PRODUCTS_PER_PAGE = 12;

  useEffect(() => {
    let timer: number | null = null;
    let currentValue = 0;
    let phase: "count" | "pause" = "count";

    const animate = () => {
      if (phase === "count") {
        currentValue = Math.min(100, currentValue + 5);
        setProgress(currentValue);

        if (currentValue >= 100) {
          phase = "pause";
          timer = window.setTimeout(animate, 600);
        } else {
          timer = window.setTimeout(animate, 40);
        }
      } else {
        currentValue = 0;
        setProgress(0);
        phase = "count";
        timer = window.setTimeout(animate, 200);
      }
    };

    timer = window.setTimeout(animate, 0);

    async function load() {
      try {
        const data = await getProducts();
        const sorted = data.sort((a, b) => (a.orderNumber ?? 0) - (b.orderNumber ?? 0));
        setProducts(sorted);
        setLoading(false);
      } catch (err) {
        console.log("Backend sleeping... retrying");
        setTimeout(() => {
          load();
        }, 5000);
      }
    }

    load();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  // LOADING SCREEN
  if (loading) {

    return (

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#f8f8f8",
          padding: "0 20px",
        }}
      >

        <div
          style={{
            width: "90px",
            height: "90px",
            border: "6px solid #eee",
            borderTop: "6px solid #ff6600",
            borderRadius: "50%",
            animation: "spin 1.2s linear infinite",
            marginBottom: "24px",
          }}
        />

        <h2
          style={{
            fontSize: "28px",
            color: "#222",
            marginBottom: "12px",
            fontWeight: "700",
          }}
        >
          Preparing the server...
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "16px",
            textAlign: "center",
            maxWidth: "480px",
            marginBottom: "24px",
          }}
        >
          Great things take a moment. Thanks for your patience.
        </p>

        <div style={{ width: "100%", maxWidth: "520px" }}>
          <div style={{ height: "12px", background: "#e6e6e6", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ width: `${progress}%`, height: "12px", background: "#ff6600", transition: "width 0.2s ease" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", color: "#666", fontWeight: 600, fontSize: "14px" }}>
            <span>Loading {progress}%</span>
            
            </div>
        </div>

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

  // FILTER
  const filtered = products.filter((p) => {

    const term = search.toLowerCase();

    return (
      (p.name?.toLowerCase() || "").includes(term) ||
      (p.title?.toLowerCase() || "").includes(term) ||
      (p.itemCode?.toLowerCase() || "").includes(term) ||
      (p.description?.toLowerCase() || "").includes(term) ||
      (p.countryOfOrigin?.toLowerCase() || "").includes(term)
    );

  });

  const lastProduct = currentPage * PRODUCTS_PER_PAGE;

  const firstProduct = lastProduct - PRODUCTS_PER_PAGE;

  const currentProducts = filtered.slice(firstProduct, lastProduct);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);

  return (

    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >

      <Header />

      {/* HERO SECTION */}
      <section
        style={{
          paddingTop: "110px",
          paddingBottom: "40px",
          background: "linear-gradient(to bottom, #ffffff, #f5f5f5)",
        }}
      >

        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >

          {/* TITLE */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 58px)",
                fontWeight: "800",
                color: "#111",
                lineHeight: "1.1",
                marginBottom: "16px",
              }}
            >
              Modern Machinery
              <br />
              For Smart Industries
            </h1>

            <p
              style={{
                maxWidth: "760px",
                margin: "0 auto",
                color: "#666",
                fontSize: "18px",
                lineHeight: "1.7",
              }}
            >
              Explore high-performance industrial machinery engineered
              for productivity, reliability, and modern manufacturing environments.
            </p>

          </div>

          {/* SEARCH */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "50px",
            }}
          >

            <input
              type="text"
              placeholder="Search machinery..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              style={{
                width: "100%",
                maxWidth: "550px",
                padding: "16px 22px",
                borderRadius: "18px",
                border: "1px solid rgba(0,0,0,0.08)",
                fontSize: "16px",
                background: "white",
                boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
                outline: "none",
              }}
            />

          </div>

          {/* PRODUCT GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >

            {currentProducts.map((p: Product) => (

              <div
                key={p._id}
                className="product-card"
                style={{
                  borderTop: "4px solid #ff6600",
                }}
              >

                {/* FLAG */}
                {p.countryOfOrigin &&
                  p.countryOfOrigin.toLowerCase() === "sri lanka" && (

                    <img
                      src="/flag-1.png"
                      alt="Sri Lanka"
                      style={{
                        position: "absolute",
                        top: "-22px",
                        right: "-22px",
                        width: "95px",
                        height: "95px",
                        zIndex: 5,
                        pointerEvents: "none",
                      }}
                    />

                  )}

                {/* IMAGE */}
                {p.image1Url && (

                  <div
                    style={{
                      width: "100%",
                      height: "260px",
                      overflow: "hidden",
                      borderRadius: "18px",
                      background: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px",
                    }}
                  >

                    <img
                      src={p.image1Url}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "18px",
                      }}
                    />

                  </div>

                )}

                {/* CONTENT */}
                <div
                  style={{
                    width: "100%",
                    paddingTop: "18px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >

                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#111",
                      textAlign: "center",
                      marginBottom: "10px",
                      lineHeight: "1.4",
                    }}
                  >
                    {p.name}
                  </h3>

                  <p
                    style={{
                      color: "#777",
                      textAlign: "center",
                      fontSize: "14px",
                      marginBottom: "20px",
                    }}
                  >
                    Country: {p.countryOfOrigin || "N/A"}
                  </p>

                  {/* BUTTON */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "auto",
                    }}
                  >

                    <button
                      onClick={() => navigate(`/product/${p._id}`)}
                      style={{
                        padding: "10px 18px",
                        borderRadius: "12px",
                        border: "none",
                        background: "#ff6600",
                        color: "white",
                        fontWeight: "600",
                        fontSize: "14px",
                        cursor: "pointer",
                        transition: "0.3s",
                        boxShadow: "0 6px 14px rgba(255,102,0,0.18)",
                      }}
                    >
                      View More
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* PAGINATION */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "14px",
              marginTop: "60px",
              flexWrap: "wrap",
            }}
          >

            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              style={{
                padding: "12px 20px",
                borderRadius: "14px",
                border: "none",
                background: "#eaeaea",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Prev
            </button>

            <div
              style={{
                padding: "12px 18px",
                borderRadius: "14px",
                background: "white",
                fontWeight: "700",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              Page {currentPage} of {totalPages}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              style={{
                padding: "12px 20px",
                borderRadius: "14px",
                border: "none",
                background: "#ff6600",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Next
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </div>

  );

}