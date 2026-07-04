import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getEquipment } from "../services/equipmentService";
import { Equipment as EquipmentItem } from "../types/Equipment";

export default function Equipment() {
  const [items, setItems] = useState<EquipmentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      try {
        const data = await getEquipment();
        const sorted = data.sort((a, b) => (a.orderNumber ?? 0) - (b.orderNumber ?? 0));
        setItems(sorted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const filtered = items.filter((item) => {
    const term = search.toLowerCase();
    return (
      item.name?.toLowerCase().includes(term) ||
      item.title?.toLowerCase().includes(term) ||
      item.itemCode?.toLowerCase().includes(term) ||
      item.description?.toLowerCase().includes(term) ||
      item.countryOfOrigin?.toLowerCase().includes(term)
    );
  });

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#f8f8f8" }}>
        <div style={{ width: "70px", height: "70px", border: "6px solid #eee", borderTop: "6px solid #ff6600", borderRadius: "50%", animation: "spin 1s linear infinite", marginBottom: "20px" }} />
        <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#111" }}>Loading Equipment</h2>
        <p style={{ color: "#666", marginTop: "8px" }}>Preparing the equipment catalog...</p>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <Header />
      <section style={{ paddingTop: "110px", paddingBottom: "40px", background: "linear-gradient(to bottom, #ffffff, #f5f5f5)" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, color: "#111", marginBottom: "12px" }}>Industrial Equipment</h1>
            <p style={{ maxWidth: "760px", margin: "0 auto", color: "#666", fontSize: "18px", lineHeight: 1.7 }}>
              Browse trusted equipment and tools for workshops, factories, and field operations.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
            <input
              type="text"
              placeholder="Search equipment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "100%", maxWidth: "550px", padding: "14px 18px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.08)", fontSize: "16px", background: "white", boxShadow: "0 6px 18px rgba(0,0,0,0.05)", outline: "none" }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {filtered.map((item) => {
              const discountPercent = item.discount ?? 0;
              const originalPrice = item.price ?? 0;
              const discountedPrice = originalPrice * (1 - discountPercent / 100);

              return (
                <div key={item._id} onClick={() => navigate(`/equipment/${item._id}`)} style={{ background: "#fff", borderRadius: "18px", padding: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", cursor: "pointer", borderTop: "4px solid #ff6600", position: "relative" }}>
                  {discountPercent > 0 && (
                    <div style={{ position: "absolute", top: "12px", right: "12px", background: "#ff6600", color: "white", padding: "6px 12px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", zIndex: 10, boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
                      -{discountPercent}%
                    </div>
                  )}
                  {item.image1Url ? (
                    <div style={{ width: "100%", height: "220px", borderRadius: "14px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", background: "#fff", marginBottom: "14px" }}>
                      <img src={item.image1Url} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                  ) : (
                    <div style={{ height: "220px", borderRadius: "14px", background: "#f7f7f7", display: "flex", alignItems: "center", justifyContent: "center", color: "#999", marginBottom: "14px" }}>No image</div>
                  )}
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#111", marginBottom: "8px" }}>{item.title || item.name}</h3>
                  <p style={{ color: "#666", fontSize: "14px", minHeight: "44px", marginBottom: "12px" }}>{item.description?.slice(0, 90) || "High-quality equipment available for immediate inquiry."}</p>
                  
                  {/* PRICING */}
                  <div style={{ minHeight: "60px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    {discountPercent > 0 ? (
                      <>
                        <div style={{ fontSize: "13px", color: "#999", textDecoration: "line-through", marginBottom: "4px" }}>Rs {originalPrice.toFixed(2)}</div>
                        <div style={{ fontSize: "18px", fontWeight: 700, color: "#ff6600" }}>Rs {discountedPrice.toFixed(2)}</div>
                      </>
                    ) : (
                      <div style={{ fontSize: "18px", fontWeight: 700, color: "#ff6600" }}>Rs {originalPrice.toFixed(2)}</div>
                    )}
                    <span style={{ fontSize: "12px", color: "#999" }}>{item.itemCode || "N/A"}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {!filtered.length && (
            <div style={{ textAlign: "center", padding: "40px 0", color: "#777" }}>No equipment matches your search.</div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
