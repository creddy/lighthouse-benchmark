FROM circleci/node:14.17.5-browsers

USER root
RUN useradd -ms /bin/bash benchmarker

USER benchmarker

WORKDIR /app

COPY --chown=benchmarker:benchmarker package.json /app
RUN npm install
COPY --chown=benchmarker:benchmarker . /app

CMD npm run benchmark && npm run results
