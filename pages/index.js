import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents";

export default function HomePage() {
  return (
    <div>
      {/* BoxWithClassName components */}
      <BoxWithClassName />
      <BoxWithClassName isBlack />

      {/* BoxWithStyledComponents components */}
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </div>
  );
}
