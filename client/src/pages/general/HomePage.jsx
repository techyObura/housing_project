import React from "react";
import Navbar from "../../components/core/Navbar";
import Hero from "../../components/core/homepage/Hero";
import { Link } from "react-router-dom";
import ListingCard from "../../components/property/ListingCard";
import PostCard from "../../components/social/PostCard";
import { listings, posts, users } from "../../data/data";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="bg-[var(--color-gray-light)] min-h-screen text-[var(--color-gray-dark)]">
        {/* Hero Section */}

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            All-in-One Housing & Lifestyle Platform
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
              <p>Find safe and trusted homes across Africa.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p>Flexible rent payments via M-Pesa, Airtel, or cards.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Trusted Helpers</h3>
              <p>Hire verified housekeepers and domestic staff.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Community & Safety</h3>
              <p>Engage with other tenants and register secure meetings.</p>
            </div>
          </div>
        </section>

        {/* Listings Preview */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Featured Listings
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.slice(0, 6).map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/search"
              className="px-6 py-3 bg-[var(--color-teal-secondary)] hover:bg-[var(--color-yellow-highlight)] text-white rounded-lg font-semibold transition"
            >
              Browse All Listings
            </Link>
          </div>
        </section>

        {/* Community Preview */}
        <section className="max-w-7xl mx-auto px-4 py-20 bg-white rounded-xl shadow-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Community Highlights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 6).map((post) => (
              <PostCard key={post.id} post={post} users={users} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/community"
              className="px-6 py-3 border border-[var(--color-blue-primary)] text-[var(--color-blue-primary)] rounded-lg font-semibold hover:bg-[var(--color-blue-primary)] hover:text-white transition"
            >
              Explore Community
            </Link>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-[var(--color-blue-primary)] text-white py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Join Africa’s Trusted Housing App
            </h2>
            <p className="text-lg">
              Start discovering safe homes, hiring helpers, and joining a
              trusted community today.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-[var(--color-teal-secondary)] hover:bg-[var(--color-yellow-highlight)] rounded-lg font-semibold transition"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-[var(--color-blue-primary)] transition"
              >
                Login
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
