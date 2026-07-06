module.exports = {
  apps: [
    {
      name: "niytri-site",
      script: "dist/index.cjs",
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      max_memory_restart: "400M",
      env: {
        NODE_ENV: "production",
        PORT: 5000,
      },
      // Loads .env from the project root
      node_args: "--env-file=.env",
      out_file: "logs/out.log",
      error_file: "logs/error.log",
      merge_logs: true,
      time: true,
    },
  ],
};
