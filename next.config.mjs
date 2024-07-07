/** @type {import('next').NextConfig} */
const nextConfig = {
    onDemandEntries: {
        // Make sure entries are not getting cached
        maxInactiveAge: 1 * 1000, // 1 second
      },
    
};



export default nextConfig;
