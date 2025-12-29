import AdsenseAd from "../AdsenseAd";

export function InlineAd() {
  return (
    <div className="flex justify-center my-6">
      <AdsenseAd
        adClient="ca-pub-XXXXXXXXXXXXXXXX"
        adSlot="2345678901"
        style={{ width: 300, height: 250 }}
      />
    </div>
  );
}
