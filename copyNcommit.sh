rm -r ~/Downloads/LisAndAusWedding/*

cp -r * ~/Downloads/LisAndAusWedding/

svn add --force ~/Downloads/LisAndAusWedding/* --auto-props --parents --depth infinity -q 
svn commit ~/Downloads/LisAndAusWedding/ 
