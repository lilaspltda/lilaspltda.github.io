{ 
  files.gitignore.enable = true;
  files.gitignore.template."Global/Archives" = true;
  files.gitignore.template."Global/Backup"   = true;
  files.gitignore.template."Global/Diff"     = true;
  files.gitignore.template."Node"            = true;
  files.gitignore.pattern.".svelte-kit"      = true;
  files.gitignore.pattern."build"      = true;
  files.cmds.nodejs      = true; # lts
  files.alias.publish-as-cloudflare-from-local = ''
    cd $PRJ_ROOT
    rm -rf .svelte-kit/cloudflare
    ORIGIN=`git remote get-url origin`
    sed -i 's/adapter-auto/adapter-cloudflare/' svelte.config.js
    npm run build
    sed -i 's/adapter-cloudflare/adapter-auto/' svelte.config.js
    cd .svelte-kit/cloudflare
    git init .
    git add .
    git checkout -b cloudflare
    git commit -m "docs(cloudflare): update cloudflare pages" .
    git remote add origin $ORIGIN
    git push -u origin cloudflare --force
  '';
  files.alias.publish-as-gh-pages-from-local = ''
    cd $PRJ_ROOT
    rm -rf build
    ORIGIN=`git remote get-url origin`
    sed -i 's/adapter-auto/adapter-static/' svelte.config.js
    npm run build
    sed -i 's/adapter-static/adapter-auto/' svelte.config.js
    cd build
    touch .nojekyll
    git init .
    git add .
    git checkout -b gh-pages
    git commit -m "docs(gh-pages): update github pages" .
    git remote add origin $ORIGIN
    git push -u origin gh-pages --force
  '';
}
