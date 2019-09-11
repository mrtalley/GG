FROM node:10

LABEL "com.github.actions.name"="Firebase deploy GitHub action"
LABEL "com.github.actions.description"="Automated deployment to Firebase using GitHub actions"
LABEL "com.github.actions.icon"="share"
LABEL "com.github.actions.color"="blue"

LABEL "repository"="https://github.com/mrtalley/GAMBILLART"
LABEL "maintainer"="mrtalley"


ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
