import React from "react";
import TopnavComponent from '../components/TopnavComponent'
import TextomeioComponent from '../components/Home/TextomeioComponent'
import FeaturedComponent from "../components/Home/FeaturedComponent";
import PromotionComponent from "../components/PromotionComponent";
import OpinionComponent from "../components/OpinionComponent";

const Home = () => (
<div>
    <TopnavComponent />
    <TextomeioComponent />
    <FeaturedComponent />
    <PromotionComponent />
    <OpinionComponent />
</div>
);

export default Home;