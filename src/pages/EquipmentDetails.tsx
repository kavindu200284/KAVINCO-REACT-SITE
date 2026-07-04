import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getEquipment } from "../services/equipmentService";
import { Equipment as EquipmentItem } from "../types/Equipment";

export default function EquipmentDetails() {
  const { id } = useParams();
  const [item, setItem] = useState<EquipmentItem | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getEquipment();
        const found = data.find((entry) => entry._id === id);
        setItem(found || null);
        if (found) setMainImage(found.image1Url ?? null);
      } catch (err) {
        console.error(err);
      }
    }

    load();
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#fff" }}>
        <div style={{ width: "65px", height: "65px", border: "5px solid #eee", borderTop: "5px solid #ff6600", borderRadius: "50%", animation: "spin 1s linear infinite", marginBottom: "20px" }} />
        <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#111" }}>Loading Equipment</h2>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Header />
      <div style={{ height: "90px" }} />
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 20px" }}>
        <button onClick={() => window.history.back()} style={{ padding: "10px 18px", border: "1px solid #eee", borderRadius: "12px", background: "#fff", color: "#111", fontWeight: 600, cursor: "pointer" }}>← Back</button>
      </div>
      <div style={{ maxWidth: "1300px", margin: "30px auto 80px", padding: "0 20px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "40px", alignItems: "start" }}>
        <div>
          <div style={{ width: "100%", height: "600px", borderRadius: "24px", background: "#fff", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", border: "1px solid #f1f1f1" }}>
            {mainImage && <img src={mainImage} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />}
          </div>
          <div style={{ display: "flex", gap: "12px", marginTop: "16px", flexWrap: "wrap" }}>
            {[item.image1Url, item.image2Url, item.image3Url].filter(Boolean).map((img, idx) => (
              <div key={idx} onClick={() => setMainImage(img ?? null)} style={{ width: "90px", height: "90px", borderRadius: "14px", border: mainImage === img ? "2px solid #ff6600" : "1px solid #eee", cursor: "pointer", overflow: "hidden", padding: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={img} alt="Thumbnail" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#111", marginBottom: "18px" }}>{item.title || item.name}</h1>
          <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "24px" }}>{item.description || "Detailed equipment information will appear here."}</p>
          <div style={{ background: "#f8f8f8", borderRadius: "18px", padding: "18px", marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "10px", borderBottom: "1px solid #eee", marginBottom: "10px" }}>
              <span style={{ color: "#999", fontSize: "12px", fontWeight: 700 }}>ITEM CODE</span>
              <span style={{ color: "#111", fontWeight: 600 }}>{item.itemCode || "N/A"}</span>
            </div>

            {/* PRICING SECTION WITH DISCOUNT */}
            {item.price && (
              <div style={{ paddingBottom: "10px", borderBottom: "1px solid #eee", marginBottom: "10px" }}>
                {item.discount && item.discount > 0 ? (
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                      <span style={{ color: "#999", fontSize: "12px", fontWeight: 700 }}>ORIGINAL PRICE</span>
                      <span style={{ color: "#999", fontSize: "12px", fontWeight: 600, textDecoration: "line-through" }}>Rs {(item.price || 0).toFixed(2)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                      <span style={{ color: "#999", fontSize: "12px", fontWeight: 700 }}>DISCOUNT</span>
                      <span style={{ color: "#ff6600", fontSize: "12px", fontWeight: 700 }}>-{item.discount}%</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#111", fontSize: "13px", fontWeight: 700 }}>FINAL PRICE</span>
                      <span style={{ color: "#ff6600", fontSize: "14px", fontWeight: 700 }}>Rs {((item.price || 0) * (1 - (item.discount || 0) / 100)).toFixed(2)}</span>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#999", fontSize: "12px", fontWeight: 700 }}>PRICE</span>
                    <span style={{ color: "#111", fontWeight: 600 }}>Rs {(item.price || 0).toFixed(2)}</span>
                  </div>
                )}
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#999", fontSize: "12px", fontWeight: 700 }}>ORIGIN</span>
              <span style={{ color: "#111", fontWeight: 600 }}>{item.countryOfOrigin || "N/A"}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
