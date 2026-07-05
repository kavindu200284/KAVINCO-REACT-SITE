import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getEquipment } from "../services/equipmentService";
import { Equipment as EquipmentItem } from "../types/Equipment";

function getAvailableImages(item: EquipmentItem) {
  return [item.image1Url, item.image2Url, item.image3Url].filter((url): url is string => Boolean(url && url.trim()));
}

function getVideoEmbedUrl(url?: string) {
  if (!url) return null;

  const trimmed = url.trim();
  if (!trimmed) return null;

  const youtubeMatch = trimmed.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (youtubeMatch?.[1]) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  const vimeoMatch = trimmed.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch?.[1]) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  return trimmed;
}

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

        if (found) {
          const availableImages = getAvailableImages(found);
          setMainImage(availableImages[0] ?? null);
        } else {
          setMainImage(null);
        }
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

  const availableImages = getAvailableImages(item);
  const videoEmbedUrl = getVideoEmbedUrl(item.videoLink);

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Header />
      <div style={{ height: "clamp(60px, 12vw, 90px)" }} />
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 clamp(12px, 4vw, 20px)" }}>
        <button onClick={() => window.history.back()} style={{ padding: "8px 14px", border: "1px solid #eee", borderRadius: "12px", background: "#fff", color: "#111", fontWeight: 600, cursor: "pointer", fontSize: "clamp(12px, 3vw, 14px)" }}>← Back</button>
      </div>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "clamp(16px, 4vw, 30px) clamp(12px, 4vw, 20px) clamp(40px, 10vw, 80px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(16px, 5vw, 40px)", alignItems: "start" }}>
        <div>
          <div style={{ width: "100%", height: "clamp(300px, 60vw, 600px)", borderRadius: "clamp(12px, 3vw, 24px)", background: "#f8f8f8", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", border: "1px solid #f1f1f1", marginBottom: "clamp(12px, 3vw, 18px)" }}>
            {mainImage ? (
              <img src={mainImage} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "clamp(8px, 2vw, 12px)" }} />
            ) : (
              <div style={{ color: "#999", fontSize: "clamp(14px, 3vw, 16px)", textAlign: "center", padding: "clamp(16px, 4vw, 20px)" }}>No images uploaded yet.</div>
            )}
          </div>
          {availableImages.length > 0 && (
            <div style={{ display: "flex", gap: "clamp(8px, 2vw, 12px)", marginTop: "clamp(12px, 3vw, 16px)", flexWrap: "wrap" }}>
              {availableImages.map((img, idx) => (
                <div key={idx} onClick={() => setMainImage(img)} style={{ width: "clamp(70px, 18vw, 90px)", height: "clamp(70px, 18vw, 90px)", borderRadius: "clamp(10px, 2vw, 14px)", border: mainImage === img ? "3px solid #ff6600" : "1px solid #eee", cursor: "pointer", overflow: "hidden", padding: "clamp(6px, 1.5vw, 8px)", display: "flex", justifyContent: "center", alignItems: "center", background: "#fff", transition: "all 0.2s" }}>
                  <img src={img} alt="Thumbnail" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
              ))}
            </div>
          )}

          {videoEmbedUrl && (
            <div style={{ marginTop: "clamp(16px, 4vw, 24px)" }}>
              <h3 style={{ fontSize: "clamp(16px, 4vw, 18px)", fontWeight: 700, color: "#111", marginBottom: "clamp(10px, 2vw, 12px)" }}>Product Video</h3>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "clamp(10px, 2vw, 16px)", background: "#000" }}>
                <iframe
                  src={videoEmbedUrl}
                  title={`${item.title || item.name} video`}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
        <div>
          <h1 style={{ fontSize: "clamp(22px, 5vw, 40px)", fontWeight: 700, color: "#111", marginBottom: "clamp(12px, 3vw, 18px)", lineHeight: 1.2 }}>{item.title || item.name}</h1>
          <div style={{ color: "#666", lineHeight: 1.8, marginBottom: "clamp(16px, 4vw, 24px)", whiteSpace: "pre-line", fontSize: "clamp(13px, 3vw, 15px)" }}>
            {item.description || "Detailed equipment information will appear here."}
          </div>
          <div style={{ background: "#f8f8f8", borderRadius: "clamp(12px, 3vw, 18px)", padding: "clamp(14px, 4vw, 18px)", marginBottom: "clamp(16px, 4vw, 20px)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "clamp(8px, 2vw, 10px)", borderBottom: "1px solid #eee", marginBottom: "clamp(8px, 2vw, 10px)" }}>
              <span style={{ color: "#999", fontSize: "clamp(11px, 2vw, 12px)", fontWeight: 700 }}>ITEM CODE</span>
              <span style={{ color: "#111", fontWeight: 600, fontSize: "clamp(12px, 2.5vw, 14px)" }}>{item.itemCode || "N/A"}</span>
            </div>

            {/* PRICING SECTION WITH DISCOUNT */}
            {item.price && (
              <div style={{ paddingBottom: "clamp(8px, 2vw, 10px)", borderBottom: "1px solid #eee", marginBottom: "clamp(8px, 2vw, 10px)" }}>
                {item.discount && item.discount > 0 ? (
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "clamp(4px, 1vw, 4px)", fontSize: "clamp(11px, 2vw, 12px)" }}>
                      <span style={{ color: "#999", fontWeight: 700 }}>ORIGINAL PRICE</span>
                      <span style={{ color: "#999", fontWeight: 600, textDecoration: "line-through" }}>Rs {(item.price || 0).toFixed(2)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "clamp(4px, 1vw, 4px)", fontSize: "clamp(11px, 2vw, 12px)" }}>
                      <span style={{ color: "#999", fontWeight: 700 }}>DISCOUNT</span>
                      <span style={{ color: "#ff6600", fontWeight: 700 }}>-{item.discount}%</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "clamp(6px, 1.5vw, 8px)" }}>
                      <span style={{ color: "#111", fontSize: "clamp(12px, 2.5vw, 13px)", fontWeight: 700 }}>FINAL PRICE</span>
                      <span style={{ color: "#ff6600", fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 700 }}>Rs {((item.price || 0) * (1 - (item.discount || 0) / 100)).toFixed(2)}</span>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#999", fontSize: "clamp(11px, 2vw, 12px)", fontWeight: 700 }}>PRICE</span>
                    <span style={{ color: "#111", fontWeight: 600, fontSize: "clamp(14px, 3vw, 16px)" }}>Rs {(item.price || 0).toFixed(2)}</span>
                  </div>
                )}
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#999", fontSize: "clamp(11px, 2vw, 12px)", fontWeight: 700 }}>ORIGIN</span>
              <span style={{ color: "#111", fontWeight: 600, fontSize: "clamp(12px, 2.5vw, 14px)" }}>{item.countryOfOrigin || "N/A"}</span>
            </div>
          </div>

          <div style={{ marginTop: "clamp(16px, 4vw, 24px)", display: "flex", gap: "clamp(10px, 2vw, 12px)", flexWrap: "wrap" }}>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
