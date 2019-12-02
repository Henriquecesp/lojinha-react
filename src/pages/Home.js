import React from "react";
import TopnavComponent from '../components/TopnavComponent'
import TextomeioComponent from '../components/Home/TextomeioComponent'
import FeaturedComponent from "../components/Home/FeaturedComponent";
import PromotionComponent from "../components/PromotionComponent";

const Home = () => (
<div>
    <TopnavComponent />
    <TextomeioComponent />
    <FeaturedComponent />
    <PromotionComponent />
</div>
);

export default Home;