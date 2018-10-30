eval "$(ssh-agent -s)" &&
ssh-add -k ~/.ssh/id_rsa &&

cd /home/ubuntu/react_ci/ci_listing_new_api &&
git pull && 
npm install &&
npm run build