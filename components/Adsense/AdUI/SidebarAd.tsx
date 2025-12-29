import AdsenseAd from "../AdsenseAd";

export function SidebarAd() {
  return (
    <div className="my-6 w-full max-w-40">
      <AdsenseAd
        adClient="ca-pub-XXXXXXXXXXXXXXXX"
        adSlot="3456789012"
        style={{ width: 160, height: 600 }}
      />
    </div>
  );
}
