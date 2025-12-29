import AdsenseAd from "../AdsenseAd";

export function HeaderBannerAd() {
    return (
        <div className="w-full flex justify-center my-4">
            <AdsenseAd
                adClient="ca-pub-XXXXXXXXXXXXXXXX"
                adSlot="1234567890"
                style={{ width: 728, height: 90, margin: "0 auto" }}
            />
        </div>
    );
}

{/* 
    <AdsenseAd
  adClient="ca-pub-XXXXXXXXXXXXXXXX"
  adSlot="1234567890"
  style={{ width: "100%", height: 90 }}
  format="auto"
/>
 */}