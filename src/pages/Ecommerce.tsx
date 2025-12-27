import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { Product } from "../types/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ECommerce.css"; // Make sure to import the CSS
import { useNavigate } from "react-router-dom";



export default function ECommerce() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const PRODUCTS_PER_PAGE = 15;

  useEffect(() => {
    async function load() {
      const data = await getProducts();

      // Sort by orderNumber ASC (not displayed)
      const sorted = data.sort(
        (a, b) => (a.orderNumber ?? 0) - (b.orderNumber ?? 0)
      );

      setProducts(sorted);
    }

    load();
  }, []);

  // Filter products on typing by multiple fields safely
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
    <div>
      <Header />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Search Bar */}
        <div style={{ padding: "20px 0", display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1); // Reset page when typing
            }}
            style={{
              width: "60%",
              maxWidth: "400px",
              padding: "10px 12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          />
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
            margin: "20px 0",
          }}
        >
          {currentProducts.map((p: Product) => (
            <div key={p._id} className="product-card" style={{ position: "relative" }}>
              {/* Sri Lanka Flag */}
              {p.countryOfOrigin &&
                p.countryOfOrigin.toLowerCase() === "sri lanka" && (
                  <img
                    src="/flag.png" // Put your flag.png in public folder
                    alt="Sri Lanka"
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-10px",
                      width: "90px",
                      height: "90px",
                      rotate:"0",
                    }}
                  />
                )}

              {p.image1Url && (
                <img
                  src={p.image1Url}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              )}

              <h3
                style={{
                  marginTop: "10px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {p.name}
              </h3>

              <p style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>
                Country: {p.countryOfOrigin || "N/A"}
              </p>

              <div style={{ marginTop: "10px" }}>
                <button
                  style={{
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "none",
                    background: "#ff6600",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/product/${p._id}`)}
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
            gap: "10px",
          }}
        >
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "1px solid #999",
              background: "#eee",
              cursor: "pointer",
            }}
          >
            Prev
          </button>

          <span style={{ padding: "10px 15px" }}>
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "1px solid #999",
              background: "#eee",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
