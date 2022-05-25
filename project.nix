{ 
  files.gitignore.enable = true;
  files.gitignore.template."Global/Archives" = true;
  files.gitignore.template."Global/Backup"   = true;
  files.gitignore.template."Global/Diff"     = true;
  files.gitignore.template."Node"            = true;
  files.gitignore.pattern.".svelte-kit"      = true;
  files.cmds.nodejs      = true; # lts
  files.alias.publish-as-cloudflare-from-local = ''
    # same as publish-as-gh-pages but works local
    cd $PRJ_ROOT
    rm -rf .svelte-kit/cloudflare
    ORIGIN=`git remote get-url origin`
    npm run build
    cd .svelte-kit/cloudflare
    git init .
    git add .
    git checkout -b cloudflare
    git commit -m "docs(cloudflare): update cloudflare pages" .
    git remote add origin $ORIGIN
    git push -u origin cloudflare --force
  '';  
}
