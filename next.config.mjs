/** @type {import('next').NextConfig} */
export default{
  output: "export",
  images: { unoptimized: true }, // If you use next/image
  basePath: "/next_crew", // Change to your actual repo name, e.g. /next_crew
  assetPrefix: "/next_crew/", // Change to your actual repo name, e.g. /next_crew/
};
