cd Prisma-PostgreSQL-Nextjs-http-websocket
git pull origin main
npm install -g pnpm 
pnpm install 
pnpm run build 
pm2 restart nextjs-sever 
pm2 restart ht-sever 
pm2 restart ws-sever"