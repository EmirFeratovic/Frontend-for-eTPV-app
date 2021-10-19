FROM node:12-alpine
RUN apk add --no-cache python g++ make
RUN echo "jenkins ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers
WORKDIR /
COPY . .
RUN yarn install --production
CMD ["npm", "start"]