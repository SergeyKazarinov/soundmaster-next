/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    additionalData: `@import "src/application/styles/mixins/mixins.scss";`,
  },
};

export default nextConfig;
