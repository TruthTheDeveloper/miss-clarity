"use client";
import CardSlider from "@/atoms/CardSlider/index.js";
import ScrollContainer from "react-indiana-drag-scroll";
const DragScroll = () => {
  return (
    <ScrollContainer vertical={true} className="flex h-[350px] ">
      <CardSlider
        badge={"/badge-1.svg"}
        image={"contestant-1.svg"}
        cash={"$20,000"}
        prize={"+ Modeling Contract XXXXX Company"}
      />

      <CardSlider
        badge={"/badge-2.svg"}
        image={"contestant-2.svg"}
        cash={"$20,000"}
        prize={"+ Modeling Contract XXXXX Company"}
      />

      <CardSlider
        badge={"/badge-3.svg"}
        image={"contestant-3.svg"}
        cash={"$20,000"}
        prize={"+ Modeling Contract XXXXX Company"}
      />

      <CardSlider
        badge={"/badge-1.svg"}
        image={"contestant-1.svg"}
        cash={"$20,000"}
        prize={"+ Modeling Contract XXXXX Company"}
      />
    </ScrollContainer>
  );
};

export default DragScroll;
