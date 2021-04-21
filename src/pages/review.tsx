import React, { Component } from "react";

import SectionReview from "../components/SectionReview";
import ReviewContent from "../components/Review";

const Review: React.FC = () => {
  return (
    <main className="main">
      <SectionReview />
      <ReviewContent />
    </main>
  );
};

export default Review;
