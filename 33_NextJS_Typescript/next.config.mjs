/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.course-api.com",
        port: "",
        pathname: "/images/tours/*.jpeg",
      },
    ],
  },
};

export default nextConfig;

// https://www.course-api.com/images/tours/tour-1.jpeg
